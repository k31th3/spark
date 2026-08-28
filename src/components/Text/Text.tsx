import type {
    ElementType
} from "react";

import { getTextClassName, getTextElement } from "./Text.helpers";
import type { TextProps } from "./Text.types";

export default function Text({
    as,
    variant = "body",
    color = "foreground",
    className,
    children
}: TextProps) {
    const Component: ElementType =
        as ?? getTextElement(variant);

    return (
        <Component
            className={getTextClassName(
                variant,
                color,
                className
            )}
        >
            {children}
        </Component>
    );
}