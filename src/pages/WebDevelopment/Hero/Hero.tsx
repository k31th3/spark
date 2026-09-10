import { FiArrowRight } from "react-icons/fi";
import { BiMessageSquareDots } from "react-icons/bi";

import { Grid, Text, Chip, Button, Icon, Image } from "@/components";
import HelpButton from "./HelpButton";

import { HeroBgWebp } from "@/assets/WebDevelopment";

function Hero() {
    return (
        <Grid cols={{ base: 12 }}>
            <Grid.Item span={{ base: 12 }}>

                <Image
                    src={HeroBgWebp}
                    alt="Hero background"
                    loading="eager"
                    fetchPriority="high"
                    className="absolute -top-40 h-[580px] right-0 object-cover -z-10 rounded-bl-[100%]" />
                
                <div
                    className="
                        absolute inset-x-0 -top-40 -z-[10]
                        h-[580px] w-full
                        bg-[linear-gradient(to_right,#FFF_0%,rgba(255,255,255,.98)_30%,rgba(255,255,255,.85)_70%,transparent_90%)]
                        sm:bg-[linear-gradient(to_right,#FFF_0%,rgba(255,255,255,.98)_30%,rgba(255,255,255,.45)_58%,transparent_80%)]
                    "/>

                <Chip variant="gradient" size="sm" className="uppercase border-0 shadow-lg shadow-orange-500/50 mb-6">
                    web development
                </Chip>

                <Grid.VStack gap={4}>
                    <Text variant="h1" className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-4xl">
                        Websites That Work <br />
                        as Hard as <span className="text-gradient">You Do</span>.
                    </Text>
                    <Text variant="bodySmall" className="mb-4 block leading-6 max-w-[400px]">
                        We design and build fast, secure, and SEO-ready websites and
                        web applications that help your business grow online.
                    </Text>
                    <HelpButton />
                </Grid.VStack>
            </Grid.Item>
        </Grid>
    );
}

export default Hero;