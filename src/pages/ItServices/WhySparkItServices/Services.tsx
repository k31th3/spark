
import { Grid, Icon, Image } from "@/components";
import { LateNightTechCollabWebp } from "@/assets/ItServices";

import {
    LuServer,
    LuMonitorCheck,
    LuCloud,
    LuShieldCheck,
    LuHeadphones
} from "react-icons/lu";

import { motion } from "motion/react";

const Items = [
    {
        title: "Managed IT",
        position: "left-1/2 top-[10px] -translate-x-1/2",
        icon: LuServer,
        color: "primary",
        animate: {
            y: [-8, 8, -8]
        },
        duration: 3
    },
    {
        title: "System Monitoring",
        position: "left-[calc(50%-190px)] top-1/2 -translate-y-1/2",
        icon: LuMonitorCheck,
        color: "orange",
        animate: {
            x: [-5, 5, -5],
            rotate: [-2, 2, -2]
        },
        duration: 1.8
    },
    {
        title: "Cloud & Infra",
        position: "left-[calc(50%+160px)] top-1/3 -translate-y-1/2",
        icon: LuCloud,
        color: "pink",
        animate: {
            rotate: [-4, 4, -4],
            x: [-3, 3, -3]
        },
        duration: 2
    },
    {
        title: "Cybersecurity",
        position: "left-[calc(50%-155px)] bottom-[20px]",
        icon: LuShieldCheck,
        color: "warning",
        animate: {
            y: [-6, 6, -6],
            rotate: [-3, 3, -3]
        },
        duration: 3.5
    },
    {
        title: "IT Support",
        position: "left-[calc(50%+105px)] bottom-[20px]",
        icon: LuHeadphones,
        color: "danger",
        animate: {
            y: [-7, 7, -7],
            x: [-2, 2, -2]
        },
        duration: 3.2
    }
];

function Services()
{
    return (
        <Grid.VStack gap={2} align="center" justify="center" className="h-full">
            
            {/* Background */}
            <div className="absolute inset-0 -z-10 opacity-40 bg-[radial-gradient(#e9b8ff_1px,transparent_1px)] 
                [background-size:18px_18px]"/>

            {/* Animated White Circle */}
            <motion.div
                animate={{
                    scale: [1, 1.025, 1],
                    boxShadow: [
                        "0 15px 50px rgba(80,40,120,0.10)",
                        "0 20px 65px rgba(80,40,120,0.16)",
                        "0 15px 50px rgba(80,40,120,0.10)"
                    ]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className=" absolute left-1/2 top-1/2 h-[240px] w-[240px] 
                -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"/>

            {/* Center Image */}
            <motion.div
                animate={{
                    scale: [1, 1.015, 1]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="
                    h-[200px] w-[200px]
                    overflow-hidden
                    rounded-full
                    z-10
                    bg-pink-100
                ">
                <Image
                    src={LateNightTechCollabWebp}
                    alt="Late Night Tech Collab"
                    wrapperClassName="h-full w-full"
                    className=" block h-full w-full object-cover object-center "/>
            </motion.div>

            {/* Service Icons */}
            {Items.map((service, index) => (
                <div
                    key={`services${index}`}
                    className={`
                        absolute z-20
                        ${service.position}
                    `}>
                    <motion.div
                        animate={service.animate}
                        transition={{
                            duration: service.duration,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="text-center text-xs font-semibold text-gray-800">
                        <Icon
                            icon={service.icon}
                            variant={service.color}
                            avatar={true}
                        />
                    </motion.div>
                </div>
            ))}
        </Grid.VStack>
    );
}

export default Services;
