import type { IconType } from "react-icons";
import { FiArrowUp, FiClock } from "react-icons/fi";

export interface StatItem {
    value: string;
    label: string;
    icon?: IconType;
    pill: string;
    number: "primary" | "orange" | "white";
    labelColor: "muted" | "white";
    span: string;
}

export const Stats: StatItem[] = [
    {
        value: "99.9%", label: "System Uptime", icon: FiArrowUp,
        pill: "bg-purple-50", number: "primary", labelColor: "muted",
        span: "md:col-span-3"
    },
    {
        value: "30%+", label: "Increase in Productivity",
        pill: "bg-orange-50", number: "orange", labelColor: "muted",
        span: "md:col-span-2"
    },
    {
        value: "99%", label: "Customer Satisfaction Rating",
        pill: "bg-[linear-gradient(90deg,#111_0%,#6b6b6b_100%)]", number: "white", labelColor: "white",
        span: "md:col-span-2"
    },
    {
        value: "24/7", label: "Support & Monitoring", icon: FiClock,
        pill: "bg-[linear-gradient(83.35deg,#FF8F27_5%,#D129DD_95%)]", number: "white", labelColor: "white",
        span: "md:col-span-3"
    }
];