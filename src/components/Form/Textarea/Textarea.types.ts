import type {
    TextareaHTMLAttributes,
} from "react";

import type {
    IconType,
} from "react-icons";

export type TextareaVariant =
    | "default"
    | "filled"
    | "ghost"
    | "underlined";

export type TextareaSize =
    | "sm"
    | "md"
    | "lg";

export type TextareaFloating =
    | "outlined"
    | "standard"
    | "top";

export interface TextareaProps
    extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;

    error?: string;

    hint?: string;

    variant?: TextareaVariant;

    size?: TextareaSize;

    floating?: TextareaFloating;

    leftIcon?: IconType;

    rightIcon?: IconType;
}