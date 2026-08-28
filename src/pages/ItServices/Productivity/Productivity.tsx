
import { Grid, Icon, Card, Text, Image } from "@/components";
import { ProductivityBgWebp } from "@/assets/ItServices";

import { Stats } from "./Productivity.data";
import Animated from "./Productivity.animated";

function Productivity() {
    return (
        <Card className="relative overflow-hidden rounded-[24px] py-10">
            <Card.Body>

                <Image
                    src={ProductivityBgWebp}
                    alt="Productivity Background"
                    className="absolute inset-0 h-full w-full object-cover object-center z-0"/>

                <Grid cols={{ base: 12 }} gap={8} className="relative z-10">
                    {Stats.map((service, index) => {
                        return (
                            <Grid.Item span={{ base: 6, lg: 3, md: 3 }} key={`ourCoreItServices${index}`} >
                                <Grid.VStack gap={0}>
                                    <Grid.VStack gap={2} align="center">

                                        <Icon icon={service.icon} size="md" variant={service.color} avatar={true}/>
                                        <Text variant="h3" color={service.color}>
                                            <Animated value={service.value}/>
                                        </Text>

                                    </Grid.VStack>

                                    <Text variant="label" color="white" className="block leading-4 text-center">
                                        {service.label}
                                    </Text>
                                </Grid.VStack>
                            </Grid.Item>
                        );
                    })}
                </Grid>

            </Card.Body>
        </Card>
    );
}

export default Productivity;
