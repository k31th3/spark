import {
    statSync,
    existsSync,
    readFileSync,
    writeFileSync,
    mkdirSync,
    readdirSync,
} from "node:fs";
import { createServer as httpServer } from "node:http";
import { normalize, join, extname, dirname } from "node:path";
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

const STATIC_HOST = "https://www.getsitgo.com";

const ROUTE_TITLES = {
    "/": "Spark Info-Tech Enterprise",
    "/services": "Services",
    "/lets-start-here": "Spark Info-Tech Enterprise",
    "/careers": "Careers",
    "/contact-us": "Contact Us",
    "/company-portfolio": "Company Portfolio",
    "/frequently-asked-questions": "Frequently asked questions",
    "/privacy-policy": "Privacy policy",
    "/terms-of-service": "Terms of Service",
    "/web-development": "Web Development",
    "/it-services": "IT Services",
    "/cloud-solutions": "Cloud Solutions",
    "/system-integration": "System Integration",
    "/support-and-maintenance": "Support and Maintenance",
};

const ROUTE_DESCRIPTIONS = {
    "/services": "Explore SPARK Info-Tech Enterprise's IT services: hardware, software, security, and application solutions designed to help your business start, simplify, and grow.",
    "/lets-start-here": "",
    "/careers": "Join SPARK Info-Tech Enterprise and grow your career in IT — we're hiring passionate problem-solvers who build technology that feels human.",
    "/contact-us": "Contact SPARK Info-Tech Enterprise for IT services, cloud solutions, and support. Email info@getsitgo.com or visit our Makati, Philippines office today.",
    "/company-portfolio": "Browse SPARK Info-Tech Enterprise's company portfolio — past projects, results, and technology solutions that helped businesses start, simplify, and grow.",
    "/frequently-asked-questions": "Get answers to frequently asked questions about SPARK Info-Tech Enterprise's IT services, cloud solutions, system integration, and support.",
    "/privacy-policy": "Read SPARK Info-Tech Enterprise's privacy policy to understand how we collect, use, and protect your data on getsitgo.com.",
    "/terms-of-service": "Review SPARK Info-Tech Enterprise's terms of service governing your use of getsitgo.com and our IT services, support, and cloud solutions.",
    "/web-development": "Professional web development from SPARK Info-Tech Enterprise — fast, modern, SEO-ready websites that help your business grow online in the Philippines.",
    "/it-services": "Comprehensive IT services from SPARK Info-Tech Enterprise — managed IT, productivity tools, and core IT solutions that keep your business running smoothly.",
    "/cloud-solutions": "Cloud solutions from SPARK Info-Tech Enterprise — secure, scalable cloud migration, storage, and infrastructure tailored to businesses in the Philippines.",
    "/system-integration": "System integration services from SPARK Info-Tech Enterprise that unify your tools, data, and workflows into one seamless, efficient ecosystem.",
    "/support-and-maintenance": "IT support and maintenance from SPARK Info-Tech Enterprise — proactive monitoring, rapid response, and dependable help desk for your business.",
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

async function resolvePuppeteer() {
    const mod = await import("puppeteer");
    const api = mod.default ?? mod;
    if (api && typeof api.launch === "function") return api;
    return null;
}

async function resolveSparticuz() {
    process.env.AWS_LAMBDA_JS_RUNTIME =
        process.env.AWS_LAMBDA_JS_RUNTIME ?? "nodejs22.x";

    const { default: sparticuz } = await import("@sparticuz/chromium");
    const { default: puppeteerCore } = await import("puppeteer-core");

    const executablePath = await sparticuz.executablePath();
    const execDir = dirname(executablePath);
    process.env.LD_LIBRARY_PATH =
        process.env.LD_LIBRARY_PATH
            ? `${execDir}:${process.env.LD_LIBRARY_PATH}`
            : execDir;

    return puppeteerCore.launch.bind(null, {
        executablePath,
        headless: true,
        args: sparticuz.args,
        defaultViewport: { width: 1280, height: 800 },
    });
}

async function launchBrowser() {
    const isLinuxBuild =
        process.platform === "linux" &&
        (process.env.VERCEL === "1" ||
            process.env.VERCEL_ENV ||
            process.env.CI === "true");

    if (process.env.PRERENDER_SHELL === "1") {
        return null;
    }

    if (isLinuxBuild) {
        try {
            return { launch: await resolveSparticuz() };
        } catch (err) {
            console.warn("[prerender] @sparticuz/chromium unavailable on Linux:", err.message);
            return null;
        }
    }

    const api = await resolvePuppeteer();
    if (!api) {
        return null;
    }

    return {
        launch: api.launch.bind(api, {
            headless: true,
            args: [
                "--no-sandbox",
                "--disable-setuid-sandbox",
                "--disable-dev-shm-usage",
                "--disable-gpu",
                "--no-first-run",
            ],
        }),
    };
}

function inlineCriticalCss(html) {
    return html.replace(/<link[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>\s*/gi, (whole, href) => {
        const file = join(DIST, href.replace(/^\//, ""));
        try {
            if (!existsSync(file)) return whole;
            const css = readFileSync(file, "utf8");
            return `<style>\n${css}\n</style>`;
        } catch {
            return whole;
        }
    });
}

function preloadInterFont(html) {
    let fontFile = null;
    try {
        fontFile =
            readdirSync(join(DIST, "assets")).find(
                (f) => f.startsWith("inter-latin-wght-normal-")
            ) ?? null;
    } catch {
        return html;
    }
    if (!fontFile) return html;

    html = html.replace(/<link[^>]*href="\/assets\/inter-[^"]*\.woff2"[^>]*>\s*/gi, "");

    const tag = `<link rel="preload" href="/assets/${fontFile}" as="font" type="font/woff2" crossorigin />`;
    return html.replace(/<head>/, `<head>\n        ${tag}`);
}

function normalizeCanonicals(html, route) {
    if (route === "/") return html;
    const rootCanon = `${STATIC_HOST}/`;
    return html.replace(
        /<link[^>]*rel="canonical"[^>]*>/gi,
        (whole) => {
            const href = whole.match(/href="([^"]+)"/)?.[1] ?? "";
            if (href === rootCanon && !whole.includes("data-rh")) return "";
            return whole;
        }
    );
}

function finalizeHtml(html, route = "/") {
    html = html.replaceAll(ORIGIN + "/", "/");
    html = normalizeCanonicals(html, route);
    return preloadInterFont(inlineCriticalCss(html));
}

function renderShellFallback(routes, shell) {
    const homeDesc =
        shell.match(/<meta[^>]*name="description" content="([^"]*)"[^>]*>/i)?.[1] ?? "";

    let written = 0;
    for (const route of routes) {
        const outPath = route === "/" ? join(DIST, "index.html") : join(DIST, route, "index.html");

        if (route === "/") {
            mkdirSync(join(DIST, ""), { recursive: true });
            writeFileSync(outPath, finalizeHtml(shell, route));
            written++;
            continue;
        }

        const title = ROUTE_TITLES[route] ?? "Spark Info-Tech Enterprise";
        const desc = ROUTE_DESCRIPTIONS[route] || homeDesc;
        const url = `${STATIC_HOST}${route}`;

        let html = shell;
        html = html.replace(
            /<title>[\s\S]*?<\/title>/,
            `<title>GetSitGo - ${title}</title>`
        );

        html = html.replace(
            /<meta[^>]*name="description" content="[^"]*"[^>]*>/i,
            `<meta name="description" content="${desc}" />`
        );

        html = html.replace(
            /<meta name="robots" content="[^"]*"/,
            '<meta name="robots" content="index, follow"'
        );

        html = html.replace(
            /<link[^>]*rel="canonical" href="[^"]*"[^>]*>/i,
            `<link rel="canonical" href="${url}" />`
        );

        html = html.replace(
            /<meta property="og:title" content="[^"]*"[^>]*>/i,
            `<meta property="og:title" content="GetSitGo - ${title}" />`
        );

        html = html.replace(
            /<meta property="og:description" content="[^"]*"[^>]*>/i,
            `<meta property="og:description" content="${desc}" />`
        );

        html = html.replace(
            /<meta property="og:url" content="[^"]*"[^>]*>/i,
            `<meta property="og:url" content="${url}" />`
        );

        html = html.replace(
            /<meta name="twitter:title" content="[^"]*"[^>]*>/i,
            `<meta name="twitter:title" content="GetSitGo - ${title}" />`
        );

        html = html.replace(
            /<meta name="twitter:description" content="[^"]*"[^>]*>/i,
            `<meta name="twitter:description" content="${desc}" />`
        );

        mkdirSync(join(DIST, route.replace(/^\/+/, "")), { recursive: true });
        writeFileSync(outPath, finalizeHtml(html, route));
        written++;
    }
    console.log(`[prerender] shell fallback wrote ${written} route(s) with route-specific meta tags.`);
}

