import { lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { Navigation, IconGradient,
         ScrollToTop, Footer } from "@/components";

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

                                <Footer />
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