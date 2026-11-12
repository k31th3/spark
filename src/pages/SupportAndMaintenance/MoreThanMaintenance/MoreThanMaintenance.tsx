import { useEffect, useRef } from "react";
import {
    animate,
    useInView,
    useMotionValue,
    useReducedMotion,
    useTransform,
    motion
} from "motion/react";
import { LuCheck } from "react-icons/lu";

import { Grid, Image, Reveal, Section, Text, Wrapper } from "@/components";
import { Stat as StatPhoto } from "@/assets/SupportAndMaintenance";

import { SectionLabel, IconTile, LinkButton } from "../Shared";
import styles from "./MoreThanMaintenance.module.css";

/* ===== DATA ===== */

const checks = ["Updates Complete", "Performance Checked", "Security Reviewed"];

/* ===== COUNT UP ===== */

function CountUp({ to, decimals = 1, suffix = "", duration = 2 }: {
    to: number;
    decimals?: number;
    suffix?: string;
    duration?: number;
}) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });
    const reduceMotion = useReducedMotion();

    const count = useMotionValue(0);
    const text = useTransform(count, value => `${value.toFixed(decimals)}${suffix}`);

    useEffect(() => {
        if (!inView) return;

        if (reduceMotion) {
            count.set(to);
            return;
        }

        const controls = animate(count, to, {
            duration,
            ease: [0.22, 1, 0.36, 1]
        });

        return () => controls.stop();
    }, [inView, reduceMotion, to, duration, count]);

    return (
        <span className={styles.count}>
            <span aria-hidden="true" className={styles.ghost}>
                {to.toFixed(decimals)}{suffix}
            </span>
            <motion.span ref={ref} className={styles.live}>{text}</motion.span>
        </span>
    );
}

/* ===== SECTION ===== */

function MoreThanMaintenance() {
    return (
        <Section spacing="none" className={styles.section}>
            <Wrapper.Body className={styles.container}>
                <Reveal variant="slide">
                    <Grid.VStack gap={12}>

                        {/* ===== HEADER ===== */}
                        <Grid cols={{ base: 12 }} gap={8}>
                            <Grid.Item span={{ base: 12, md: 8 }}>
                                <Grid.VStack gap={6}>
                                    <SectionLabel>More Than Maintenance</SectionLabel>
                                    <h2 className={styles.title}>
                                        We Weren't Built<br />to Be a Silent Supplier
                                    </h2>
                                    <Text variant="body" color="muted" className={styles.lead}>
                                        You deserve more than hearing from us only when something breaks.
                                        We stay involved, communicate clearly, and help you make better
                                        decisions about your technology.
                                    </Text>
                                </Grid.VStack>
                            </Grid.Item>

                            <Grid.Item span={{ base: 12, md: 4 }} className={styles.action}>
                                <LinkButton to="/#about" variant="dark" size="hero" glow roll>
                                    Learn More About Us
                                </LinkButton>
                            </Grid.Item>
                        </Grid>

                        <Grid.VStack gap={0}>
                            <Grid cols={{ base: 1, md: 2 }} gap={0}>
                                <Grid.Item className={styles.statusCard}>
                                    <Grid.VStack justify="between" gap={8} className={styles.statusInner}>
                                        <Text as="span" variant="label" color="green" className={styles.operational}>
                                            All systems operational
                                        </Text>

                                        <Grid.VStack gap={2}>
                                            <Text variant="bodySmall" color="muted">System Status</Text>
                                            <Grid.HStack gap={4} align="end">
                                                <p className={styles.value}>
                                                    <CountUp to={99.9} decimals={1} suffix="%" />
                                                </p>
                                                <Grid.VStack gap={0}>
                                                    <span className={styles.unit}>Uptime</span>
                                                    <Text variant="label" color="muted">Last 30 days</Text>
                                                </Grid.VStack>
                                            </Grid.HStack>
                                        </Grid.VStack>
                                    </Grid.VStack>
                                </Grid.Item>

                                <Grid.Item className={styles.photo}>
                                    <Image
                                        src={StatPhoto}
                                        alt="Smiling client checking their phone"
                                        wrapperClassName={styles.photoWrap}
                                        className={styles.photoImage} />
                                </Grid.Item>
                            </Grid>

                            {/* ===== CHECKS ===== */}
                            <div className={styles.checks}>
                                {checks.map(item => (
                                    <Grid.HStack key={item} gap={4} align="center">
                                        <IconTile icon={LuCheck} tone="green" />
                                        <span className={styles.check}>{item}</span>
                                    </Grid.HStack>
                                ))}
                            </div>
                        </Grid.VStack>
                    </Grid.VStack>
                </Reveal>
            </Wrapper.Body>
        </Section>
    );
}

export default MoreThanMaintenance;