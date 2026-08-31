import Field from "../Field";

import {
    getInputClassName
} from "../Input/Input.helpers";

import type {
    SelectProps
} from "./Select.types";

export default function Select({
    label,
    error,
    hint,

    variant = "default",
    size = "md",

    floating,

    options = [],

    className,
    id,
    required,

    children,

    ...props
}: SelectProps) {
    return (
        <Field
            label={label}
            error={error}
            hint={hint}
            variant={variant}
            size={size}
            floating={floating}
            required={required}
            id={id}
        >
            <select
                id={id}
                required={required}
                aria-invalid={!!error}
                className={getInputClassName(
                    variant,
                    size,
                    !!error,
                    className
                )}
                {...props}
            >
                {children ??
                    options.map(option => (
                        <option
                            key={option.value}
                            value={option.value}
                        >
                            {option.label}
                        </option>
                    ))}
            </select>
        </Field>
    );
}