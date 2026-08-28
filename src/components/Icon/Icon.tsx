import type { IconType, IconBaseProps } from "react-icons";
import { cn } from "@/lib/utils";

type IconSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

type IconVariant =
    | "default"
    | "light"
    | "gradient"
    | "primary"
    | "success"
    | "warning"
    | "danger"
    | "orange"
    | "pink";

interface IconProps extends IconBaseProps {
    icon?: IconType;
    avatar?: boolean;
    size?: IconSize;
    iconSize?: IconSize;
    variant?: string;
    className?: string;
    iconClassName?: string;
}


const sizes: Record<IconSize, string> = {
    xs: "h-6 w-6",
    sm: "h-7 w-7",
    md: "h-9 w-9",
    lg: "h-12 w-12",
    xl: "h-15 w-15",
    "2xl": "h-18 w-18"
};

const variantsBg: Record<IconVariant, string> = {
    default: "bg-gray-100",
    light: "bg-transparent",
    gradient: "bg-[#FAF5FF]",
    primary: "bg-[var(--color-primary)]/10",
    success: "bg-green-100",
    warning: "bg-yellow-100",
    danger: "bg-red-100",
    orange: "bg-orange-100",
    pink: "bg-pink-100"
};

const variantsColor: Record<IconVariant, string> = {
    default:  "text-gray-700",
    light:    "text-white",
    gradient: "",
    primary:  "text-[var(--color-primary)]",
    success:  "text-green-600",
    warning:  "text-yellow-800",
    danger:   "text-red-700",
    orange: "text-orange-500",
    pink: "text-pink-500"
};

const iconSizes: Record<IconSize, number> = {
    xs: 10,
    sm: 14,
    md: 20,
    lg: 28,
    xl: 36,
    "2xl": 42
};

export default function Icon({
    icon: Icon,
    avatar = false,
    size = "md",
    variant = "default",
    className,
    iconClassName,
    ...svgProps
}: IconProps) {
    return (
        <div className={cn(
            avatar && "flex items-center justify-center rounded-full",
            avatar && sizes[size],
            avatar && variantsBg[variant],
            className
        )}>    
            {Icon && (
            <Icon
                size={iconSizes[size]}
                className={cn( variant !== "gradient" && variantsColor[variant],
                    iconClassName
                )}
                style={
                    variant === "gradient"
                      ? { fill: "url(#iconGradient)" }
                      : undefined
                }
                {...svgProps}/>
            )}
        </div>
    );
}