import type {
    InputHTMLAttributes,
} from "react";

import type {
    IconType,
} from "react-icons";

export type InputVariant =
    | "default"
    | "filled"
    | "ghost"
    | "underlined";

export type InputSize =
    | "sm"
    | "md"
    | "lg";

export type InputFloating =
    | "outlined"
    | "standard"
    | "top";

export interface InputProps
    extends Omit<
        InputHTMLAttributes<HTMLInputElement>,
        "size"
    > {
    label?: string;

    error?: string;

    hint?: string;

    variant?: InputVariant;

    size?: InputSize;

    floating?: InputFloating;

    leftIcon?: IconType;

    rightIcon?: IconType;
}