"use client";

import { 
    WeSpeakHumanJumbotron,
    Social,
    Company,
    Services,
    NeedHelp
} from "./";

import { Wrapper, Grid } from "@/components";

function Footer() {

    return (
        <>
            <Wrapper.FullBleed className="relative">

                <Wrapper.Body>
                    <Grid.Item>
                        <Grid.VStack gap={12} className="my-12">

                        <WeSpeakHumanJumbotron />

                        {/*navigation link*/}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_2fr_1fr] gap-4">
                                
                            <div className="flex flex-col">
                                <Company />
                            </div>

                            <div className="flex flex-col">
                                <Services />
                            </div>

                            <div className="lg:flex flex-col hidden">
                                <NeedHelp />
                            </div>
                            
                        </div>

                        {/*Bottom*/}
                        <Social />

                        <p className="text-xs font-normal">
                            @2026 The Spark Info-Tech Enterprise. All rights reserved.
                        </p>

                        </Grid.VStack>
                    </Grid.Item>
                </Wrapper.Body>

            </Wrapper.FullBleed>
        </>
    );
}

export default Footer;