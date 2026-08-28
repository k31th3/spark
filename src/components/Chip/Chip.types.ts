export type ChipVariant =
    | "default"
    | "primary"
    | "success"
    | "warning"
    | "danger"
    | "gradient";

export type ChipSize =
    | "sm"
    | "md"
    | "lg";

export interface ChipProps {
    children: React.ReactNode;
    variant?: ChipVariant;
    size?: ChipSize;
    className?: string;
}