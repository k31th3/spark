import { site, contact, services } from "@config";

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
