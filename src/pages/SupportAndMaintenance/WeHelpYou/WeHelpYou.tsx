import { useEffect, useRef, useState } from "react";
import { cubicBezier, motion, useScroll, useTransform, type MotionValue } from "motion/react";
import {
    PiWrenchDuotone,
    PiArrowsClockwiseDuotone,
    PiChartLineUpDuotone,
    PiRocketLaunchDuotone
} from "react-icons/pi";

import { Grid, Section, Text, Wrapper } from "@/components";
import { cn } from "@/lib/utils";

import { SectionLabel, IconTile } from "../Shared";
import styles from "./WeHelpYou.module.css";

/* ===== DATA ===== */

const items = [
    { title: "Technical Support", icon: PiWrenchDuotone,
      info: "When something isn't working as expected, we'll help investigate and resolve the issue." },
    { title: "Regular Maintenance", icon: PiArrowsClockwiseDuotone,
      info: "Updates, improvements, cleanup, and routine checks to help keep your system healthy." },
    { title: "Performance Monitoring", icon: PiChartLineUpDuotone,
      info: "We help identify potential issues before they become bigger problems." },
    { title: "Continuous Improvements", icon: PiRocketLaunchDuotone,
      info: "Technology changes. Your business changes too. We help your system adapt." }
];

/* ===== THROW CONFIG ===== */

const REST = { x: 0, rotate: 0, scale: 1 };

const THROW = [
    { ...REST },
    { x: 36,  rotate: 4,  scale: 0.96 },
    { x: -36, rotate: -4, scale: 0.96 },
    { x: 28,  rotate: 3,  scale: 0.96 }
];

const START_Y = "100svh";

/* ===== TIMING ===== */

const FIRST = 0.05;
const STEP  = 0.27;
const SPAN  = 0.2;
const EASE  = { ease: cubicBezier(0.22, 1, 0.36, 1) };

/* ===== PINNED HOOK ===== */

function usePinned() {
    const [pinned, setPinned] = useState(false);

    useEffect(() => {
        const query = window.matchMedia("(min-width: 48rem) and (prefers-reduced-motion: no-preference)");
        const sync = () => setPinned(query.matches);
        sync();
        query.addEventListener("change", sync);
        return () => query.removeEventListener("change", sync);
    }, []);

    return pinned;
}

/* ===== CARD CONTENT ===== */

function CardContent({ index, title, info, icon }: { index: number } & (typeof items)[number]) {
    return (
        <>
            <Grid.VStack gap={6}>
                <Text as="span" variant="label" color="muted">
                    ({String(index + 1).padStart(2, "0")})
                </Text>
                <IconTile icon={icon} tone="orange" />
            </Grid.VStack>

            <Grid.VStack gap={2}>
                <h3 className={styles.name}>{title}</h3>
                <Text variant="body" color="muted">{info}</Text>
            </Grid.VStack>
        </>
    );
}

/* ===== THROWN CARD ===== */

function ThrownCard({ item, index, progress }: {
    item: (typeof items)[number];
    index: number;
    progress: MotionValue<number>;
}) {
    const start = FIRST + (index - 1) * STEP;
    const end = start + SPAN;
    const from = THROW[index];

    const y = useTransform(progress, [start, end], [START_Y, "0svh"], EASE);
    const x      = useTransform(progress, [start, end], [from.x, REST.x], EASE);
    const rotate = useTransform(progress, [start, end], [from.rotate, REST.rotate], EASE);
    const scale  = useTransform(progress, [start, end], [from.scale, REST.scale], EASE);

    return (
        <motion.article
            className={cn(styles.card, styles.stacked)}
            style={{ y, x, rotate, scale, zIndex: index + 1 }}>
            <CardContent index={index} {...item} />
        </motion.article>
    );
}

/* ===== SECTION ===== */

function WeHelpYou() {
    const track = useRef<HTMLDivElement>(null);
    const pinned = usePinned();
    const { scrollYProgress } = useScroll({ target: track, offset: ["start start", "end end"] });

    const heading = (
        <Grid.VStack gap={6}>
            <SectionLabel>What We Help You With</SectionLabel>
            <h2 className={styles.title}>Support When You Need It</h2>
            <Text variant="body" color="muted" className={styles.lead}>
                Good support isn't just about fixing problems—it's about preventing them,
                keeping things updated, and making sure your system continues to work as it should.
            </Text>
        </Grid.VStack>
    );

    return (
        <Section id="what-we-help-you-with" spacing="none" className={cn(styles.section, pinned && styles.pinned)}>
            <div ref={track} className={pinned ? styles.track : undefined}>
                <div className={pinned ? styles.stage : undefined}>
                    <Wrapper.Body className={styles.container}>
                        <Grid cols={{ base: 1, md: 12 }} gap={{ base: 10, md: 16 }}>

                            <Grid.Item span={{ base: 1, md: 5 }}>
                                {heading}
                            </Grid.Item>

                            <Grid.Item span={{ base: 1, md: 7 }}>
                                {pinned ? (
                                    <div className={styles.pile}>
                                        {items.map((item, index) =>
                                            index === 0 ? (
                                                <motion.article
                                                    key={item.title}
                                                    className={cn(styles.card, styles.stacked)}
                                                    style={{ zIndex: 1 }}>
                                                    <CardContent index={index} {...item} />
                                                </motion.article>
                                            ) : (
                                                <ThrownCard key={item.title} item={item} index={index} progress={scrollYProgress} />
                                            )
                                        )}
                                    </div>
                                ) : (
                                    <Grid.VStack gap={4}>
                                        {items.map((item, index) => (
                                            <article key={item.title} className={styles.card}>
                                                <CardContent index={index} {...item} />
                                            </article>
                                        ))}
                                    </Grid.VStack>
                                )}
                            </Grid.Item>
                        </Grid>
                    </Wrapper.Body>
                </div>
            </div>
        </Section>
    );
}

export default WeHelpYou;