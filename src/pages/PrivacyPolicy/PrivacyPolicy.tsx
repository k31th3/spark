"use client";

import { Wrapper } from "@/components";
import { Hero, Policy } from "./";

function PrivacyPolicy() {
    return (
        <Wrapper title="Privacy policy" path="privacy-policy">
            <Hero />
            <Policy />
        </Wrapper>
    );
}

export default PrivacyPolicy;