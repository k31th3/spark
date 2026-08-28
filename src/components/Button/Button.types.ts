import type { HTMLMotionProps } from "motion/react";

export type ButtonVariant =
    | "primary"
    | "gradient"
    | "secondary"
    | "outline"
    | "ghost"
    | "destructive";

export type ButtonSize =
    | "xs"
    | "sm"
    | "md"
    | "lg";

export interface ButtonProps
    extends HTMLMotionProps<"button"> {
    variant?: ButtonVariant;
    size?: ButtonSize;
}