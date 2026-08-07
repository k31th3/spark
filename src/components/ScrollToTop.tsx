import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FaArrowUp } from "react-icons/fa6";


import { Button, Icon } from "@/components";

const MotionButton = motion.create(Button);

function ScrollToTop() {
    const [visible, setVisible] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;

        const handleScroll = () => {
            const socialSection = document.getElementById("socialSection");

            let isSocialVisible = false;

            if (socialSection) {
                const rect = socialSection.getBoundingClientRect();
                isSocialVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
            }

            setVisible(window.scrollY > 300 && !isSocialVisible);

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
                      md:-translate-y-1/2 z-50 rounded-full p-0 shadow-[0px_12px_24px_rgba(187,77,192,0.4)]"
                    variant="gradient"
                    size="sm">
                    <Icon icon={FaArrowUp} size="md" avatar={true} variant="light"/>
                </MotionButton>
            )}
        </AnimatePresence>
    );
}

export default ScrollToTop;