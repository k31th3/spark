import { cn } from "@/lib/utils";

import Field from "../Field";

import {
    getFieldLabelClassName,
} from "../Field/Field.helpers";

import {
    getSelectClassName,
} from "./Select.helpers";

import type {
    SelectProps,
} from "./Select.types";

export default function Select({
    label,
    error,
    hint,

    variant = "default",
    size = "md",

    floating,

    className,
    id,
    required,

    children,

    ...props
}: SelectProps) {
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

                    <select
                        id={id}
                        required={required}
                        aria-invalid={!!error}
                        className={getSelectClassName(
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
                    >
                        {children}
                    </select>

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

                    {/* Select arrow */}
                    <span
                        className="
                            pointer-events-none
                            absolute
                            right-3
                            top-1/2
                            -translate-y-1/2
                            text-muted
                        "
                    >
                        <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-4 w-4"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="
                                    M5.23 7.21a.75.75 0 0 1
                                    1.06.02L10 11.168l3.71-3.938
                                    a.75.75 0 1 1 1.08 1.04l-4.25
                                    4.5a.75.75 0 0 1-1.08 0l-4.25
                                   -4.5a.75.75 0 0 1 .02-1.06Z
                                "
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
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

                    <div className="relative">

                        <select
                            id={id}
                            required={required}
                            aria-invalid={!!error}
                            className={getSelectClassName(
                                variant,
                                size,
                                !!error,
                                className
                            )}
                            {...props}
                        >
                            {children}
                        </select>

                        <span
                            className="
                                pointer-events-none
                                absolute
                                right-3
                                top-1/2
                                -translate-y-1/2
                                text-muted
                            "
                        >
                            <svg
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-4 w-4"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="
                                        M5.23 7.21a.75.75 0 0 1
                                        1.06.02L10 11.168l3.71-3.938
                                        a.75.75 0 1 1 1.08 1.04l-4.25
                                        4.5a.75.75 0 0 1-1.08 0l-4.25
                                        -4.5a.75.75 0 0 1 .02-1.06Z
                                    "
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </div>
                </>
            )}
        </Field>
    );
}