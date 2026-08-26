import { Grid, Icon, 
    Text, Card, ProgressIndicator } from "@/components";

import {
  PiScissors,
  PiArrowsClockwise,
  PiChartLineUp,
  PiRocketLaunch
} from "react-icons/pi";

const Items = [
    {
        title: "Technical Support",
        info: "When something isn't working as expected, we'll help investigate and resolve the issue.",
        icon: PiScissors
    },
    {
        title: "Regular Maintenance",
        info: "Updates, improvements, cleanup, and routine checks to help keep your system healthy.",
        icon: PiArrowsClockwise
    },
    {
        title: "Performance Monitoring",
        info: "We help identify potential issues before they become bigger problems.",
        icon: PiChartLineUp
    },
    {
        title: "Continuous Improvements",
        info: "Technology changes. Your business changes too. We help your system adapt.",
        icon: PiRocketLaunch
    }
];

function WeHelpYou() 
{
    return (
        <Grid cols={{ base: 12 }} gap={8}>
            <Grid.Item span={{ base: 12, lg: 8, md: 10 }} start={{ lg: 3, md: 2 }} className="text-center">
                
                <Grid.VStack gap={4}>

                    <Grid.HStack gap={2} align="center" justify="center">
                        <Text variant="caption" className="text-pink-400 uppercase font-semibold">what we help you with </Text>
                        <ProgressIndicator size="xs" />
                    </Grid.HStack>

                    <Text variant="h2">
                        Support When You <span className="text-gradient">Need It</span>. <br />
                        Maintenance Before You <span className="text-gradient">Need It</span>. 
                    </Text>

                    <Text variant="label" color="muted">
                        Good support isn’t just about fixing problems—it’s about preventing them, <br />
                        keeping things updated, and making sure your system continues to work as it should.
                    </Text>

                </Grid.VStack>

            </Grid.Item>

            <Grid.Item span={{ base: 12, lg: 12, md: 8 }} start={{ md: 3 }}>
                <Grid cols={{ base: 12 }} gap={8} className="justify-between">
        
                    {Items.map(
                        ({ title, info, icon }, index) => (
                            <Grid.Item span={{ base: 6, lg: 3 }} key={`WeHelpYou${index}`}>
                                <Card className="h-full">
                                    <Card.Body className="text-center">
                                        <Grid.VStack gap={2} justify="center" align="center">
                                            <Icon icon={icon} size="lg" variant="orange"
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

export default WeHelpYou;