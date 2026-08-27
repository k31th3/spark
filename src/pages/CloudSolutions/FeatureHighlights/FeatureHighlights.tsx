
import { Grid, Icon, 
    Text, Card } from "@/components";

import {
  PiCloudDuotone,
  PiShieldCheckDuotone,
  PiChartLineUpDuotone,
  PiHeadsetDuotone,
} from "react-icons/pi";

const features = [
    {
        icon: PiCloudDuotone,
        title: "Scalable & Seamless",
        description: "Scalable infrastructure that easily integrates with your existing systems and grows with your business."
    },
    {
        icon: PiShieldCheckDuotone,
        title: "Secure & Reliable",
        description: "Enterprise-grade security with high availability and reliable infrastructure to keep your data protected."
    },
    {
        icon: PiChartLineUpDuotone,
        title: "Cost Efficient",
        description: "Optimize your cloud spending and reduce operational costs with flexible, pay-as-you-go services."
    },
    {
        icon: PiHeadsetDuotone,
        title: "Expert Support",
        description: "Get reliable assistance from experienced cloud professionals whenever you need it."
    }
];

function FeatureHighlights() 
{
    return (
        <Card className="p-4 shadow-lg">
            <Card.Body>
                <Grid cols={{ base: 12 }} gap={8}>
                
                    {features.map(
                        ({ icon, title, description }, index) => (
                            <Grid.Item span={{ base: 6, lg: 3 }} key={`FeatureHighlights${index}`}>
                                
                                <Grid.VStack gap={2} align="center" justify="center">
                                    <Icon icon={icon} size="lg" variant="gradient" avatar={true} className="mb-2" />
                                    <Text variant="caption" className="font-semibold text-center">
                                       {title} 
                                    </Text>
                                    <Text variant="label" color="muted" className="text-center">
                                       {description} 
                                    </Text>
                                </Grid.VStack>

                            </Grid.Item>
                        )
                    )}

                </Grid>
            </Card.Body>
        </Card>
    )
}

export default FeatureHighlights;
