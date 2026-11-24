import { FiArrowDown } from "react-icons/fi";

import { Button, Grid, Section, Text, Wrapper } from "@/components";

import { SectionLabel } from "../Shared";
import styles from "./Hero.module.css";

interface Props {
    tabs: readonly string[];
    active: string;
    onChange: (tab: string) => void;
}

function Hero({ tabs, active, onChange }: Props) {
    return (
        <Section spacing="none" className={styles.section}>
            <Wrapper.Body className={styles.container}>
                <Grid.VStack gap={8} align="center">

                    <Grid.HStack justify="between" align="center" className={styles.topRow}>
                        <SectionLabel>Company Portfolio</SectionLabel>
                        <a href="#work" className={styles.scrollHint}>
                            (Scroll down) <FiArrowDown />
                        </a>
                    </Grid.HStack>

                    <Grid.VStack gap={5} align="center" className={styles.heading}>
                        <h1 className={styles.title}>Company Portfolio</h1>
                        <Text variant="bodySmall" color="muted" className={styles.subtitle}>
                            Real challenges, Smart solutions,<br />Measurable results.
                        </Text>
                    </Grid.VStack>

                    {/* Categories */}
                    <Grid.HStack gap={3} justify="center" className={styles.chips}>
                        {tabs.map(tab => (
                            <Button
                                key={tab}
                                variant={tab === active ? "dark" : "outline"}
                                size="nav"
                                aria-pressed={tab === active}
                                className={tab === active ? undefined : "bg-white"}
                                onClick={() => onChange(tab)}>
                                {tab}
                            </Button>
                        ))}
                    </Grid.HStack>
                </Grid.VStack>
            </Wrapper.Body>
        </Section>
    );
}

export default Hero;