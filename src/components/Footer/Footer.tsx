"use client";

import { 
    SitWithUs,
    Navigation,
    NeedHelp,
    Social
} from "./";

import { Wrapper, Grid, Text } from "@/components";

function Footer() {

    return (
        <>
            <Wrapper.FullBleed className="relative pb-16">

                <Wrapper.Body>
                    <Grid.Item>
                        <Grid.VStack gap={12} className="my-12">

                        <SitWithUs />

                        {/*navigation link*/}
                        <Grid cols={{ base: 1, md: 2, lg: 12 }} gap={4}>
                            <Grid.Item span={{ base: 1, md: 1, lg: 3 }}>
                                <NeedHelp screen="sm" />
                            </Grid.Item>

                            <Grid.Item span={{ base: 1, md: 1, lg: 6 }}>
                                <Navigation />
                            </Grid.Item>

                            <Grid.Item span={{ base: 1, md: 1, lg: 3 }} hide={{ base: true }} show={{ lg:true }}>
                                <NeedHelp screen="lg" />
                            </Grid.Item>
                        </Grid>

                        {/*Bottom*/}
                        <Grid.Item span={{ base: 12 }}>
                            <Social />

                            <Text variant="label">
                                @2026 The Spark Info-Tech Enterprise. All rights reserved.
                            </Text>
                        </Grid.Item>

                        </Grid.VStack>
                    </Grid.Item>
                </Wrapper.Body>

            </Wrapper.FullBleed>
        </>
    );
}

export default Footer;