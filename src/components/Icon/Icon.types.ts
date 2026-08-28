import type {
    IconBaseProps,
    IconType
} from "react-icons";

export type IconSize =
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl";

export type IconVariant =
    | "default"
    | "light"
    | "gradient"
    | "primary"
    | "success"
    | "warning"
    | "danger"
    | "orange"
    | "pink";

export interface IconProps extends IconBaseProps {
    icon?: IconType;
    avatar?: boolean;
    size?: IconSize;
    variant?: IconVariant;
    className?: string;
    iconClassName?: string;
}