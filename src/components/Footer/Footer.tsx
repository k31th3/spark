"use client";

import { 
    WeSpeakHumanJumbotron,
    Social,
    Company,
    Accordion,
    NeedHelp
} from "./";

function Footer() {

    return (
        <>
            <div className="max-w-5xl mx-auto p-4 mb-20 sm:mb-0 vstack gap-15">
                
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

            </div>
        </>
    );
}

export default Footer;