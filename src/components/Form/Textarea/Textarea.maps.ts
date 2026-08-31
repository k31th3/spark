import type {
    TextareaSize,
    TextareaVariant,
} from "./Textarea.types";

export const TEXTAREA_VARIANT_MAP: Record<
    TextareaVariant,
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
        "focus:border-primary",
};

export const TEXTAREA_SIZE_MAP: Record<
    TextareaSize,
    string
> = {
    sm:
        "text-xs",

    md:
        "text-sm",

    lg:
        "text-base",
};