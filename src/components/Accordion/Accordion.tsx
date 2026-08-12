import {
    createContext,
    useContext,
    useState,
    type ReactNode,
    type HTMLAttributes,
    type ButtonHTMLAttributes,
} from "react";
import {
    AnimatePresence,
    motion,
    type HTMLMotionProps,
} from "framer-motion";
import { FaMinus, FaPlus } from "react-icons/fa";

import { Icon } from "@/components";
import { cn } from "@/lib/utils";

type AccordionProps = HTMLAttributes<HTMLDivElement> & {
    defaultOpen?: string | null;
};

type AccordionItemProps = HTMLAttributes<HTMLDivElement> & {
    id: string;
};

type AccordionHeaderProps =
    ButtonHTMLAttributes<HTMLButtonElement>;

type AccordionBodyProps = Omit<
    HTMLMotionProps<"div">,
    "children"> & {
    children: ReactNode;
};

type AccordionContextType = {
    openItem: string | null;
    toggleItem: (id: string) => void;
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
    const context = useContext(AccordionItemContext);

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
    className,
    ...props
}: AccordionProps) {
    const [openItem, setOpenItem] = useState<string | null>(
        defaultOpen
    );

    const toggleItem = (id: string) => {
        setOpenItem((current) =>
            current === id ? null : id
        );
    };

    return (
        <AccordionContext.Provider
            value={{
                openItem,
                toggleItem,
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
        <AccordionItemContext.Provider value={{ id }}>
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
    const { openItem, toggleItem } = useAccordion();
    const { id } = useAccordionItem();

    const isOpen = openItem === id;

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

            {children}

            <motion.span
                transition={{
                    duration: 0.2,
                }}>
                {
                    isOpen ? <Icon
                        icon={FaMinus}
                        size="xs"
                        avatar={true}
                        variant="light"
                        className="bg-primary"
                    /> : 
                    <Icon
                        icon={FaPlus}
                        size="xs"
                        avatar={true}
                        variant="primary"
                    />
                }
            </motion.span>
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
                    <div className={cn("pb-4 px-4", className)}>
                        {children}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}


Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Body = AccordionBody;

export default Accordion;
