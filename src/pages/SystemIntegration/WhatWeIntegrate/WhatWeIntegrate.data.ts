import {
    Integration1, Integration2, Integration3,
    Integration4, Integration5, Integration6
} from "@/assets/SystemIntegration";

export interface Integration {
    title: string;
    description: string;
    image: string;
}

export const Integrations: Integration[] = [
    { title: "CRM Systems", image: Integration1,
      description: "Integrate your CRM with other tools for a complete view of your customers." },
    { title: "ERP Systems", image: Integration2,
      description: "Connect operations, finance, inventory, and more in a unified system." },
    { title: "E-commerce Platforms", image: Integration3,
      description: "Sync your store with inventory, payments, shipping, and other business tools." },
    { title: "Payment Gateways", image: Integration4,
      description: "Secure and reliable payment integrations for smooth transactions." },
    { title: "Third-Party Applications", image: Integration5,
      description: "We integrate with the tools you already use and trust." },
    { title: "Custom Systems", image: Integration6,
      description: "Tailored integrations built around your unique business requirements." }
];