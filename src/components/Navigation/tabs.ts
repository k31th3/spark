/* ===== TYPES ===== */

export interface TabLink {
    title: string;
    href: string;
}

export interface Tab {
    id: number;
    title: string;
    hash: string;
    children?: TabLink[];
}

/* ===== SERVICES DROPDOWN ===== */

export const SERVICE_LINKS: TabLink[] = [
    { title: "Web development", href: "/web-development" },
    { title: "IT Services", href: "/it-services" },
    { title: "Cloud Solutions", href: "/cloud-solutions" },
    { title: "System Integration", href: "/system-integration" },
    { title: "Support & Maintenance", href: "/support-and-maintenance" },
];

/* ===== TABS ===== */

export const tabs: Tab[] = [
    { id: 1, title: "Work", hash: "work" },
    { id: 2, title: "About", hash: "about" },
    { id: 3, title: "Services", hash: "services", children: SERVICE_LINKS },
    { id: 4, title: "Why Us", hash: "why-us" },
    { id: 5, title: "FAQ", hash: "faq" },
];