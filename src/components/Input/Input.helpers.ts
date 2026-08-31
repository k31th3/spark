import { cn } from "@/lib/utils";

import {
    INPUT_SIZE_MAP,
    INPUT_VARIANT_MAP
} from "./Input.maps";

import type {
    InputSize,
    InputVariant
} from "./Input.types";

export function getInputClassName(
    variant: InputVariant,
    size: InputSize,
    error: boolean,
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

        INPUT_VARIANT_MAP[variant],
        INPUT_SIZE_MAP[size],

        error &&
            "border-red-500 focus:border-red-500",

        className
    );
}

export function getInputWrapperClassName(
    leftIcon?: boolean,
    rightIcon?: boolean
) {
    return cn(
        "relative flex items-center",
        leftIcon && "[&>input]:pl-10",
        rightIcon && "[&>input]:pr-10"
    );
}