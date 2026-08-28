import { Grid, ProgressIndicator, 
    Text, Image, Icon } from "@/components";

import { HeroBgWebp } from "@/assets/ItServices";
import HelpButton from  "./HelpButton";


import { LuActivity, LuZap, LuShieldCheck } from "react-icons/lu";

const features = [
    {
        title: "Proactive",
        subtitle: "Monitoring",
        icon: LuActivity
    },
    {
        title: "Fast",
        subtitle: "Response",
        icon: LuZap
    },
    {
        title: "Secure by",
        subtitle: "Design",
        icon: LuShieldCheck
    }
];

function Hero()
{
    return (
        <Grid cols={{ base: 12 }}>

            <Grid.Item span={{ base: 12 }}>
                <Image
                    src={HeroBgWebp}
                    alt="Hero background"
                    className="absolute -top-40 h-[580px] left-0 w-full object-cover -z-10 rounded-bl-[100%]" />

                <div
                    className="
                        absolute inset-x-0 -top-40 -z-[10]
                        h-[580px] w-full
                        bg-[linear-gradient(to_right,#FFF_0%,rgba(255,255,255,.98)_30%,rgba(255,255,255,.85)_70%,transparent_90%)]
                        sm:bg-[linear-gradient(to_right,#FFF_0%,rgba(255,255,255,.98)_30%,rgba(255,255,255,.45)_58%,transparent_80%)]
                    "/>

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
                    <HelpButton />
                </Grid.VStack>
            </Grid.Item>

            <Grid.Item span={{ base: 12 }}>
                <Grid.HStack gap={2} align="center">
                    {features.map(({ title, subtitle, icon }, index) => (
                        <Grid.HStack key={title} gap={8}>
                            
                            <Grid.HStack gap={4} align="center">
                                
                                <Icon icon={icon} variant="pink" />
                                <Text variant="label">
                                    {title} <br /> <Text variant="label" className="font-medium">{subtitle}</Text>
                                </Text>

                            </Grid.HStack>

                            {index < features.length - 1 && (
                                <div className="h-12 w-[2px] bg-gray-200" />
                            )}
                        </Grid.HStack>
                    ))}
                </Grid.HStack>
            </Grid.Item>

        </Grid>
    )
}

export default Hero;
