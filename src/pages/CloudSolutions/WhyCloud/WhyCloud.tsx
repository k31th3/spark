import { Grid, ProgressIndicator, 
    Text, Card, Icon } from "@/components";

import {
  PiChartLineUpDuotone,
  PiCurrencyDollarDuotone,
  PiRocketLaunchDuotone,
  PiGlobeHemisphereWestDuotone,
} from "react-icons/pi";

const stats = [
    {
        value: "99.9%",
        description: "Reliable and available when you need it.",
        icon: PiChartLineUpDuotone
    },
    {
        value: "30–50%",
        description: "Optimize spending without compromising performance.",
        icon: PiCurrencyDollarDuotone
    },
    {
        value: "2x Faster",
        description: "Deploy and scale solutions faster than ever.",
        icon: PiRocketLaunchDuotone
    },
    {
        value: "Global",
        description: "Access your services and data from anywhere in the world.",
        icon: PiGlobeHemisphereWestDuotone
    }
];

function WhyCloud()
{
    return (
        <Card className="bg-violet-100 shadow-none py-4">

            <Card.Body>
                <Grid cols={{ base: 12 }} gap={0}>
                    
                    <Grid.Item span={{ base: 12, lg: 5, md: 6 }} className="p-6">
                        <Grid.VStack gap={4}>
                            <Grid.HStack gap={2}>
                                <Text variant="caption" color="primary" className="uppercase font-bold">
                                    why cloud?
                                </Text>
                                <ProgressIndicator size="xs" />
                            </Grid.HStack>
                        
                            <Text variant="h3" className="font-bold">
                                Work <span className="text-gradient">Smarter</span>.<br />
                                Move <span className="text-gradient">Faster</span>. 
                            </Text>

                            <Text variant="label">
                                The cloud gives you the agility to adapt, 
                                the power to scale, and the freedom to 
                                innovate without limits.
                            </Text>
                        </Grid.VStack>
                    </Grid.Item>

                    <Grid.Item span={{ base: 12, lg: 7, md: 6 }}>
                        <Grid.VStack gap={4} justify="center"  className="h-full">
                        <Card className="rounded-[20px] py-4">
                            <Card.Body>
                            <Grid cols={{ base: 12 }} gap={8}>

                                {stats.map(
                                    ({value, description, icon} , index) => (
                                        <Grid.Item span={{ base: 6, lg: 3, md: 6 }}
                                                key={`SystemIntegration${index}`}>

                                        <Grid.VStack gap={4} align="center">
                                            <Icon icon={icon} size="lg" variant="gradient" avatar={true} />
                                            <div className="text-center">
                                                <div className="h-[30px]">
                                                    {value && (
                                                        <Text variant="h5" className="font-medium">
                                                            {value}
                                                        </Text>
                                                    )}
                                                </div>
                                                <Text variant="label" color="muted" 
                                                    className="block leading-3"> {description}
                                                </Text>
                                            </div>
                                        </Grid.VStack>

                                        </Grid.Item>

                                    )
                                )}

                            </Grid>                        
                            </Card.Body>
                        </Card>
                        </Grid.VStack>
                    </Grid.Item>
                </Grid>
            </Card.Body>

        </Card>
    )
}

export default WhyCloud;
