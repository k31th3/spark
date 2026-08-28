import type {
    ElementType
} from "react";

import type {
    TextColor,
    TextVariant
} from "./Text.types";

export const TEXT_VARIANT_MAP: Record<
    TextVariant,
    string
> = {
    h1: "text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl",
    h2: "text-3xl font-bold tracking-tight sm:text-4xl",
    h3: "text-2xl font-semibold tracking-tight sm:text-3xl",
    h4: "text-xl font-semibold",
    h5: "text-lg font-semibold",
    h6: "text-base font-semibold",

    body: "text-base leading-7",
    bodySmall: "text-sm leading-5",
    bodyLarge: "text-lg leading-8",

    lead: "text-xl leading-8",
    caption: "text-[14px] leading-5",
    label: "text-[11px]"
};

export const TEXT_COLOR_MAP: Record<
    TextColor,
    string
> = {
    primary: "text-primary",
    muted: "text-muted",
    foreground: "text-foreground",
    background: "text-background",
    white: "text-white",
    black: "text-black",
    gradient: "text-gradient",
    green: "text-green-600",
    danger: "text-red-700",
    orange: "text-orange-500",
    pink: "text-pink-500"
};

export const TEXT_ELEMENT_MAP: Record<
    TextVariant,
    ElementType
> = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",

    body: "p",
    bodySmall: "p",
    bodyLarge: "p",
    lead: "p",

    caption: "span",
    label: "span"
};