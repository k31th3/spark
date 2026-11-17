import { FiArrowDown } from "react-icons/fi";

import { Grid, Image, Section, Text, Wrapper } from "@/components";
import { TosHero } from "@/assets/TOS";

import { SectionLabel } from "../Shared";
import styles from "./Hero.module.css";

function Hero() {
    return (
        <Section spacing="none" className={styles.section}>
            <Wrapper.Body className={styles.container}>
                <Grid.VStack gap={8} align="center">

                    <Grid.HStack justify="between" align="center" className={styles.topRow}>
                        <SectionLabel>Legal</SectionLabel>
                        <a href="#terms" className={styles.scrollHint}>
                            (Scroll down) <FiArrowDown />
                        </a>
                    </Grid.HStack>

                    <Grid.VStack gap={5} align="center" className={styles.heading}>
                        <h1 className={styles.title}>Terms of Service</h1>
                        <Text variant="body" color="muted" className={styles.subtitle}>
                            These Terms of Service outline the rules, responsibilities, and guidelines for using
                            SIT website, services, and digital products. By using our services, you agree to these terms.
                        </Text>
                    </Grid.VStack>

                    <Image
                        src={TosHero}
                        alt="Gradient document icon"
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