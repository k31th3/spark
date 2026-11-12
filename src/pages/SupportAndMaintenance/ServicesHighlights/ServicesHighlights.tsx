import { Grid } from "@/components";
import { PiHeadsetDuotone, PiGearDuotone, PiShieldCheckDuotone, PiMonitorDuotone } from "react-icons/pi";

import { IconTile } from "../Shared";
import styles from "./ServicesHighlights.module.css";

const items = [
    { label: "Ongoing Support", icon: PiHeadsetDuotone },
    { label: "Regular Maintenance", icon: PiGearDuotone },
    { label: "Issue Resolution", icon: PiShieldCheckDuotone },
    { label: "System Monitoring", icon: PiMonitorDuotone }
];

function ServicesHighlights() {
    return (
        <Grid cols={{ base: 1, sm: 2, lg: 4 }} gap={{ base: 10, lg: 8 }} className={styles.grid}>
            {items.map(({ label, icon }) => (
                <Grid.Item key={label}>
                    <Grid.VStack gap={3} align="center" className={styles.item}>
                        <IconTile icon={icon} tone="orange" size="lg" />
                        <h3 className={styles.title}>{label}</h3>
                    </Grid.VStack>
                </Grid.Item>
            ))}
        </Grid>
    );
}

export default ServicesHighlights;