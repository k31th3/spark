import { Grid, ProgressIndicator, 
    Text, Card, Button } from "@/components";

import SystemStatus from "./SystemStatus";
import SystemLog from "./SystemLog";
import RecentActivity from "./RecentActivity";

function MoreThanMaintenance() 
{
    return (
        <Card className="bg-violet-100 shadow-none py-4">

            <Card.Body>
                <Grid cols={{ base: 12 }} gap={0}>
                    
                    <Grid.Item span={{ base: 12, lg: 6, md: 5 }} className="p-6">
                        <Grid.VStack gap={4}>
                            <Grid.HStack gap={2}>
                                <Text variant="caption" color="primary" className="uppercase font-bold">
                                    more than maintenance 
                                </Text>
                                <ProgressIndicator size="xs" />
                            </Grid.HStack>
                        
                            <Text variant="h3" className="font-bold">
                                We weren't built. <br />
                                to be a <span className="text-gradient">silent supplier</span>. 
                            </Text>

                            <Text variant="label">
                                You deserve more than hearing from us only when something breaks. 
                                We stay involved, communicate clearly, and help you make better 
                                decisions about your technology.
                            </Text>

                            <div>
                                <Button variant="gradient" size="xs" className="rounded-lg"
                                onClick={() => (window.location.href = `/about`)}>
                                    Learn More About Us
                                </Button>
                            </div>
                        </Grid.VStack>
                    </Grid.Item>

                    <Grid.Item span={{ base: 12, lg: 6, md: 7 }}>
                        
                        <Grid cols={{ base: 12 }} gap={2}>
                            <Grid.Item span={{ base: 12 }}>
                                <SystemStatus />
                            </Grid.Item>

                            <Grid.Item span={{ base: 12, lg: 6, md: 6, sm: 6 }}>
                                <SystemLog />
                            </Grid.Item>

                            <Grid.Item span={{ base: 12, lg: 6, md: 6, sm: 6 }}>
                                <RecentActivity />
                            </Grid.Item>
                        </Grid>

                    </Grid.Item>
                </Grid>
            </Card.Body>

        </Card>
    )
}

export default MoreThanMaintenance;
