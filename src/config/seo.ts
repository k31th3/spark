import site from "./site";
import contact from "./contact";
import services from "./services";

export const pageDescriptions: Record<string, string> = {
  "services": "Explore SPARK Info-Tech Enterprise's IT services: hardware, software, security, and application solutions designed to help your business start, simplify, and grow.",
  "careers": "Join SPARK Info-Tech Enterprise and grow your career in IT — we're hiring passionate problem-solvers who build technology that feels human.",
  "company-portfolio": "Browse SPARK Info-Tech Enterprise's company portfolio — past projects, results, and technology solutions that helped businesses start, simplify, and grow.",
  "cloud-solutions": "Cloud solutions from SPARK Info-Tech Enterprise — secure, scalable cloud migration, storage, and infrastructure tailored to businesses in the Philippines.",
  "frequently-asked-questions": "Get answers to frequently asked questions about SPARK Info-Tech Enterprise's IT services, cloud solutions, system integration, and support.",
  "contact-us": "Contact SPARK Info-Tech Enterprise for IT services, cloud solutions, and support. Email info@getsitgo.com or visit our Makati, Philippines office today.",
  "terms-of-service": "Review SPARK Info-Tech Enterprise's terms of service governing your use of getsitgo.com and our IT services, support, and cloud solutions.",
  "privacy-policy": "Read SPARK Info-Tech Enterprise's privacy policy to understand how we collect, use, and protect your data on getsitgo.com.",
  "support-and-maintenance": "IT support and maintenance from SPARK Info-Tech Enterprise — proactive monitoring, rapid response, and dependable help desk for your business.",
  "it-services": "Comprehensive IT services from SPARK Info-Tech Enterprise — managed IT, productivity tools, and core IT solutions that keep your business running smoothly.",
  "system-integration": "System integration services from SPARK Info-Tech Enterprise that unify your tools, data, and workflows into one seamless, efficient ecosystem.",
  "web-development": "Professional web development from SPARK Info-Tech Enterprise — fast, modern, SEO-ready websites that help your business grow online in the Philippines.",
};

export const organizationSchema = {
  "@context": "https://schema.org",
  
  "@type": "Organization",

  name: site.companyName,

  url: site.url,

  logo: `${site.url}${site.logo}`,

  description: site.description,

  email: contact.email,

  telephone: contact.telephone,

  address: {
    "@type": "PostalAddress",

    streetAddress: contact.address.streetAddress,

    addressLocality: contact.address.locality,

    addressRegion: contact.address.region,

    postalCode: contact.address.postalCode,

    addressCountry: contact.address.country
  },
};

export const serviceSchema = services.map((service) => ({
  "@context": "https://schema.org",

  "@type": "Service",

  serviceType: service.serviceType,

  description: service.description,

  provider: {
    "@type": "Organization",

    name: site.companyName,
  },

  areaServed: "PH",
}));

export const aboutUsSchema = {
  "@context": "https://schema.org",

  "@type": "AboutPage",

  name: "About Us",

  description: site.description,
};
