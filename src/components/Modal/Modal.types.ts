import type { ReactNode } from "react";

export type ModalSize = "md" | "lg";

export interface ModalProps {
    open: boolean;
    onClose: () => void;

    title: string;

    eyebrow?: string;
    description?: string;

    size?: ModalSize;

    dismissible?: boolean;

    children?: ReactNode;
    className?: string;
}