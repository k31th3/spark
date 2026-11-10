import { Grid, Image, Text, Section, Wrapper } from "@/components";
import { HeroGraphics } from "@/assets/CloudSolutions";
import { FiArrowDown } from "react-icons/fi";

import { SectionLabel, CtaButtons } from "@/pages/CloudSolutions/Shared";
import FeatureHighlights from "../FeatureHighlights";
import styles from "./Hero.module.css";

function Hero() {
    return (
        <Section spacing="none" className={styles.section}>
            <Wrapper.Body className={styles.container}>
                <Grid.VStack gap={8} align="center">

                    <Grid.HStack justify="between" align="center" className={styles.topRow}>
                        <SectionLabel>Services</SectionLabel>
                        <a href="#what-we-offer" className={styles.scrollHint}>
                            (Scroll down) <FiArrowDown />
                        </a>
                    </Grid.HStack>

                    <Grid.VStack gap={5} align="center" className={styles.heading}>
                        <h1 className={styles.title}>Cloud Solutions</h1>
                        <Text variant="bodySmall" color="muted" className={styles.subtitle}>
                            Scalable. Secure. Reliable. Our cloud solutions help you innovate faster,
                            reduce costs, and stay ahead, wherever your business takes you.
                        </Text>
                        <CtaButtons tone="brand" className="justify-center" />
                    </Grid.VStack>

                    <Image
                        src={HeroGraphics}
                        alt="Spark logo rising above a cloud"
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