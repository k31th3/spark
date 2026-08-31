import { Icon } from "@/components";

import { cn } from "@/lib/utils";

import Field from "../Field";

import {
    getFieldLabelClassName,
} from "../Field/Field.helpers";

import {
    getInputClassName,
    getInputWrapperClassName,
} from "./Input.helpers";

import type {
    InputProps,
} from "./Input.types";

export default function Input({
    label,
    error,
    hint,

    variant = "default",
    size = "md",

    floating,

    leftIcon,
    rightIcon,

    className,
    id,
    required,

    placeholder,

    ...props
}: InputProps) {
    const isFloating =
        !!floating &&
        !!label;

    return (
        <Field
            error={error}
            hint={hint}
        >
            {isFloating ? (
                /*
                 * Floating
                 *
                 * Input and label MUST be
                 * direct siblings.
                 */
                <div className="relative">

                    <input
                        id={id}
                        required={required}
                        aria-invalid={!!error}
                        placeholder=" "
                        className={getInputClassName(
                            variant,
                            size,
                            !!error,
                            cn(
                                "peer",

                                /*
                                 * Flowbite spacing
                                 */
                                "px-2.5",
                                "pb-2.5",
                                "pt-4",

                                /*
                                 * Flowbite
                                 */
                                "appearance-none",

                                className
                            )
                        )}
                        {...props}
                    />

                    <label
                        htmlFor={id}
                        className={getFieldLabelClassName(
                            floating,
                            size,
                            variant,
                            !!error
                        )}
                    >
                        {label}

                        {required && (
                            <span className="ml-1 text-red-500">
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
                                mb-2
                                block
                                text-sm
                                font-medium
                                text-foreground
                            "
                        >
                            {label}

                            {required && (
                                <span className="ml-1 text-red-500">
                                    *
                                </span>
                            )}
                        </label>
                    )}

                    <div
                        className={getInputWrapperClassName(
                            !!leftIcon,
                            !!rightIcon
                        )}
                    >
                        {leftIcon && (
                            <span
                                className="
                                    absolute
                                    left-3
                                    z-10
                                    flex
                                    items-center
                                    text-muted
                                "
                            >
                                <Icon
                                    icon={leftIcon}
                                    size={size}
                                    color={variant}
                                />
                            </span>
                        )}

                        <input
                            id={id}
                            required={required}
                            aria-invalid={!!error}
                            placeholder={placeholder}
                            className={getInputClassName(
                                variant,
                                size,
                                !!error,
                                className
                            )}
                            {...props}
                        />

                        {rightIcon && (
                            <span
                                className="
                                    absolute
                                    right-3
                                    z-10
                                    flex
                                    items-center
                                    text-muted
                                "
                            >
                                <Icon
                                    icon={rightIcon}
                                    size={size}
                                    color={variant}
                                />
                            </span>
                        )}
                    </div>
                </>
            )}
        </Field>
    );
}