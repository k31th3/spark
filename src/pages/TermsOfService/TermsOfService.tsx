"use client";

import { Wrapper } from "@/components";
import { Hero, Terms } from "./";

function TermsOfService() {
    return (
        <Wrapper title="Terms of Service" path="terms-of-service">
            <Hero />
            <Terms />
        </Wrapper>
    );
}

export default TermsOfService;