async function main() {
    if (process.env.SKIP_PRERENDER === "1") {
        console.log("[prerender] SKIP_PRERENDER=1, skipping.");
        return;
    }

    const routes = getRoutes();
    const server = await serve();
    const shell = readFileSync(join(DIST, "index.html"), "utf8");

    const { launch } = (await launchBrowser()) ?? {};
    if (!launch) {
        console.log("[prerender] no browser available, using shell fallback.");
        renderShellFallback(routes, shell);
        server.close();
        return;
    }

    let browser;
    try {
        browser = await launch();
    } catch (err) {
        console.warn("[prerender] browser launch failed:", err.message.split("\n")[0]);
        renderShellFallback(routes, shell);
        server.close();
        return;
    }

    const staticSelectors = collectStaticSelectors(shell);
    const report = [];

    try {
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

                html = finalizeHtml(html, route);

                const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "";

                const outPath =
                    route === "/"
                        ? join(DIST, "index.html")
                        : join(DIST, route, "index.html");

                mkdirSync(join(DIST, route === "/" ? "" : route), { recursive: true });
                writeFileSync(outPath, html);

                report.push({ route: route || "/", title });
            } catch (err) {
                console.warn(`[prerender] failed on "${route}":`, err.message.split("\n")[0]);
            }
        }

        console.table(report);
    } finally {
        await browser.close().catch(() => {});
        server.close();
    }
}

main();