import type { ComponentType, ReactNode } from "react";
import { Text } from "@/components";

export function SectionLabel({ children }: { children: ReactNode }) {
    return (
        <Text as="span" variant="label" color="muted">
            ({children})
        </Text>
    );
}

export function IconTile({ icon: IconCmp, tone = "pink", className = "" }: {
    icon: ComponentType<{ className?: string }>;
    tone?: "pink" | "green";
    className?: string;
}) {
    const tones = {
        pink: "bg-fuchsia-50 text-fuchsia-600",
        green: "bg-green-50 text-green-600"
    };
    return (
        <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${tones[tone]} ${className}`}>
            <IconCmp className="h-5 w-5" />
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