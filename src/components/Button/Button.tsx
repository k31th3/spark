import { motion } from "motion/react";

import type { ButtonProps } from "./Button.types";
import { getButtonClassName } from "./Button.helpers";

export default function Button({
    variant = "primary",
    size = "md",
    className,
    children,
    disabled,
    ...props
}: ButtonProps) {
    return (
        <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 1.02 }}
            transition={{
                type: "spring",
                stiffness: 400,
                damping: 15
            }}
            disabled={disabled}
            className={getButtonClassName(
                variant,
                size,
                className
            )}
            {...props}>
            {children}
        </motion.button>
    );
}