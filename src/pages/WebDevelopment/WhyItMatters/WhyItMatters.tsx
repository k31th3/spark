import { LuBadgeCheck } from "react-icons/lu";

import { Grid, Text, Icon } from "@/components";

const Descriptions = [
    "Make a powerful first impression",
    "Reach your customers 24/7",
    "Deliver a better user experience",
    "Turn visitors into loyal customers",
    "Build a strong foundation for growth"
];

import Services from  "./Services";

function WhyItMatters()
{
    return <>
        <Grid cols={{ base: 12 }} gap={8}>
            <Grid.Item span={{ base: 12, lg: 6, md: 6 }}>
                <Grid.HStack gap={2} className="mb-4">
                    <Text variant="caption" color="primary" className="uppercase font-bold">
                        why it matters
                    </Text>
                </Grid.HStack>

                <Grid.VStack gap={4}>
                    <Text variant="h2" className="font-bold text-2xl tracking-tight sm:text-3xl lg:text-3xl">
                        A Great Website Drives <br />
                        <span className="text-gradient">Real Result.</span>
                    </Text>
                    <Text variant="bodySmall" className="block leading-6 max-w-[400px]">                   
                        It's more than design. It's about creating 
                        experiences that your users love and your 
                        business benefits from.
                    </Text>

                    <div>
                        {Descriptions.map(
                            (item, index) => (
                                <Grid.HStack gap={2} align="center" key={`descriptions${index}`}>
                                    <Icon icon={LuBadgeCheck} size="sm" variant="success" />
                                    <Text variant="bodySmall" className="block leading-6"> 
                                        {item}
                                    </Text>
                                </Grid.HStack>
                            )
                        )}
                    </div>
                </Grid.VStack>
            </Grid.Item>
            <Grid.Item span={{ base: 12, lg: 6, md: 6 }} className="relative p-20">
                <Services />
            </Grid.Item>
        </Grid>
    </>
}


export default WhyItMatters;