"use client";

import { Wrapper } from "@/components";
import { Hero, WhySparkItServices, OurCoreItServices, Productivity, OurContent } from "./";

function ItServices() {
    return (
        <Wrapper title="IT Services" path="it-services">
            <Hero />
            <OurCoreItServices />
            <WhySparkItServices />
            <Productivity />
            <OurContent />
        </Wrapper>
    );
}

export default ItServices;