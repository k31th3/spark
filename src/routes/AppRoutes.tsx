import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { Navigation } from "@/components";

import useOnlineStatus from "@/hooks/useOnlineStatus";
import NoInternetConnection from "@/pages/NoInternetConnection";
import ErrorBoundary from "@/pages/ErrorBoundary";

import { SuspenseLoader, DefaultQueryWrapper } from "./";

import Home from "@/pages/Home";
const Services = lazy(() => import("@/pages/Services"));
const AboutUs = lazy(() => import("@/pages/AboutUs"));
const PageNotFound = lazy(() => import("@/pages/PageNotFound"));

function AppRoutes() {
    const isOnline = useOnlineStatus();

    if (import.meta.env.PROD && !isOnline) {
        return <NoInternetConnection />;
    }
    
    return (
        <ErrorBoundary>
            <SuspenseLoader>
                
                <header className="pt-5 fixed top-0 left-0 right-0 z-50 flex justify-center 
                    py-5 hidden md:flex">
                    <Navigation />
                </header>
                
                <div className="max-w-5xl mx-auto p-4 pt-0 md:pt-30">
                    <Routes>
                        <Route element={<DefaultQueryWrapper />}>
                            <Route path="/" element={<Home />} />
                            <Route path="/services" element={<Services />} />
                            <Route path="/about-us" element={<AboutUs />} />
                            <Route path="*" element={<PageNotFound />} />
                        </Route>
                    </Routes>
                </div>

                <nav className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden">
                    <Navigation />
                </nav>
                
                <footer className="h-10"></footer>

            </SuspenseLoader>
        </ErrorBoundary>
    );
  
}

export default AppRoutes;
