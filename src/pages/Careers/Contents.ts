import { IconType } from "react-icons";

import { PiHandHeartDuotone } from "react-icons/pi";
import { PiSparkleDuotone } from "react-icons/pi";
import { TiGroup } from "react-icons/ti";
import { BiSolidCalendarCheck } from "react-icons/bi";

export interface Content {
    title: string;
    lines: string[];
    icon: IconType
}

export const Contents: Content[] = [
    {
        title: "Meaningful Impact",
        lines: [
            "Work on products that",
            "solve real problems and help people."
        ],
        icon: PiHandHeartDuotone
    },
    {
        title: "Growth Mindset",
        lines: [
            "Learn, grow, and",
            "olevate your skis every single day."
        ],
        icon: PiSparkleDuotone
    },
    {
        title: "Collaborative Culture",
        lines: [
            "We value teamwork,",
            "openers, and respect"
        ],
        icon: TiGroup
    },
    {
        title: "Work-Life Balance",
        lines: [
            "We support fleablity",
            "so you can do your best work."
        ],
        icon: BiSolidCalendarCheck
    }
];