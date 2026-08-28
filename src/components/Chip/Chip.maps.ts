import type {
    ChipSize,
    ChipVariant
} from "./Chip.types";

export const CHIP_VARIANT_MAP: Record<
    ChipVariant,
    string
> = {
    default:
        "bg-gray-100 text-gray-700 border-gray-200",

    primary:
        "bg-[var(--color-primary)]/10 " +
        "text-[var(--color-primary)] " +
        "border-[var(--color-primary)]/20",

    success:
        "bg-green-100 text-green-700 border-green-200",

    warning:
        "bg-yellow-100 text-yellow-800 border-yellow-200",

    danger:
        "bg-red-100 text-red-700 border-red-200",

    gradient:
        "bg-[linear-gradient(83.35deg,_#D129DD_5.29%,_#FF8F27_94.71%)] " +
        "text-white"
};

export const CHIP_SIZE_MAP: Record< ChipSize, string > = {
    sm: "text-[10px] px-3 py-2",
    md: "text-[12px] px-4 py-2",
    lg: "text-[14px] px-6 py-3"
};