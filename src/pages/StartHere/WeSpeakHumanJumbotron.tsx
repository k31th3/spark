"use client";

import { FiArrowRight } from "react-icons/fi";
import { Button } from "@/components";

import startHereWeSpeakHumanJumboron from "@/assets/startHereWeSpeakHumanJumboron.png";

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
                                    <Button variant="secondary" size="sm" className="disabled:opacity-100" disabled={true}>
                                        We Speak Human
                                    </Button>    
                                </div>
                                
                                <div>
                                    <p className="bg-[linear-gradient(83.35deg,_#D129DD_5.29%,_#FF8F27_94.71%)]
                                        bg-clip-text text-transparent 
                                        text-[24px] mb-3 leading-none font-semibold">
                                        Technology should be your
                                        <br />
                                        teammate.
                                    </p>
                                    <p className="text-[#000000A3] text-sm font-bold">
                                        So... SIT with us. Tell us what you're building.
                                        <br />
                                        Because every great business starts with 
                                        a <span className="text-black">SPARK!</span>
                                    </p>
                                </div>

                                <div>
                                    <Button variant="gradient" size="md" className="gap-2">
                                        Let's Talk  <FiArrowRight />
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
                                    backgroundImage: `url(${startHereWeSpeakHumanJumboron})`,
                                  }}/>  
                            </div>                              

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

