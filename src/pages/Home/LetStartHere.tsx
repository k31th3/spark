
import React from "react";

import { Text, Chip, 
    Grid, Image } from "@/components";
import { HereGrouping } from "@/assets/StartHere";

export default function LetStartHere(){

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
            "A business.",
            "A crazy idea.",
            "A conversation.",
            "Confidence.",
            "Friendships.",
            "Possibilities."
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
                        We <span className="text-gradient">start</span> things.
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

        </Grid.VStack>
	</>	
};