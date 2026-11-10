import { Grid, Text, Section, Wrapper, Reveal } from "@/components";
import { CtaButtons } from "@/pages/CloudSolutions/Shared";
import styles from "./WhyCloud.module.css";

const stats = [
    { value: "99.9%", description: "Reliable and available when you need it." },
    { value: "30–50%", description: "Optimize spending without compromising performance." },
    { value: "2x Faster", description: "Deploy and scale solutions faster than ever." },
    { value: "Global", description: "Access your services and data from anywhere in the world." }
];

function WhyCloud() {
    return (
        <Section spacing="none" className={styles.section}>
            <Wrapper.Body className={styles.container}>
                <Reveal variant="slide">
                    <Grid.VStack gap={16} align="center" className="text-center">

                        <Grid.VStack gap={5} align="center">
                            <h2 className={styles.title}>Work Smarter, Move Faster</h2>
                            <Text variant="body" color="muted" className={styles.lead}>
                                The cloud gives you the agility to adapt, the power to scale,
                                and the freedom to innovate without limits.
                            </Text>
                            <CtaButtons tone="dark" className="justify-center pt-2" />
                        </Grid.VStack>

                        <Grid cols={{ base: 1, sm: 2, lg: 4 }} gap={{ base: 10, lg: 8 }} className={styles.stats}>
                            {stats.map(({ value, description }) => (
                                <Grid.Item key={value}>
                                    <Grid.VStack gap={2} align="center">
                                        <p className={styles.value}>{value}</p>
                                        <Text variant="bodySmall" color="muted" className={styles.description}>
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

export default WhyCloud;