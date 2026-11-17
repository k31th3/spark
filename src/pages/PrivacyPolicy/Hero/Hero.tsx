import { FiArrowDown } from "react-icons/fi";

import { Grid, Image, Section, Text, Wrapper } from "@/components";
import { PrivacyHero } from "@/assets/PrivacyPolicy";

import { SectionLabel } from "../Shared";
import styles from "./Hero.module.css";

function Hero() {
    return (
        <Section spacing="none" className={styles.section}>
            <Wrapper.Body className={styles.container}>
                <Grid.VStack gap={8} align="center">

                    <Grid.HStack justify="between" align="center" className={styles.topRow}>
                        <SectionLabel>Legal</SectionLabel>
                        <a href="#policy" className={styles.scrollHint}>
                            (Scroll down) <FiArrowDown />
                        </a>
                    </Grid.HStack>

                    <Grid.VStack gap={5} align="center" className={styles.heading}>
                        <h1 className={styles.title}>Privacy Policy</h1>
                        <Text variant="body" color="muted" className={styles.subtitle}>
                            Your privacy is important to us. This policy explains how we collect,
                            use and protect your information.
                        </Text>
                    </Grid.VStack>

                    <Image
                        src={PrivacyHero}
                        alt="Gradient padlock"
                        loading="eager"
                        fetchPriority="high"
                        wrapperClassName={styles.graphic}
                        className={styles.graphicImage} />
                </Grid.VStack>
            </Wrapper.Body>
        </Section>
    );
}

export default Hero;