import { useCallback, useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Button, Grid, Image, Reveal, Section, Text, Wrapper } from "@/components";

import { CtaButtons, LinkButton } from "@/pages/CloudSolutions/Shared";
import { Offers } from "./WhatWeOffer.data";
import styles from "./WhatWeOffer.module.css";

const GAP = 16;

function WhatWeOffer() {
    const scroller = useRef<HTMLDivElement>(null);
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);

    const update = useCallback(() => {
        const el = scroller.current;
        if (!el) return;
        setAtStart(el.scrollLeft <= 2);
        setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2);
    }, []);

    useEffect(() => {
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, [update]);

    const scrollByCard = (direction: 1 | -1) => {
        const el = scroller.current;
        if (!el) return;
        const card = el.querySelector<HTMLElement>("[data-card]");
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        el.scrollBy({
            left: direction * ((card?.offsetWidth ?? 400) + GAP),
            behavior: reduce ? "auto" : "smooth"
        });
    };

    return (
        <Section id="what-we-offer" background="dark" spacing="none" className={styles.section}>

            <Wrapper.Body className={styles.container}>
                <Reveal variant="slide">
                    <Grid cols={{ base: 12 }} gap={8} className={styles.header}>
                        <Grid.Item span={{ base: 12, md: 7 }}>
                            <Grid.VStack gap={6}>
                                <Text as="span" variant="label" color="white" className={styles.eyebrow}>
                                    (What We Offer)
                                </Text>
                                <h2 className={styles.title}>
                                    Cloud Solutions<br />Built for Your Business
                                </h2>
                                <Text variant="body" color="white" className={styles.lead}>
                                    From migration to management, we deliver end-to-end cloud services
                                    tailored to help your business grow with confidence.
                                </Text>
                            </Grid.VStack>
                        </Grid.Item>

                        <Grid.Item span={{ base: 12, md: 5 }} className={styles.actions}>
                            <CtaButtons tone="light" />
                        </Grid.Item>
                    </Grid>
                </Reveal>
            </Wrapper.Body>

            {/* Full-width scroller: not infinite, snaps card by card */}
            <div
                ref={scroller}
                onScroll={update}
                role="region"
                aria-label="Cloud services"
                tabIndex={0}
                className={styles.scroller}>
                {Offers.map(({ title, description, image }) => (
                    <article
                        key={title}
                        data-card
                        className={styles.card}>
                        <Image
                            src={image}
                            alt=""
                            wrapperClassName={styles.frame}
                            className={styles.image} />

                        <Grid.VStack gap={8} justify="between" className={styles.body}>
                            <Grid.VStack gap={3}>
                                <h3 className={styles.name}>
                                    {title}
                                </h3>
                                <Text variant="bodySmall" color="white" className={styles.description}>
                                    {description}
                                </Text>
                            </Grid.VStack>
                            <div>
                                <LinkButton to="/contact-us" variant="light" size="sm" roll>
                                    Learn More
                                </LinkButton>
                            </div>
                        </Grid.VStack>
                    </article>
                ))}
            </div>

            <Wrapper.Body className={styles.container}>
                <Grid.HStack gap={3} justify="end" className={styles.controls}>
                    <Button
                        variant="light"
                        size="sm"
                        aria-label="Previous"
                        disabled={atStart}
                        onClick={() => scrollByCard(-1)}
                        className={styles.arrow}
                        icon={<FiChevronLeft size={20} />} />
                    <Button
                        variant="light"
                        size="sm"
                        aria-label="Next"
                        disabled={atEnd}
                        onClick={() => scrollByCard(1)}
                        className={styles.arrow}
                        icon={<FiChevronRight size={20} />} />
                </Grid.HStack>
            </Wrapper.Body>
        </Section>
    );
}

export default WhatWeOffer;