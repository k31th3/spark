import { FiMail, FiPhone, FiMapPin, FiMessageSquare } from "react-icons/fi";

import type { IconType } from "react-icons";
type IconVariant = "primary" | "pink" | "orange";

interface ContactItem {
    title: string;
    icon: IconType;
    content: string;
    description: string | null;
    href?: string;
    action?: string;
    color?: IconVariant;
}

export const ContactItems: ContactItem[] = [
    {
        title: "Email Us",
        icon: FiMail,
        content: import.meta.env.VITE_CONTACT_EMAIL,
        description: "We'll respond as soon as possible.",
        href: `mailto:${import.meta.env.VITE_CONTACT_EMAIL}`,
        color: "primary"
    },
    {
        title: "Call Us",
        icon: FiPhone,
        content: import.meta.env.VITE_CONTACT_PHONE,
        description: null,
        href: `tel:${import.meta.env.VITE_CONTACT_PHONE}`,
        color: "pink"

    },
    {
        title: "Visit Our Office",
        icon: FiMapPin,
        content: import.meta.env.VITE_CONTACT_ADDRESS,
        description: null,
        href: import.meta.env.VITE_CONTACT_GOOGLE_MAP,
        color: "orange"
    },
    {
        title: "Live Chat",
        icon: FiMessageSquare,
        content: "Chat with our team in real-time",
        description: null,
        action: "Start Chat",
        color: "primary"
    }
];