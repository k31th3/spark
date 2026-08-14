"use client";

import { Grid, Image, Wrapper } from "@/components";

import { HomeAskPng } from "@/assets/StartHere";
import { Text } from "@/components";

export default function TextBeforeGoogle() {

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
        <Wrapper.FullBleed className="relative bg-pink-50">
        
            <Wrapper.Body className="p-4">
                            
                <Grid cols={{ base: 1, md: 2 }} gap={{ base: 0 }} >
                    
                    <Wrapper.Mask position="top" />

                    <Grid.Item span={{ base: 1 }} className="z-10">
                        <Text variant="h3" className="font-bold mb-2">
                            We are Who You'll <br/>
                            Text Before You <span className="text-gradient">Google.</span>
                        </Text>

                        <Grid.VStack gap={2}>
                            {messages.map((message, index) => (
                                <Text key={index} variant="caption" className="block leading-4">
                                    {message}
                                </Text>
                            ))}
                        </Grid.VStack>
                    </Grid.Item>    

                    <Grid.Item span={{ base: 1 }} className="z-10">
                        <Image
                            src={HomeAskPng}
                            alt="We'll explain"
                            className="w-full max-w-[500px] object-cover mx-auto"/>
                    </Grid.Item>  
                    
                </Grid>

            </Wrapper.Body>

        </Wrapper.FullBleed>
    );
}