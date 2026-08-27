
import { Grid, Icon, 
    Text, Card, ProgressIndicator } from "@/components";

import { Contents } from "./Contents";

function WhatWeOffer() 
{
    return (
        <Grid cols={{ base: 12 }} gap={8}>
            
            <Grid.Item span={{ base: 12, lg: 4, md: 5 }}>
                <Grid.VStack gap={2} justify="center" className="h-full">
                    <Grid.HStack gap={2} align="center">
                        <Text variant="caption" color="primary" className="uppercase font-bold">
                            what we offer 
                        </Text>
                        <ProgressIndicator size="xs" />
                    </Grid.HStack>
                    <Text variant="h3" className="font-bold mb-2">
                        Cloud Solutions <br /> 
                        Built for Your Business
                    </Text>
                    <Text variant="label" >
                        From migration to management, we deliver end-to-end 
                        cloud services tailored to help your business grow
                        with confidence.
                    </Text>
                </Grid.VStack>
            </Grid.Item>

            <Grid.Item span={{ base: 12, lg: 8, md: 7 }} >
                <Grid cols={{ base: 12 }} gap={4}>
                    {Contents.map(
                    ({ icon, title, description }, index) => (
                        <Grid.Item span={{ base: 6, lg: 4, md: 6 }} key={`WhatWeIntegrate${index}`}>
                            <Card className="h-full shadow-md">
                                <Card.Body>
                                    <Grid.VStack gap={2} align="center" justify="center">
                                        <Icon icon={icon} size="md" variant="gradient" avatar={true} className="mb-2" />
                                        <Text variant="caption" className="font-semibold text-center">
                                           {title} 
                                        </Text>
                                        <Text variant="label" color="muted" className="text-center">
                                           {description} 
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
    );
}

export default WhatWeOffer;