"use client";

import { NavLink } from "react-router-dom";
import { motion } from "motion/react";
import { Button } from "@/components";

import startHereSpark from "@/assets/startHereSpark.svg";

export default function Footer() {

    const items = [
        {
            name: "Services",
            path: "/services",
        },
        {
            name: "Let's Start Here",
            path: "/startHere",
        }
    ];

    const variants = {
        hidden: {
            opacity: 0,
            y: -20
        },
        visible: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: index * 0.1,
                duration: 0.4
            },
        }),
    };

    const animation = {
        whileTap: { scale: 1.04 },
        transition: {
            type: "spring" as const,
            stiffness: 300,
            damping: 10
        },
    };

    return (
        <>
            <div>
                
                {/*Header*/}
                <div className="flex justify-between mb-28">
                        
                    <div>
                        <p className="text-xl font-semibold">
                           The Spark Info-Tech Enterprise 
                        </p>
                        <span className="text-sm text-[#6E7884] font-normal">
                            lorem ipsum dolor sit amet consecteur
                        </span>
                    </div>

                    <ul className="vstack gap-4 text-end sm:text-[16px] text-sm">
                        {items.map((item, index) => (
                            <motion.li
                                key={item.name}
                                variants={variants}
                                initial="hidden"
                                animate="visible"
                                {...animation}
                                custom={index}>
                                <NavLink to={item.path}>
                                    {item.name}
                                </NavLink>
                            </motion.li>
                        ))}
                        <li>
                            <Button variant="ghost" 
                                className="hover:bg-gray-0 h-0 p-0 font-normal sm:text-[16px] text-sm"
                                onClick={() => {
                                    document.querySelector(".catalogueBtn")?.dispatchEvent(
                                        new MouseEvent("click", { bubbles: true })
                                    );
                                }}>
                                Catalogue
                            </Button>
                        </li>
                    </ul>

                </div>

                {/*Footer*/}

                <div>
                    <img
                        src={startHereSpark}
                        alt="Spark vector"
                        loading="lazy"
                        fetchPriority="high"
                        decoding="sync"
                        className="w-full object-cover"
                        onContextMenu={(e) => e.preventDefault()}/>

                    <ul className="flex md:flex-row flex-col justify-between text-sm font-normal">
                        <li>
                            ©2026 The Spark Info-Tech Enterprise. All rights reserved.
                        </li>
                        <li>
                            Terms & Conditions
                        </li>
                        <li>
                            Privacy Policy
                        </li>
                    </ul>
                </div>

            </div>
        </>
    );
}