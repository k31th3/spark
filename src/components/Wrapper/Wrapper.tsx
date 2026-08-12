"use client";

import { Seo, StructuredData } from "@/components";
import { organizationSchema } from "@/config";

type WrapperProps = {
    title: string;
    path: string;
    children?: React.ReactNode;
};

export default function Wrapper({title, path, children}:WrapperProps) {

    return (
        <>
            <Seo title={`GetSitGo | Spark Info-Tech Enterprise - ${title}`} description="SPARK Info-Tech Enterprise helps businesses start, simplify, and grow through technology that feels human.
                At SPARK, we're more than an IT provider—we're a technology partner that helps businesses improve operations and confidently embrace digital transformation. Whether you're starting a new business or scaling an existing one, we solve real problems and grow alongside our clients.
                SPARK can be contacted through its website at https://getsitgo.com." 
                canonical={`https://www.getsitgo.com/${path}`} />
                
            <StructuredData data={organizationSchema} />
            
            {children}
        </>
    )

}