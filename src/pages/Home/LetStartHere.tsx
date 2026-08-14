"use client";
import React from "react";

import { Text, Chip, Grid,
    Image, Icon, Wrapper } from "@/components";
import { HereGrouping } from "@/assets/StartHere";

import { PiBriefcaseDuotone } from "react-icons/pi";
import { PiLightbulbFilamentDuotone } from "react-icons/pi";
import { AiOutlineMessage } from "react-icons/ai";
import { PiMedalDuotone } from "react-icons/pi";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { PiSparkleDuotone } from "react-icons/pi";


export default function LetStartHere(){

    const items = [
        { icon: PiBriefcaseDuotone, label: "A business" },
        { icon: PiLightbulbFilamentDuotone, label: "A crazy idea" },
        { icon: AiOutlineMessage, label: "A conversation" },
        { icon: PiMedalDuotone, label: "Confidence" },
        { icon: LiaUserFriendsSolid, label: "Friendships" },
        { icon: PiSparkleDuotone, label: "Possibilities" }
    ];

    const paragraphs = [
        [
            "Technology should feel a little more human. That's why SPARK exists.",
        ],
        [
            'Every IT company says they "provide solutions." We\'d rather start things.',
        ],
        [
            "Because that's what a spark is.",
            "Not a fire.",
            "The beginning of one.",
            "A tiny moment that starts something bigger.",
        ],
    ];

	return <>
        <Grid.VStack gap={8}>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full">
                
                {/* Text Content */}
                <div className="w-full lg:w-1/2">
                    
                    <Chip
                        variant="gradient"
                        size="sm"
                        className="uppercase mb-8">
                        our story
                    </Chip>

                    <Text
                        variant="h1"
                        className="lg:text-1xl text-5xl font-bold">
                        Let's Start Here.
                    </Text>

                    <Text
                        variant="h4"
                        className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-wide mb-4">
                        We start <span className="text-gradient">things.</span>
                    </Text>

                    {paragraphs.map((lines, index) => (
                        <Text
                            key={index}
                            variant="caption"
                            className="block font-normal tracking-wide leading-5 mb-4 text-[14px]">
                        {lines.map((line, lineIndex) => (
                            <React.Fragment key={lineIndex}>
                                {line}
                                {lineIndex !== lines.length - 1 && <br />}
                            </React.Fragment>
                        ))}
                      </Text>
                    ))}

                </div>

                {/* Image */}
                <div className="relative w-full max-w-[500px] 
                    overflow-hidden rounded-[24px] shadow-sm">
                    <Image
                        src={HereGrouping}
                        alt="Home"
                        className="block w-full h-auto"/>
                </div>
            </div>

            <Wrapper.FullBleed className="relative bg-pink-50 mt-8">

                <Wrapper.Mask position="top"/>
                
                    <Wrapper.Body className="p-4">
                        
                        <Grid cols={{ base: 3, md: 6 }} gap={{ base: 4 }} >
                        
                            {items.map(({ icon, label }) => (
                                <div
                                    key={label}
                                    className="vstack gap-2 items-center sm:text-[14px] text-[12px] max-sm:mb-4">
                                    <Icon icon={icon} size="md" variant="gradient" className="z-10"/>
                                    <Text variant="caption" className="font-semibold z-10">
                                        {label}
                                    </Text>
                                </div>
                            ))}

                        </Grid>

                    </Wrapper.Body>

            </Wrapper.FullBleed>

        </Grid.VStack>
	</>	
};