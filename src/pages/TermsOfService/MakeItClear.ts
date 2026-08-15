import { IconType } from "react-icons";

import {
  FiBriefcase,
  FiUsers,
  FiClipboard,
  FiCreditCard,
  FiShield,
  FiLock,
  FiRefreshCw,
  FiAlertCircle,
  FiAlertTriangle,
  FiFileText,
} from "react-icons/fi";

export interface Content {
    title: string;
    description: string;
    icon: IconType
}

export const MakeItClear: Content[] = [
    {
        title: "What We Do",
        description: `A quick look at the technology and digital services SIT provides, and how the exact scope of each project is defined.`,
        icon: FiBriefcase
    },
    {
        title: "What We Need From You",
        description: `Your responsibilities around information, access, credentials, content, approvals, feedback, and project requirements.`,
        icon: FiUsers
    },
    {
        title: "How Projects Work",
        description: `How scope, deliverables, approvals, timelines, revisions, and changes are handled throughout a project.`,
        icon: FiClipboard
    },
    {
        title: "Fees & Payments",
        description: `How project fees, milestones, additional work, third-party costs, and late payments are handled.`,
        icon: FiCreditCard
    },
    {
        title: "Who Owns What",
        description: `How intellectual property, custom deliverables, existing tools, libraries, frameworks, and third-party assets are treated.`,
        icon: FiShield
    },
    {
        title: "Your Data & Privacy",
        description: `How information is handled and what responsibilities you have when sharing data or granting access to SIT.`,
        icon: FiLock
    },
    {
        title: "When Things Change",
        description: `How revisions, scope changes, new requirements, and additional work can affect a project's cost and timeline.`,
        icon: FiRefreshCw
    },
    {
        title: "Service Limitations",
        description: `Why we can't guarantee uninterrupted service, every third-party integration, every security threat, or a specific business outcome.`,
        icon: FiAlertCircle
    },
    // {
    //     title: "If Things Go Wrong",
    //     description: `A plain-language overview of liability, confidentiality, termination, and dispute resolution.`,
    //     icon: FiAlertTriangle
    // },
    // {
    //     title: "Keeping These Terms Current",
    //     description: `Terms may change as the business, technology, services, or legal requirements evolve.`,
    //     icon: FiFileText
    // }
];
