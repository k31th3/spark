import { motion, type HTMLMotionProps } from "motion/react";
import { MdOutlineLocalPhone } from "react-icons/md";
import type { ReactNode } from "react";

import style from "./BookCall.module.css";

interface BookCallProps extends HTMLMotionProps<"a"> {
    children?: ReactNode;
}

export default function BookCall({
    children,
    ...props
}: BookCallProps) {
    return (
        <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 1.02 }}
            transition={{
                type: "spring",
                stiffness: 400,
                damping: 15
            }}
            aria-label="Talk to Us"
            className={style.BookCall}
            href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`}
            {...props}>
            {children ?? (
                <>
                    <MdOutlineLocalPhone />
                    <span>
                        Talk to us
                    </span>
                </>
            )}
        </motion.a>
    );
}