import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

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
                                <header className="fixed top-0 left-0 right-0 z-50 hidden md:flex justify-center py-5">
                                    <div className="absolute w-[100%] h-[100%] top-0 left-0 right-0 z-10 sm:bg-white"  style={{
                                        maskImage: "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))"
                                    }}>
                                    </div>
                                    <Navigation />
                                </header>

                                <main className="pt-10 md:pt-40">
                                    <DefaultQueryWrapper />
                                </main>

                                <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
                                    <Navigation />
                                    <div
                                        className="absolute w-[100%] h-[100%] top-0 left-0 right-0 z-10 inset-0 bg-white"
                                        style={{
                                            WebkitMaskImage:
                                                "linear-gradient(to bottom, transparent, black)",
                                            maskImage:
                                                "linear-gradient(to bottom, transparent, black)",
                                        }}
                                    />
                                </nav>

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
