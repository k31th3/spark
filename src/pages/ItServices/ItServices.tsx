"use client";

import { Wrapper, Grid } from "@/components";
import { Hero, Industries,
    WhySparkItServices, OurCoreItServices,
    Productivity, OurContent } from  "./";

function ItServices() {
    return (
        <Wrapper title="IT Services" path="it-services">

            <Wrapper.FullBleed className="relative">

                <Wrapper.Body>
                    <Grid.VStack gap={12}>

                        <Hero />
                        <Industries />
                        <WhySparkItServices />
                        <OurCoreItServices />
                        <Productivity />
                        <OurContent />

                    </Grid.VStack>
                </Wrapper.Body>

            </Wrapper.FullBleed>
        </Wrapper>
    )
}

export default ItServices;