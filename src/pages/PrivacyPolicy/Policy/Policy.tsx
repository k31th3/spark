import type { ReactNode } from "react";
import { LuCalendar } from "react-icons/lu";

import { Grid, Reveal, Section, Text, Wrapper } from "@/components";

import { Contents, LAST_UPDATED } from "../Contents";
import styles from "./Policy.module.css";

const EMAIL = /([\w.+-]+@[\w-]+(?:\.[\w-]+)+)/g;

function linkEmails(text: string): ReactNode[] {
    return text.split(EMAIL).map((part, index) =>
        index % 2 === 1
            ? <a key={index} href={`mailto:${part}`} className={styles.link}>{part}</a>
            : part
    );
}

function Policy() {
    return (
        <Section id="policy" spacing="none" className={styles.section}>
            <Wrapper.Body className={styles.container}>
                <Reveal variant="slide">
                    <div className={styles.content}>
                        <Grid.VStack gap={14}>

                            <p className={styles.updated}>
                                <LuCalendar size={20} aria-hidden="true" />
                                Last updated: {LAST_UPDATED}
                            </p>

                            {Contents.map(({ title, text }, index) => (
                                <section key={title}>
                                    <Grid.VStack gap={4}>
                                        <h2 className={styles.title}>{index + 1}. {title}</h2>
                                        <Text variant="body" color="muted">{linkEmails(text)}</Text>
                                    </Grid.VStack>
                                </section>
                            ))}
                        </Grid.VStack>
                    </div>
                </Reveal>
            </Wrapper.Body>
        </Section>
    );
}

export default Policy;