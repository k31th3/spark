
"use client";

import { useState } from "react";
import { motion } from "motion/react";

import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";

import "yet-another-react-lightbox/styles.css";

import { BiRightArrow } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

import DashboardPlayVid from "@/assets/dashboardPlayVid.mp4";

export default function PlayVid() {

	const slides = [
		  	{
		    type: "video" as const,
		    autoPlay: true,
		    controlsList: "nodownload",
		    sources: [
		      		{
		        		src: DashboardPlayVid,
		        		type: "video/mp4"
		      		}
		    	]
		  	}
		];

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const ToolbarBtn = ({ onClick, children, label }) => (
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
                damping: 10
            }}>
            {children}
        </motion.button>
    );

	return <>
        <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full max-w-200 aspect-video bg-white 
			rounded-[40px] flex items-center justify-center cursor-pointer"
                onClick={handleOpen}>
                <div className="w-12 h-12 rounded-full bg-[#F3F4F4] flex items-center justify-center">
				    <BiRightArrow className="text-1xl text-black" />
				</div>
        </motion.button>

        {isOpen && (
            <Lightbox
                open={isOpen}
                close={handleClose}
                slides={slides}
                plugins={[Video]}
                styles={{
                    container: {
                        background: "var(--lightbox-bg)",
                    },
                    toolbar: { gap: "8px" },
                }}
                animation={{
                    fade: 300
                }}
                controller={{
                    closeOnEscape: false,
                    touchAction: "none",
                    disableSwipeNavigation: false,
                    focus: false,
                    aria: false
                }}
                carousel={{ finite: slides.length <= 1 }}
                render={{
                    buttonPrev: slides.length <= 1 ? () => null : undefined,
                    buttonNext: slides.length <= 1 ? () => null : undefined,
                }}
                toolbar={{
                    buttons: [
                        <ToolbarBtn
                            key="close"
                            label="Close"
                            onClick={handleClose}>
                            <IoClose size={20} />
                        </ToolbarBtn>
                    ],
                }}/>
        )}
	</>;

}