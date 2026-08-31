import { cn } from "@/lib/utils";

import type {
    FieldFloating,
    FieldSize,
    FieldVariant,
} from "./Field.types";

export function getFieldLabelClassName(
    floating: FieldFloating,
    size: FieldSize,
    variant: FieldVariant,
    error = false
) {
    return cn(
        /*
         * Base
         */
        "absolute",
        "left-3",
        "top-2",
        "z-10",

        /*
         * Flowbite
         */
        "origin-[0]",
        "transform",

        "-translate-y-4",
        "scale-75",

        "px-2",

        "text-muted",

        "duration-300",

        /*
         * Background
         */
        variant === "underlined"
            ? "bg-transparent"
            : "bg-white",

        /*
         * floating="default"
         *
         * EMPTY:
         *
         * label returns inside input
         */
        floating === "default" && [
            "peer-placeholder-shown:scale-100",
            "peer-placeholder-shown:-translate-y-1/2",
            "peer-placeholder-shown:top-1/2",
        ],

        /*
         * FOCUS
         */
        "peer-focus:top-2",
        "peer-focus:scale-75",
        "peer-focus:-translate-y-4",

        /*
         * Focus color
         */
        "peer-focus:text-primary",

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
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        size === "lg" && "text-base"
    );
}