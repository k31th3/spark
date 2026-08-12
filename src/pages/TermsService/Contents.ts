import { IconType } from "react-icons";

import { FaRegFileAlt } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineLockClosed } from "react-icons/hi";
import { MdBlock } from "react-icons/md";
import { FiShield } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

export interface Content {
    title: string;
    description: string;
    email?: string;
    icon: IconType
}

export const Contents: Content[] = [
    {
        title: "Acceptance of Terms",
        description: "By accessing or using our website and services, you agree to be bound by these Terms of Service and our Privacy Policy.",
        icon: FaRegFileAlt
    },
    {
        title: "Use of Our Services",
        description: "You agree to use our services only for lawful purposes and in accordance with these terms. You are responsible for all activities that occur under your account.",
        icon: IoPersonOutline
    },
    {
        title: "Intellectual Property",
        description: "All content, trademarks, logos, and materials on this site are the property of SIT or our licensors and are protected by applicable laws.",
        icon: HiOutlineLockClosed
    },
    {
        title: "Restrictions",
        description: "You may not copy, modify, distribute, sell, or lease any part of our services or content without our prior written consent.",
        icon: MdBlock
    },
    {
        title: "Limitation of Liability",
        description: "We are not liable for any indirect, incidental, or consequential damages arising from the use or inability to use our services.",
        icon: FiShield
    },
    {
        title: "Contact Us",
        description: "If you have any questions about these Terms, please contact us at ",
        email: "hello@getsitgo.com",
        icon: HiOutlineMail
    }
];