
import { Grid, Chip, 
    Text, Card } from "@/components";

import HelpButton from  "./HelpButton";
import ServicesHighlights from  "./ServicesHighlights";
import WeHelpYou from  "./WeHelpYou";

function Hero() 
{
    return (
        <Grid cols={{ base: 12 }}>
            <Grid.Item span={{ base: 12, lg: 8, md: 10 }} start={{ lg: 3, md: 2 }} className="text-center">
                
                <Grid.VStack gap={4}>

                    <div>
                        <Chip variant="gradient" size="sm" className="border-0 shadow-lg shadow-orange-500/50">
                            Support and Maintenance
                        </Chip>
                    </div>

                    <Text variant="h2">
                        Keep Your Technology Running Without the <span className="text-gradient">Worry</span>. 
                    </Text>

                    <Text variant="label">
                        From everyday maintenance to unexpected technical issues, <br />
                        we provide to support you need to keep your systems running smoothly. 
                    </Text>

                    <HelpButton />

                </Grid.VStack>

            </Grid.Item>

            <Grid.Item span={{ base: 12, lg: 10, md: 10 }} start={{ lg: 2, md: 2 }}>

                <Card className="shadow-lg shadow-pink-500/10 p-5">
                    <Card.Body>
                    
                        <ServicesHighlights />

                    </Card.Body> 
                </Card>

            </Grid.Item>

            <Grid.Item span={{ base: 12 }}>

                <WeHelpYou />

            </Grid.Item>
        </Grid>
    );
}

export default Hero;
