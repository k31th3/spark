import { cn } from "@/lib/utils";

type ChipVariant =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "danger";

type ChipSize = "sm" | "md" | "lg";

interface ChipProps {
    children: React.ReactNode;
    variant?: ChipVariant;
    size?: ChipSize;
    className?: string;
}

const variants: Record<ChipVariant, string> = {
    default: "bg-gray-100 text-gray-700 border-gray-200",
    primary: "bg-[var(--color-primary)]/10 text-[var(--color-primary)] border-[var(--color-primary)]/200",
    success: "bg-green-100 text-green-700 border-green-200",
    warning: "bg-yellow-100 text-yellow-800 border-yellow-200",
    danger: "bg-red-100 text-red-700 border-red-200"
};

const sizes: Record<ChipSize, string> = {
    sm: "text-[10px]",
    md: "text-[12px]",
    lg: "text-[14px]"
};

export default function Chip({
    children,
    variant = "default",
    size = "md",
    className
}: ChipProps) {
    return (
        <span
            className={cn(
                "w-fit px-2 py-1 border inline-flex items-center gap-1 rounded-full font-medium transition-colors",
                variants[variant],
                sizes[size],
                className
              )}>
            {children}
        </span>
    );
}