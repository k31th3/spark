import React from "react";

import style from "./PageNotFound.module.css";
import error404 from "@/assets/error404.webp";

function PageNotFound() {
    return (
        <>
            <div className="min-h-screen w-full bg-[#FDEAF0]">
                <div className="max-w-2xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                        
                        <div>
                            lorem
                        </div>
                        
                        <div>
                            lorem
                            {/*<img
                                src={error404}
                                alt="Page not Found"
                                fetchPriority="high"
                                decoding="sync"
                                className="absolute inset-0 w-full h-full object-cover object-center"/>*/}
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default PageNotFound;