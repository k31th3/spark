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

const Card: CardComponent = ({
    children,
    className
}: CardProps) => {
    return (
        <div className={getCardClassName(className)}>
            {children}
        </div>
    );
};

const Header = ({
    children,
    className
}: CardSectionProps) => {
    return (
        <div className={getCardHeaderClassName(className)}>
            {children}
        </div>
    );
};

const Body = ({
    children,
    className
}: CardSectionProps) => {
    return (
        <div className={getCardBodyClassName(className)}>
            {children}
        </div>
    );
};

const Footer = ({
    children,
    className
}: CardSectionProps) => {
    return (
        <div className={getCardFooterClassName(className)}>
            {children}
        </div>
    );
};

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;