"use client";

import { lazy, Suspense, useState } from "react";
import { motion } from "motion/react";

import "yet-another-react-lightbox/styles.css";

import { VscDownload } from "react-icons/vsc";
import { FiDownload } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

import CatalogueFile from "@/assets/catalogue.png";
import style from "./Navigation.module.css";

const Lightbox = lazy(() => import("yet-another-react-lightbox"));

export default function CatalogueButton() {
    const [isOpen, setIsOpen] = useState(false);

    const slides = [{ src: CatalogueFile }];

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    const ToolbarBtn = ({
        onClick,
        children,
        label,
    }: {
        onClick: () => void;
        children: React.ReactNode;
        label: string;
    }) => (
        <motion.button
            type="button"
            aria-label={label}
            onClick={onClick}
            className="toolBarBtn"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 10,
            }}>
            {children}
        </motion.button>
    );

    return (
        <>
            <motion.button
                type="button"
                aria-label="Open Catalogue"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`${style.catalogueBtn} catalogueBtn`}
                onClick={handleOpen}>
                <VscDownload size={16} />
                <span>Catalogue</span>
            </motion.button>

            <Suspense fallback={null}>
                {isOpen && (
                    <Lightbox
                        open={isOpen}
                        close={handleClose}
                        slides={slides}
                        styles={{
                            container: {
                                background: "var(--lightbox-bg)",
                            },
                            toolbar: {
                                gap: "8px",
                            },
                        }}
                        animation={{
                            fade: 300,
                        }}
                        controller={{
                            closeOnEscape: false,
                            touchAction: "none",
                            disableSwipeNavigation: false,
                            focus: false,
                            aria: false,
                        }}
                        carousel={{
                            finite: slides.length <= 1,
                        }}
                        render={{
                            buttonPrev:
                                slides.length <= 1 ? () => null : undefined,
                            buttonNext:
                                slides.length <= 1 ? () => null : undefined,
                        }}
                        toolbar={{
                            buttons: [
                                <ToolbarBtn
                                    key="download"
                                    label="Download Catalogue"
                                    onClick={() => {
                                        const a = document.createElement("a");
                                        a.href = CatalogueFile;
                                        a.download = "";
                                        a.click();
                                    }}>
                                    <FiDownload size={20} />
                                </ToolbarBtn>,

                                <ToolbarBtn
                                    key="close"
                                    label="Close Catalogue"
                                    onClick={handleClose}>
                                    <IoClose size={20} />
                                </ToolbarBtn>,
                            ],
                        }}
                    />
                )}
            </Suspense>
        </>
    );
}