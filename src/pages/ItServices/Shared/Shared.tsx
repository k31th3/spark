import type { ComponentType, ReactNode } from "react";
import { Text } from "@/components";

export function SectionLabel({ children }: { children: ReactNode }) {
    return (
        <Text as="span" variant="label" color="muted">
            ({children})
        </Text>
    );
}

export function IconTile({ icon: IconCmp, tone = "pink", size = "md", className = "" }: {
    icon: ComponentType<{ className?: string }>;
    tone?: "pink" | "green" | "orange";
    size?: "md" | "lg";
    className?: string;
}) {
    const tones = {
        pink: "bg-fuchsia-50 text-fuchsia-600",
        green: "bg-green-50 text-green-600",
        orange: "bg-orange-50 text-orange-500"
    };
    const sizes = {
        md: { tile: "h-11 w-11 rounded-xl", icon: "h-5 w-5" },
        lg: { tile: "h-16 w-16 rounded-2xl", icon: "h-8 w-8" }
    };
    return (
        <span className={`grid shrink-0 place-items-center ${sizes[size].tile} ${tones[tone]} ${className}`}>
            <IconCmp className={sizes[size].icon} />
        </span>
    );
}

export const SECTION = "relative bg-background py-32";

export const SECTION_FIRST = "relative bg-background pb-32";

export const CONTAINER = "max-w-7xl";

export const SECTION_TITLE =
    "font-medium leading-none tracking-[-0.035em] text-foreground text-[length:clamp(2.5rem,6vw,4.5rem)]";

export const ITEM_TITLE =
    "font-medium leading-[1.15] tracking-[-0.02em] text-foreground text-[length:clamp(1.25rem,2vw,1.75rem)]";

export const SMALL_TITLE = "text-base font-medium text-foreground";