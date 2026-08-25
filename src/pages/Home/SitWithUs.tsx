import { Card, Grid, 
    Text, Image, ProgressIndicator } from "@/components";

import { StartWithSparkWebp } from "@/assets/Dashboard";

export default function SitWithUs() 
{
	const talkAbout = function()
    {
        return <>
            <Grid.VStack gap={1}>
                <Text variant="caption" className="block font-medium leading-4">
                    Tell us what you're building
                </Text>

                <Text variant="caption" className="block leading-4">
                    Because every great business starts with a SPARK.
                </Text>
            </Grid.VStack>
        </>
    }

	return <>
			<Card className="relative bg-transparent shadow-none overflow-hidden">
                <Card.Body>
                    <Grid cols={{ base: 12 }} className="items-center">

                        {/* Image */}
                        <Grid.Item
                            span={{ base: 12, sm: 4, md: 4, lg: 4 }}
                            justify="center">
                            <div>
                                <Image
                                    src={StartWithSparkWebp}
                                    alt="oncall"
                                    className="
                                        relative
                                        h-[180px]
                                        w-auto
                                        max-w-full
                                        object-contain"/>
                            </div>
                        </Grid.Item>

                        {/* Content */}
                        <Grid.Item span={{ base: 12, sm: 8, md: 8, lg: 8 }}>
                            <Grid cols={{ base: 12 }}>
                                <Grid.Item span={{ base: 12, md: 10, lg: 10 }}>
                                    <Grid.VStack gap={4} className="items-center sm:items-start text-center sm:text-left">
                                        <Text
                                            variant="h3"
                                            className="leading-5">
                                            So... <span className="text-primary">SIT</span> with us?
                                        </Text>

                                        <ProgressIndicator size="sm" />

                                        {/* Desktop / tablet */}
                                        <div className="hidden sm:block w-full">
                                            {talkAbout()}
                                        </div>
                                    </Grid.VStack>
                                </Grid.Item>
                            </Grid>
                        </Grid.Item>

                        {/* Mobile */}
                        <Grid.Item
                            span={{ base: 12 }}
                            hide={{ base: false, sm: true }}>
                            {talkAbout()}
                        </Grid.Item>

                    </Grid>
                </Card.Body>
            </Card>

		</>;
}