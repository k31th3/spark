"use client";

import { Wrapper } from "@/components";
import { Hero, WhatWeOffer, WhyCloud, OurCloudJourney } from "./";

function CloudSolutions() {
    return (
        <Wrapper title="Cloud Solutions" path="cloud-solutions">
            <Hero />
            <WhatWeOffer />
            <WhyCloud />
            <OurCloudJourney />
        </Wrapper>
    );
}

export default CloudSolutions;