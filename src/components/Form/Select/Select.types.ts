import type {
    SelectHTMLAttributes,
} from "react";

import type {
    FieldSize,
    FieldVariant,
    FieldFloating,
} from "../Field/Field.types";

export interface SelectOption {
    label: string;

    value: string | number;
}

export interface SelectProps
    extends Omit<
        SelectHTMLAttributes<HTMLSelectElement>,
        "size"
    > {
    label?: string;

    error?: string;

    hint?: string;

    variant?: FieldVariant;

    size?: FieldSize;

    floating?: FieldFloating;

    options?: SelectOption[];
}