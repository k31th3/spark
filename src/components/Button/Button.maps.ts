import type {
    ButtonSize,
    ButtonVariant
} from "./Button.types";

export const BUTTON_VARIANT_MAP: Record<ButtonVariant,string> = {
    primary:
        "bg-primary text-white hover:opacity-90",

    gradient:
        "bg-[linear-gradient(83.35deg,_#D129DD_5.29%,_#FF8F27_94.71%)] " +
        "text-white hover:opacity-90 " +
        "shadow-[inset_0_0_20px_rgba(255,255,255,0.8)]",

    secondary:
        "bg-[#FAF5FF] text-[#A855F7] " +
        "border border-[#E9D5FF] hover:opacity-90",

    outline:
        "border border-[#E7E8EA] bg-transparent",

    ghost:
        "bg-transparent text-gray-900 hover:bg-gray-100",
        
    destructive:
        "bg-red-600 text-white hover:bg-red-700"
};

export const BUTTON_SIZE_MAP: Record<ButtonSize,string> = {
    xs: "p-2 text-[12px]",
    sm: "p-3 text-[12px]",
    md: "py-4 px-5 text-[14px]",
    lg: "py-5 px-6 text-[16px]"
};