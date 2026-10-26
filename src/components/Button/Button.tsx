import { motion } from "motion/react";
import type { HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

import type { ButtonProps } from "./Button.types";
import { getButtonClassName } from "./Button.helpers";
import { Roll } from "../Roll";

/* =========================================================
   ARROW
========================================================= */

const ARROW = {
    right: { char: "→", move: "group-hover:translate-x-1" },
    up: { char: "↑", move: "group-hover:-translate-y-1" },
    down: { char: "↓", move: "group-hover:translate-y-1" },
} as const;

/* =========================================================
   BUTTON
========================================================= */

export default function Button({
    variant = "primary",
    size = "md",
    roll = false,
    arrow = false,
    glow = false,
    block = false,
    className,
    children,
    ...props
}: ButtonProps) {
    const classes = cn(
        getButtonClassName(variant, size, className),
        "group",
        block && "w-full justify-between",
        glow && "shadow-glow"
    );

    const arrowKey = arrow === true ? "right" : arrow || null;

    const content = (
        <>
            {roll ? <Roll>{children}</Roll> : children}

            {arrowKey && (
                <span
                    aria-hidden="true"
                    className={cn(
                        "inline-block transition-transform duration-200 motion-reduce:transition-none",
                        ARROW[arrowKey].move
                    )}
                >
                    {ARROW[arrowKey].char}
                </span>
            )}
        </>
    );

    const shared = {
        className: classes,
        whileHover: { scale: 1.03 },
        whileTap: { scale: 1.02 },
        transition: {
            type: "spring" as const,
            stiffness: 400,
            damping: 15,
        },
        ...(roll ? { "data-roll": "" } : {}),
    };

    if (props.href !== undefined) {
        const anchorProps = props as unknown as HTMLMotionProps<"a">;

        return (
            <motion.a {...shared} {...anchorProps}>
                {content}
            </motion.a>
        );
    }

    const buttonProps = props as unknown as HTMLMotionProps<"button">;

    return (
        <motion.button type="button" {...shared} {...buttonProps}>
            {content}
        </motion.button>
    );
}