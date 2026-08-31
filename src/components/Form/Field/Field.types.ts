import type { ReactNode } from "react";

export type FieldVariant =
    | "default"
    | "filled"
    | "ghost";

export type FieldSize =
    | "sm"
    | "md"
    | "lg";

export type FieldFloating =
    | "outlined"
    | "standard";

export interface FieldProps {
    error?: string;
    hint?: string;
    children: ReactNode;
}