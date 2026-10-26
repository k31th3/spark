import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import style from "./Navigation.module.css";

import { tabs } from "./tabs";
import { SiteLogo } from "@/components";
import { Roll } from "@/components/Roll";
import { scrollToTop } from "@/utils";
import { cn } from "@/lib/utils";
import site from "@/config/site";
import { useScrolled } from "@/hooks/useScrolled";
import { useScrollLock } from "@/hooks/useScrollLock";

import CatalogueBtn from "./CatalogueBtn";

/* =========================================================
   CONSTANTS
========================================================= */

const MOBILE_MENU_ID = "mobile-navigation";
const DESKTOP_QUERY = "(min-width: 768px)";
const BRAND_VISIBLE_WORDS = 2;

/* =========================================================
   BRAND NAME SPLIT
========================================================= */

function splitBrandName(name = "") {
    const words = name.trim().split(/\s+/).filter(Boolean);

    if (words.length <= BRAND_VISIBLE_WORDS) {
        return { start: name, rest: "" };
    }

    return {
        start: words.slice(0, BRAND_VISIBLE_WORDS).join(" "),
        rest: words.slice(BRAND_VISIBLE_WORDS).join(" "),
    };
}

/* =========================================================
   ACTIVE SECTION (HOME ONLY)
========================================================= */

function useActiveSection(ids: string[], enabled: boolean) {
    const [active, setActive] = useState<string | null>(null);

    const key = ids.join("|");

    useEffect(() => {
        if (!enabled) {
            setActive(null);
            return;
        }

        const elements = key
            .split("|")
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => el !== null);

        if (elements.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const entering = entries.find((e) => e.isIntersecting);

                if (entering) {
                    setActive(entering.target.id);
                    return;
                }

                /* Leaving the active section with nothing entering clears it */

                setActive((current) =>
                    entries.some((e) => e.target.id === current)
                        ? null
                        : current
                );
            },
            { rootMargin: "-45% 0px -50% 0px" }
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [key, enabled]);

    return active;
}

/* =========================================================
   NAVIGATION
========================================================= */

