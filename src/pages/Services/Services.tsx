import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import { Seo, BookCall } from "@/components";
import { tabs } from "./tabs";

import style from "./Services.module.css";

function Services() {
    const swiperRef = useRef<SwiperType | null>(null);

    const getTabFromUrl = () => {
        const params = new URLSearchParams(window.location.search);
        const tab = Number(params.get("tab"));

        return Number.isInteger(tab) && tab >= 0 && tab < tabs.length
            ? tab
            : 0;
    };

    const [active, setActive] = useState(getTabFromUrl);

    const handleTabClick = (index: number) => {
        swiperRef.current?.slideTo(index);
    };

    const handleSlideChange = (swiper: SwiperType) => {
        const index = swiper.activeIndex;

        setActive(index);

        const url = new URL(window.location.href);
        url.searchParams.set("tab", String(index));

        window.history.replaceState({}, "", url);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const renderTabs = () =>
        tabs.map(({ title, icon: Icon }, index) => (
            <button
                key={title}
                type="button"
                className={`${style.sideBarBtn} ${active === index ? "active" : ""}`}
                aria-current={active === index}
                onClick={() => handleTabClick(index)}
            >
                <span>
                    <Icon className="text-lg sm:text-xl" />
                </span>
                <span className="hidden sm:inline text-[9px] md:text-[12px]">{title}</span>
            </button>
        ));

    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;

        const handleScroll = () => {
            setIsScrolling(true);

            clearTimeout(timer);
            timer = setTimeout(() => {
                setIsScrolling(false);
            }, 500);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timer);
        };
    }, []);

    const pageUrl = `${window.location.origin}/services`;

    return (
        <>
        <Seo
            title="Services"
            description="Hardware, Software, Security, and Application Services."
            canonical={pageUrl}/>

        <section className="relative flex flex-col md:flex-row">

            {/* Desktop Sidebar */}
            <nav
                className={`${style.sideBarDesktop} hidden md:flex`}
                aria-label="Service Categories">
              {renderTabs()}
            </nav>

            {/* Mobile RideBar Tabs */}
            <motion.nav
                initial={{ x: 0, opacity: 1 }}
                animate={
                    isScrolling
                      ? { x: 80, opacity: 0 }
                      : { x: 0, opacity: 1 }
                    }
                transition={{
                    duration: 0.35,
                    ease: "easeInOut",
                }}
                className={`${style.sideBarMobile} flex md:hidden`}>
                {renderTabs()}
            </motion.nav>

            {/* Content */}
            <main className="w-full md:pl-[220px] min-w-0 py-3 pb-20 lg:pb-3 flex flex-col gap-5">
                <Swiper
                    className="w-full h-auto"
                    autoHeight={true}
                    modules={[EffectFade]}
                    effect="fade"
                    fadeEffect={{
                        crossFade: true,
                    }}
                    speed={500}
                    allowTouchMove={false}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;

                        const index = getTabFromUrl();

                        swiper.slideTo(index, 0);
                        setActive(index);
                    }}
                    onSlideChange={handleSlideChange}>
                    {tabs.map(({ title, component: Component }) => (
                    <SwiperSlide key={title} className="w-full">
                        <Component />
                    </SwiperSlide>
                ))}
                </Swiper>

                <BookCall />
            </main>
            
        </section>
        </>
    );
}

export default Services;