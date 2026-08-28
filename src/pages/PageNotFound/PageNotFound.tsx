"use client";
import { PiHouseBold } from "react-icons/pi";
import { SlCompass } from "react-icons/sl";

import { Wrapper, Grid, Chip, Button,
    Text, Image, ProgressIndicator, Icon } from "@/components";

import { Error404WeBp } from "@/assets/Error";

const buttons = [
    {
        id: "support",
        label: "Go to Homepage",
        variant: "primary" as const,
        icon: PiHouseBold,
        iconVariant: "light",
        className: "gap-1 justify-center rounded-lg",
        href: "/"
    },
    {
        id: "team",
        label: "Explore Services",
        variant: "outline" as const,
        icon: SlCompass,
        className: "gap-1 justify-center bg-white rounded-lg",
        href: "/services?tab=0"
    }
];

function PageNotFound() {
    return (
        <Wrapper title="Page Not Found" path="">

            <Wrapper.FullBleed className="relative min-h-[100vh] overflow-hidden">

                <Wrapper.Body>
                    <Grid cols={{ base: 12 }}>
                        <Grid.Item span={{ base: 12 }} className="flex min-h-[100dvh] flex-col justify-center">
                            <Image
                                src={Error404WeBp}
                                alt="Hero background"
                                className="absolute h-full top-0 left-0 w-full object-cover -z-10" />

                            <div
                                className="
                                    absolute inset-x-0 -z-[10] w-full h-full
                                    bg-[linear-gradient(to_right,#FFF_0%,rgba(255,255,255,.98)_30%,rgba(255,255,255,.85)_68%,transparent_90%)]
                                    sm:bg-[linear-gradient(to_right,#FFF_0%,rgba(255,255,255,.98)_30%,rgba(255,255,255,.45)_58%,transparent_80%)]
                                "/>

                            <Chip variant="gradient" size="sm" className="uppercase border-0 
                                shadow-lg shadow-orange-500/50 mb-6">
                                spark
                            </Chip>
             
                            <Grid.VStack gap={4}>
                                <Text variant="h1" className="sm:text-5xl lg:text-8xl">
                                    404
                                    <ProgressIndicator size="md" />
                                </Text>
                                <Text variant="h2">
                                    Looks like you're <br />
                                    off the beaten <span className="text-gradient">path</span>.
                                </Text>
                                <Text variant="bodySmall" className="mb-4 block leading-7 max-w-[400px]">                                    
                                    The page you're looking for doesn't exist
                                    or may have been moved.
                                    Let's get you back on track!
                                </Text>
                            </Grid.VStack>

                            <Grid.HStack gap={2}>

                                {buttons.map(
                                    ({ id, label, variant, icon, iconVariant, className, href }) => (
                                        <Button
                                            key={id}
                                            variant={variant}
                                            size="sm"
                                            onClick={() => window.location.href = href}
                                            className={className}>
                                            <Icon icon={icon} size="sm" variant={iconVariant} />
                                            {label}
                                        </Button>
                                    )
                                )}

                            </Grid.HStack>
                        </Grid.Item>
                    </Grid> 
                </Wrapper.Body>

            </Wrapper.FullBleed>
        </Wrapper>
    )
}

export default PageNotFound;