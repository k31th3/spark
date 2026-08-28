"use client";

import { Wrapper, Grid } from "@/components";
import { Hero } from  "./";

function ItServices() {
    return (
        <Wrapper title="IT Services" path="it-services">

            <Wrapper.FullBleed className="relative">

                <Wrapper.Body>
                    <Grid.VStack gap={12}>

                        <Hero />

                    </Grid.VStack>
                </Wrapper.Body>

            </Wrapper.FullBleed>
        </Wrapper>
        )
}

export default ItServices;