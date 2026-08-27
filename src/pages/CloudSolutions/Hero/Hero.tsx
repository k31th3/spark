import { Grid, Chip, 
    Text, Image } from "@/components";

import { HeroBgWebp } from "@/assets/CloudSolutions";
import HelpButton from  "./HelpButton";

function Hero()
{
    return (
        <Grid cols={{ base: 12 }}>

            <Grid.Item span={{ base: 12 }}>
                <Image
                    src={HeroBgWebp}
                    alt="Hero background"
                    className="absolute -top-40 h-[580px] left-0 w-full object-cover -z-10" />

                <div
                    className="
                        absolute inset-x-0 -top-40 -z-[10]
                        h-[580px] w-full
                        bg-[linear-gradient(to_right,#FFF_0%,rgba(255,255,255,.98)_30%,rgba(255,255,255,.85)_68%,transparent_90%)]
                        sm:bg-[linear-gradient(to_right,#FFF_0%,rgba(255,255,255,.98)_30%,rgba(255,255,255,.45)_58%,transparent_80%)]
                    "/>

                <Chip variant="gradient" size="sm" className="uppercase border-0 
                    shadow-lg shadow-orange-500/50 mb-6">
                    cloud solutions
                </Chip>
 
                <Grid.VStack gap={4}>
                    <Text variant="h2">
                        Elevate Your Business <br />
                        with the Power of <span className="text-gradient">Cloud</span>.
                    </Text>
                    <Text variant="bodySmall" color="muted" className="mb-4 block leading-7 max-w-[400px]">
                        Scalable. Secure. Reliable. Our cloud solutions help you 
                        innovate faster, reduce costs, and stay ahead— 
                        wherever your business takes you.
                    </Text>
                    <HelpButton />
                </Grid.VStack>
            </Grid.Item>

        </Grid>
    )
}

export default Hero;
