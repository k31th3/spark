import { cn } from "@/lib/utils";

import {
    TEXTAREA_SIZE_MAP,
    TEXTAREA_VARIANT_MAP,
} from "./Textarea.maps";

import type {
    TextareaFloating,
    TextareaSize,
    TextareaVariant,
} from "./Textarea.types";

export function getTextareaClassName(
    variant: TextareaVariant,
    size: TextareaSize,
    error: boolean,
    className?: string,
    floating?: TextareaFloating
) {
    return cn(
        /*
         * Base
         */
        "block",
        "w-full",
        "text-foreground",
        "outline-none",
        "transition-colors",
        "resize-y",

        "disabled:cursor-not-allowed",
        "disabled:opacity-50",

        /*
         * Size
         */
        TEXTAREA_SIZE_MAP[size],

        /*
         * =========================
         * DEFAULT
         * =========================
         */
        !floating && [
            "min-h-28",
            "px-3",
            "py-2.5",

            TEXTAREA_VARIANT_MAP[variant],
        ],

        /*
         * =========================
         * FLOATING OUTLINED
         * =========================
         */
        floating === "outlined" && [
            "min-h-28",

            "px-2.5",
            "pt-5",
            "pb-2.5",

            "bg-transparent",

            "border",
            "border-gray-200",

            "focus:border-primary",
            "focus:ring-0"
        ],

        /*
         * =========================
         * FLOATING STANDARD
         * =========================
         */
        floating === "standard" && [
            "min-h-28",

            "px-0",
            "pt-5",
            "pb-2.5",

            "bg-transparent",

            "border-0",
            "border-b-2",
            "border-gray-200",

            "rounded-none",

            "focus:border-primary",
            "focus:ring-0"
        ],

        /*
         * =========================
         * FLOATING TOP
         * =========================
         */
        floating === "top" && [
            "min-h-28",

            "px-0",
            "pt-5",
            "pb-2.5",

            "bg-transparent",

            "border-0",
            "border-b-2",
            "border-gray-200",

            "rounded-none",

            "focus:border-primary",
            "focus:ring-0",
        ],

        /*
         * Error
         */
        error && [
            "border-red-500",
            "focus:border-red-500",
        ],

        className
    );
}