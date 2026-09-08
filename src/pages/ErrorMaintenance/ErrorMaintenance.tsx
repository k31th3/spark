import { FaLongArrowAltRight } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa6";

import { Button, Card, Text,
    Grid, Icon, Image } from "@/components";

function ErrorMaintenance() {
  	return (
	    <div className="max-w-[420px] m-auto">
            <Grid cols={{ base: 12 }} className="min-h-dvh items-stretch">
                <Grid.Item span={{ base: 12 }} className="w-full flex items-center 
                    justify-center px-4 sm:px-6">
                
                    <Card className="shadow-none">
                        
                        <Card.Header className="border-0">
                            <Image src="/errorMaintenance.webp" />
                        </Card.Header>

                        <Card.Body className="text-center">
                            <Grid.VStack className="mb-8">
                                <Text variant="h2" className="font-black mb-8">
                                    We're making
                                    <span className="text-gradient">things better.</span>
                                </Text>

                                <Text variant="label" color="muted">
                                    <p>Sometimes technology needs a quick tune-up.</p>
                                    <span>We're currently improving this page so it'll be even</span>
                                    better when you come back.
                                </Text>
                            </Grid.VStack>

                            <div className="hstack gap-4 items-center">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-50">
                                    <FaHeadset size={24} style={{ fill: "url(#iconGradient)" }} />
                                </div>
                                <div className="vstack gap-0">
                                    <ul>
                                        <li className="font-medium text-[12px]">Need something urgent?</li>
                                        <li className="text-purple-700 text-[16px] hstack gap-2 items-center cursor-pointer">
                                            Contact Spark Support <Icon icon={FaLongArrowAltRight} />
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </Card.Body>

                    </Card>

                </Grid.Item>
            </Grid>
        </div>
  	);
}

export default ErrorMaintenance;