import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

// Company
const Home = lazy(() => import("@/pages/Home"));
const Services = lazy(() => import("@/pages/Services"));
const Careers = lazy(() => import("@/pages/Careers"));
const ContactUs = lazy(() => import("@/pages/ContactUs"));

// Services
const WebDevelopment = lazy(() => import("@/pages/WebDevelopment"));
const ItServices = lazy(() => import("@/pages/ItServices"));
const CloudSolutions = lazy(() => import("@/pages/CloudSolutions"));
const SystemIntegration = lazy(() => import("@/pages/SystemIntegration"));
const SupportAndMaintenance = lazy(() => import("@/pages/SupportAndMaintenance"));

// Resources
const CompanyPortfolio = lazy(() => import("@/pages/CompanyPortfolio"));
const Faq = lazy(() => import("@/pages/Faq"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("@/pages/TermsOfService"));

export const Pages: RouteObject[] = [
    { path: "/", element: <Home /> },
    { path: "/home", element: <Home /> },
    { path: "/services", element: <Services /> },
    { path: "/lets-start-here", element: <Home /> },
    { path: "/careers", element: <Careers /> },
    { path: "/contact-us", element: <ContactUs /> },

    { path: "/web-development", element: <WebDevelopment /> },
    { path: "/it-services", element: <ItServices /> },
    { path: "/cloud-solutions", element: <CloudSolutions /> },
    { path: "/system-integration", element: <SystemIntegration /> },
    { path: "/support-and-maintenance", element: <SupportAndMaintenance /> },

    { path: "/company-portfolio", element: <CompanyPortfolio /> },
    { path: "/frequently-asked-questions", element: <Faq /> },
    { path: "/privacy-policy", element: <PrivacyPolicy /> },
    { path: "/terms-of-service", element: <TermsOfService /> }
];
