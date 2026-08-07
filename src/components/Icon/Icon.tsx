import { cn } from "@/lib/utils";
import type { IconType } from "react-icons";

type IconSize = "sm" | "md" | "lg";

type IconVariant =
    | "default"
    | "primary"
    | "success"
    | "warning"
    | "danger";

interface IconProps {
    icon?: IconType;
    avatar?: boolean;
    size?: IconSize;
    iconSize?: IconSize;
    variant?: IconVariant;
    className?: string;
    iconClassName?: string;
}

const sizes: Record<IconSize, string> = {
    sm: "h-6 w-6",
    md: "h-9 w-9",
    lg: "h-12 w-12"
};

const variants: Record<IconVariant, string> = {
    default: "bg-gray-100 text-gray-700",
    primary: "bg-blue-100 text-blue-700",
    success: "bg-green-100 text-green-700",
    warning: "bg-yellow-100 text-yellow-800",
    danger: "bg-red-100 text-red-700"
};

const iconSizes: Record<IconSize, number> = {
    sm: 14,
    md: 20,
    lg: 28,
};

export default function Icon({
    icon: Icon,
    avatar = false,
    size = "md",
    variant = "default",
    className,
    iconClassName
}: IconProps) {
    return (
        <div className={cn(
            avatar && "flex items-center justify-center rounded-full",
            avatar && sizes[size],
            avatar && variants[variant],
            className
        )}>    
            {Icon && (
            <Icon
                size={iconSizes[size]}
                className={iconClassName}/>
            )}
        </div>
    );
}