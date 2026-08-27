import { IconType } from "react-icons";

import { PiArchiveDuotone, PiAppWindowDuotone,
    PiShareFatDuotone, PiAngularLogoDuotone,
    PiSealCheckDuotone, PiPhoneListDuotone } from "react-icons/pi";

import { AiTwotoneContacts } from "react-icons/ai";

export interface Content {
    title: string;
    lines: string[];
    icon: IconType
}

export const Contents: Content[] = [
    {
        title: "Information We Collect",
        lines: [
            "We collect information you provide directly to us, such as when you create",
            "an account, use our services, or contact us for support. This may include",
            "your name, email address, phone number, and any other information you choose to provide."
        ],
        icon: PiArchiveDuotone
    },
    {
        title: "How We Use Your Information",
        lines: [
            "We use the information we collect to provide, maintain, and improve our",
            "services, communicate with you, process transactions, and ensure the",
            "security of our platform."
        ],
        icon: PiAppWindowDuotone
    },
    {
        title: "How We Share Your Information",
        lines: [
            "We do not sell or rent your personal information. We may share your",
            "information with trusted service providers who help us operate our",
            "business, subject to strict confidentiality obligations."
        ],
        icon: PiShareFatDuotone
    },
    {
        title: "Data Security",
        lines: [
            "We implement industry-standard security measures to protect your",
            "information from unauthorized access, disclosure, alteration, and destruction."
        ],
        icon: PiAngularLogoDuotone
    },
    {
        title: "Your Rights",
        lines: [
            "You have the right to access, update, or delete your personal information.",
            "You can also opt-out of certain communications at any time."
        ],
        icon: PiSealCheckDuotone
    },
    {
        title: "Changes to This Policy",
        lines: [
            "We may update this Privacy Policy from time to time. We will notify you of",
            "any material changes by posting the new policy on this page."
        ],
        icon: AiTwotoneContacts
    },
    {
        title: "Contact Us",
        lines: [
            `If you have any questions about this Privacy Policy, please contact us at ${import.meta.env.VITE_CONTACT_EMAIL}.`
        ],
        icon: PiPhoneListDuotone
    }
];