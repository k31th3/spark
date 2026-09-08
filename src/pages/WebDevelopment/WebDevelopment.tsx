import { Wrapper, Grid, BookCall } from "@/components";

import Hero from "./Hero";
import WhatWeBuild from "./WhatWeBuild";

function WebDevelopment() {
    return (
        <Wrapper title="Web Development" path="web-development">
            <Wrapper.FullBleed className="relative">
                <Wrapper.Background />

                <Wrapper.Body>
                    <Grid.VStack gap={12}>
                        <Hero />
                        <WhatWeBuild />
                        <BookCall />
                    </Grid.VStack>
                </Wrapper.Body>
            </Wrapper.FullBleed>
        </Wrapper>
    );
}

export default WebDevelopment;