"use client";

import { Wrapper, Grid } from "@/components";
import { Hero } from  "./";

function Contact() {
    return (
        <Wrapper title="Contact Us" path="contact-us">

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

export default Contact;