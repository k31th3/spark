
import {
    FaBolt, FaMobileAlt, 
    FaShieldAlt, FaCode
} from "react-icons/fa";

import { Grid, Icon, Text } from "@/components";

const Features = [
    {
        icon: FaBolt,
        title: "Fast & Performing"
    },
    {
        icon: FaMobileAlt,
        title: "Responsive Design"
    },
    {
        icon: FaShieldAlt,
        title: "Secure & Reliable"
    },
    {
        icon: FaCode,
        title: "Clean & Scalable Code"
    }
];


function FeatureHighlights()
{
    return (
        <Grid cols={{ base: 12 }} className="max-w-[600px]">
            {Features.map(({ icon, title }) => (
                <Grid.Item span={{ base: 6, lg: 3 }} key={title}>
                    <Grid.HStack gap={2} align="start">
                        <Icon icon={icon} variant="primary" />
                        <Text variant="bodySmall">{title}</Text>
                    </Grid.HStack>
                </Grid.Item>
            ))}
        </Grid> 
    )
}

export default FeatureHighlights;