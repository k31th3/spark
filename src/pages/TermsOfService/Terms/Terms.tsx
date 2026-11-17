import type { ReactNode } from "react";
import { LuCalendar } from "react-icons/lu";

import { Grid, Reveal, Section, Text, Wrapper } from "@/components";

import { Contents } from "../Contents";
import styles from "./Terms.module.css";

const LAST_UPDATED = "November 16, 2026";

/* =========================================================
   CONTENT PARSING
========================================================= */

type Block =
    | { type: "p"; text: string }
    | { type: "ol"; items: string[] };

function toBlocks(lines: string[]): Block[] {
    const blocks: Block[] = [];

    for (const line of lines) {
        const item = line.match(/^\d+\.\s+(.*)$/);

        if (item) {
            const last = blocks[blocks.length - 1];
            if (last?.type === "ol") last.items.push(item[1]);
            else blocks.push({ type: "ol", items: [item[1]] });
        } else {
            blocks.push({ type: "p", text: line });
        }
    }

    return blocks;
}

const TOKEN = /(\*\*\*[^*]+\*\*\*|\*\*[^*]+\*\*|\*[^*]+\*|https?:\/\/\S+)/g;

function inline(text: string): ReactNode[] {
    return text.split(TOKEN).map((part, index) => {
        if (part.length > 6 && part.startsWith("***") && part.endsWith("***"))
            return <strong key={index}><em>{part.slice(3, -3)}</em></strong>;

        if (part.length > 4 && part.startsWith("**") && part.endsWith("**"))
            return <strong key={index}>{part.slice(2, -2)}</strong>;

        if (part.length > 2 && part.startsWith("*") && part.endsWith("*"))
            return <em key={index}>{part.slice(1, -1)}</em>;

        if (/^https?:\/\//.test(part))
            return (
                <a key={index} href={part} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    {part}
                </a>
            );

        return part;
    });
}

/* =========================================================
   TERMS
========================================================= */

function Terms() {
    return (
        <Section id="terms" spacing="none" className={styles.section}>
            <Wrapper.Body className={styles.container}>
                <div className={styles.content}>
                    <Grid.VStack gap={14}>

                        <p className={styles.updated}>
                            <LuCalendar size={20} aria-hidden="true" />
                            Last updated: {LAST_UPDATED}
                        </p>

                        {Contents.map(({ title, description, email }, index) => (
                            <Reveal key={title} variant="slide">
                                <section>
                                    <Grid.VStack gap={4}>
                                        <h2 className={styles.title}>{index + 1}. {title}</h2>

                                        {toBlocks(description).map((block, i) =>
                                            block.type === "ol" ? (
                                                <ol key={i} className={styles.list}>
                                                    {block.items.map(item => (
                                                        <li key={item}>{inline(item)}</li>
                                                    ))}
                                                </ol>
                                            ) : (
                                                <Text key={i} variant="body" color="muted" className={styles.text}>
                                                    {inline(block.text)}
                                                </Text>
                                            )
                                        )}

                                        {email && (
                                            <Text variant="body" color="muted">
                                                Email:{" "}
                                                <a href={`mailto:${email}`} className={styles.link}>{email}</a>
                                            </Text>
                                        )}
                                    </Grid.VStack>
                                </section>
                            </Reveal>
                        ))}
                    </Grid.VStack>
                </div>
            </Wrapper.Body>
        </Section>
    );
}

export default Terms;