import type {
    ElementType,
    ReactNode
} from "react";

export type TextVariant =
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

export type TextColor =
    | "primary"
    | "muted"
    | "foreground"
    | "background"
    | "white"
    | "black"
    | "gradient"
    | "green"
    | "danger"
    | "orange"
    | "pink";

export interface TextProps {
    as?: ElementType;
    variant?: TextVariant;
    color?: TextColor;
    className?: string;
    children: ReactNode;
}