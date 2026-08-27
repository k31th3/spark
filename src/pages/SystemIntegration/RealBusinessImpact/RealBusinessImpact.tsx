import { Grid, ProgressIndicator, 
    Text, Card, Icon } from "@/components";

import HelpButton from  "./HelpButton";

import {
    FaRocket,
    FaArrowTrendUp,
    FaShieldHalved,
    FaUsers,
} from "react-icons/fa6";

const stats = [
    {
        value: "50+",
        title: "Integration Projects Delivered",
        icon: FaRocket
    },
    {
        value: "35%",
        title: "Average Increase in Operational Efficiency",
        icon: FaArrowTrendUp
    },
    {
        value: "99.9%",
        title: "Data Accuracy Achieved",
        icon: FaShieldHalved
    },
    {
        value: null,
        title: "Happy Clients Across Industries",
        icon: FaUsers
    }
];

function SystemIntegration()
{
    return (
        <Card className="bg-violet-100 shadow-none py-4">

            <Card.Body>
                <Grid cols={{ base: 12 }} gap={0}>
                    
                    <Grid.Item span={{ base: 12, lg: 5, md: 6 }} className="p-6">
                        <Grid.VStack gap={4}>
                            <Grid.HStack gap={2}>
                                <Text variant="caption" color="primary" className="uppercase font-bold">
                                    build to work together 
                                </Text>
                                <ProgressIndicator size="xs" />
                            </Grid.HStack>
                        
                            <Text variant="h3" className="font-bold">
                                Integration That Drives. <br />
                                Real Business <span className="text-gradient">Impact</span>. 
                            </Text>

                            <Text variant="label">
                                When your systems work together,
                                your business works better. We help you eliminate silos, 
                                improve visibility, and make smarter decisions.
                            </Text>

                            <div>
                                <HelpButton />
                            </div>
                        </Grid.VStack>
                    </Grid.Item>

                    <Grid.Item span={{ base: 12, lg: 7, md: 6 }}>
                        <Grid.VStack gap={4} justify="center"  className="h-full">
                        <Card className="rounded-[20px] py-4">
                            <Card.Body>
                            <Grid cols={{ base: 12 }} gap={8}>

                                {stats.map(
                                    ({value, title, icon} , index) => (
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
                                                    className="block leading-4"> {title}
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

export default SystemIntegration;
