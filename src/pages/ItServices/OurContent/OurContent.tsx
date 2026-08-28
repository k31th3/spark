import { Grid, Text, Icon } from "@/components";

import {
  FiSearch,
  FiCalendar,
  FiTrendingUp,
} from "react-icons/fi";

import {
  FaRocket,
} from "react-icons/fa";

const steps = [
    {
        number: "01",
        title: "Assess",
        description: "We evaluate your environment, tools, and challenges.",
        icon: FiSearch,
        iconColor: "primary",
        color: "#7B2CBF"
    },
    {
        number: "02",
        title: "Plan",
        description: "We design the right solution tailored to your goals.",
        icon: FiCalendar,
        iconColor: "pink",
        color: "#E6398F"
    },
    {
        number: "03",
        title: "Implement",
        description: "We deploy, configure, and integrate with minimal disruption.",
        icon: FaRocket,
        iconColor: "orange",
        color: "#FF5A36"
    },
    {
        number: "04",
        title: "Optimize",
        description: "We monitor, improve, and keep your IT running at its best.",
        icon: FiTrendingUp,
        iconColor: "danger",
        color: "#6C2BD9"
    }
];


function OurContent()
{
    return (
        <Grid cols={{ base: 12 }} gap={8}>
            <Grid.Item span={{ base: 12, lg: 5, md: 5 }}>
                <Grid.VStack gap={0} justify="center" className="h-full">
                    <Text variant="caption" color="primary" className="uppercase font-bold">
                        our approach
                    </Text>
                    <Grid.VStack gap={2}>
                        <Text variant="h4" className="font-bold">
                            A proven approach. <span className="text-gradient">Real results</span>. 
                        </Text>
                        <Text variant="bodySmall" className="mb-4 block leading-6 max-w-[400px]">                   
                            We follow a simple but effective process
                            to deliver IT services that create
                            long-term impact.
                        </Text>
                    </Grid.VStack>
                </Grid.VStack>
            </Grid.Item>    
            <Grid.Item span={{ base: 12, lg: 7, md: 7 }}>
                <Grid cols={{ base: 12 }} gap={8}>
                    {steps.map((step, index) => {
                        return (
                            <Grid.Item span={{ base: 6, lg: 4, md: 4 }} key={`ourContent${index}`}>
                                <Grid.VStack gap={2}>
                                    <Grid.HStack gap={2} align="center">
                                        <Icon icon={step.icon} size="xs" variant={step.iconColor} avatar={true} />
                                        <Text variant="h6">{step.title}</Text>
                                    </Grid.HStack>
                                    <Text variant="label" className="block leading-4">
                                        {step.description}
                                    </Text>
                                </Grid.VStack>
                            </Grid.Item>
                        );
                    })}
                </Grid>
            </Grid.Item>
        </Grid>
    )
}


export default OurContent;