import type {
    FieldSize,
    FieldVariant,
} from "../Field/Field.types";

export const INPUT_VARIANT_MAP: Record<
    FieldVariant,
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
        "border-0 border-b border-gray-200 " +
        "rounded-none " +
        "focus:border-primary",
};

export const INPUT_SIZE_MAP: Record<
    FieldSize,
    string
> = {
    sm:
        "h-9 text-sm",

    md:
        "h-11 text-sm",

    lg:
        "h-13 text-base",
};