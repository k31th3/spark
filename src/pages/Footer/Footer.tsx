"use client";

import { 
    WeSpeakHumanJumbotron,
    Social
} from "./";

export default function Footer() {

    return (
        <>
            <div className="max-w-5xl mx-auto p-4 mb-20 sm:mb-0 vstack gap-15">
                
                <WeSpeakHumanJumbotron />

                {/*Header*/}
                <div className="flex justify-between">
                        
                                        
                    
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