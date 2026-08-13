
import { Text, Chip, Image, Icon } from "@/components";
import startHereGrouping from "@/assets/startHereGrouping.webp";

import { PiBriefcaseDuotone } from "react-icons/pi";
import { PiLightbulbFilamentDuotone } from "react-icons/pi";
import { AiTwotoneMessage } from "react-icons/ai";
import { PiMedalDuotone } from "react-icons/pi";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { PiSparkleDuotone } from "react-icons/pi";

export default function StartHere(){

    const items = [
        { icon: PiBriefcaseDuotone, label: "A business" },
        { icon: PiLightbulbFilamentDuotone, label: "A crazy idea" },
        { icon: AiTwotoneMessage, label: "A conversation" },
        { icon: PiMedalDuotone, label: "Confidence" },
        { icon: LiaUserFriendsSolid, label: "Friendships" },
        { icon: PiSparkleDuotone, label: "Possibilities" }
    ];

	return <>
        <div className="vstack max-md:gap-8">
    		
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-16 w-full z-10">
                
                {/* Text Content */}
                <div className="w-full lg:w-1/2">
                    <div className="mb-8">
                        <Chip
                            variant="gradient"
                            size="sm"
                            className="uppercase">
                            our story
                        </Chip>
                    </div>

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

                    <Text
                        variant="caption"
                        className="block font-normal tracking-wide leading-5 mb-4 text-[14px]">
                        Technology should feel a little more human.
                        That's why SPARK exists. 
                    </Text>

                    <Text
                        variant="caption"
                        className="block font-normal tracking-wide leading-5 mb-4 text-[14px]">
                        Every IT company says
                        they "provide solutions." We'd rather start things.   
                    </Text>

                    <Text
                        variant="caption"
                        className="block font-normal tracking-wide leading-5 mb-4 text-[14px]">
                        Because that's what a spark is. <br />
                        Not a fire. <br />
                        The beginning of one. <br />
                        A tiny moment that starts something bigger.
                    </Text>

                </div>

                {/* Image */}
                <div className="relative w-full max-w-[500px] 
                    overflow-hidden rounded-[24px] shadow-sm">
                    <Image
                        src={startHereGrouping}
                        alt="Home"
                        className="block w-full h-auto"/>
                </div>
            </div>

            <div className="mb-2 relative w-screen left-1/2 -translate-x-1/2 bg-pink-50 -z-10">

                <div className="absolute w-[100%] h-[100%] top-0 left-0 right-0 z-10 bg-white" 
                    style={{ maskImage: "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))" }} />

                <div className="max-w-5xl mx-auto p-4">
                    
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 justify-around items-center h-full">
                        {items.map(({ icon, label }) => (
                            <div
                                key={label}
                                className="flex flex-col items-center sm:text-[14px] text-[12px] gap-2 max-sm:mb-4">
                                <Icon icon={icon} size="md" variant="gradient" className="z-10"/>

                                <Text variant="caption" className="font-semibold z-10">
                                    {label}
                                </Text>
                            </div>
                        ))}
                    </div>

                </div>

            </div>

        </div>
	</>	
};