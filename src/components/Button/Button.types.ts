import type { ReactNode } from "react";
import type { HTMLMotionProps } from "motion/react";

export type ButtonVariant =
    | "primary"
    | "gradient"
    | "secondary"
    | "outline"
    | "ghost"
    | "destructive"
    | "dark"
    | "light"
    | "outlineDark";

export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl" | "nav" | "hero";

type BaseProps = {
    variant?: ButtonVariant;
    size?: ButtonSize;
    roll?: boolean;
    arrow?: boolean | "right" | "up" | "down";
    glow?: boolean;
    block?: boolean;
    children?: ReactNode;
};

type AsButton = Omit<HTMLMotionProps<"button">, "children"> &
    BaseProps & { href?: undefined };

type AsAnchor = Omit<HTMLMotionProps<"a">, "children"> &
    BaseProps & { href: string };

export type ButtonProps = AsButton | AsAnchor;