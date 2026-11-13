import { lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { Navigation, IconGradient,
         ScrollToTop, Footer } from "@/components";

/* ===== CTA SECTION: IMPORTED BY PATH TO AVOID A CIRCULAR IMPORT WITH "@/components" ===== */
import CtaSection from "@/components/Footer/CtaSection";

/* ===== CAREERS CTA TEXT ===== */
import { CTA as CAREERS_CTA, getApplyHref } from "@/pages/Careers/Careers.config";

/* ===== FOOTER REVEAL: IMPORTED BY PATH FOR THE SAME REASON ===== */
import FooterReveal from "@/components/FooterReveal/FooterReveal";

import useOnlineStatus from "@/hooks/useOnlineStatus";
import NoInternet from "@/pages/NoInternet";

import { SuspenseLoader, DefaultQueryWrapper } from "./";

import { Pages } from "./Pages";

// Error Page
const PageNotFound = lazy(() => import("@/pages/PageNotFound"));


function AppRoutes() {
    const isOnline = useOnlineStatus();
    const { pathname } = useLocation();

    /* ===== HOME HAS A FULL-BLEED HERO: NO TOP PADDING SO IT STARTS AT THE EDGE ===== */

    const isHome = pathname === "/";

    /* ===== CAREERS ONLY CHANGES THE CTA TEXT AND KEEPS SHARP EDGES ===== */

    const isCareers = pathname === "/careers" || pathname.startsWith("/careers/");

    const cta = isCareers
        ? {
            title: CAREERS_CTA.title,
            subtitle: CAREERS_CTA.text,
            ctaLabel: CAREERS_CTA.ctaLabel,
            ctaHref: getApplyHref(),
        }
        : undefined;

    if (import.meta.env.PROD && !isOnline) {
        return <NoInternet />;
    }

    return (
        <SuspenseLoader>

            <Routes>
                <Route
                    element={
                        <>
                            <IconGradient />
                            <ScrollToTop />
                            <div>
                                {/* Navigation renders its own header, floating dock and mobile panel */}
                                <Navigation />

                                {/* ===== PAGE CONTENT (ENDING WITH THE CTA) ON TOP, FOOTER REVEALED UNDERNEATH ===== */}

                                <FooterReveal
                                    rounded={false}
                                    footer={<Footer />}
                                >
                                    <main className={isHome ? undefined : "pt-20 md:pt-40"}>
                                        <DefaultQueryWrapper />

                                        {/* ===== CTA: LAST SECTION OF EVERY PAGE ===== */}
                                        <CtaSection cta={cta} />
                                    </main>
                                </FooterReveal>
                            </div>
                        </>
                    }>

                    {Pages.map(({ path, element }) => (
                        <Route key={path} path={path} element={element} />
                    ))}

                </Route>

                {/* Outside the layout */}
                <Route path="*" element={<PageNotFound />} />

            </Routes>
        </SuspenseLoader>
    );

}

export default AppRoutes;