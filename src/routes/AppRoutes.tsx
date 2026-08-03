import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { Navigation } from "@/components";

import useOnlineStatus from "@/hooks/useOnlineStatus";
import NoInternet from "@/pages/NoInternet";

import { SuspenseLoader, DefaultQueryWrapper } from "./";

const Home = lazy(() => import("@/pages/Home"));
const Services = lazy(() => import("@/pages/Services"));
const StartHere = lazy(() => import("@/pages/StartHere"));
const PageNotFound = lazy(() => import("@/pages/PageNotFound"));

function AppRoutes() {
    const isOnline = useOnlineStatus();
    
    if (import.meta.env.PROD && !isOnline) {
        return <NoInternet />;
    }
    
    return (
        <SuspenseLoader>
            
            <header className="pt-5 fixed top-0 left-0 right-0 z-50 flex justify-center 
                py-5 hidden md:flex">
                <Navigation />
            </header>
            
            <main className="max-w-5xl mx-auto p-4 pt-0 md:pt-30">
                <Routes>
                    <Route element={<DefaultQueryWrapper />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/lets-start-here" element={<StartHere />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Route>
                </Routes>
            </main>

            <nav className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden">
                <Navigation />
            </nav>
            
            <footer className="h-10"></footer>

        </SuspenseLoader>
    );
  
}

export default AppRoutes;
