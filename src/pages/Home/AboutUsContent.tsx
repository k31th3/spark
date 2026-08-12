import { useEffect, useRef, useState } from "react";

import { PiBriefcaseDuotone } from "react-icons/pi";
import { PiLightbulbFilamentDuotone } from "react-icons/pi";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { PiSparkleDuotone } from "react-icons/pi";

import { dashboardPlayVidMp4, dashboardPlayVidVtt } from "@/assets/Dashboard";

import { Icon, Text } from "@/components";

export default function AboutUsContent() {
    const items = [
        { icon: PiBriefcaseDuotone, label: "Business" },
        { icon: PiLightbulbFilamentDuotone, label: "Ideas" },
        { icon: LiaUserFriendsSolid, label: "Friendship" },
        { icon: PiSparkleDuotone, label: "Possibilities" }
    ];

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

    return (
        <div>
            <div className="rounded-4xl overflow-hidden shadow-sm relative">

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
                            type="video/mp4"
                        />

                        <track
                            kind="captions"
                            src={dashboardPlayVidVtt}
                            srcLang="en"
                            label="English"
                            default
                        />

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
                            }
                        `}>
                        {isMuted ? "🔇" : "🔊"}
                    </div>
                </div>

                <div className="rounded-b-4xl h-[100px] bg-gradient-to-r from-[#FFEBFD] to-[#FFE4D3] p-[16px]">
                    <ul className="hstack gap-3 justify-around items-center h-full">
                        {items.map(({ icon, label }) => (
                            <li
                                key={label}
                                className="flex flex-col items-center sm:text-[14px] text-[12px] gap-2">
                                <Icon icon={icon} size="lg" variant="gradient"/>

                                <Text variant="caption" className="font-semibold">
                                    {label}
                                </Text>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    );
}