import type { IconType } from "react-icons";
import { LuLaptop, LuSmartphone, LuPlug, LuPenTool, LuCpu } from "react-icons/lu";

import { Placeholder1, Placeholder2, Placeholder3 } from "@/assets/CompanyPortfolio";

export const ALL = "All";

export const categories = [
    "Web Development",
    "Mobile App",
    "System Integration",
    "UI/UX Design",
    "Hardware"
] as const;

export type Category = (typeof categories)[number];

export const tabs = [ALL, ...categories] as const;

export const icons: Record<Category, IconType> = {
    "Web Development": LuLaptop,
    "Mobile App": LuSmartphone,
    "System Integration": LuPlug,
    "UI/UX Design": LuPenTool,
    "Hardware": LuCpu
};

/* tint of the category pill (see PortfolioGrid.module.css) */
export type Tone = "teal" | "purple" | "green" | "cyan" | "orange";

export const tones: Record<Category, Tone> = {
    "Web Development": "teal",
    "Mobile App": "purple",
    "System Integration": "green",
    "UI/UX Design": "cyan",
    "Hardware": "orange"
};

export interface Card {
    id: number;
    title: string;
    category: Category;
    information: string;
    link: string;
    image?: string;
}

export const placeholders = [Placeholder1, Placeholder2, Placeholder3];

export const cards: Card[] = [
    {
        id: 1,
        title: "Portfolio Website",
        category: "Web Development",
        information: "A modern and responsive portfolio website showcasing",
        link: ""
    },
    {
        id: 2,
        title: "Food Delivery App",
        category: "Mobile App",
        information: "A user-friendly food delivery application that allows users to browse restaurants, order meals, and track their deliveries.",
        link: ""
    },
    {
        id: 3,
        title: "Banking Dashboard",
        category: "UI/UX Design",
        information: "A clean and intuitive banking dashboard designed to help users easily manage accounts, monitor transactions, and view financial information.",
        link: ""
    },
    {
        id: 4,
        title: "E-commerce",
        category: "Web Development",
        information: "A responsive e-commerce website where users can browse products, view product details, add items to their cart, and complete purchases.",
        link: ""
    },

    {
        id: 5,
        title: "POS & Inventory Integration",
        category: "System Integration",
        information: "A connected point-of-sale and inventory setup that keeps stock levels, sales, and reports in sync across every branch.",
        link: ""
    },
    {
        id: 6,
        title: "Fitness Tracking App",
        category: "Mobile App",
        information: "A mobile app that lets members log workouts, follow training plans, and see their progress over time.",
        link: ""
    },
    {
        id: 7,
        title: "Smart Kiosk Rollout",
        category: "Hardware",
        information: "Self-service kiosks configured, deployed, and monitored across multiple locations with remote management.",
        link: ""
    },
    {
        id: 8,
        title: "Design System Library",
        category: "UI/UX Design",
        information: "A reusable component library and style guide that keeps a growing product consistent across every screen.",
        link: ""
    },
    {
        id: 9,
        title: "Office Network Upgrade",
        category: "Hardware",
        information: "A full network refresh with new access points, cabling, and monitoring for a faster and more reliable workplace.",
        link: ""
    }
];