import { cn } from "@/lib/utils";

import {
    INPUT_SIZE_MAP,
    INPUT_VARIANT_MAP,
} from "./Input.maps";

import type {
    FieldSize,
    FieldVariant,
} from "../Field/Field.types";

export function getInputClassName(
    variant: FieldVariant,
    size: FieldSize,
    error = false,
    className?: string
) {
    return cn(
        "block",
        "w-full",

        "rounded-xl",

        "text-foreground",

        "placeholder:text-muted",

        "outline-none",
        "focus:outline-none",
        "focus:ring-0",

        "transition-colors",

        "disabled:cursor-not-allowed",
        "disabled:opacity-50",

        INPUT_VARIANT_MAP[variant],
        INPUT_SIZE_MAP[size],

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