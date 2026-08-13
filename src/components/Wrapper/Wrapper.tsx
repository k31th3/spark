"use client";

import { useEffect } from "react";
import Lenis from "lenis";

import { Seo, StructuredData } from "@/components";
import { organizationSchema } from "@/config";

type WrapperProps = {
    title: string;
    path: string;
    children?: React.ReactNode;
};

export default function Wrapper({title, path, children}:WrapperProps) {

    // const { scrollYProgress } = useScroll();

    useEffect(() => {
        const lenis = new Lenis({
            smoothWheel: true,
            syncTouch: false,
        });

        let frameId: number;

        const raf = (time: number) => {
            lenis.raf(time);
            frameId = requestAnimationFrame(raf);
        };

        frameId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(frameId);
            lenis.destroy();
        };
    }, []);
    
    return (
        <>
            <Seo title={`GetSitGo - ${title}`} description="SPARK Info-Tech Enterprise helps businesses start, simplify, and grow through technology that feels human.
                At SPARK, we're more than an IT provider—we're a technology partner that helps businesses improve operations and confidently embrace digital transformation. Whether you're starting a new business or scaling an existing one, we solve real problems and grow alongside our clients.
                SPARK can be contacted through its website at https://getsitgo.com." 
                canonical={`https://www.getsitgo.com/${path}`} />
                
            <StructuredData data={organizationSchema} />
            
            {/*<motion.div
                className="fixed top-0 left-0 right-0 z-[9999] h-1 origin-left bg-primary"
                style={{ scaleX: scrollYProgress }}
            />*/}

            {children}
        </>
    )

}