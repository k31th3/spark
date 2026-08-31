import { cn } from "@/lib/utils";

import {
    FORM_SIZE_MAP,
    FORM_VARIANT_MAP
} from "./Form.maps";

import type {
    FormSize,
    FormVariant
} from "./Form.types";

export function getFormControlClassName(
    variant: FormVariant,
    size: FormSize,
    error = false,
    className?: string
) {
    return cn(
        "w-full rounded-xl",
        "text-foreground",
        "placeholder:text-muted",
        "outline-none",
        "transition-colors",
        "disabled:cursor-not-allowed",
        "disabled:opacity-50",

        FORM_VARIANT_MAP[variant],
        FORM_SIZE_MAP[size],

        error &&
            "border-red-500 focus:border-red-500",

        className
    );
}

export function getFormWrapperClassName(
    leftIcon = false,
    rightIcon = false
) {
    return cn(
        "relative flex items-center",

        leftIcon &&
            "[&>input]:pl-10",

        rightIcon &&
            "[&>input]:pr-10"
    );
}