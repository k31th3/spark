
"use client";

import { Wrapper, Grid} from "@/components";
import { HeroBackGround } from "@/assets/TermsOfService";
import { HeroSection, LetsMakeThingsClear, ListOfService } from "./";

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

            <Wrapper.FullBleed className="relative min-h-screen z-1">

                <Wrapper.Body>
                    
                    <Grid.VStack gap={12}>

                        <HeroSection />

                        <Grid cols={{ base: 1, md: 12 }} gap={{ base: 6, md: 8, lg: 10 }} >

                            <Grid.Item span={{ base: 1, lg: 4, md: 5 }}>
                                
                                <LetsMakeThingsClear />
                            
                            </Grid.Item>

                            <Grid.Item span={{ base: 1, lg: 8, md: 7 }}>
                                
                                <ListOfService />

                            </Grid.Item>

                        </Grid>

                    </Grid.VStack>

                </Wrapper.Body>

            </Wrapper.FullBleed>

        </Wrapper> 
    </>
}

export default TermsOfService;
