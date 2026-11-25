import { useEffect, useId, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { FiX } from "react-icons/fi";

import { cn } from "@/lib/utils";

import Button from "../Button";
import type { ModalProps } from "./Modal.types";
import styles from "./Modal.module.css";

const EASE = [0.22, 1, 0.36, 1] as const;

const FOCUSABLE = [
    "a[href]",
    "button",
    "input",
    "select",
    "textarea",
    '[tabindex]:not([tabindex="-1"])'
].join(",");

/* =========================================================
   LAYER
========================================================= */

function ModalLayer({
    onClose,
    title,
    eyebrow,
    description,
    size = "md",
    dismissible = true,
    className,
    children
}: Omit<ModalProps, "open">) {
    const panel = useRef<HTMLDivElement>(null);
    const reduce = useReducedMotion();
    const titleId = useId();
    const descId = useId();

    const onCloseRef = useRef(onClose);
    const dismissibleRef = useRef(dismissible);
    onCloseRef.current = onClose;
    dismissibleRef.current = dismissible;

    useEffect(() => {
        const previous = document.activeElement as HTMLElement | null;
        const app = document.getElementById("root");
        const html = document.documentElement;

        const scrollbar = window.innerWidth - html.clientWidth;
        const prevOverflow = html.style.overflow;
        const prevPadding = document.body.style.paddingRight;

        html.style.overflow = "hidden";
        if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;

        app?.setAttribute("inert", "");

        const target = panel.current?.querySelector<HTMLElement>("[data-autofocus]") ?? panel.current;
        target?.focus({ preventScroll: true });

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape" && dismissibleRef.current) {
                event.stopPropagation();
                onCloseRef.current();
                return;
            }

            if (event.key !== "Tab" || !panel.current) return;

            const items = Array.from(panel.current.querySelectorAll<HTMLElement>(FOCUSABLE))
                .filter(element => !element.hasAttribute("disabled"));

            if (items.length === 0) {
                event.preventDefault();
                return;
            }

            const first = items[0];
            const last = items[items.length - 1];
            const active = document.activeElement;

            if (event.shiftKey && (active === first || active === panel.current)) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && active === last) {
                event.preventDefault();
                first.focus();
            }
        };

        document.addEventListener("keydown", onKeyDown);

        return () => {
            document.removeEventListener("keydown", onKeyDown);

            html.style.overflow = prevOverflow;
            document.body.style.paddingRight = prevPadding;
            app?.removeAttribute("inert");

            previous?.focus?.({ preventScroll: true });
        };
    }, []);

    const fade = { duration: reduce ? 0 : 0.25 };

    return (
        <motion.div
            className={styles.root}
            data-lenis-prevent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={fade}>

            <div
                className={styles.backdrop}
                aria-hidden="true"
                data-cursor-label={dismissible ? "Close" : undefined}
                onClick={dismissible ? onClose : undefined} />

            <motion.div
                ref={panel}
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                aria-describedby={description ? descId : undefined}
                tabIndex={-1}
                className={cn(styles.panel, styles[size], className)}
                initial={{ opacity: 0, y: reduce ? 0 : 24, scale: reduce ? 1 : 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: reduce ? 0 : 16, scale: reduce ? 1 : 0.98 }}
                transition={{ duration: reduce ? 0 : 0.4, ease: EASE }}>

                <header className={styles.header}>
                    <div className={styles.heading}>
                        {eyebrow && <span className={styles.eyebrow}>({eyebrow})</span>}
                        <h2 id={titleId} className={styles.title}>{title}</h2>
                        {description && <p id={descId} className={styles.description}>{description}</p>}
                    </div>

                    {dismissible && (
                        <Button
                            variant="outline"
                            size="sm"
                            aria-label="Close dialog"
                            onClick={onClose}
                            className={styles.close}
                            icon={<FiX size={20} />} />
                    )}
                </header>

                <div className={styles.body}>{children}</div>
            </motion.div>
        </motion.div>
    );
}

/* =========================================================
   MODAL
========================================================= */

function Modal({ open, ...props }: ModalProps) {
    if (typeof document === "undefined") return null;

    return createPortal(
        <AnimatePresence>
            {open && <ModalLayer key="modal" {...props} />}
        </AnimatePresence>,
        document.body
    );
}

function ModalFooter({ children }: { children: ReactNode }) {
    return <div className={styles.footer}>{children}</div>;
}

Modal.Footer = ModalFooter;

export default Modal;