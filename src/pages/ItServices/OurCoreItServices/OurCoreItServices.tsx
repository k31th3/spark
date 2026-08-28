import { Grid, ProgressIndicator, 
    Text, Icon } from "@/components";

import { RiNumber1, RiNumber2, 
    RiNumber3, RiNumber4, RiNumber5 } from "react-icons/ri";

const services = [
    {
        title: "Managed IT Services",
        description: "We manage your IT operations so you can focus on growing your business.",
        icon: RiNumber1
    },
    {
        title: "IT Support & Helpdesk",
        description: "Fast, friendly, and reliable support for your teams anytime, anywhere.",
        icon: RiNumber2
    },
    {
        title: "Cybersecurity",
        description: "Protect your systems, data, and users with multi-layered security solutions.",
        icon: RiNumber3
    },
    {
        title: "Cloud Solutions",
        description: "Move, manage, and optimize your workloads in the cloud with confidence.",
        icon: RiNumber4
    },
    {
        title: "IT Consulting",
        description: "Strategic guidance to align technology with your business goals.",
        icon: RiNumber5
    }
];

function OurCoreItServices()
{
    return (
        <Grid cols={{ base: 12 }} gap={8}>
            <Grid.Item span={{ base: 12, lg: 6, md: 10 }}>
                <Text variant="caption" color="primary" className="uppercase font-bold">
                    our core it services
                </Text>
                <Grid.VStack gap={2}>
                    <Text variant="h4" className="font-bold">
                        End-to-end IT solutions for <span className="text-gradient">every business need</span>. 
                    </Text>
                    <ProgressIndicator size="sm" color="primary" />
                </Grid.VStack>
            </Grid.Item>

            <Grid.Item span={{ base: 12 }}>
                <Grid cols={{ base: 12 }} gap={8}>
                    {services.map((service, index) => {
                        return (
                            <Grid.Item span={{ base: 6, lg: 3, md: 4 }} key={`ourCoreItServices${index}`}>
                                <Grid.VStack gap={2}>
                                    <Grid.HStack gap={2} align="center">
                                        <Icon icon={service.icon} size="xs" avatar={true} />
                                        <Text variant="h6">{service.title}</Text>
                                    </Grid.HStack>
                                    <Text variant="label" className="block leading-4">
                                        {service.description}
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

export default OurCoreItServices;