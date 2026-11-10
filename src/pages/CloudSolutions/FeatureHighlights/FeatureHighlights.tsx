import { Grid, Text } from "@/components";
import {
    PiCloudDuotone,
    PiShieldCheckDuotone,
    PiChartLineUpDuotone,
    PiHeadsetDuotone
} from "react-icons/pi";

import { IconTile } from "@/pages/ItServices/Shared";
import styles from "./FeatureHighlights.module.css";

const features = [
    { icon: PiCloudDuotone, title: "Scalable & Seamless",
      description: "Scalable infrastructure that easily integrates with your existing systems and grows with your business." },
    { icon: PiShieldCheckDuotone, title: "Secure & Reliable",
      description: "Enterprise-grade security with high availability and reliable infrastructure to keep your data protected." },
    { icon: PiChartLineUpDuotone, title: "Cost Efficient",
      description: "Optimize your cloud spending and reduce operational costs with flexible, pay-as-you-go services." },
    { icon: PiHeadsetDuotone, title: "Expert Support",
      description: "Get reliable assistance from experienced cloud professionals whenever you need it." }
];

/* Rendered inside the Hero section (no <Section> of its own) so it sits right under the cloud graphic. */
function FeatureHighlights() {
    return (
        <Grid cols={{ base: 1, sm: 2, lg: 4 }} gap={{ base: 10, lg: 8 }} className={styles.grid}>
            {features.map(({ icon, title, description }) => (
                <Grid.Item key={title}>
                    <Grid.VStack gap={2} align="center" className={styles.item}>
                        <IconTile icon={icon} />
                        <h3 className={styles.title}>{title}</h3>
                        <Text variant="body" color="muted" className={styles.text}>{description}</Text>
                    </Grid.VStack>
                </Grid.Item>
            ))}
        </Grid>
    );
}

export default FeatureHighlights;