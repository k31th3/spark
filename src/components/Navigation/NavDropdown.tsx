import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import type {
    CSSProperties,
    FocusEvent,
    KeyboardEvent,
    MouseEvent,
    PointerEvent as ReactPointerEvent,
    ReactNode,
} from "react";
import { Link, useLocation } from "react-router-dom";

import { cn } from "@/lib/utils";

import type { TabLink } from "./tabs";
import style from "./Navigation.module.css";

/* =========================================================
   CONSTANTS
========================================================= */

const CLOSE_DELAY = 120;

/* =========================================================
   TYPES
========================================================= */

type Tone = "light" | "dark";

type NavDropdownProps = {
    trigger: ReactNode;
    items: TabLink[];
    label: string;

    placement?: "down" | "up";
};

/* =========================================================
   SURFACE DETECTION (LIGHT OR DARK BEHIND THE PANEL)
========================================================= */

let scratch: CanvasRenderingContext2D | null | undefined;

function getScratch() {
    if (scratch === undefined) {
        const canvas = document.createElement("canvas");

        canvas.width = 1;
        canvas.height = 1;

        scratch = canvas.getContext("2d", { willReadFrequently: true });
    }

    return scratch;
}

type Rgba = { r: number; g: number; b: number; a: number };

const brightnessOf = ({ r, g, b }: Rgba) => (0.299 * r + 0.587 * g + 0.114 * b) / 255;

const toneFromBrightness = (value: number): Tone => (value < 0.5 ? "dark" : "light");

function parseColor(value: string): Rgba | null {
    const ctx = getScratch();

    if (!ctx || !value || value === "transparent") return null;

    const sentinel = "#010203";

    ctx.fillStyle = sentinel;
    ctx.fillStyle = value;

    if (ctx.fillStyle === sentinel) return null;

    ctx.clearRect(0, 0, 1, 1);
    ctx.fillRect(0, 0, 1, 1);

    const [r, g, b, a] = ctx.getImageData(0, 0, 1, 1).data;

    return { r, g, b, a: a / 255 };
}

function gradientBrightness(value: string): number | null {
    const matches = value.match(/(?:rgba?|hsla?|oklch|oklab|lch|lab|color)\([^)]*\)/g);

    if (!matches) return null;

    let total = 0;
    let count = 0;

    for (const match of matches) {
        const color = parseColor(match);

        if (!color || color.a < 0.5) continue;

        total += brightnessOf(color);
        count += 1;
    }

    return count ? total / count : null;
}

function imageBrightness(img: HTMLImageElement, x: number, y: number): number | null {
    const ctx = getScratch();

    if (!ctx || !img.complete || !img.naturalWidth) return null;

    const rect = img.getBoundingClientRect();
    const { naturalWidth: nw, naturalHeight: nh } = img;
    const styles = getComputedStyle(img);

    let scaleX = rect.width / nw;
    let scaleY = rect.height / nh;

    if (styles.objectFit === "cover") scaleX = scaleY = Math.max(scaleX, scaleY);
    else if (styles.objectFit === "contain") scaleX = scaleY = Math.min(scaleX, scaleY);
    else if (styles.objectFit === "none") scaleX = scaleY = 1;
    else if (styles.objectFit === "scale-down") scaleX = scaleY = Math.min(1, scaleX, scaleY);

    const [posX, posY] = styles.objectPosition
        .split(" ")
        .map((part) => (part.endsWith("%") ? parseFloat(part) / 100 : 0.5));

    const left = rect.left + (rect.width - nw * scaleX) * posX;
    const top = rect.top + (rect.height - nh * scaleY) * posY;

    const sx = (x - left) / scaleX;
    const sy = (y - top) / scaleY;

    if (sx < 0 || sy < 0 || sx >= nw || sy >= nh) return null;

    const size = Math.max(4, Math.round(Math.min(nw, nh) * 0.02));

    try {
        ctx.clearRect(0, 0, 1, 1);
        ctx.drawImage(img, sx - size / 2, sy - size / 2, size, size, 0, 0, 1, 1);

        const [r, g, b, a] = ctx.getImageData(0, 0, 1, 1).data;

        if (a < 128) return null;

        return brightnessOf({ r, g, b, a: a / 255 });
    } catch {
        return null;
    }
}


function toneAtPoint(x: number, y: number, root: HTMLElement): Tone | null {
    for (const element of document.elementsFromPoint(x, y)) {
        const el = element as HTMLElement;

        if (root.contains(el) || el.contains(root)) continue;

        const forced = el.closest<HTMLElement>("[data-surface]")?.dataset.surface;
        if (forced === "light" || forced === "dark") return forced;

        /* Photos */
        if (el instanceof HTMLImageElement) {
            const value = imageBrightness(el, x, y);

            if (value !== null) return toneFromBrightness(value);

            continue;
        }

        const styles = getComputedStyle(el);

        /* Solid backgrounds */
        const color = parseColor(styles.backgroundColor);
        if (color && color.a >= 0.5) return toneFromBrightness(brightnessOf(color));

        /* Gradient backgrounds */
        const gradient = gradientBrightness(styles.backgroundImage);
        if (gradient !== null) return toneFromBrightness(gradient);
    }

    return null;
}

