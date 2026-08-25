"use client";

import { Wrapper, Grid } from "@/components";
import { Hero } from  "./";

function SupportAndMaintenance() 
{
    return (
        <Wrapper title="Support and Maintenance" path="support-and-maintenance">
            <Wrapper.Background/>

            <Wrapper.FullBleed className="relative">

                <Wrapper.Body>
                    <Grid.VStack gap={12}>
                        <Hero />
                    </Grid.VStack>
                </Wrapper.Body>

            </Wrapper.FullBleed>
        </Wrapper>
    );
}

export default SupportAndMaintenance;
