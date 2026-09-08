import { LuLayoutTemplate, LuShoppingCart, LuAppWindow, LuSearch } from "react-icons/lu";

import { Grid, Text, Icon } from "@/components";

const highlights = [
    {
        title: "Business Websites",
        subtitle: "Fast, responsive websites that make your brand look and perform its best.",
        icon: LuLayoutTemplate,
    },
    {
        title: "E-Commerce",
        subtitle: "Online stores with smooth checkout designed to convert visitors into customers.",
        icon: LuShoppingCart,
    },
    {
        title: "Web Applications",
        subtitle: "Custom tools and dashboards that automate and simplify your operations.",
        icon: LuAppWindow,
    },
    {
        title: "SEO-Ready Builds",
        subtitle: "Clean code, fast load times, and proper structure so Google can find you.",
        icon: LuSearch,
    },
];

function WhatWeBuild() {
    return (
        <Grid.VStack gap={6}>
            <Text variant="h2">
                What We <span className="text-primary">Build</span>
            </Text>

            <Grid cols={{ base: 1, md: 2 }} gap={4}>
                {highlights.map(({ title, subtitle, icon }) => (
                    <Grid.HStack key={title} gap={4} align="start" className="rounded-2xl border border-slate-200 p-6">
                        <Icon icon={icon} variant="pink" />
                        <Grid.VStack gap={1}>
                            <Text variant="h3" className="text-base font-bold">{title}</Text>
                            <Text variant="bodySmall" className="leading-6">{subtitle}</Text>
                        </Grid.VStack>
                    </Grid.HStack>
                ))}
            </Grid>
        </Grid.VStack>
    );
}

export default WhatWeBuild;