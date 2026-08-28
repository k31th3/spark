import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { Navigation, IconGradient, 
         ScrollToTop, Footer } from "@/components";

import useOnlineStatus from "@/hooks/useOnlineStatus";
import NoInternet from "@/pages/NoInternet";

import { SuspenseLoader, DefaultQueryWrapper } from "./";

const Home = lazy(() => import("@/pages/Home"));
const Services = lazy(() => import("@/pages/Services"));

// Company
const Careers = lazy(() => import("@/pages/Careers"));

// Services
const ItServices = lazy(() => import("@/pages/ItServices"));
const CloudSolutions = lazy(() => import("@/pages/CloudSolutions"));
const SystemIntegration = lazy(() => import("@/pages/SystemIntegration"));
const SupportAndMaintenance = lazy(() => import("@/pages/SupportAndMaintenance"));

// Resources
const CompanyPortfolio = lazy(() => import("@/pages/CompanyPortfolio"));
const Faq = lazy(() => import("@/pages/Faq"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("@/pages/TermsOfService"));


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

                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/lets-start-here" element={<Home />} />
                    <Route path="/careers" element={<Careers />} />
                    
                    {/*Services*/}
                    <Route path="/it-services" element={<ItServices />} />
                    <Route path="/cloud-solutions" element={<CloudSolutions />} />
                    <Route path="/system-integration" element={<SystemIntegration />} />
                    <Route path="/support-and-maintenance" element={<SupportAndMaintenance />} />

                    {/*Resources*/}
                    <Route path="/company-portfolio" element={<CompanyPortfolio />} />
                    <Route path="/frequently-asked-questions" element={<Faq />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-of-service" element={<TermsOfService />} />

                </Route>

                {/* Outside the layout */}
                <Route path="*" element={<PageNotFound />} />
                
            </Routes>
        </SuspenseLoader>
    );
  
}

export default AppRoutes;
