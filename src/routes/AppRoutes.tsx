import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { Navigation, IconGradient, Footer } from "@/components";

import useOnlineStatus from "@/hooks/useOnlineStatus";
import NoInternet from "@/pages/NoInternet";

import { SuspenseLoader, DefaultQueryWrapper } from "./";

const Home = lazy(() => import("@/pages/Home"));
const Services = lazy(() => import("@/pages/Services"));
const StartHere = lazy(() => import("@/pages/StartHere"));

const Careers = lazy(() => import("@/pages/Careers"));
const Faq = lazy(() => import("@/pages/Faq"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));


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
                            <div>
                                <header className="fixed top-0 left-0 right-0 z-50 hidden md:flex justify-center py-5">
                                    <Navigation />
                                </header>

                                <main className="max-w-5xl mx-auto p-4 pt-0 md:pt-30">
                                    <DefaultQueryWrapper />
                                </main>

                                <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
                                    <Navigation />
                                </nav>

                                <Footer />
                            </div>
                        </>
                    }>

                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/lets-start-here" element={<StartHere />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/frequently-asked-questions" element={<Faq />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />

                </Route>

                {/* Outside the layout */}
                <Route path="*" element={<PageNotFound />} />
                
            </Routes>
        </SuspenseLoader>
    );
  
}

export default AppRoutes;
