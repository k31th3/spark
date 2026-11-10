import { useState } from "react";
import { Grid, Image, Section, Text, Wrapper, Reveal } from "@/components";
import { cn } from "@/lib/utils";
import { Process1, Process2, Process3, Process4 } from "@/assets/SystemIntegration";

import { SectionLabel } from "../Shared";
import styles from "./OurIntegrationProcess.module.css";

const steps = [
    { title: "Understand", image: Process1,
      info: "We learn your business, processes, and systems." },
    { title: "Plan", image: Process2,
      info: "We design the right integration solution for your needs." },
    { title: "Integrate", image: Process3,
      info: "We build, connect, and test everything for a seamless fit." },
    { title: "Support", image: Process4,
      info: "We monitor, optimize, and support for long-term success." }
];

function OurIntegrationProcess() {
    const [active, setActive] = useState(0);

    return (
        <Section spacing="none" className={styles.section}>
            <Wrapper.Body className={styles.container}>
                <Reveal variant="slide">
                    <Grid cols={{ base: 1, md: 5 }} gap={{ base: 10, md: 16 }}>

                        {/* Steps (right column on desktop) */}
                        <Grid.Item span={{ base: 1, md: 2 }} order={{ md: 2 }}>
                            <Grid.VStack gap={5} className={styles.header}>
                                <SectionLabel>Our Integration Process</SectionLabel>
                                <h2 className={styles.title}>
                                    Simple Process,<br />Powerful Result
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

                        {/* Photo (left column on desktop) */}
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

export default OurIntegrationProcess;