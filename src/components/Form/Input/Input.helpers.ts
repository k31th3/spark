import { cn } from "@/lib/utils";

import {
    INPUT_SIZE_MAP,
    INPUT_VARIANT_MAP,
} from "./Input.maps";

import type {
    InputFloating,
    InputSize,
    InputVariant,
} from "./Input.types";

export function getInputClassName(
    variant: InputVariant,
    size: InputSize,
    error: boolean,
    className?: string,
    floating?: InputFloating
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

        "disabled:cursor-not-allowed",
        "disabled:opacity-50",

        /*
         * Size
         */
        INPUT_SIZE_MAP[size],

        /*
         * =========================
         * DEFAULT
         * =========================
         */
        !floating && [
            "px-3",
            "py-2.5",

            INPUT_VARIANT_MAP[variant],
        ],

        /*
         * =========================
         * FLOATING OUTLINED
         * =========================
         *
         * Example:
         *
         * ┌─ First name ─────────┐
         * │ John                 │
         * └──────────────────────┘
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
         *
         * Example:
         *
         * First name
         * John
         * ─────────────────
         */
        floating === "standard" && [
            "px-2.5",
            "pt-3",
            "pb-2.5",

            "bg-transparent",
            "border",
            "border-gray-200",

            "rounded-none",

            "focus:border-primary",
            "focus:ring-0",
        ],

        /*
         * =========================
         * FLOATING TOP
         * =========================
         *
         * Designed for:
         *
         * Phone Number
         * ☎ +63 912 345 6789
         * ─────────────────────
         */
        floating === "top" && [
            "px-2.5",
            "pt-3",
            "pb-2.5",

            "bg-transparent",

            "border",
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

export function getInputWrapperClassName(
    leftIcon = false,
    rightIcon = false
) {
    return cn(
        "relative",
        "flex",
        "items-center",

        leftIcon &&
            "[&>input]:pl-10",

        rightIcon &&
            "[&>input]:pr-10"
    );
}