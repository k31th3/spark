
import { Grid, Icon, 
    Image, Text } from "@/components";

import { LaptopWebp } from "@/assets/WebDevelopment";

import {
  FaMobileAlt
} from "react-icons/fa";

import {
  FiSearch,
  FiShoppingCart,
  FiFileText,
  FiActivity
} from "react-icons/fi";

import type { IconType } from "react-icons";
import { motion, type TargetAndTransition } from "motion/react";

type IconVariant =
    | "primary"
    | "pink"
    | "orange"
    | "warning"
    | "danger";

interface ServiceItem {
    title: string;
    position: string;
    icon: IconType;
    color: IconVariant;
    animate: TargetAndTransition;
    duration: number;
}

const Items: ServiceItem[]  = [
    {
        title: "Responsive",
        position: "left-1/2 top-[10px] -translate-x-1/2",
        icon: FaMobileAlt,
        color: "primary",
        animate: {
            y: [-8, 8, -8]
        },
        duration: 3
    },
    {
        title: "SEO",
        position: "left-[calc(50%-220px)] top-1/2 -translate-y-1/2",
        icon: FiSearch,
        color: "orange",
        animate: {
            x: [-5, 5, -5],
            rotate: [-2, 2, -2]
        },
        duration: 1.8
    },
    {
        title: "E-Commerce",
        position: "left-[calc(50%+150px)] top-1/3 -translate-y-1/2",
        icon: FiShoppingCart,
        color: "pink",
        animate: {
            rotate: [-4, 4, -4],
            x: [-3, 3, -3]
        },
        duration: 2
    },
    {
        title: "CMS",
        position: "left-[calc(50%-155px)] bottom-[20px]",
        icon: FiFileText,
        color: "warning",
        animate: {
            y: [-6, 6, -6],
            rotate: [-3, 3, -3]
        },
        duration: 3.5
    },
    {
        title: "Performance",
        position: "left-[calc(50%+105px)] bottom-[20px]",
        icon: FiActivity,
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

            {/* Center Image */}
            <Image
                src={LaptopWebp}
                alt="Laptop"
                wrapperClassName="bg-transparent"
                className="block h-full w-full object-cover "/>
            
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
                        className="flex flex-col items-center text-center text-gray-800 w-full">
                        <Icon
                            icon={service.icon}
                            variant={service.color}
                            avatar={true}
                            size="lg"/>
                        <Text variant="label" className="text-[12px] font-medium">
                            {service.title}
                        </Text>
                    </motion.div>
                </div>
            ))}
        </Grid.VStack>
    );
}

export default Services;
