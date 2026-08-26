
import { Grid, Icon, 
    Text, Card, ProgressIndicator } from "@/components";

import {
    PiUsersThreeDuotone,
    PiGitBranchDuotone,
    PiShoppingCartDuotone,
    PiCreditCardDuotone,
    PiPuzzlePieceDuotone,
    PiCodeDuotone
} from "react-icons/pi";

const items = [
    {
        icon: PiUsersThreeDuotone,
        title: "CRM Systems",
        description: "Integrate your CRM with other tools for a complete view of your customers."
    },
    {
        icon: PiGitBranchDuotone,
        title: "ERP Systems",
        description: "Connect operations, finance, inventory, and more in a unified system."
    },
    {
        icon: PiShoppingCartDuotone,
        title: "E-commerce Platforms",
        description: "Sync your store with inventory, payments, shipping, and other business tools."
    },
    {
        icon: PiCreditCardDuotone,
        title: "Payment Gateways",
        description: "Secure and reliable payment integrations for smooth transactions."
    },
    {
        icon: PiPuzzlePieceDuotone,
        title: "Third-Party Applications",
        description: "We integrate with the tools you already use and trust."
    },
    {
        icon: PiCodeDuotone,
        title: "Custom Systems",
        description: "Tailored integrations built around your unique business requirements."
    }
];


function WhatWeIntegrate() 
{
    return (
        <Grid cols={{ base: 12 }} gap={8}>
            
            <Grid.Item span={{ base: 12, lg: 4, md: 5 }}>
                <Grid.VStack gap={2} justify="center" className="h-full">
                    <Grid.HStack gap={2} align="center">
                        <Text variant="caption" color="primary" className="uppercase font-bold">
                            what we integrate 
                        </Text>
                        <ProgressIndicator size="xs" />
                    </Grid.HStack>
                    <Text variant="h3" className="font-bold mb-2">
                        Systems. Applications. <br /> 
                        People. All in <span className="text-gradient">Sync</span>. 
                    </Text>
                    <Text variant="label" >
                        We bring your different systems and tools 
                        together so you can focus on what matters 
                        most-growing your business.
                    </Text>
                </Grid.VStack>
            </Grid.Item>

            <Grid.Item span={{ base: 12, lg: 8, md: 7 }} >
                <Grid cols={{ base: 12 }} gap={4}>
                    {items.map(
                    ({ icon, title, description }, index) => (
                        <Grid.Item span={{ base: 6, lg: 4, md: 6 }} key={`WhatWeIntegrate${index}`}>
                            <Card className="h-full shadow-md">
                                <Card.Body>
                                    <Grid.VStack gap={2} align="center" justify="center">
                                        <Icon icon={icon} size="md" variant="gradient" avatar={true} className="mb-2" />
                                        <Text variant="caption" className="font-semibold text-center">
                                           {title} 
                                        </Text>
                                        <Text variant="label" color="muted" className="text-center">
                                           {description} 
                                        </Text>
                                    </Grid.VStack>
                                </Card.Body>
                            </Card>
                        </Grid.Item>
                    )
                )}
                </Grid>
            </Grid.Item>
        </Grid>
    );
}

export default WhatWeIntegrate;