import { Grid, Image, Text, Section, Wrapper } from "@/components";
import { Hero as HeroGraphic } from "@/assets/SupportAndMaintenance";
import { FiArrowDown } from "react-icons/fi";

import { SectionLabel, CtaButtons } from "../Shared";
import ServicesHighlights from "../ServicesHighlights";
import styles from "./Hero.module.css";

function Hero() {
    return (
        <Section spacing="none" className={styles.section}>
            <Wrapper.Body className={styles.container}>
                <Grid.VStack gap={8} align="center">

                    <Grid.HStack justify="between" align="center" className={styles.topRow}>
                        <SectionLabel>Services</SectionLabel>
                        <a href="#what-we-help-you-with" className={styles.scrollHint}>
                            (Scroll down) <FiArrowDown />
                        </a>
                    </Grid.HStack>

                    <Grid.VStack gap={5} align="center" className={styles.heading}>
                        <h1 className={styles.title}>Support and Maintenance</h1>
                        <Text variant="bodySmall" color="muted" className={styles.subtitle}>
                            From everyday maintenance to unexpected technical issues, we provide the
                            support you need to keep your systems running smoothly.
                        </Text>
                        <CtaButtons tone="brand" primaryLabel="Get Support" className="justify-center" />
                    </Grid.VStack>

                    <Image
                        src={HeroGraphic}
                        alt="Gradient hard hat with a wrench"
                        loading="eager"
                        fetchPriority="high"
                        wrapperClassName={styles.graphic}
                        className={styles.graphicImage} />

                    <ServicesHighlights />
                </Grid.VStack>
            </Wrapper.Body>
        </Section>
    );
}

export default Hero;