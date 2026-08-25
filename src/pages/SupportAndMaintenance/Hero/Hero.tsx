
import { Grid, Chip, Text } from "@/components";
import HelpButton from  "./HelpButton";

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
        </Grid>
    );
}

export default Hero;
