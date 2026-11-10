import { Grid, Image, Text, Section, Wrapper } from "@/components";
import { HeroImg } from "@/assets/SystemIntegration";
import { FiArrowDown } from "react-icons/fi";

import { SectionLabel, CtaButtons } from "../Shared";
import FeatureHighlights from "../FeatureHighlights";
import styles from "./Hero.module.css";

function Hero() {
    return (
        <Section spacing="none" className={styles.section}>
            <Wrapper.Body className={styles.container}>
                <Grid.VStack gap={8} align="center">

                    <Grid.HStack justify="between" align="center" className={styles.topRow}>
                        <SectionLabel>Services</SectionLabel>
                        <a href="#what-we-integrate" className={styles.scrollHint}>
                            (Scroll down) <FiArrowDown />
                        </a>
                    </Grid.HStack>

                    <Grid.VStack gap={5} align="center" className={styles.heading}>
                        <h1 className={styles.title}>System Integration</h1>
                        <Text variant="bodySmall" color="muted" className={styles.subtitle}>
                            We integrate the right systems, applications, and technologies to help your
                            business operate as one seamless, efficient, and future-ready solution.
                        </Text>
                        <CtaButtons tone="brand" className="justify-center" />
                    </Grid.VStack>

                    <Image
                        src={HeroImg}
                        alt="Glowing app icons connected by a gradient"
                        loading="eager"
                        fetchPriority="high"
                        wrapperClassName={styles.graphic}
                        className={styles.graphicImage} />

                    <FeatureHighlights />
                </Grid.VStack>
            </Wrapper.Body>
        </Section>
    );
}

export default Hero;