import {
    getIconClassName,
    getIconSize,
    getIconStyle,
    getIconWrapperClassName
} from "./Icon.helpers";

import type { IconProps } from "./Icon.types";

export default function Icon({
    icon: IconComponent,
    avatar = false,
    size = "md",
    variant = "default",
    className,
    iconClassName,
    ...svgProps
}: IconProps) {
    return (
        <div
            className={getIconWrapperClassName(
                avatar,
                size,
                variant,
                className
            )}>
            {IconComponent && (
                <IconComponent
                    size={getIconSize(size)}
                    className={getIconClassName(
                        variant,
                        iconClassName
                    )}
                    style={getIconStyle(variant)}
                    {...svgProps}
                />
            )}
        </div>
    );
}