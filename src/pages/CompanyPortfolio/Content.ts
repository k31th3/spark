import { IconType } from "react-icons";
import { CgIfDesign, CgWebsite } from "react-icons/cg";
import { MdDeveloperMode } from "react-icons/md";
import { VscDeveloperTools } from "react-icons/vsc";
import { FaComputer } from "react-icons/fa6";

type IconVariant =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "gradient";
  
export const categories = [
    "Web Development",
    "Mobile App",
    "System Integration",
    "UI/UX Design",
    "Hardware"
] as const;

export type Category = (typeof categories)[number];

export const tabs = ["All Projects", ...categories] as const;

export interface Icon {
    category: Category;
    icon: IconType;
}

export const icons: Record<Category, IconType> = {
    "Web Development": CgWebsite,
    "Mobile App": MdDeveloperMode,
    "System Integration": VscDeveloperTools,
    "UI/UX Design": CgIfDesign,
    "Hardware": FaComputer
};

export const colors: Record<Category, IconVariant> = {
    "Web Development": "danger",
    "Mobile App": "warning",
    "System Integration": "success",
    "UI/UX Design": "primary",
    "Hardware": "gradient"
};

export interface Card {
    id: number;
    title: string;
    category: Category;
    information: string;
    link: string;
}

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
    }
];