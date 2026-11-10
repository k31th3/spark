import {
    Offer1, Offer2, Offer3, Offer4, Offer5, Offer6
} from "@/assets/CloudSolutions";

export interface Offer {
    title: string;
    description: string;
    image: string;
}

export const Offers: Offer[] = [
    { title: "Cloud Migration", image: Offer1,
      description: "Seamlessly move your applications and data to the cloud with minimal disruption." },
    { title: "Cloud Infrastructure", image: Offer2,
      description: "Flexible and secure cloud infrastructure designed for performance and scale." },
    { title: "Cloud Storage", image: Offer3,
      description: "Secure, durable, and scalable storage solutions for all your business data." },
    { title: "Cloud Application Development", image: Offer4,
      description: "Build modern, cloud-native applications that drive innovation and growth." },
    { title: "Disaster Recovery", image: Offer5,
      description: "Protect your business with reliable backup and disaster recovery solutions." },
    { title: "Cloud Management", image: Offer6,
      description: "We manage your cloud environment so you can focus on your core business." }
];