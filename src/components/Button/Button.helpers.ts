import { cn } from "@/lib/utils";

import {
    BUTTON_SIZE_MAP,
    BUTTON_VARIANT_MAP
} from "./Button.maps";

import type {
    ButtonSize,
    ButtonVariant
} from "./Button.types";

export function getButtonClassName(variant: ButtonVariant, size: ButtonSize, className?: string) 
{
    return cn(
        "inline-flex items-center justify-center rounded-full",
        "font-medium cursor-pointer",
        "focus:outline-none",
        "disabled:pointer-events-none disabled:opacity-50",
        BUTTON_VARIANT_MAP[variant],
        BUTTON_SIZE_MAP[size],
        className
    );
}