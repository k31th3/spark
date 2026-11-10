import { useState } from "react";
import { Grid, Image, Section, Text, Wrapper, Reveal } from "@/components";
import { cn } from "@/lib/utils";
import { Journey1, Journey2, Journey3, Journey4 } from "@/assets/CloudSolutions";

import { SectionLabel } from "@/pages/ItServices/Shared";
import styles from "./OurCloudJourney.module.css";

const steps = [
    { title: "Assess & Plan", image: Journey1,
      info: "We evaluate your needs and current environment, then design the right cloud strategy for your business." },
    { title: "Migrate", image: Journey2,
      info: "We migrate your applications and data securely." },
    { title: "Optimize", image: Journey3,
      info: "We fine-tune for performance, security, and cost-efficiency." },
    { title: "Manage & Support", image: Journey4,
      info: "We continuously monitor and support your cloud environment." }
];

function OurCloudJourney() {
    const [active, setActive] = useState(0);

    return (
        <Section spacing="none" className={styles.section}>
            <Wrapper.Body className={styles.container}>
                <Reveal variant="slide">
                    <Grid cols={{ base: 1, md: 5 }} gap={{ base: 10, md: 16 }}>

                        {/* Steps */}
                        <Grid.Item span={{ base: 1, md: 2 }}>
                            <Grid.VStack gap={5} className={styles.header}>
                                <SectionLabel>Our Cloud Journey</SectionLabel>
                                <h2 className={styles.title}>
                                    Your Success,<br />Step by step
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

                        {/* Photo */}
                        <Grid.Item span={{ base: 1, md: 3 }} className={styles.photo}>
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

export default OurCloudJourney;