import { useEffect, useRef, useState } from "react";

import { dashboardPlayVidMp4, dashboardPlayVidVtt } from "@/assets/Dashboard";
import { Text } from "@/components";

export default function AboutUsContent() {

    const videoRef = useRef(null);
    const hideTimerRef = useRef(null);

    const [showControls, setShowControls] = useState(false);
    const [isMuted, setIsMuted] = useState(true);

    useEffect(() => {
        if (videoRef.current?.textTracks.length) {
            videoRef.current.textTracks[0].mode = "hidden";
        }

        return () => {
            if (hideTimerRef.current) {
                clearTimeout(hideTimerRef.current);
            }
        };
    }, []);

    const toggleSound = () => {
        if (!videoRef.current) return;

        const newMutedState = !videoRef.current.muted;

        videoRef.current.muted = newMutedState;
        setIsMuted(newMutedState);

        // Show icon temporarily after click/tap
        setShowControls(true);

        if (hideTimerRef.current) {
            clearTimeout(hideTimerRef.current);
        }

        hideTimerRef.current = setTimeout(() => {
            setShowControls(false);
        }, 1500);
    };

    const handleMouseEnter = () => {
        if (hideTimerRef.current) {
            clearTimeout(hideTimerRef.current);
        }

        setShowControls(true);
    };

    const handleMouseLeave = () => {
        setShowControls(false);
    };

    const messages = [
        <div className="mb-2 font-semibold">
            Technology should feel like talking to your smartest friend…
            <br/>
            …not reading an instruction manual.
        </div>,
        `If you don't know what RAM, DNS, VLAN, or RAID means...`,
        `Good.`,
        `That's what we're here for.`,
        `We'll explain Wi-Fi in a way that actually makes sense.`,
        `We'll answer your "stupid questions" because we don't believe they exist.`,
        `We'll sketch ideas on tissue paper if that's what makes it click.`,
        `Because understanding technology shouldn't require learning another language.
           Around here...`,
        <div className="font-semibold">We don't speak IT.<br />We speak people.</div>,
    ];


    return (
        <>
            <div className="grid grid-cols-1 xl:grid-cols-[550px_1fr] lg:grid-cols-2 gap-4">

                <div className="col-span-1">
                    <div className="rounded-4xl overflow-hidden shadow-lg relative">

                        <div
                            className="group relative w-full aspect-video flex items-center justify-center cursor-pointer"
                            onClick={toggleSound}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}>
                            <video
                                ref={videoRef}
                                autoPlay
                                loop
                                muted={isMuted}
                                playsInline
                                preload="metadata"
                                className="block h-full w-full rounded-t-3xl object-cover object-center bg-transparent">
                                <source
                                    src={dashboardPlayVidMp4}
                                    type="video/mp4"/>

                                <track
                                    kind="captions"
                                    src={dashboardPlayVidVtt}
                                    srcLang="en"
                                    label="English"
                                    default/>

                                Your browser does not support the video tag.
                            </video>

                            {/* Sound indicator */}
                            <div
                                className={`
                                    pointer-events-none
                                    absolute top-1/2 left-1/2
                                    -translate-x-1/2 -translate-y-1/2
                                    bg-black/60 text-white
                                    rounded-full p-3
                                    transition-all duration-200
                                    ${
                                        showControls
                                            ? "opacity-100 scale-100"
                                            : "opacity-0 scale-90"
                                    }`}>
                                {isMuted ? "🔇" : "🔊"}
                            </div>
                        </div>

                    </div>
                </div>

                <div className="col-span-1 pl-4">

                    <Text variant="h3" className="font-bold mb-2">
                        We Speak <span className="text-gradient">Human.</span>
                    </Text>
                    
                    <div className="vstack gap-2">
                    {messages.map((message, index) => (
                        <Text key={index} variant="caption" className="block leading-4 font-normal">
                            {message}
                        </Text>
                    ))}
                    </div>
                </div>

            </div>
        </>
    );
}