
import { IconType } from "react-icons";

import {
    FiShield,
    FiUsers,
    FiHeart
} from "react-icons/fi";

import { IoRocketOutline } from "react-icons/io5";

type StatColor =
    | "primary"
    | "pink"
    | "orange"
    | "danger";

export interface StatItem {
    value: string;
    label: string;
    icon: IconType;
    color: StatColor;
}

export interface StatsProps {
    stats?: StatItem[];
}

export const Stats: StatItem[] = [
    {
        value: "99.9%",
        label: "System Uptime",
        icon: FiShield,
        color: "primary"
    },
    {
        value: "30%+",
        label: "Increase in Productivity",
        icon: IoRocketOutline,
        color: "pink"
    },
    {
        value: "500+",
        label: "Businesses Supported",
        icon: FiUsers,
        color: "orange"
    },
    {
        value: "24/7",
        label: "Support & Monitoring",
        icon: FiHeart,
        color: "danger"
    }
];
