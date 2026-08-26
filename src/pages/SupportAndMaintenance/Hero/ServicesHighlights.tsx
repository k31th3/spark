
import { Grid, Icon, 
    Text } from "@/components";

import {
  PiHeadsetDuotone,
  PiGearDuotone,
  PiShieldCheckDuotone,
  PiMonitorDuotone
} from "react-icons/pi";

const Items = [
    {
        label: "Ongoing Support",
        icon: PiHeadsetDuotone
    },
    {
        label: "Regular Maintenance",
        icon: PiGearDuotone
    },
    {
        label: "Issue Resolution",
        icon: PiShieldCheckDuotone
    },
    {
        label: "System Monitoring",
        icon: PiMonitorDuotone
    }
];

function ServicesHighlights() 
{
    return (
        <Grid cols={{ base: 12 }} gap={8}>
        
            {Items.map(
                ({ label, icon }, index) => (
                    <Grid.Item span={{ base: 6, lg: 3 }} key={`ServicesHighlights${index}`}>
                        
                        <Grid.HStack gap={2} align="center" justify="center">
                            <Icon icon={icon} size="lg" variant="gradient" />
                            <Text variant="label" className="font-semibold">
                               {label} 
                            </Text>
                        </Grid.HStack>

                    </Grid.Item>
                )
            )}

        </Grid>
    )
}

export default ServicesHighlights;
