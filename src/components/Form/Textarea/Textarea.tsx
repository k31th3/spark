import { cn } from "@/lib/utils";

import Field from "../Field";

import {
    getInputClassName
} from "../Input/Input.helpers";

import type {
    TextareaProps
} from "./Textarea.types";

export default function Textarea({
    label,
    error,
    hint,

    variant = "default",
    size = "md",

    floating,

    className,
    id,
    required,

    placeholder,

    ...props
}: TextareaProps) {
    const isFloating =
        !!floating &&
        !!label;

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
            <textarea
                id={id}
                required={required}
                aria-invalid={!!error}
                placeholder={
                    isFloating
                        ? " "
                        : placeholder
                }
                className={getInputClassName(
                    variant,
                    size,
                    !!error,
                    cn(
                        "min-h-32",
                        "py-3",
                        "resize-y",

                        isFloating &&
                            "peer",

                        className
                    )
                )}
                {...props}
            />
        </Field>
    );
}