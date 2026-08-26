
import { Grid, Icon, 
    Text, Card } from "@/components";

import { PiLinkDuotone, PiRepeatDuotone,
    PiShieldCheckDuotone, PiAlignBottomDuotone } from "react-icons/pi";

const features = [
    {
        icon: PiLinkDuotone,
        title: "Seamless Connection",
        description: "We connect your systems so data and workflows move smoothly."
    },
    {
        icon: PiRepeatDuotone,
        title: "Better Efficiency",
        description: "Automate processes and eliminate manual work across applications."
    },
    {
        icon: PiShieldCheckDuotone,
        title: "Data Integrity",
        description: "Ensure accurate, consistent, and secure data across all platforms."
    },
    {
        icon: PiAlignBottomDuotone,
        title: "Scalability",
        description: "Our solutions grow with your business and adapt to your needs."
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
