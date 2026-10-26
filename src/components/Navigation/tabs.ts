export interface Tab {
    id: number;
    title: string;
    hash: string;
}

export const tabs: Tab[] = [
    { id: 1, title: "Work", hash: "work" },
    { id: 2, title: "About", hash: "about" },
    { id: 3, title: "Services", hash: "services" },
    { id: 4, title: "Why Us", hash: "why-us" },
    { id: 5, title: "FAQ", hash: "faq" },
];