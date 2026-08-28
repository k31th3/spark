import type { ReactNode } from "react";

export interface CardProps {
    children?: ReactNode;
    className?: string;
}

export interface CardSectionProps {
    children?: ReactNode;
    className?: string;
}

export interface CardComponent {
    (props: CardProps): React.ReactNode;
    Header: React.FC<CardSectionProps>;
    Body: React.FC<CardSectionProps>;
    Footer: React.FC<CardSectionProps>;
}