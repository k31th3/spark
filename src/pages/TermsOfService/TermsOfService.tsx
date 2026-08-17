
"use client";

import { Wrapper, Grid, Image } from "@/components";
import { HeroBackGround } from "@/assets/TermsOfService";
import { Hero, LetsMakeThingsClear, 
        NeedQuickAnswer, ListOfService, AboutTheseTerms } from "./";

function TermsOfService() {

    return <>
        
        <div
            className="absolute inset-0 pointer-events-none -z-0 bg-no-repeat bg-cover"
                style={{
                    backgroundImage: `url(${HeroBackGround})`
                }}
            />
            
        <Wrapper.Mask position="bottom" />

        <Wrapper title="Terms of Service" path="terms-of-service">

            <Wrapper.FullBleed className="relative z-1">

                <Grid className="relative h-auto">
                    <Grid.Item  hide={{ md: true }}>
                        <Wrapper.Body>
                            <Grid.Item span={{ base: 1, lg: 4, md: 5 }}>

                                <Hero />

                            </Grid.Item>
                        </Wrapper.Body>
                        
                        <Wrapper.Mask position="top" />
                                    
                        <Image
                            src={HeroBackGround}
                            alt="section background"
                            className="absolute top-0 left-1/2 h-100 w-fit -translate-x-1/2 -z-0"
                        />

                        <Wrapper.Mask position="bottom" />
                    </Grid.Item>
                </Grid>

                <Wrapper.Body>
                    
                    <Grid.VStack gap={12}>

                        <Grid.Item span={{ base: 1, lg: 4, md: 5 }} hide={{ base: true }} show={{ md: true }}>

                            <Hero />

                        </Grid.Item>

                        <Grid cols={{ base: 1, md: 12 }} gap={{ base: 8, lg: 10 }} >

                            <Grid.Item span={{ base: 1, lg: 4, md: 5 }}>
                                
                                <Grid.VStack gap={2}>
                                    <LetsMakeThingsClear />
                                    <NeedQuickAnswer />
                                </Grid.VStack>

                            </Grid.Item>

                            <Grid.Item span={{ base: 1, lg: 8, md: 7 }}>
                                
                                <ListOfService />

                            </Grid.Item>

                            <Grid.Item span={{ base: 1, lg: 12, md: 12 }}>
                                
                                <AboutTheseTerms />

                            </Grid.Item>

                        </Grid>

                    </Grid.VStack>

                </Wrapper.Body>

            </Wrapper.FullBleed>

        </Wrapper> 
    </>
}

export default TermsOfService;
