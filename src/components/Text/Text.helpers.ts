import { cn } from "@/lib/utils";

import {
    TEXT_COLOR_MAP,
    TEXT_ELEMENT_MAP,
    TEXT_VARIANT_MAP
} from "./Text.maps";

import type {
    TextColor,
    TextVariant
} from "./Text.types";

export function getTextElement(
    variant: TextVariant
) {
    return TEXT_ELEMENT_MAP[variant];
}

export function getTextClassName(
    variant: TextVariant,
    color: TextColor,
    className?: string
) {
    return cn(
        TEXT_VARIANT_MAP[variant],
        TEXT_COLOR_MAP[color],
        className
    );
}