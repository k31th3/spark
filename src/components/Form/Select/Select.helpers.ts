import { cn } from "@/lib/utils";

import {
    SELECT_SIZE_MAP,
    SELECT_VARIANT_MAP
} from "./Select.maps";

import type {
    SelectFloating,
    SelectSize,
    SelectVariant
} from "./Select.types";

export function getSelectClassName(
    variant: SelectVariant,
    size: SelectSize,
    error: boolean,
    className?: string,
    floating?: SelectFloating
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
        "appearance-none",

        "disabled:cursor-not-allowed",
        "disabled:opacity-50",

        /*
         * Size
         */
        SELECT_SIZE_MAP[size],

        /*
         * =========================
         * DEFAULT
         * =========================
         */
        !floating && [
            "px-3",
            "py-2.5",

            SELECT_VARIANT_MAP[variant]
        ],

        /*
         * =========================
         * FLOATING OUTLINED
         * =========================
         */
        floating === "outlined" && [
            "px-2.5",
            "pt-4",
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
            "px-0",
            "py-2.5",

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
            "px-0",
            "pt-4",
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
         * Error
         */
        error && [
            "border-red-500",
            "focus:border-red-500"
        ],

        className
    );
}