import { cn } from "@/lib/utils";

import Field from "../Field";

import {
    getFieldLabelClassName,
} from "../Field/Field.helpers";

import {
    getTextareaClassName,
} from "./Textarea.helpers";

import type {
    TextareaProps,
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
            error={error}
            hint={hint}
        >
            {isFloating ? (
                <div className="relative">

                    <textarea
                        id={id}
                        required={required}
                        aria-invalid={!!error}
                        placeholder=" "
                        className={getTextareaClassName(
                            variant,
                            size,
                            !!error,

                            cn(
                                "peer",
                                className
                            ),

                            floating
                        )}
                        {...props}
                    />

                    <label
                        htmlFor={id}
                        className={getFieldLabelClassName(
                            floating,
                            size,
                            !!error
                        )}
                    >
                        {label}

                        {required && (
                            <span
                                className="
                                    ml-1
                                    text-red-500
                                "
                            >
                                *
                            </span>
                        )}
                    </label>
                </div>
            ) : (
                <>
                    {label && (
                        <label
                            htmlFor={id}
                            className="
                                mb-2.5
                                block
                                text-sm
                                font-medium
                                text-foreground
                            "
                        >
                            {label}

                            {required && (
                                <span
                                    className="
                                        ml-1
                                        text-red-500
                                    "
                                >
                                    *
                                </span>
                            )}
                        </label>
                    )}

                    <textarea
                        id={id}
                        required={required}
                        aria-invalid={!!error}
                        placeholder={placeholder}
                        className={getTextareaClassName(
                            variant,
                            size,
                            !!error,
                            className
                        )}
                        {...props}
                    />
                </>
            )}
        </Field>
    );
}