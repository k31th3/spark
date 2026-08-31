import { getInputClassName, getInputWrapperClassName } from "./Input.helpers";
import type { InputProps } from "./Input.types";

export default function Input({
    variant = "default",
    size = "md",
    leftIcon,
    rightIcon,
    error = false,
    className,
    ...props
}: InputProps) {
    return (
        <div
            className={getInputWrapperClassName(
                !!leftIcon,
                !!rightIcon
            )}
        >
            {leftIcon && (
                <span className="absolute left-3 z-10 flex items-center text-muted">
                    {leftIcon}
                </span>
            )}

            <input
                className={getInputClassName(
                    variant,
                    size,
                    error,
                    className
                )}
                {...props}
            />

            {rightIcon && (
                <span className="absolute right-3 z-10 flex items-center text-muted">
                    {rightIcon}
                </span>
            )}
        </div>
    );
}