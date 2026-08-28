import { cn } from "@/lib/utils";

export function getCardClassName(
    className?: string
) {
    return cn(
        "rounded-[24px] bg-white shadow-sm",
        className
    );
}

export function getCardHeaderClassName(
    className?: string
) {
    return cn(
        "border-b border-gray-300 px-6 py-4",
        className
    );
}

export function getCardBodyClassName(
    className?: string
) {
    return cn(
        "px-6 py-4",
        className
    );
}

export function getCardFooterClassName(
    className?: string
) {
    return cn(
        "border-t px-6 py-4",
        className
    );
}