
import { Grid, Button, 
    Icon, Text, ProgressIndicator } from "@/components";

import {
    FaBuildingColumns,
    FaHeartPulse,
    FaGraduationCap,
    FaIndustry,
    FaStore,
    FaTruckFast
} from "react-icons/fa6";

const industries = [
    {
        title: "Finance",
        icon: FaBuildingColumns
    },
    {
        title: "Healthcare",
        icon: FaHeartPulse
    },
    {
        title: "Education",
        icon: FaGraduationCap
    },
    {
        title: "Manufacturing",
        icon: FaIndustry
    },
    {
        title: "Retail",
        icon: FaStore
    },
    {
        title: "Logistics",
        icon: FaTruckFast
    }
];

function Industries() 
{
    return (
        <Grid cols={{ base: 12 }}>

            <Grid.Item span={{ base: 12 }}>
                <Grid.HStack gap={2} align="center" justify="center">
                    <Text variant="caption" color="primary" className="uppercase font-bold">
                        trusted by business across industries
                    </Text>
                    <ProgressIndicator size="xs" color="primary" />
                </Grid.HStack>
            </Grid.Item>

            {industries.map(({ title, icon }, index) => (
                <Grid.Item span={{ base: 4, lg: 2, md: 4, sm: 4 }} key={`industries${index}`}>

                    <Grid.VStack gap={2} justify="center" align="center"> 
                        <Icon icon={icon} size="lg" />
                        <Text variant="label">{title}</Text>
                    </Grid.VStack>

                </Grid.Item>
            ))}
        </Grid>
    );
}

export default Industries;