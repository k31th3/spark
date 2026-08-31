import type {
    ReactNode
} from "react";

export interface LabelProps {
    htmlFor?: string;

    required?: boolean;

    children?: ReactNode;
}