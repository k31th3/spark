"use client";

import { FiArrowRight } from "react-icons/fi";
import { Button, Icon, Text } from "@/components";
import { WeSpeakHumanJumboron } from "@/assets/StartHere";

export default function WeSpeakHumanJumbotron() {
    return (
        <>
            <div>
                <div className="relative rounded-4xl px-8 py-12 bg-[linear-gradient(90deg,_#FFEBFD_0%,_#FFE4D3_100%)]
                    overflow-hidden">
                    <div className="vstack gap-6">

                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-0">
                            
                            <div className="vstack gap-6 z-1">
                                
                                <div>
                                    <Text variant="h3" className="font-semibold">
                                        So... <span className="text-primary font-bold">SIT</span> with us. 
                                    </Text>
                                    <Text variant="caption" className="text-[#000000A3] text-sm font-medium">
                                        Tell us what you're building.
                                        <br />
                                        Because every great business starts with 
                                        a <span className="text-primary font-semibold">SPARK!</span>
                                    </Text>
                                </div>

                                <div>
                                    <Button variant="gradient" size="md" className="gap-2"
                                    onClick={() => window.location.href = `mailto:${import.meta.env.VITE_CONTACT_EMAIL}`}>
                                        Let's Talk  <Icon icon={FiArrowRight} variant="light"/>
                                    </Button>
                                </div>

                            </div>

                            <div>
                                <div
                                    className="absolute inset-0 pointer-events-none z-0 bg-no-repeat 
                                            md:opacity-100 opacity-70
                                            bg-[position:right_-80px_top_-50px] bg-[length:55%]
                                            md:bg-[position:right_-70px_center] md:bg-[length:55%]"
                                  style={{
                                    backgroundImage: `url(${WeSpeakHumanJumboron})`,
                                  }}/>  
                            </div>                              

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

