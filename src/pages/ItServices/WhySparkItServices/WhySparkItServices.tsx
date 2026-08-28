import { LuBadgeCheck } from "react-icons/lu";

import { Grid, ProgressIndicator, 
    Text, Icon } from "@/components";

import Services from  "./Services";

const Descriptions = [
    "Reduce downtime and IT disruptions",
    "Strengthen security and data protection",
    "Optimize performance and productivity",
    "Access expert support when you need lit"
];

function WhySparkItServices()
{
    return (
        <Grid cols={{ base: 12 }} gap={8}>
            <Grid.Item span={{ base: 12, lg: 6, md: 10 }}>
                <Grid.HStack gap={2} className="mb-4">
                    <Text variant="caption" color="primary" className="uppercase font-bold">
                        why spark it services
                    </Text>
                    <ProgressIndicator size="xs" color="primary" />
                </Grid.HStack>

                <Grid.VStack gap={4}>
                    <Text variant="h3" className="font-bold">
                        We handle the technology behind your <span className="text-gradient">success</span>. 
                    </Text>
                    <Text variant="bodySmall" className="block leading-6 max-w-[400px]">                   
                        From day-to-day IT operations to complex infrastructure 
                        needs, we deliver solutions that are secure, efficient, 
                        and built to scale with your business.
                    </Text>

                    <div>
                    {Descriptions.map(
                        (item, index) => (
                            <Grid.HStack gap={2} align="center" key={`descriptions${index}`}>
                                <Icon icon={LuBadgeCheck} size="sm" variant="success" />
                                <Text variant="label" className="block leading-6"> 
                                    {item}
                                </Text>
                            </Grid.HStack>
                        )
                    )}
                    </div>
                </Grid.VStack>
            </Grid.Item>
            <Grid.Item span={{ base: 12, lg: 6, md: 10 }} className="relative p-20">
                <Services />
            </Grid.Item>
        </Grid>
    )
}

export default WhySparkItServices;