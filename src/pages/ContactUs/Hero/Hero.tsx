
import { Grid, ProgressIndicator, 
    Text } from "@/components";

import ContactForm from  "./ContactForm";
import OtherWayConnect from  "./OtherWayConnect";

function Hero()
{
    return (
        <Grid cols={{ base: 12 }}>
            <Grid.Item span={{ base: 12, lg: 8, md: 8 }}>
                
                <Grid.VStack gap={4} >

                    <Text variant="h6" color="primary" className="uppercase mb-6 font-bold">
                        send us a messages
                        <ProgressIndicator size="sm" />
                    </Text>

                    <Text variant="h2">
                        How can we help you today?
                    </Text>

                    <ContactForm />
                    
                </Grid.VStack>

            </Grid.Item>

            <Grid.Item span={{ base: 12, lg: 4, md: 4 }}>
                
                <Grid.VStack gap={4} >
                    
                    <Text variant="caption" color="primary" className="uppercase mb-6 font-bold">
                        other ways to connect
                    </Text>

                    <OtherWayConnect />

                </Grid.VStack>

            </Grid.Item>
        </Grid>
    )
}

export default Hero;
