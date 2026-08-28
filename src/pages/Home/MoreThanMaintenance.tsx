
import { Text, Grid } from "@/components";

export default function MoreThanMaintenance() 
{
    const msgMaintenance = [
        `We weren't built to be a silent supplier.`,
        `You deserve more than hearing from us only when something breaks.`,
    ];

    const cardMaintenance = [
        "We don't Deploy. We Set You Up.",
        "We don't do Maintenance. We Check In.",
        "We don't close tickets. We keep conversations going."
    ];

    const msgPhilosopy = [
        `Technology shouldn't make people feel stupid.`,
        `It shouldn't require a translator.`,
        `It shouldn't be intimidating.`,
        `It shouldn't get in the way of what you're building.`,
    ];

	return <>
        
        <Grid cols={{ base: 1, lg: 2, md: 2 }} gap={{ base: 8 }} >

            <Grid.Item span={{ base: 1 }} >
                
                <Text variant="h3" className="font-bold mb-2">
                    More Than <br/>Maintenance
                </Text>

                <Grid.VStack gap={4}>

                    <Grid cols={{ base: 1 }} gap={{ base: 2 }}>
                        {msgMaintenance.map((message, index) => (
                            <Text key={`msgMaintenance${index}`} variant="caption" className="block leading-4 font-medium">
                                {message}
                            </Text>
                        ))}
                    </Grid>

                    <Grid cols={{ base: 1 }} gap={{ base: 2 }}>
                        {cardMaintenance.map((item, index) => (
                            <Text key={`cardMaintenance${index}`} variant="bodySmall" className="block leading-4 
                                font-medium">
                                {item}
                            </Text>
                        ))}
                    </Grid>

                    <Text variant="caption" className="block leading-4 font-medium">
                        Because you're more than a ticket number. <br /> And yes...
                    </Text>

                    <Text variant="lead" className="block leading-6 font-medium" color="primary">
                        We'll probably become friends.
                    </Text>
                
                </Grid.VStack>

            </Grid.Item>

            <Grid.Item span={{ base: 1 }} >
        
                <Text variant="h3" className="font-bold mb-2 flex gap-4">
                    We Keep It Simple.
                </Text>
                
                <Grid.VStack gap={4} className="mb-4">

                    <Grid cols={{ base: 1 }} gap={{ base: 2 }}>
                        <Text variant="caption" className="block leading-4 font-medium">
                            Technology doesn't have to be complicated.
                        </Text>
                        <Text variant="caption" className="block leading-4 font-medium">
                            People do a pretty good job of that already.
                        </Text>
                    </Grid>

                    <Grid cols={{ base: 1 }} gap={{ base: 2 }}>
                    {msgPhilosopy.map((message, index) => (
                        <Text key={`philosopy${index}`} variant="bodySmall" className="block 
                            leading-4 font-medium">
                            {message} 
                        </Text>
                    ))}
                    </Grid>

                    <Grid cols={{ base: 1 }} gap={{ base: 0 }}>
                        <Text variant="caption" className="block leading-4">
                            Life's already complicated.
                        </Text>
                        <Text variant="lead" className="block leading-6 font-medium">
                            Technology should feel like a teammate.                            
                        </Text>
                        <Text variant="caption" className="block leading-4">
                            Not another problem.
                        </Text>
                    </Grid>
                
                </Grid.VStack>

                <Grid.VStack gap={4}>
                    <Text variant="caption" className="block leading-4 font-medium">
                        It should help you move faster. <br />
                        Build better.
                    </Text>
                    <Text variant="lead" className="block leading-6 font-medium" color="primary">
                        Dream bigger.
                    </Text>
                </Grid.VStack>
                    
            </Grid.Item>

        </Grid>
        
	</>;
}