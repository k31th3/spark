import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FaChevronUp } from "react-icons/fa";

import { Button } from "@/components";

const MotionButton = motion.create(Button);

function ScrollToTop() {
    const [visible, setVisible] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
        setVisible(window.scrollY > 300);

        setIsScrolling(true);

        clearTimeout(timer);
        timer = setTimeout(() => {
            setIsScrolling(false);
        }, 500);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timer);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {visible && (
                <MotionButton
                    initial={{ x: 80, opacity: 0 }}
                    animate={
                        isScrolling
                            ? { x: 80, opacity: 0 }
                            : { x: 0, opacity: 1 }
                        }
                    exit={{ x: 80, opacity: 0 }}
                    transition={{
                        duration: 0.35,
                        ease: "easeInOut",
                    }}
                    onClick={scrollToTop}
                    className="fixed bottom-20 right-4 md:top-1/2 md:bottom-auto 
                      md:-translate-y-1/2 z-50 rounded-full h-10 w-10"
                    variant="gradient"
                    size="sm">
                <FaChevronUp size={24}/>
                </MotionButton>
            )}
        </AnimatePresence>
    );
}

export default ScrollToTop;