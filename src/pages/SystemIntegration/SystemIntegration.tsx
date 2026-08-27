"use client";

import { Wrapper, Grid } from "@/components";
import { Hero, FeatureHighlights,
    WhatWeIntegrate, OurIntegrationProcess,
    RealBusinessImpact } from  "./";

function SystemIntegration() 
{
    return (
        <Wrapper title="System Integration" path="system-integration">

            <Wrapper.FullBleed className="relative">

                <Wrapper.Body>
                    <Grid.VStack gap={12}>

                        <Hero />
                        <FeatureHighlights />
                        <WhatWeIntegrate />
                        <RealBusinessImpact />
                        <OurIntegrationProcess />

                    </Grid.VStack>
                </Wrapper.Body>

            </Wrapper.FullBleed>
        </Wrapper>
    );
}

export default SystemIntegration;
