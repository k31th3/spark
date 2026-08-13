"use client";

import { Image } from "@/components";

import { homeAskPng } from "@/assets/Dashboard";
import { Text } from "@/components";

export default function TechnologyJumbotron() {

    const messages = [
        <div className="mb-2 font-semibold">
            The people who get excited about your next move… 
            <br/>
            and remind you to back up your files because... let's be honest... 
            you probably forgot.
        </div>,
        `We're not here to make technology less scary.`,
        `We're here to make it feel easy.`, 
        `Maybe even a little fun.`
    ];

    return (
        <>
        <div className="relative w-screen relative left-1/2 -translate-x-1/2 bg-pink-50 mb-6">

            <div className="max-w-5xl mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    
                    <div className="absolute w-[100%] h-[100%] top-0 left-0 right-0 -z-10 bg-white" 
                    style={{ maskImage: "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))" }} />

                    <div className="col-span-1">
                        <Text variant="h3" className="font-bold mb-2">
                            We are Who You'll <br/>
                            Text Before You <span className="text-gradient">Google.</span>
                        </Text>

                        <div className="vstack gap-2">
                        {messages.map((message, index) => (
                            <Text key={index} variant="caption" className="block leading-4">
                                {message}
                            </Text>
                        ))}
                        </div>

                    </div>

                    <div className="col-span-1 z-10">
                        <Image
                            src={homeAskPng}
                            alt="We'll explain"
                            className="w-full max-w-[500px] object-cover"/>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    );
}