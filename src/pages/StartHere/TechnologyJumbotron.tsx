"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { IconGradient } from "@/components";
import { AiOutlineMessage } from "react-icons/ai";

import style from "./StartHere.module.css";

export default function TechnologyJumbotron() {

    const slides = [
        {
            bg: "",
            content: (
                <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center 
                        rounded-full bg-gradient p-[1px]">
                        <div className="flex h-full w-full items-center justify-center 
                            rounded-full bg-white">
                            <IconGradient />
                            <AiOutlineMessage
                              size={16}
                              style={{ fill: "url(#iconGradient)" }}/>
                        </div>
                    </div>

                    <div className="vstack gap-3">
                        <p className="font-semibold text-[20px] leading-none">
                            Technology Shouldn't Be
                            <br />
                            Confusing
                        </p>

                        <div className="text-xs vstack gap-2">
                            <span>
                              If you don't know what RAM, DNS, VLAN, or RAID means...
                            </span>
                            <span>Good.</span>
                            <span>That's exactly why we're here.</span>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            bg: "bg-[#F3E8FF]",
            content: (
                <>
                    <h2 className="font-semibold text-xl mb-3">
                        Technology Made Simple
                    </h2>
                    <p className="text-xs">
                    We explain complex systems in plain language.
                    </p>
                </>
            ),
        },
        {
            bg: "",
            content: (
                <>
                    <h2 className="font-semibold text-xl mb-3">
                        Your IT Partner
                    </h2>

                    <p className="text-xs">
                        Helping businesses understand technology.
                    </p>
                </>
            )
        }
    ];

    return (
        <div className="h-100">
            <div className="absolute left-0 w-full bg-[#FAF5FF]">
                <Swiper
                    modules={[Autoplay, FreeMode]}
                    freeMode={{
                        enabled: true,
                        momentum: false,
                    }}
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 3
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 3
                        }
                    }}
                    speed={10000}
                    className={style.TechSwiper}>
                    
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className={`card h-full p-8 ${slide.bg}`}>
                                {slide.content}
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </div>
    );
}