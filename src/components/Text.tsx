import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type TextVariant =
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body"
    | "bodySmall"
    | "bodyLarge"
    | "lead"
    | "caption"
    | "label";

type TextColor =
    | "primary"
    | "muted"
    | "foreground"
    | "background"
    | "white"
    | "black"
    | "gradient";

interface TextProps {
    as?: ElementType;
    variant?: TextVariant;
    color?: TextColor;
    className?: string;
    children: ReactNode;
}

const variants: Record<TextVariant, string> = {
    h1: "text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl",
    h2: "text-3xl font-bold tracking-tight sm:text-4xl",
    h3: "text-2xl font-semibold tracking-tight sm:text-3xl",
    h4: "text-xl font-semibold",
    h5: "text-lg font-semibold",
    h6: "text-base font-semibold",

    body: "text-base leading-7",
    bodySmall: "text-sm leading-5",
    bodyLarge: "text-lg leading-8",

    lead: "text-xl leading-8",
    caption: "text-[14px] leading-5",
    label: "text-[11px]"
};



const colors: Record<TextColor, string> = {
    primary: "text-primary",
    muted: "text-muted",
    foreground: "text-foreground",
    background: "text-background",
    white: "text-white",
    black: "text-black",
    gradient: "text-gradient"
};

const defaultElements: Record<TextVariant, ElementType> = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",

    body: "p",
    bodySmall: "p",
    bodyLarge: "p",
    lead: "p",

    caption: "span",
    label: "span",
};

export default function Text({
  as,
  variant = "body",
  color = "foreground",
  className = "",
  children
}: TextProps) {
    const Component = as ?? defaultElements[variant];

    return (
        <Component
            className={cn(
                    variants[variant],
                    colors[color],
                    className
                )}>
            {children}
        </Component>
    );
}