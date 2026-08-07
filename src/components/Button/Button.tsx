
import { motion, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

type ButtonVariant =
  | "primary"
  | "gradient"
  | "secondary"
  | "outline"
  | "ghost"
  | "destructive";

type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variants: Record<ButtonVariant, string> = {
    primary: "bg-primary text-white hover:opacity-90",
    gradient: `bg-[linear-gradient(83.35deg,_#D129DD_5.29%,_#FF8F27_94.71%)] text-white 
    hover:opacity-90 shadow-[inset_0_0_20px_rgba(255,255,255,0.8)]`,
    secondary: "bg-[#FAF5FF] text-[#A855F7] border-1 border-color-[#E9D5FF] hover:opacity-90",
    outline: "border border-[#E7E8EA] bg-transparent text-gray-900 hover:bg-gray-100",
    ghost: "bg-transparent text-gray-900 hover:bg-gray-100",
    destructive: "bg-red-600 text-white hover:bg-red-700"
};

const sizes: Record<ButtonSize, string> = {
    sm: "p-3 text-[12px]",
    md: "py-4 px-5 text-[14px]",
    lg: "py-5 px-6 text-[16px]"
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
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 1.02 }}
            transition={{
                type: "spring",
                stiffness: 400,
                damping: 15
            }}
            disabled={disabled}
            className={cn(
                "inline-flex items-center justify-center rounded-full font-medium cursor-pointer",
                "focus:outline-none",
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