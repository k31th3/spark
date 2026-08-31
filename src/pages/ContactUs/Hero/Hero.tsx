import { Grid, ProgressIndicator, 
    Text, Image, Icon } from "@/components";

import ContactForm from  "./ContactForm";

function Hero()
{
    return (
        <Grid cols={{ base: 12 }}>

            <Grid.Item span={{ base: 12 }}>
                
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



        </Grid>
    )
}

export default Hero;
