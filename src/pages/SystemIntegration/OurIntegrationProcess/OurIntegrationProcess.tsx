import { Grid, ProgressIndicator, 
    Text, Icon, Card } from "@/components";

import { RiNumber1, RiNumber2, 
    RiNumber3, RiNumber4 } from "react-icons/ri";

const steps = [
    {
        title: "Understand",
        info: "We learn your business, processes, and systems.",
        icon: RiNumber1
    },
    {
        title: "Plan",
        info: "We design the right integration solution for your needs.",
        icon: RiNumber2
    },
    {
        title: "Integrate",
        info: "We build, connect, and test everything for a seamless fit.",
        icon: RiNumber3
    },
    {
        title: "Support",
        info: "We monitor, optimize, and support for long-term success.",
        icon: RiNumber4
    }
];

function OurIntegrationProcess()
{
    return (
        <Grid cols={{ base: 12 }} gap={8}>
            <Grid.Item span={{ base: 12, lg: 8, md: 10 }} start={{ lg: 3, md: 2 }} className="text-center">
                <Grid.VStack gap={2}>
                    <Grid.HStack gap={2} align="center" justify="center">
                        <Text variant="caption" color="primary" className="uppercase font-bold">
                            our integration process
                        </Text>
                        <ProgressIndicator size="xs" />
                    </Grid.HStack>
                    <Text variant="h3" className="font-bold">
                        Simple Process. <span className="text-gradient">Powerful Result</span>. 
                    </Text>
                </Grid.VStack>
            </Grid.Item>

            <Grid.Item span={{ base: 12, lg: 12, md: 8 }} start={{ md: 3 }}>
                <Grid cols={{ base: 12 }} gap={8} className="justify-between">
        
                    {steps.map(
                        ({ title, info, icon }, index) => (
                            <Grid.Item span={{ base: 6, lg: 3 }} key={`HowSupportWorks${index}`}>
                                <Card className="h-full shadow-none">
                                    <Card.Body className="text-center">
                                        <Grid.VStack gap={2} justify="center" align="center">
                                            <Icon icon={icon} size="md" variant="danger"
                                                 avatar={true} className="mb-2" />
                                            <Text variant="caption" className="font-semibold">
                                               {title} 
                                            </Text>
                                            <Text variant="label" color="muted">
                                               {info} 
                                            </Text>
                                        </Grid.VStack>
                                    </Card.Body>
                                </Card>
                            </Grid.Item>
                        )
                    )}

                </Grid>
            </Grid.Item>

        </Grid>
    )
}

export default OurIntegrationProcess;