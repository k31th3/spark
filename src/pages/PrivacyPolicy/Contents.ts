export interface Content {
    title: string;
    text: string;
}

export const LAST_UPDATED = "November 16, 2026";

export const Contents: Content[] = [
    {
        title: "Information We Collect",
        text: "We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This may include your name, email address, phone number, and any other information you choose to provide."
    },
    {
        title: "How We Use Your Information",
        text: "We use the information we collect to provide, maintain, and improve our services, communicate with you, process transactions, and ensure the security of our platform."
    },
    {
        title: "How We Share Your Information",
        text: "We do not sell or rent your personal information. We may share your information with trusted service providers who help us operate our business, subject to strict confidentiality obligations."
    },
    {
        title: "Data Security",
        text: "We implement industry-standard security measures to protect your information from unauthorized access, disclosure, alteration, and destruction."
    },
    {
        title: "Your Rights",
        text: "You have the right to access, update, or delete your personal information. You can also opt-out of certain communications at any time."
    },
    {
        title: "Changes to This Policy",
        text: "We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page."
    },
    {
        title: "Contact Us",
        text: `If you have any questions about this Privacy Policy, please contact us at ${import.meta.env.VITE_CONTACT_EMAIL}.`
    }
];