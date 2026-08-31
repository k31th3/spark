import { Grid, ProgressIndicator, 
    Text, Image, Icon } from "@/components";

import { HeroBgWebp } from "@/assets/ContactUs";


function Hero()
{
    return (
        <Grid cols={{ base: 12 }}>

            <Grid.Item span={{ base: 12 }}>
                <Text variant="h6" color="primary" className="uppercase mb-6 font-bold">
                    it services
                    <ProgressIndicator size="sm" />
                </Text>

                <Grid.VStack gap={4}>
                    <Text variant="h2">
                        Technology That <span className="text-primary">Works</span>. <br />
                        <span className="text-gradient">Support</span> That <span className="text-gradient">Cares</span>.
                    </Text>
                    <Text variant="bodySmall" className="mb-4 block leading-6 max-w-[400px]">                   
                        Reliable, secure, and scalable IT services that keep your
                        business running smoothly-so you can focus on what matters.
                    </Text>
                </Grid.VStack>
            </Grid.Item>

        </Grid>
    )
}

export default Hero;
