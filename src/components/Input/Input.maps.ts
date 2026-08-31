import type {
    InputSize,
    InputVariant
} from "./Input.types";

export const INPUT_VARIANT_MAP: Record< InputVariant, string > = {
    default:
        "bg-white border border-gray-200 " +
        "focus:border-primary",

    filled:
        "bg-gray-100 border border-transparent " +
        "focus:bg-white focus:border-primary",

    ghost:
        "bg-transparent border border-transparent " +
        "focus:border-primary"
};

export const INPUT_SIZE_MAP: Record< InputSize, string > = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-4 text-sm",
    lg: "h-13 px-5 text-base"
};