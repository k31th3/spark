import { useState } from "react";
import { Grid, Image, Section, Text, Wrapper, Reveal } from "@/components";
import { cn } from "@/lib/utils";
import { Support, Investigate, Update, Business } from "@/assets/SupportAndMaintenance";

import { SectionLabel } from "../Shared";
import styles from "./HowSupportWorks.module.css";

const steps = [
    { title: "Reach Out", image: Support,
      info: "Tell us what's happening. We'll start by understanding the issue." },
    { title: "We Investigate", image: Investigate,
      info: "Our team looks into the problem and identifies what needs attention." },
    { title: "We Keep You Updated", image: Update,
      info: "No disappearing into the void. We keep communication clear throughout." },
    { title: "Back to Business", image: Business,
      info: "Once resolved, we make sure everything is working properly again." }
];

function HowSupportWorks() {
    const [active, setActive] = useState(0);

    return (
        <Section spacing="none" className={styles.section}>
            <Wrapper.Body className={styles.container}>
                <Reveal variant="slide">
                    <Grid cols={{ base: 1, md: 5 }} gap={{ base: 10, md: 16 }}>

                        <Grid.Item span={{ base: 1, md: 2 }} order={{ md: 2 }}>
                            <Grid.VStack gap={5} className={styles.header}>
                                <SectionLabel>How Support Works</SectionLabel>
                                <h2 className={styles.title}>
                                    Simple Support,<br />Clear Communication
                                </h2>
                            </Grid.VStack>

                            <Grid.VStack gap={2}>
                                {steps.map(({ title, info }, index) => (
                                    <button
                                        key={title}
                                        type="button"
                                        aria-current={index === active ? "step" : undefined}
                                        onClick={() => setActive(index)}
                                        className={cn(styles.step, index === active && styles.active)}>
                                        <span className={styles.number}>{index + 1}</span>
                                        <span className={styles.stepText}>
                                            <span className={styles.stepTitle}>{title}</span>
                                            <Text variant="bodySmall" color="muted">{info}</Text>
                                        </span>
                                    </button>
                                ))}
                            </Grid.VStack>
                        </Grid.Item>

                        <Grid.Item span={{ base: 1, md: 3 }} order={{ md: 1 }} className={styles.photo}>
                            {steps.map(({ title, image }, index) => (
                                <Image
                                    key={title}
                                    src={image}
                                    alt={index === active ? title : ""}
                                    wrapperClassName={cn(styles.layer, index === active && styles.layerActive)}
                                    className={styles.layerImage} />
                            ))}
                        </Grid.Item>
                    </Grid>
                </Reveal>
            </Wrapper.Body>
        </Section>
    );
}

export default HowSupportWorks;