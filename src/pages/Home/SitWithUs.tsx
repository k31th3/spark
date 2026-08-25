import { Card, Grid, 
    Text, Image, ProgressIndicator } from "@/components";

import { StartWithSparkWebp } from "@/assets/Dashboard";

export default function SitWithUs() 
{
	const talkAbout = function()
    {
        return <>
            <Grid.VStack gap={1}>
                <Text variant="caption" color="muted" className="block font-medium leading-4">
                    Tell us what you're building
                </Text>

                <Text variant="caption" className="block leading-4">
                    Because every great business starts with a SPARK.
                </Text>
            </Grid.VStack>
        </>
    }

	return <>
			<Card className="relative bg-purple-50 min-h-[120px] my-8">
            <Card.Body className="relative h-full">
                <Grid cols={{ base: 12 }} >

                    <Grid.Item span={{ base:6, lg: 4, md: 4, sm: 4 }}>
                        <Image
                            src={StartWithSparkWebp}
                            alt="oncall"
                            className="absolute top-0 left-0 h-[180px] w-fit -translate-y-1/3 translate-x-1/6"/>
                    </Grid.Item>    

                    <Grid.Item span={{ base:6, lg: 8, md: 8, sm: 8 }}>
                        <>
                            <Grid cols={{ base: 12 }} >
                            
                                <Grid.Item span={{ base: 6, md: 10, sm: 8 }}>

                                    <Grid.VStack gap={4}>
                                        
                                        <Text variant="h3" className="leading-5">
                                            So... <span className="text-primary">SIT</span> with us?
                                        </Text>
                                        
                                        <ProgressIndicator size="sm" />

                                        <Grid.Item hide={{base: true}} show={{md: true}}>
                                            {talkAbout()}
                                        </Grid.Item>

                                    </Grid.VStack>

                                </Grid.Item>

                            </Grid>   
                        </>
                    </Grid.Item>   

                </Grid>
            </Card.Body>
        </Card>
		</>;
}