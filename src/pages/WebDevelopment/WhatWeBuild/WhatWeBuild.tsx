import { Grid, Text, Icon } from "@/components";

import { Highlights } from "./highlights";

function WhatWeBuild() {
    return (
        <Grid.VStack gap={6}>
            
            <div>
                <Text variant="h4" className="text-center font-bold text-primary mb-2">
                    What We Build
                </Text>

                <Text variant="h3" className="text-center font-bold">
                    Web Solutions for <span className="text-gradient">Every Business</span>
                </Text>
            </div>

            <Grid cols={{ base: 1, lg: 4, md: 2, sm: 2 }} gap={4}>
                {Highlights.map(({ title, subtitle, icon }) => (
                    <Grid.VStack gap={4} className="rounded-2xl shadow-md p-6" key={title}>
                        <Grid.HStack gap={4} align="start">
                            <Icon icon={icon} variant="pink" />
                            <Grid.VStack gap={1}>
                                <Text variant="h4" className="text-base font-bold">{title}</Text>
                            </Grid.VStack>
                        </Grid.HStack>
                        <Text variant="bodySmall" className="leading-6">{subtitle}</Text>
                    </Grid.VStack>
                ))}
            </Grid>
            
        </Grid.VStack>
    );
}

export default WhatWeBuild;