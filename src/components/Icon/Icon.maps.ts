import type {
    IconSize,
    IconVariant
} from "./Icon.types";

export const ICON_SIZE_MAP: Record< IconSize, string > = {
    xs: "h-6 w-6",
    sm: "h-7 w-7",
    md: "h-9 w-9",
    lg: "h-12 w-12",
    xl: "h-15 w-15",
    "2xl": "h-18 w-18"
};

export const ICON_VARIANT_BG_MAP: Record< IconVariant, string > = {
    default: "bg-gray-100",
    light: "bg-transparent",
    gradient: "bg-[#FAF5FF]",
    primary: "bg-[var(--color-primary)]/10",
    success: "bg-green-100",
    warning: "bg-yellow-100",
    danger: "bg-red-100",
    orange: "bg-orange-100",
    pink: "bg-pink-100"
};

export const ICON_VARIANT_COLOR_MAP: Record< IconVariant, string > = {
    default: "text-gray-700",
    light: "text-white",
    gradient: "",
    primary: "text-[var(--color-primary)]",
    success: "text-green-600",
    warning: "text-yellow-800",
    danger: "text-red-700",
    orange: "text-orange-500",
    pink: "text-pink-500"
};

export const ICON_SIZE_VALUE_MAP: Record< IconSize, number > = {
    xs: 10,
    sm: 14,
    md: 20,
    lg: 28,
    xl: 36,
    "2xl": 42
};