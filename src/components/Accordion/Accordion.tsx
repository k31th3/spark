import {
    createContext,
    useContext,
    useState,
    type ComponentProps,
    type ReactNode,
    type HTMLAttributes,
    type ButtonHTMLAttributes,
} from "react";
import {
    AnimatePresence,
    motion,
    type HTMLMotionProps,
} from "motion/react";
import {
    FaMinus,
    FaPlus,
    FaChevronRight,
} from "react-icons/fa";

import { Button, Icon } from "@/components";
import { cn } from "@/lib/utils";

type AccordionIcon =
    | "arithmetic"
    | "comparison"
    | false;

type AccordionProps =
    HTMLAttributes<HTMLDivElement> & {
        defaultOpen?: string | null;
        icon?: AccordionIcon;
    };

type AccordionItemProps =
    HTMLAttributes<HTMLDivElement> & {
        id: string;
    };

type AccordionHeaderProps =
    Omit<
        ButtonHTMLAttributes<HTMLButtonElement>,
        "children"
    > & {
        children:
            | ReactNode
            | ((isOpen: boolean) => ReactNode);
    };

type AccordionBodyProps = Omit<
    HTMLMotionProps<"div">,
    "children"
> & {
    children: ReactNode;
};

type AccordionActionProps =
    ComponentProps<typeof Button>;

type AccordionContextType = {
    openItem: string | null;
    toggleItem: (id: string) => void;
    openItemById: (id: string) => void;
    closeItem: () => void;
    icon: AccordionIcon;
};

type AccordionItemContextType = {
    id: string;
};

const AccordionContext =
    createContext<AccordionContextType | null>(null);

const AccordionItemContext =
    createContext<AccordionItemContextType | null>(null);

function useAccordion() {
    const context = useContext(AccordionContext);

    if (!context) {
        throw new Error(
            "Accordion components must be used inside <Accordion>."
        );
    }

    return context;
}

function useAccordionItem() {
    const context = useContext(
        AccordionItemContext
    );

    if (!context) {
        throw new Error(
            "Accordion.Header and Accordion.Body must be used inside <Accordion.Item>."
        );
    }

    return context;
}

function Accordion({
    children,
    defaultOpen = null,
    icon = "arithmetic",
    className,
    ...props
}: AccordionProps) {
    const [openItem, setOpenItem] =
        useState<string | null>(defaultOpen);

    const toggleItem = (id: string) => {
        setOpenItem((current) =>
            current === id ? null : id
        );
    };

    const openItemById = (id: string) => {
        setOpenItem(id);
    };

    const closeItem = () => {
        setOpenItem(null);
    };

    return (
        <AccordionContext.Provider
            value={{
                openItem,
                toggleItem,
                openItemById,
                closeItem,
                icon,
            }}>
            <div
                {...props}
                className={className}>
                {children}
            </div>
        </AccordionContext.Provider>
    );
}

function AccordionItem({
    id,
    children,
    className,
    ...props
}: AccordionItemProps) {
    return (
        <AccordionItemContext.Provider
            value={{ id }}>
            <div
                {...props}
                className={className}>
                {children}
            </div>
        </AccordionItemContext.Provider>
    );
}

function AccordionHeader({
    children,
    className,
    onClick,
    ...props
}: AccordionHeaderProps) {
    const {
        openItem,
        toggleItem,
        icon,
    } = useAccordion();

    const { id } = useAccordionItem();

    const isOpen = openItem === id;

    const renderIcon = () => {
        if (icon === false) {
            return null;
        }

        if (icon === "comparison") {
            return (
                <motion.span
                    animate={{
                        rotate: isOpen ? 90 : 0,
                    }}
                    transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                    }}>
                    <Icon
                        icon={FaChevronRight}
                        size="md"
                    />
                </motion.span>
            );
        }

        return isOpen ? (
            <Icon
                icon={FaMinus}
                size="xs"
                avatar={true}
                variant="light"
                className="bg-primary"
            />
        ) : (
            <Icon
                icon={FaPlus}
                size="xs"
                avatar={true}
                variant="primary"
            />
        );
    };

    return (
        <button
            {...props}
            type="button"
            onClick={(event) => {
                toggleItem(id);
                onClick?.(event);
            }}
            aria-expanded={isOpen}
            className={cn(
                "flex w-full cursor-pointer",
                "items-center justify-between p-4",
                "text-left font-semibold",
                className
            )}>
            {typeof children === "function"
                ? children(isOpen)
                : children}

            {renderIcon()}
        </button>
    );
}

function AccordionBody({
    children,
    className,
    ...props
}: AccordionBodyProps) {
    const { openItem } = useAccordion();
    const { id } = useAccordionItem();

    const isOpen = openItem === id;

    return (
        <AnimatePresence initial={false}>
            {isOpen && (
                <motion.div
                    {...props}
                    initial={{
                        height: 0,
                        opacity: 0,
                    }}
                    animate={{
                        height: "auto",
                        opacity: 1,
                    }}
                    exit={{
                        height: 0,
                        opacity: 0,
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                    }}
                    className="overflow-hidden">
                    <div
                        className={cn(
                            "px-4 pb-4",
                            className
                        )}>
                        {children}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

function AccordionOpen({
    children,
    onClick,
    ...props
}: AccordionActionProps) {
    const { openItemById } = useAccordion();
    const { id } = useAccordionItem();

    return (
        <Button
            variant="ghost"
            size="sm"
            {...props}
            onClick={(event) => {
                openItemById(id);
                onClick?.(event);
            }}>
            {children}
        </Button>
    );
}

function AccordionClose({
    children,
    onClick,
    ...props
}: AccordionActionProps) {
    const { closeItem } = useAccordion();

    return (
        <Button
            variant="ghost"
            size="sm"
            {...props}
            onClick={(event) => {
                closeItem();
                onClick?.(event);
            }}>
            {children}
        </Button>
    );
}

Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Body = AccordionBody;
Accordion.Open = AccordionOpen;
Accordion.Close = AccordionClose;

export default Accordion;
