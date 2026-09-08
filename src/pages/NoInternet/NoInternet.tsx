import { MdRefresh } from "react-icons/md";
import noInternet from "@/assets/noInternet.webp";
import { Button, Card, Text,
    Grid, Icon, Image } from "@/components";

function NoInternet() {
  	return (
        <div className="max-w-[420px] m-auto">
    	    <Grid cols={{ base: 12 }} className="min-h-dvh items-stretch">
                <Grid.Item span={{ base: 12 }} className="w-full flex items-center 
                    justify-center px-4 sm:px-6">
                
                    <Card className="shadow-none">
                        <Card.Header className="border-0">
                            <Image src={noInternet} />
                        </Card.Header>

                        <Card.Body className="text-center">
                            
                            <Grid.VStack gap={8} className="mb-8">
                                <Text variant="h2" className="font-black">
                                    Opps... Looks like
                                    you're <span className="text-gradient">offline.</span>
                                </Text>

                                <Text variant="label" color="muted">
                                    <p>Technology takes a coffee break sometimes ☕</p>
                                    <span>Don't worry.</span>
                                    We'll be here when your connection comes back.
                                </Text>
                            </Grid.VStack>

                            <Button variant="gradient" 
                                className="w-full gap-2 items-center"
                                size="sm"
                                onClick={() => window.location.reload()}>
                                <Icon icon={MdRefresh} variant="light" />
                                <span>Retry Connecting</span>
                            </Button>

                        </Card.Body>
                    </Card>    

                </Grid.Item>
            </Grid>
        </div>
  	);
}

export default NoInternet;