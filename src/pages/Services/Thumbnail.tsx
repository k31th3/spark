import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "motion/react";
import { IoClose } from "react-icons/io5";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import EmptyImg from "@/assets/placeholderImg.svg?url";

type ThumbnailProps = {
    imageUrl?: string;
};

function Thumbnail({ imageUrl }: ThumbnailProps) {
    const [hasError, setHasError] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    const currentTab = searchParams.get("tab") ?? "0";
    const src = hasError || !imageUrl ? EmptyImg : imageUrl;

    const thumbnail = searchParams.get("thumbnail");
    const open =
        thumbnail !== null &&
        atob(thumbnail) === `open/${currentTab}`;

    const handleOpen = () => {
        if (!imageUrl || hasError) return;

        const params = new URLSearchParams(searchParams);
        params.set("thumbnail", btoa(`open/${currentTab}`));

        setSearchParams(params, {
            replace: false,
        });
    };

	const handleClose = () => {
    	const params = new URLSearchParams(searchParams);

    	params.delete("thumbnail");
    	setSearchParams(params, {
        	replace: false,
    	});
	};

	return (
    	<>
        	<img
    			src={src}
    			alt="Thumbnail"
    			onClick={handleOpen}
    			onError={() => setHasError(true)}
    			onContextMenu={(e) => e.preventDefault()}
    			draggable={false}
    			className="w-full h-[200px] object-cover rounded-xl cursor-pointer"/>

        	{!hasError && imageUrl && (
            <Lightbox
                open={open}
                close={handleClose}
                slides={[{ src }]}
                styles={{
                    	container: {
                        background: "var(--lightbox-bg)",
                    	},
                    	navigationPrev: { display: "none" },
                    	navigationNext: { display: "none" },
                    	button: { display: "none" },
                }}
                animation={{
                    fade: 300,
                }}
                render={{
                    	slide: ({ slide }) => (
                        	<div className="flex h-screen w-screen items-center justify-center box-border sm:p-[50px]">
                            	<img
							src={slide.src}
							alt=""
							className="max-h-full max-w-full object-contain"
                            	/>
                        	</div>
                    	),
                }}
                toolbar={{
                    	buttons: [
                        	<motion.button
						key="close"
						type="button"
						aria-label="Close"
						onClick={handleClose}
						className="lightBoxCloseBtn"
						whileHover={{ scale: 1.04 }}
						whileTap={{ scale: 1 }}
						transition={{
							type: "spring" as const,
							stiffness: 300,
							damping: 10,
						}}>
                            	<IoClose size={20} />
                        	</motion.button>,
                    	],
                }}/>
        	)}
    	</>
	);
}

export default Thumbnail;