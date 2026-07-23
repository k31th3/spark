import { motion, type HTMLMotionProps } from "motion/react";
import { MdOutlineLocalPhone } from "react-icons/md";
import type { ReactNode } from "react";

import styles from "./BookCall.module.css";

interface BookCallProps extends HTMLMotionProps<"button"> {
    children?: ReactNode;
}

export default function BookCall({
    children,
    ...props
}: BookCallProps) {
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
            aria-label="Book a call"
            className={styles.BookCall}
            {...props}
        >
            {children ?? (
                <>
                    <MdOutlineLocalPhone />
                    <span>
                        Book a Call
                    </span>
                </>
            )}
        </motion.button>
    );
}