export default function Navigation() {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const scrolled = useScrolled(50);
    const [menuOpen, setMenuOpen] = useState(false);

    const onHome = pathname === "/" || pathname === "/home";
    const activeSection = useActiveSection(
        tabs.map((tab) => tab.hash),
        onHome
    );

    const brand = splitBrandName(site.companyName);
    const floating = scrolled && !menuOpen;

    const closeMenu = () => setMenuOpen(false);

    /* =======================================================
       SECTION LINKS
    ======================================================= */

    const goTo = (event: MouseEvent<HTMLAnchorElement>, hash: string) => {
        const wasOpen = menuOpen;

        closeMenu();

        /* On another page: go Home, then useHashScroll scrolls to the section */

        if (!onHome) {
            event.preventDefault();
            navigate({ pathname: "/", hash: `#${hash}` });
            return;
        }

        const target = document.getElementById(hash);

        if (!target) return;

        event.preventDefault();

        /* Wait for the mobile menu's scroll lock to release */

        window.setTimeout(
            () => target.scrollIntoView({ behavior: "smooth" }),
            wasOpen ? 80 : 0
        );
    };

    const goHome = () => {
        closeMenu();
        scrollToTop();
    };

    /* =======================================================
       MOBILE MENU
    ======================================================= */

    useScrollLock(menuOpen);

    useEffect(() => {
        if (!menuOpen) return;

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setMenuOpen(false);
        };

        document.addEventListener("keydown", onKeyDown);

        return () => document.removeEventListener("keydown", onKeyDown);
    }, [menuOpen]);

    /* Close when the viewport grows to desktop */

    useEffect(() => {
        const query = window.matchMedia(DESKTOP_QUERY);

        const onChange = (event: MediaQueryListEvent) => {
            if (event.matches) setMenuOpen(false);
        };

        query.addEventListener("change", onChange);

        return () => query.removeEventListener("change", onChange);
    }, []);

    return (
        <>
            {/* =================================================
                HEADER
            ================================================= */}

            <header
                className={cn(
                    style.header,
                    scrolled && style.headerScrolled,
                    floating && style.headerHidden
                )}>
                <div aria-hidden="true" className={style.backdrop} />

                <div className={style.row}>

                    {/* BRAND */}

                    <Link
                        to="/"
                        data-roll
                        onClick={goHome}
                        className={style.brand}
                        aria-label={`${site.companyName} | Homepage`}>
                        <SiteLogo size="md" />

                        <span className={style.companyName}>
                            <Roll>{brand.start}</Roll>

                            {brand.rest && (
                                <span aria-hidden="true" className={style.rest}>
                                    <span className={style.restClip}>
                                        <span className={style.restText}>
                                            {brand.rest}
                                        </span>
                                    </span>
                                </span>
                            )}
                        </span>
                    </Link>

                    {/* DESKTOP LINKS */}

                    <nav className={style.nav} aria-label="Primary navigation">
                        {tabs.map(({ id, title, hash }) => {
                            const isActive = activeSection === hash;

                            return (
                                <Link
                                    key={id}
                                    to={{ pathname: "/", hash: `#${hash}` }}
                                    onClick={(event) => goTo(event, hash)}
                                    aria-current={isActive ? "true" : undefined}
                                    className={cn(
                                        style.link,
                                        isActive && style.linkActive
                                    )}>
                                    {title}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* ACTIONS */}

                    <div className={style.actions}>
                        <div className={style.headerCta}>
                            <CatalogueBtn />
                        </div>

                        <button
                            type="button"
                            className={style.menuToggle}
                            onClick={() => setMenuOpen((prev) => !prev)}
                            aria-expanded={menuOpen}
                            aria-controls={menuOpen ? MOBILE_MENU_ID : undefined}
                            aria-label={
                                menuOpen
                                    ? "Close navigation menu"
                                    : "Open navigation menu"
                            }>
                            <span
                                aria-hidden="true"
                                className={cn(
                                    style.menuLine,
                                    menuOpen && style.menuLineTopOpen
                                )}
                            />

                            <span
                                aria-hidden="true"
                                className={cn(
                                    style.menuLine,
                                    menuOpen && style.menuLineBottomOpen
                                )}
                            />
                        </button>
                    </div>

                </div>
            </header>

            {/* =================================================
                FLOATING DOCK
            ================================================= */}

            <nav
                aria-label="Quick navigation"
                className={cn(style.dock, floating && style.dockVisible)}>

                <Link
                    to="/"
                    onClick={goHome}
                    className={style.dockBrand}
                    aria-label={`${site.companyName} | Homepage`}>
                    <SiteLogo size="md" />
                </Link>

                <div className={style.dockLinks}>
                    {tabs.map(({ id, title, hash }) => {
                        const isActive = activeSection === hash;

                        return (
                            <Link
                                key={id}
                                to={{ pathname: "/", hash: `#${hash}` }}
                                onClick={(event) => goTo(event, hash)}
                                aria-current={isActive ? "true" : undefined}
                                className={cn(
                                    style.link,
                                    isActive && style.linkActive
                                )}>
                                {title}
                            </Link>
                        );
                    })}
                </div>

                <div className={style.dockCta}>
                    <CatalogueBtn />
                </div>

                <button
                    type="button"
                    className={style.menuToggle}
                    onClick={() => setMenuOpen(true)}
                    aria-expanded="false"
                    aria-label="Open navigation menu">
                    <span aria-hidden="true" className={style.menuLine} />
                    <span aria-hidden="true" className={style.menuLine} />
                </button>
            </nav>

            {/* =================================================
                MOBILE PANEL
            ================================================= */}

            {menuOpen && (
                <div id={MOBILE_MENU_ID} className={style.mobilePanel}>
                    <nav
                        className={style.mobileNav}
                        aria-label="Mobile navigation">
                        {tabs.map(({ id, title, hash }, index) => {
                            const isActive = activeSection === hash;

                            return (
                                <Link
                                    key={id}
                                    to={{ pathname: "/", hash: `#${hash}` }}
                                    onClick={(event) => goTo(event, hash)}
                                    className={cn(
                                        style.mobileLink,
                                        isActive && style.mobileLinkActive
                                    )}>
                                    <span className={style.mobileIndex}>
                                        ({String(index + 1).padStart(3, "0")})
                                    </span>

                                    <span className={style.mobileTitle}>
                                        {title}
                                    </span>
                                </Link>
                            );
                        })}
                    </nav>

                    <div className={style.mobileCta}>
                        <CatalogueBtn />
                    </div>
                </div>
            )}
        </>
    );
}