function detectTone(card: HTMLElement, root: HTMLElement): Tone {
    const rect = card.getBoundingClientRect();

    const points = [
        [0.5, 0.5],
        [0.2, 0.2],
        [0.8, 0.2],
        [0.2, 0.8],
        [0.8, 0.8],
    ];

    let dark = 0;
    let light = 0;

    for (const [px, py] of points) {
        const tone = toneAtPoint(rect.left + rect.width * px, rect.top + rect.height * py, root);

        if (tone === "dark") dark += 1;
        if (tone === "light") light += 1;
    }

    return dark > light ? "dark" : "light";
}

/* =========================================================
   NAV DROPDOWN
========================================================= */

export default function NavDropdown({
    trigger,
    items,
    label,
    placement = "down",
}: NavDropdownProps) {
    const { pathname } = useLocation();

    const panelId = useId();
    const rootRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const toggleRef = useRef<HTMLButtonElement>(null);
    const closeTimer = useRef<number | undefined>(undefined);
    const pointerType = useRef("");

    const [open, setOpen] = useState(false);
    const [tone, setTone] = useState<Tone>("light");

    /* =======================================================
       TONE (CHECKED EVERY TIME THE PANEL OPENS, BEFORE PAINT)
    ======================================================= */

    useLayoutEffect(() => {
        if (!open || !cardRef.current || !rootRef.current) return;

        setTone(detectTone(cardRef.current, rootRef.current));
    }, [open]);

    /* =======================================================
       HOVER (MOUSE ONLY: TOUCH USES THE CHEVRON)
    ======================================================= */

    const cancelClose = () => window.clearTimeout(closeTimer.current);

    const scheduleClose = () => {
        cancelClose();
        closeTimer.current = window.setTimeout(() => setOpen(false), CLOSE_DELAY);
    };

    const onPointerEnter = (event: ReactPointerEvent<HTMLDivElement>) => {
        pointerType.current = event.pointerType;

        if (event.pointerType !== "mouse") return;

        cancelClose();
        setOpen(true);
    };

    const onPointerLeave = (event: ReactPointerEvent<HTMLDivElement>) => {
        if (event.pointerType !== "mouse") return;

        scheduleClose();
    };

    /* =======================================================
       CHEVRON (CLICK, TAP, ENTER, SPACE)
    ======================================================= */

    const onToggleClick = (event: MouseEvent<HTMLButtonElement>) => {
        cancelClose();

        if (event.detail !== 0 && pointerType.current === "mouse") {
            setOpen(true);
            return;
        }

        setOpen((previous) => !previous);
    };

    /* =======================================================
       KEYBOARD, FOCUS AND LINK CLICKS
    ======================================================= */

    const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key !== "Escape" || !open) return;

        setOpen(false);
        toggleRef.current?.focus();
    };

    const onBlur = (event: FocusEvent<HTMLDivElement>) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
            setOpen(false);
        }
    };

    const onClick = (event: MouseEvent<HTMLDivElement>) => {
        if ((event.target as HTMLElement).closest("a")) setOpen(false);
    };

    /* =======================================================
       CLOSE ON ROUTE CHANGE
    ======================================================= */

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    /* =======================================================
       CLOSE ON SCROLL OR OUTSIDE PRESS (WHILE OPEN)
    ======================================================= */

    useEffect(() => {
        if (!open) return;

        const onScroll = () => setOpen(false);

        const onPointerDown = (event: PointerEvent) => {
            if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        document.addEventListener("pointerdown", onPointerDown);

        return () => {
            window.removeEventListener("scroll", onScroll);
            document.removeEventListener("pointerdown", onPointerDown);
        };
    }, [open]);

    useEffect(() => () => window.clearTimeout(closeTimer.current), []);

    return (
        <div
            ref={rootRef}
            className={cn(style.dropdown, open && style.dropdownOpen)}
            onPointerEnter={onPointerEnter}
            onPointerLeave={onPointerLeave}
            onKeyDown={onKeyDown}
            onBlur={onBlur}
            onClick={onClick}>

            {trigger}

            <button
                ref={toggleRef}
                type="button"
                className={style.dropdownToggle}
                aria-expanded={open}
                aria-controls={panelId}
                aria-label={label}
                onClick={onToggleClick}>
                <svg
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    fill="none"
                    className={style.dropdownChevron}>
                    <path
                        d="M3 6l5 5 5-5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>

            {/* ===== PANEL (THE OUTER PADDING IS A HOVER BRIDGE SO IT DOESN'T CLOSE IN THE GAP) ===== */}

            <div
                id={panelId}
                className={cn(
                    style.dropdownPanel,
                    placement === "up"
                        ? style.dropdownPanelUp
                        : style.dropdownPanelDown
                )}>
                <div
                    ref={cardRef}
                    data-tone={tone}
                    className={style.dropdownCard}>
                    <ul role="list" className={style.dropdownList}>
                        {items.map((item, index) => {
                            const current = item.href === pathname;

                            return (
                                <li key={item.href} style={{ "--i": index } as CSSProperties}>
                                    <Link
                                        to={item.href}
                                        aria-current={current ? "page" : undefined}
                                        className={cn(
                                            style.dropdownLink,
                                            current && style.dropdownLinkActive
                                        )}>
                                        <span className={style.dropdownLinkText}>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}