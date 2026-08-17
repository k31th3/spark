
import { Button, Card, Grid, 
    Text, Icon, Image } from "@/components";

import { FiArrowRight } from "react-icons/fi";
import { OnCall } from "@/assets/TermsOfService";

function AboutTheseTerms()
{
    const talkAbout = function()
    {
        return <>
            <Grid.VStack gap={4}>
                <Text variant="caption" color="primary" className="block leading-4">
                    We'd rather talk about it than leave you guessing.
                </Text>

                <Text variant="caption" color="primary" className="block leading-4">
                    let's build a partnership based on trust, transparency and
                    good communication.
                </Text>
            </Grid.VStack>
        </>
    }

	return <>
		<Card className="relative bg-purple-50 min-h-[120px] my-8">
            <Card.Body className="relative h-full">
                <Grid cols={{ base: 12 }} >

                    <Grid.Item span={{ base:6, lg: 3, md: 4, sm: 4 }}>
                        <Image
                            src={OnCall}
                            alt="oncall"
                            className="absolute top-0 left-0 h-[120px] w-fit -translate-y-1/3 translate-x-1/6"/>
                    </Grid.Item>    

                    <Grid.Item span={{ base:6, lg: 9, md: 8, sm: 8 }}>
                        <>
                            <Grid cols={{ base: 12 }} >
                            
                                <Grid.Item span={{ base: 6, md: 10, sm: 8 }}>

                                    <Grid.VStack gap={4}>
                                        
                                        <Text variant="lead" className="font-medium leading-5">
                                            Questions about these terms?
                                        </Text>

                                        <Grid.Item hide={{base: true}} show={{md: true}}>
                                            {talkAbout()}
                                        </Grid.Item>

                                    </Grid.VStack>

                                </Grid.Item>

                            </Grid>   
                        </>
                    </Grid.Item>   

                    <Grid.Item span={{ base: 12 }} 
                               hide={{ base: false, md: true }} 
                               className="my-4">
                        {talkAbout()}
                    </Grid.Item>

                </Grid>
            </Card.Body>
        </Card>
	</>
}

export default AboutTheseTerms;