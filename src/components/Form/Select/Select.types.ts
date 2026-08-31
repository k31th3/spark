import type {
    SelectHTMLAttributes,
} from "react";

export type SelectVariant =
    | "default"
    | "filled"
    | "ghost"
    | "underlined";

export type SelectSize =
    | "sm"
    | "md"
    | "lg";

export type SelectFloating =
    | "outlined"
    | "standard"
    | "top";

export interface SelectProps
    extends Omit<
        SelectHTMLAttributes<HTMLSelectElement>,
        "size"
    > {
    label?: string;

    error?: string;

    hint?: string;

    variant?: SelectVariant;

    size?: SelectSize;

    floating?: SelectFloating;
}