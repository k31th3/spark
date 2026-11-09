import { useEffect, useId, useRef, useState } from "react";
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

type NavDropdownProps = {
    trigger: ReactNode;
    items: TabLink[];
    label: string;

    placement?: "down" | "up";
};

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
    const toggleRef = useRef<HTMLButtonElement>(null);
    const closeTimer = useRef<number | undefined>(undefined);
    const pointerType = useRef("");

    const [open, setOpen] = useState(false);

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
                <div className={style.dropdownCard}>
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