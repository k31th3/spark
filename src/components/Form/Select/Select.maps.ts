import type {
    SelectSize,
    SelectVariant
} from "./Select.types";

export const SELECT_VARIANT_MAP: Record<
    SelectVariant,
    string
> = {
    default:
        "bg-white border border-gray-200 " +
        "focus:border-primary",

    filled:
        "bg-gray-100 border border-transparent " +
        "focus:bg-white focus:border-primary",

    ghost:
        "bg-transparent border border-transparent " +
        "focus:border-primary",

    underlined:
        "bg-transparent " +
        "border-0 border-b-2 " +
        "border-gray-200 " +
        "rounded-none " +
        "focus:border-primary"
};

export const SELECT_SIZE_MAP: Record<
    SelectSize,
    string
> = {
    sm:
        "text-xs",

    md:
        "text-sm",

    lg:
        "text-base",
};