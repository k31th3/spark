"use client";

import { Image } from "@/components";
import { AiOutlineMessage } from "react-icons/ai";

import startHereWellExplain from "@/assets/startHereWellExplain.webp";

import { Text } from "@/components";

export default function TechnologyJumbotron() {

    return (
        <>
        <div className="relative w-screen relative left-1/2 -translate-x-1/2 bg-[#FAF5FF] mb-6">

            <div className="max-w-5xl mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    
                    <div className="flex justify-center items-center">
                        <div className="hstack gap-4">
                            <div className="flex h-8 w-8 rounded-full bg-gradient p-[2px]">
                                <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                                    <AiOutlineMessage
                                        size={16}
                                        style={{ fill: "url(#iconGradient)" }}/>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <Text variant="h6">
                                    Technology Shouldn't Be
                                    <br />
                                    Confusing
                                </Text>

                                <div className="flex flex-col gap-2 text-xs">
                                    <Text variant="caption">
                                        If you don't know what RAM, DNS, VLAN, or RAID means...
                                    <br />
                                    Good.<br />
                                    That's exactly why we're here.</Text>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <Image
                            src={startHereWellExplain}
                            alt="We'll explain"
                            className="w-full max-w-[360px] object-cover"/>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    );
}