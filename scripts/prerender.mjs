import {
    statSync,
    existsSync,
    readFileSync,
    writeFileSync,
    mkdirSync,
} from "node:fs";
import { createServer as httpServer } from "node:http";
import { normalize, join, extname } from "node:path";
import { fileURLToPath } from "node:url";

const DIST = normalize(fileURLToPath(new URL("../dist/", import.meta.url)));
const SITEMAP = fileURLToPath(new URL("../public/sitemap.xml", import.meta.url));
const PORT = Number(process.env.PRERENDER_PORT ?? 4173);
const ORIGIN = `http://localhost:${PORT}`;

const MIME = {
    ".html": "text/html; charset=utf-8",
    ".js": "text/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".webmanifest": "application/manifest+json",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".webp": "image/webp",
    ".svg": "image/svg+xml",
    ".ico": "image/x-icon",
    ".woff": "font/woff",
    ".woff2": "font/woff2",
    ".ttf": "font/ttf",
    ".mp4": "video/mp4",
    ".webm": "video/webm",
    ".txt": "text/plain",
    ".xml": "application/xml",
};

function serve() {
    return new Promise((resolve) => {
        const server = httpServer((req, res) => {
            let pathname = "/";
            try {
                pathname = decodeURIComponent(new URL(req.url, ORIGIN).pathname);
            } catch {
                pathname = "/";
            }

            let filePath = normalize(join(DIST, pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "")));

            if (!filePath.startsWith(DIST)) {
                res.writeHead(403).end("Forbidden");
                return;
            }

            if (existsSync(filePath) && statSync(filePath).isDirectory()) {
                filePath = join(filePath, "index.html");
            }

            if (!existsSync(filePath)) {
                filePath = join(DIST, "index.html");
            }

            const type = MIME[extname(filePath)] ?? "application/octet-stream";
            try {
                res.writeHead(200, { "Content-Type": type });
                res.end(readFileSync(filePath));
            } catch {
                res.writeHead(404).end("Not found");
            }
        });

        server.listen(PORT, () => resolve(server));
    });
}

function getRoutes() {
    const sitemap = readFileSync(SITEMAP, "utf8");
    const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
        .map((m) => new URL(m[1]).pathname);

    const routes = ["/"];
    for (const loc of locs) {
        const p = loc.replace(/\/+$/, "");
        if (p && p !== "/" && !routes.includes(p)) routes.push(p);
    }
    return routes;
}

function collectStaticSelectors(html) {
    const selectors = [];

    const title = html.match(/<title>[\s\S]*?<\/title>/);
    if (title) selectors.push(title[0]);

    const nameDesc = html.match(/<meta[^>]*name="description"[^>]*>/i);
    if (nameDesc) selectors.push(nameDesc[0]);

    const canonical = html.match(/<link[^>]*rel="canonical"[^>]*>/i);
    if (canonical) selectors.push(canonical[0]);

    const keg = /<meta\s[^>]*(?:property="og:(?:title|description|url|image)"|name="twitter:(?:card|title|description|image)")[^>]*>/gi;
    for (const m of html.matchAll(keg)) selectors.push(m[0]);

    return selectors;
}

async function main() {
    if (process.env.SKIP_PRERENDER === "1") {
        console.log("[prerender] SKIP_PRERENDER=1, skipping.");
        return;
    }

    let chromium;
    try {
        const mod = await import("puppeteer");
        const api = mod.default ?? mod;
        chromium =
            api && typeof api.launch === "function"
                ? api
                : typeof mod.launch === "function"
                  ? mod
                  : null;
        if (!chromium) {
            console.warn("[prerender] puppeteer has no launch export. Skipping prerender.");
            return;
        }
    } catch {
        console.warn("[prerender] puppeteer is not installed. Skipping prerender.");
        return;
    }

    const routes = getRoutes();
    console.log(`[prerender] prerendering ${routes.length} route(s): ${routes.join(", ")}`);

    const server = await serve();
    const shell = readFileSync(join(DIST, "index.html"), "utf8");
    const staticSelectors = collectStaticSelectors(shell);

    let browser;
    try {
        browser = await chromium.launch({
            headless: true,
            args: [
                "--no-sandbox",
                "--disable-setuid-sandbox",
                "--disable-dev-shm-usage",
                "--disable-gpu",
                "--no-first-run",
            ],
        });

        const page = await browser.newPage();
        await page.setViewport({ width: 1280, height: 800 });
        await page.setRequestInterception(true);

        page.on("request", (req) => {
            const url = req.url();
            if (
                /sw\.js|googletagmanager|google-analytics|analytics|fonts\.googleapis|fonts\.gstatic|challenges\.cloudflare|widget\.cloudflare|_vercel\/|\.mp4\b|\.webm\b|\.mov\b/i.test(
                    url
                )
            ) {
                return req.abort();
            }
            req.continue();
        });

        page.on("pageerror", () => {});

        page.on("requestfailed", () => {});

        page.on("response", () => {});

        const report = [];

        for (const route of routes) {
            const url = route === "/" ? ORIGIN : `${ORIGIN}${route}`;
            try {
                await page.goto(url, { waitUntil: "networkidle2", timeout: 30000 });
                await new Promise((r) => setTimeout(r, 700));

                await page
                    .waitForFunction(
                        () => document.querySelector("#root")?.children.length >= 1,
                        { timeout: 5000 }
                    )
                    .catch(() => {});

                let html = await page.content();

                for (const selector of staticSelectors) {
                    if (html.includes(selector)) {
                        html = html.replace(selector, "");
                    }
                }

                const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "";

                const outPath =
                    route === "/"
                        ? join(DIST, "index.html")
                        : join(DIST, route, "index.html");

                mkdirSync(join(DIST, route === "/" ? "" : route), { recursive: true });
                writeFileSync(outPath, html);

                report.push({ route: route || "/", title });
            } catch (err) {
                console.warn(`[prerender] failed on "${route}":`, err.message);
            }
        }

        console.table(report);
    } catch (err) {
        console.warn("[prerender] headless render unavailable, keeping SPA as-is.");
        console.warn(err.message);
    } finally {
        if (browser) await browser.close().catch(() => {});
        server.close();
    }
}

main();