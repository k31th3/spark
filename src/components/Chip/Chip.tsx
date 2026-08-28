import { getChipClassName } from "./Chip.helpers";
import type { ChipProps } from "./Chip.types";

export default function Chip({
    children,
    variant = "default",
    size = "md",
    className
}: ChipProps) {
    return (
        <span
            className={getChipClassName(
                variant,
                size,
                className
            )}>
            {children}
        </span>
    );
}