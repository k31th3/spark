"use client";

import { IconGradient } from "@/components";
import { AiOutlineMessage } from "react-icons/ai";

import startHereWellExplain from "@/assets/startHereWellExplain.webp";

export default function TechnologyJumbotron() {

    return (
        <>
        <div className="relative w-screen relative left-1/2 -translate-x-1/2 bg-[#FAF5FF] mb-6">

            <div className="max-w-5xl mx-auto">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    
                    <li className="flex justify-center items-center py-8 sm:py-0">
                        <div className="hstack gap-2">
                            <div className="flex h-8 w-8 rounded-full bg-gradient p-[1px] mr-[4px] my-[4px]">
                                <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                                    <IconGradient />
                                    <AiOutlineMessage
                                        size={16}
                                        style={{ fill: "url(#iconGradient)" }}/>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <p className="text-xl font-semibold leading-tight">
                                    Technology Shouldn't Be
                                    <br />
                                Confusing
                                </p>

                                <div className="flex flex-col gap-2 text-xs">
                                    <span>
                                        If you don't know what RAM, DNS, VLAN, or RAID means...
                                    </span>
                                    <span>Good.</span>
                                    <span>That's exactly why we're here.</span>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="flex items-center justify-center">
                        <img
                            src={startHereWellExplain}
                            alt="We'll explain"
                            loading="lazy"
                            fetchPriority="high"
                            decoding="sync"
                            className="w-full max-w-[360px] object-cover"
                            onContextMenu={(e) => e.preventDefault()}/>
                    </li>
                    
                </ul>
            </div>
        </div>
        </>
    );
}