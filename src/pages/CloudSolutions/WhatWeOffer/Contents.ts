import { IconType } from "react-icons";

import {
  RiCloudLine,
  RiServerLine,
  RiDatabase2Line,
  RiCodeBoxLine,
  RiGitBranchLine,
  RiSettingsLine
} from "react-icons/ri";

export interface Content {
    title: string;
    icon: IconType;
    description: string
}

export const Contents: Content[] = [
    {
        title: "Cloud Migration",
        description: "Seamlessly move your applications and data to the cloud with minimal disruption.",
        icon: RiCloudLine
    },
    {
        title: "Cloud Infrastructure",
        description: "Flexible and secure cloud infrastructure designed for performance and scale.",
        icon: RiServerLine
    },
    {
        title: "Cloud Storage",
        description: "Secure, durable, and scalable storage solutions for all your business data.",
        icon: RiDatabase2Line
    },
    {
        title: "Cloud Application Development",
        description: "Build modern, cloud-native applications that drive innovation and growth.",
        icon: RiCodeBoxLine
    },
    {
        title: "Disaster Recovery",
        description: "Protect your business with reliable backup and disaster recovery solutions.",
        icon: RiGitBranchLine
    },
    {
        title: "Cloud Management",
        description: "We manage your cloud environment so you can focus on your core business.",
        icon: RiSettingsLine
    }
];