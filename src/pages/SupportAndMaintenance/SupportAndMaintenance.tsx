"use client";

import { Wrapper } from "@/components";
import { Hero, WeHelpYou, MoreThanMaintenance, HowSupportWorks } from "./";

function SupportAndMaintenance() {
    return (
        <Wrapper title="Support and Maintenance" path="support-and-maintenance">
            <Hero />
            <WeHelpYou />
            <MoreThanMaintenance />
            <HowSupportWorks />
        </Wrapper>
    );
}

export default SupportAndMaintenance;