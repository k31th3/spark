import type {
    InputHTMLAttributes,
} from "react";

import type {
    IconType,
} from "react-icons";

import type {
    FieldSize,
    FieldVariant,
    FieldFloating,
} from "../Field/Field.types";

export type {
    FieldSize as InputSize,
    FieldVariant as InputVariant,
    FieldFloating as InputFloating,
} from "../Field/Field.types";

export interface InputProps
    extends Omit<
        InputHTMLAttributes<HTMLInputElement>,
        "size"
    > {
    label?: string;

    error?: string;

    hint?: string;

    variant?: FieldVariant;

    size?: FieldSize;

    floating?: FieldFloating;

    leftIcon?: IconType;

    rightIcon?: IconType;
}