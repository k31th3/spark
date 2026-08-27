import { IconType } from "react-icons";

import {
    PiUsersThreeDuotone,
    PiGitBranchDuotone,
    PiShoppingCartDuotone,
    PiCreditCardDuotone,
    PiPuzzlePieceDuotone,
    PiCodeDuotone
} from "react-icons/pi";

export interface Content {
    title: string;
    icon: IconType;
    description: string
}

export const Contents: Content[] = [
    {
        icon: PiUsersThreeDuotone,
        title: "CRM Systems",
        description: "Integrate your CRM with other tools for a complete view of your customers."
    },
    {
        icon: PiGitBranchDuotone,
        title: "ERP Systems",
        description: "Connect operations, finance, inventory, and more in a unified system."
    },
    {
        icon: PiShoppingCartDuotone,
        title: "E-commerce Platforms",
        description: "Sync your store with inventory, payments, shipping, and other business tools."
    },
    {
        icon: PiCreditCardDuotone,
        title: "Payment Gateways",
        description: "Secure and reliable payment integrations for smooth transactions."
    },
    {
        icon: PiPuzzlePieceDuotone,
        title: "Third-Party Applications",
        description: "We integrate with the tools you already use and trust."
    },
    {
        icon: PiCodeDuotone,
        title: "Custom Systems",
        description: "Tailored integrations built around your unique business requirements."
    }
];