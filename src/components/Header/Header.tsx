"use client";

import { Seo, StructuredData } from "@/components";
import { organizationSchema } from "@/config";

export default function Header({title, path, children}) {

    return (
        <>
            <Seo title={`GetSitGo | Spark Info-Tech Enterprise - ${title}`} description="We help businesses grow through innovative IT solutions, including hardware, 
                    networking, cybersecurity, and custom software development. Our team is committed to delivering reliable technology and exceptional 
                    service that supports your success." 
                canonical={`https://www.getsitgo.com/${path}`} />
                
            <StructuredData data={organizationSchema} />
            
            {children}
        </>
    )

}