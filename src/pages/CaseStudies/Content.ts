import { IconType } from "react-icons";
import { CgIfDesign, CgWebsite } from "react-icons/cg";
import { MdDeveloperMode } from "react-icons/md";
import { VscDeveloperTools } from "react-icons/vsc";

export const categories = [
    "Web Development",
    "Mobile App",
    "System Integration",
    "UI/UX Design"
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
        information: "",
        link: ""
    },
    {
        id: 2,
        title: "Food Delivery App",
        category: "Mobile App",
        information: "",
        link: ""
    },
    {
        id: 3,
        title: "Banking Dashboard",
        category: "UI/UX Design",
        information: "",
        link: ""
    },
    {
        id: 4,
        title: "E-commerce",
        category: "Web Development",
        information: "",
        link: ""
    }
];