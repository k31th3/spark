import type {
    TextareaHTMLAttributes,
} from "react";

import type {
    FieldSize,
    FieldVariant,
    FieldFloating,
} from "../Field/Field.types";

export interface TextareaProps
    extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;

    error?: string;

    hint?: string;

    variant?: FieldVariant;

    size?: FieldSize;

    floating?: FieldFloating;
}