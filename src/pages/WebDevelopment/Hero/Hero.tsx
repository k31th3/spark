
import { Grid, Text, Chip, Image } from "@/components";
import HelpButton from "./HelpButton";
import FeatureHighlights from "./FeatureHighlights";

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
                    className="absolute -top-40 h-[580px] right-0 object-cover -z-10 rounded-bl-[100%] blur-md sm:blur-none" />
                
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
                        We Build Websites <br />
                        That <span className="text-primary">Work</span> <br /> 
                        Experiences That <span className="text-gradient">Connect</span>
                    </Text>
                    <Text variant="bodySmall" className="mb-4 block leading-6 max-w-[400px]">
                        Modern websites and web applications that are fast,
                        secure, responsive and build to help your business grow online.
                    </Text>

                    <div className="hidden sm:flex mb-4">
                        <Grid.HStack gap={2}>
                            <HelpButton />
                        </Grid.HStack>
                    </div>

                    <div className="sm:hidden mb-4">
                        <Grid.VStack gap={2}>
                            <HelpButton />
                        </Grid.VStack>
                    </div>

                    <FeatureHighlights />
                </Grid.VStack>
            </Grid.Item>
        </Grid>
    );
}

export default Hero;