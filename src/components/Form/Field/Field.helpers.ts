import { cn } from "@/lib/utils";

import type {
    InputFloating,
    InputSize,
} from "../Input/Input.types";

export function getFieldLabelClassName(
    floating: InputFloating,
    size: InputSize,
    error: boolean
) {
    return cn(
        /*
         * Common
         */
        "absolute",
        "text-muted",
        "duration-300",
        "transform",
        "z-10",
        "origin-[0]",
        "pointer-events-none",

        /*
         * =========================
         * OUTLINED
         * =========================
         */
        floating === "outlined" && [
            "start-1",
            "left-3",
            "top-2",

            "-translate-y-4",
            "scale-75",

            "bg-white",
            "px-2",

            /*
             * Empty state
             */
            "peer-placeholder-shown:scale-100",
            "peer-placeholder-shown:-translate-y-1/2",
            "peer-placeholder-shown:top-1/2",

            /*
             * Focus
             */
            "peer-focus:top-2",
            "peer-focus:scale-75",
            "peer-focus:-translate-y-4",

            "peer-focus:text-primary",
        ],

        /*
         * =========================
         * STANDARD
         * =========================
         */
        floating === "standard" && [
            "start-0",
            "left-0",
            "top-3",

            "-translate-y-6",
            "scale-75",

            /*
             * Empty state
             */
            "peer-placeholder-shown:scale-100",
            "peer-placeholder-shown:translate-y-0",

            /*
             * Focus
             */
            "peer-focus:start-0",
            "peer-focus:scale-75",
            "peer-focus:-translate-y-6",

            "peer-focus:text-primary",
        ],

        /*
         * =========================
         * TOP
         * =========================
         *
         * Label stays at the top.
         *
         * Phone Number
         * ☎ +63...
         * ─────────────
         */
        floating === "top" && [
            "left-0",
            "top-3",

            "-translate-y-6",
            "scale-75",

            /*
             * Always at top
             */
            "peer-focus:text-primary",
        ],

        /*
         * Error
         */
        error && [
            "text-red-500",
            "peer-focus:text-red-500",
        ],

        /*
         * Size
         */
        size === "sm" &&
            "text-xs",

        size === "md" &&
            "text-sm",

        size === "lg" &&
            "text-base"
    );
}