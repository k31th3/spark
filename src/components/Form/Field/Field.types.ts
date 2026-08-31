import type { ReactNode } from "react";

export type FieldVariant =
    | "default"
    | "filled"
    | "ghost"
    | "underlined";

export type FieldSize =
    | "sm"
    | "md"
    | "lg";

export type FieldFloating =
    | "default"
    | "top";

export interface FieldProps {
    error?: string;

    hint?: string;

    children: ReactNode;
}