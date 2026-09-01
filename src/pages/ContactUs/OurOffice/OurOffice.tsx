import { FiArrowRight } from "react-icons/fi";
import { PiBuildings } from "react-icons/pi";

import { Wrapper, Grid, ProgressIndicator, 
    Text, Image, Button, Icon, Card } from "@/components";

import { PhMapWebp } from "@/assets/ContactUs";

function OurOffice()
{
    return (
        <Wrapper.FullBleed className="relative">
            <Image
                src={PhMapWebp}
                alt="Philippines background"
                className="absolute inset-0 h-full w-full object-cover -z-10"/>

            <Wrapper.Body className="py-8">
                <Grid cols={{ base: 12 }}>
                    <Grid.Item span={{ base: 12, lg: 5, md: 5, sm: 5 }}>
                        <Grid.VStack gap={4}>
                            <Text variant="h6" color="primary" className="uppercase font-bold">
                                we're here for you
                            </Text>

                            <Text variant="h2">
                                Our Office
                                <ProgressIndicator size="sm" color="primary" />
                            </Text>

                            <Text variant="caption" className="max-w-[320px]">
                                We're based in the Philippines, ready to
                                support your business with reliable web
                                development and technology services.
                            </Text>

                            <div>
                                <Button variant="secondary" size="xs" className="capitalize rounded-md gap-1"
                                    onClick={() =>
                                        window.open(
                                        `${import.meta.env.VITE_CONTACT_GOOGLE_MAP}`,
                                          "_blank"
                                        )
                                    }>
                                    view office location <Icon icon={FiArrowRight} size="sm" variant="primary" />
                                </Button>
                            </div>

                        </Grid.VStack>
                    </Grid.Item>

                    <Grid.Item span={{ base: 12, lg: 7, md: 7, sm: 7 }}>
                        <Card className="max-w-[200px] sm:ml-0 ml-auto">
                            <Card.Body className="px-4 py-6">

                                <Grid.HStack gap={4} align="center" className="mb-4">
                                    <Icon icon={PiBuildings} size="sm" variant="primary" avatar={true} />
                                    
                                    <Grid.VStack gap={0}>
                                        <Text variant="label" className="font-medium">
                                            Philippines
                                        </Text>
                                        <span className="text-[10px] capitalize
                                            text-primary font-medium">head office</span>
                                    </Grid.VStack>

                                </Grid.HStack>

                                <hr className="mb-4 border-t-gray-300" />

                                <Text variant="label" className="block leading-5">
                                    {import.meta.env.VITE_CONTACT_ADDRESS}
                                </Text>

                            </Card.Body>
                        </Card>
                    </Grid.Item>

                </Grid>
            </Wrapper.Body>
        </Wrapper.FullBleed>
    )
}

export default OurOffice;