
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type ButtonVariant =
  | "primary"
  | "gradient"
  | "secondary"
  | "outline"
  | "ghost"
  | "destructive";

type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
}

const variants: Record<ButtonVariant, string> = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    gradient: "bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white hover:opacity-90",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    outline: "border border-gray-300 bg-transparent text-gray-900 hover:bg-gray-100",
    ghost: "bg-transparent text-gray-900 hover:bg-gray-100",
    destructive: "bg-red-600 text-white hover:bg-red-700"
};

const sizes: Record<ButtonSize, string> = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-5 text-base",
    lg: "h-12 px-6 text-lg"
};

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
            whileHover={!disabled ? { scale: 1.03 } : undefined}
            whileTap={!disabled ? { scale: 1.02 } : undefined}
            transition={{
                type: "spring",
                stiffness: 400,
                damping: 15
            }}
            disabled={disabled}
            className={cn(
                "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200",
                "focus:outline-none focus:ring-2 focus:ring-offset-2",
                "disabled:pointer-events-none disabled:opacity-50",
                    variants[variant],
                    sizes[size],
                    className
                )}
              {...props}>
            {children}
        </motion.button>
    );
}