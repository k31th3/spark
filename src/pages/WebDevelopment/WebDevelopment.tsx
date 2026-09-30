import { Wrapper, Grid } from "@/components";

import Hero from "./Hero";
import WhatWeBuild from "./WhatWeBuild";
import WhyItMatters from "./WhyItMatters";

function WebDevelopment() {
    return (
        <Wrapper title="Web Development" path="web-development">
            <Wrapper.FullBleed className="relative">
                
                <Wrapper.Background />
                <Wrapper.Body>
                    <Grid.VStack gap={12}>
                        <Hero />
                        <WhatWeBuild />
                        <WhyItMatters />
                    </Grid.VStack>
                </Wrapper.Body>
                
            </Wrapper.FullBleed>
        </Wrapper>
    );
}

export default WebDevelopment;