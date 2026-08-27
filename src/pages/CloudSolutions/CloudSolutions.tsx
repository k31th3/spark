"use client";

import { Wrapper, Grid } from "@/components";
import { Hero, FeatureHighlights,
    WhatWeOffer, WhyCloud, OurCloudJourney } from  "./";

function CloudSolutions() {

    return (
        <Wrapper title="Cloud Solutions" path="cloud-solutions">

            <Wrapper.FullBleed className="relative">

                <Wrapper.Body>
                    <Grid.VStack gap={12}>

                        <Hero />
                        <FeatureHighlights />
                        <WhatWeOffer />
                        <WhyCloud />
                        <OurCloudJourney />
                        
                    </Grid.VStack>
                </Wrapper.Body>

            </Wrapper.FullBleed>
        </Wrapper>
    );
}

export default CloudSolutions;
