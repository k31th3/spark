import { Icon, Text } from "@/components";

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
                 * =================================
                 * FLOATING INPUT
                 * =================================
                 */
                <div className="relative">

                    {leftIcon && (
                        <span
                            className="
                                pointer-events-none
                                absolute
                                left-0
                                top-1/2
                                z-10
                                flex
                                -translate-y-1/2
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

                        /*
                         * IMPORTANT
                         *
                         * This is required for:
                         *
                         * peer-placeholder-shown
                         */
                        placeholder=" "

                        className={getInputClassName(
                            variant,
                            size,
                            !!error,

                            cn(
                                "peer",

                                leftIcon &&
                                    "pl-8",

                                rightIcon &&
                                    "pr-8",

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
                            <Text variant="label" color="danger" className="ml-1">
                                *
                            </Text>
                        )}
                    </label>

                    {rightIcon && (
                        <span
                            className="
                                pointer-events-none
                                absolute
                                right-0
                                top-1/2
                                z-10
                                flex
                                -translate-y-1/2
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
            ) : (
                /*
                 * =================================
                 * DEFAULT INPUT
                 * =================================
                 */
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

                    <div
                        className={getInputWrapperClassName(
                            !!leftIcon,
                            !!rightIcon
                        )}
                    >
                        {leftIcon && (
                            <span
                                className="
                                    pointer-events-none
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
                                    pointer-events-none
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