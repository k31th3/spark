import { cn } from "@/lib/utils";

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

interface CardSectionProps {
    children: React.ReactNode;
    className?: string;
}

function Card({ children, className }: CardProps) {
    return (
        <div
            className={cn(
                "rounded-[24px] bg-white shadow-sm",
                className
            )}>
            {children}
        </div>
    );
}

function Header({ children, className }: CardSectionProps) {
    return (
        <div
            className={cn(
            "border-b px-6 py-4",
            className
        )}>
            {children}
        </div>
    );
}

function Body({ children, className }: CardSectionProps) {
    return (
        <div
            className={cn(
            "px-6 py-4",
            className
        )}>
            {children}
        </div>
    );
}

function Footer({ children, className }: CardSectionProps) {
    return (
        <div
            className={cn(
            "border-t px-6 py-4",
            className)}>
        {children}
        </div>
    );
}

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;