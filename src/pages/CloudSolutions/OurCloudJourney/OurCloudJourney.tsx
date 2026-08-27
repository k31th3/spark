import { Grid, ProgressIndicator, 
    Text, Icon, Card } from "@/components";

import { RiNumber1, RiNumber2, 
    RiNumber3, RiNumber4 } from "react-icons/ri";

const steps = [
    {
        title: "Assess & Plan",
        info: "We evaluate your needs and current environment, then design the right cloud strategy for your business.",
        icon: RiNumber1
    },
    {
        title: "Migrate",
        info: "We migrate your applications and data securely.",
        icon: RiNumber2
    },
    {
        title: "Optimize",
        info: "We fine-tune for performance, security, and cost-efficiency.",
        icon: RiNumber3
    },
    {
        title: "Manage & Support",
        info: "We continuously monitor and support your cloud environment.",
        icon: RiNumber4
    }
];

function OurCloudJourney()
{
    return (
        <Grid cols={{ base: 12 }} gap={8}>
            <Grid.Item span={{ base: 12, lg: 8, md: 10 }} start={{ lg: 3, md: 2 }} className="text-center">
                <Grid.VStack gap={2}>
                    <Grid.HStack gap={2} align="center" justify="center">
                        <Text variant="caption" color="primary" className="uppercase font-bold">
                            our cloud journey
                        </Text>
                        <ProgressIndicator size="xs" />
                    </Grid.HStack>
                    <Text variant="h3" className="font-bold">
                        Your success, Step by step. 
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

export default OurCloudJourney;