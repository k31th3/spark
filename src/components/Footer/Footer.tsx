"use client";

import { 
    WeSpeakHumanJumbotron,
    Social,
    Company,
    Accordion,
    NeedHelp
} from "./";

import { Wrapper } from "@/components";

function Footer() {

    return (
        <>
            <Wrapper.Body className="vstack gap-12 my-12">

                <WeSpeakHumanJumbotron />

                {/*navigation link*/}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_2fr_1fr] gap-4">
                        
                    <div className="flex flex-col">
                        <Company />
                    </div>

                    <div className="flex flex-col">
                        <Accordion />
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

            </Wrapper.Body>
        </>
    );
}

export default Footer;