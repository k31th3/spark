
import {
    getCardBodyClassName,
    getCardClassName,
    getCardFooterClassName,
    getCardHeaderClassName
} from "./Card.helpers";

import type {
    CardComponent,
    CardProps,
    CardSectionProps
} from "./Card.types";

function Card({
    children,
    className
}: CardProps) {
    return (
        <div
            className={getCardClassName(className)}>
            {children}
        </div>
    );
}

function Header({
    children,
    className
}: CardSectionProps) {
    return (
        <div
            className={getCardHeaderClassName(
                className
            )}>
            {children}
        </div>
    );
}

function Body({
    children,
    className
}: CardSectionProps) {
    return (
        <div
            className={getCardBodyClassName(
                className
            )}>
            {children}
        </div>
    );
}

function Footer({
    children,
    className
}: CardSectionProps) {
    return (
        <div
            className={getCardFooterClassName(
                className
            )}>
            {children}
        </div>
    );
}

const CardComponent = Card as CardComponent;

CardComponent.Header = Header;
CardComponent.Body = Body;
CardComponent.Footer = Footer;

export default CardComponent;