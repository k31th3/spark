import { Grid, Text } from "@/components";
import { PiLinkDuotone, PiRepeatDuotone, PiShieldCheckDuotone, PiAlignBottomDuotone } from "react-icons/pi";

import { IconTile } from "../Shared";
import styles from "./FeatureHighlights.module.css";

const features = [
    { icon: PiLinkDuotone, title: "Seamless Connection",
      description: "We connect your systems so data and workflows move smoothly." },
    { icon: PiRepeatDuotone, title: "Better Efficiency",
      description: "Automate processes and eliminate manual work across applications." },
    { icon: PiShieldCheckDuotone, title: "Data Integrity",
      description: "Ensure accurate, consistent, and secure data across all platforms." },
    { icon: PiAlignBottomDuotone, title: "Scalability",
      description: "Our solutions grow with your business and adapt to your needs." }
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