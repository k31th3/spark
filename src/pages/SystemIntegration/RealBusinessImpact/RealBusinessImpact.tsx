import { Grid, Text, Section, Wrapper, Reveal } from "@/components";
import { CtaButtons } from "../Shared";
import styles from "./RealBusinessImpact.module.css";

const stats = [
    { value: "50+", description: "Integration Projects Delivered" },
    { value: "35%", description: "Average Increase in Operational Efficiency" },
    { value: "99.9%", description: "Data Accuracy Achieved" }
];

function RealBusinessImpact() {
    return (
        <Section background="dark" spacing="none" className={styles.section}>
            <Wrapper.Body className={styles.container}>
                <Reveal variant="slide">
                    <Grid.VStack gap={16} align="center" className="text-center">

                        <Grid.VStack gap={5} align="center">
                            <h2 className={styles.title}>
                                Integration That Drives.<br />Real Business Impact.
                            </h2>
                            <Text variant="body" color="white" className={styles.lead}>
                                When your systems work together, your business works better. We help you
                                eliminate silos, improve visibility, and make smarter decisions.
                            </Text>
                            <CtaButtons tone="light" className="justify-center pt-2" />
                        </Grid.VStack>

                        <Grid cols={{ base: 1, sm: 3 }} gap={{ base: 10, sm: 8 }} className={styles.stats}>
                            {stats.map(({ value, description }) => (
                                <Grid.Item key={value}>
                                    <Grid.VStack gap={2} align="center">
                                        <p className={styles.value}>{value}</p>
                                        <Text variant="bodySmall" color="white" className={styles.description}>
                                            {description}
                                        </Text>
                                    </Grid.VStack>
                                </Grid.Item>
                            ))}
                        </Grid>
                    </Grid.VStack>
                </Reveal>
            </Wrapper.Body>
        </Section>
    );
}

export default RealBusinessImpact;