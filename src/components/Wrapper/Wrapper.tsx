"use client";

import { useEffect } from "react";
import Lenis from "lenis";

import { cn } from "@/lib/utils";
import { Seo } from "@/components";
import { pageDescriptions } from "@/config";
import site from "@/config/site";

import { Image } from "@/components";
import { DashboardBgWeBp } from "@/assets/Dashboard";

type WrapperProps = {
    title: string;
    path: string;
    children?: React.ReactNode;
};

type WrapperComponentProps = {
    children?: React.ReactNode;
    className?: string;
};

function WrapperSection({
    children,
    className,
}: WrapperComponentProps) {
    return (
        <section className={cn(className)}>
            {children}
        </section>
    );
}

function WrapperBody({
    children,
    className,
}: WrapperComponentProps) {
    return (
        <div className={cn("max-w-5xl mx-auto px-6", className)}>
            {children}
        </div>
    );
}

function WrapperFullBleed({
    children,
    className,
}: WrapperComponentProps) {
    return (
        <div
            className={cn(
                "relative left-1/2 w-screen -translate-x-1/2",
                className
            )}
        >
            {children}
        </div>
    );
}

type WrapperBackgroundProps = {
    className?: string;
    topBlur?: boolean;
    bottomBlur?: boolean;
};

function WrapperBackground({
    className,
    topBlur = true,
    bottomBlur = true,
}: WrapperBackgroundProps) {
    return (
        <>
            <Image
                src={DashboardBgWeBp}
                alt="section background"
                className={cn(
                    "absolute top-0 left-1/2 -z-15 h-[420px] w-fit -translate-x-1/2",
                    className
                )}
            />

            {topBlur && (
                    <div
                        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-white via-white/80 to-transparent "/>
            )}

            {bottomBlur && (
                <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-white/90 to-transparent backdrop-blur-sm" />
            )}
        </>
    );
}

type WrapperMaskProps = {
    position: "top" | "bottom";
    className?: string;
};

function WrapperMask({
    position,
    className,
}: WrapperMaskProps) {
    const isTop = position === "top";

    return (
        <div
            className={cn(
                "absolute w-full h-full left-0 right-0 z-[1] bg-white pointer-events-none",
                isTop ? "top-0" : "bottom-0",
                className
            )}
            style={{
                maskImage: isTop
                    ? "linear-gradient(to bottom, black, transparent)"
                    : "linear-gradient(to top, black, transparent)",
                WebkitMaskImage: isTop
                    ? "linear-gradient(to bottom, black, transparent)"
                    : "linear-gradient(to top, black, transparent)",
            }}
        />
    );
}

function Wrapper({
    title,
    path,
    children,
}: WrapperProps) {
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
            <Seo
                title={`GetSitGo - ${title}`}
                description={pageDescriptions[path] ?? site.description}
                image={`${site.url}/web-app-manifest-512x512.png`}
                canonical={`https://www.getsitgo.com/${path}`}
            />

            {children}
        </>
    );
}

Wrapper.Section = WrapperSection;
Wrapper.Body = WrapperBody;
Wrapper.FullBleed = WrapperFullBleed;
Wrapper.Background = WrapperBackground;
Wrapper.Mask = WrapperMask;

export default Wrapper;