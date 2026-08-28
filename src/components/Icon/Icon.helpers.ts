import { cn } from "@/lib/utils";

import {
    ICON_SIZE_MAP,
    ICON_SIZE_VALUE_MAP,
    ICON_VARIANT_BG_MAP,
    ICON_VARIANT_COLOR_MAP
} from "./Icon.maps";

import type {
    IconSize,
    IconVariant
} from "./Icon.types";

export function getIconWrapperClassName(
    avatar: boolean,
    size: IconSize,
    variant: IconVariant,
    className?: string
) {
    return cn(
        avatar && "flex items-center justify-center rounded-full",
        avatar && ICON_SIZE_MAP[size],
        avatar && ICON_VARIANT_BG_MAP[variant],
        className
    );
}

export function getIconClassName(
    variant: IconVariant,
    iconClassName?: string
) {
    return cn(
        variant !== "gradient" &&
            ICON_VARIANT_COLOR_MAP[variant],
        iconClassName
    );
}

export function getIconSize(size: IconSize) {
    return ICON_SIZE_VALUE_MAP[size];
}

export function getIconStyle(
    variant: IconVariant
) {
    return variant === "gradient"
        ? { fill: "url(#iconGradient)" }
        : undefined;
}