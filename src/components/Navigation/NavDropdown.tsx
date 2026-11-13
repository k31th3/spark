import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import type {
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
   SURFACE DETECTION
========================================================= */

function parseColor(value: string) {
    const numbers = value.match(/[\d.]+/g)?.map(Number) ?? [];

    if (numbers.length < 3) return null;

    const scale = value.startsWith("color(") ? 255 : 1;

    return {
        r: numbers[0] * scale,
        g: numbers[1] * scale,
        b: numbers[2] * scale,
        a: numbers[3] ?? 1,
    };
}

function toneAtPoint(x: number, y: number, root: HTMLElement): Tone | null {
    for (const element of document.elementsFromPoint(x, y)) {
        const el = element as HTMLElement;

        if (root.contains(el) || el.contains(root)) continue;

        const forced = el.dataset.surface;
        if (forced === "light" || forced === "dark") return forced;

        const color = parseColor(getComputedStyle(el).backgroundColor);
        if (!color || color.a < 0.5) continue;

        const brightness = (0.299 * color.r + 0.587 * color.g + 0.114 * color.b) / 255;

        return brightness < 0.5 ? "dark" : "light";
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
                        {items.map((item) => {
                            const current = item.href === pathname;

                            return (
                                <li key={item.href}>
                                    <Link
                                        to={item.href}
                                        aria-current={current ? "page" : undefined}
                                        className={cn(
                                            style.dropdownLink,
                                            current && style.dropdownLinkActive
                                        )}>
                                        {item.title}
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