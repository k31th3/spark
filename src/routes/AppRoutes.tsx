import { lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { Navigation, IconGradient,
         ScrollToTop, Footer } from "@/components";

/* ===== APPLICANT FOOTER: IMPORTED BY PATH TO AVOID A CIRCULAR IMPORT WITH "@/components" ===== */
import FooterMinimal from "@/pages/Careers/CareerFooter/FooterMinimal";

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

    /* ===== CAREERS IS FOR APPLICANTS: IT GETS ITS OWN FOOTER ===== */

    const isCareers = pathname === "/careers" || pathname.startsWith("/careers/");

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

                                <main className={isHome ? undefined : "pt-20 md:pt-40"}>
                                    <DefaultQueryWrapper />
                                </main>

                                {/* ===== FOOTER: CLIENT OR APPLICANT, NEVER BOTH ===== */}
                                {isCareers ? <FooterMinimal /> : <Footer />}
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