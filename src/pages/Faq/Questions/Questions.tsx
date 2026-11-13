import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { LuPlus } from "react-icons/lu";

import { Grid, Section, Text, Wrapper } from "@/components";

import type { ClientQuestions } from "../clientQuestions";
import { escapeRegExp, makeId } from "../Faq.helpers";
import styles from "./Questions.module.css";

interface Props {
    groups: ClientQuestions[];
    open: string | null;
    onToggle: (id: string) => void;
    search: string;
}

const EASE = [0.22, 1, 0.36, 1] as const;

function highlight(text: string, search: string) {
    const term = search.trim();
    if (!term) return text;

    return text
        .split(new RegExp(`(${escapeRegExp(term)})`, "gi"))
        .map((part, index) =>
            part.toLowerCase() === term.toLowerCase()
                ? <mark key={index} className={styles.mark}>{part}</mark>
                : part
        );
}

function Questions({ groups, open, onToggle, search }: Props) {
    const reduce = useReducedMotion();

    return (
        <Section id="faq-list" spacing="none" className={styles.section}>
            <Wrapper.Body className={styles.container}>
                {groups.length === 0 ? (
                    <div className={styles.empty}>
                        <Text variant="bodySmall" color="muted">No matching questions found.</Text>
                    </div>
                ) : (
                    <Grid.VStack gap={12}>
                        {groups.map(group => (
                            <section key={group.title}>
                                <h2 className={styles.groupTitle}>{group.title}</h2>

                                <div className={styles.list}>
                                    {group.frequently.map(item => {
                                        const id = makeId(group.title, item.question);
                                        const dom = id.replace(/\W+/g, "-");
                                        const isOpen = open === id;

                                        return (
                                            <div key={id} className={styles.row}>
                                                <h3 className={styles.heading}>
                                                    <button
                                                        type="button"
                                                        id={`${dom}-button`}
                                                        aria-expanded={isOpen}
                                                        aria-controls={`${dom}-panel`}
                                                        onClick={() => onToggle(id)}
                                                        className={styles.trigger}>
                                                        <span className={styles.question}>
                                                            {highlight(item.question, search)}
                                                        </span>
                                                        <motion.span
                                                            aria-hidden="true"
                                                            animate={{ rotate: isOpen ? 45 : 0 }}
                                                            transition={{ duration: reduce ? 0 : 0.3, ease: EASE }}
                                                            className={styles.icon}>
                                                            <LuPlus size={20} />
                                                        </motion.span>
                                                    </button>
                                                </h3>

                                                <AnimatePresence initial={false}>
                                                    {isOpen && (
                                                        <motion.div
                                                            key="panel"
                                                            id={`${dom}-panel`}
                                                            role="region"
                                                            aria-labelledby={`${dom}-button`}
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{
                                                                height: { duration: reduce ? 0 : 0.4, ease: EASE },
                                                                opacity: { duration: reduce ? 0 : 0.25, delay: reduce ? 0 : 0.05 }
                                                            }}
                                                            className={styles.panel}>
                                                            <div className={styles.answer}>
                                                                <Text variant="body" color="muted" className={styles.answerText}>
                                                                    {item.answer
                                                                        ? highlight(item.answer, search)
                                                                        : "Answer coming soon."}
                                                                </Text>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        );
                                    })}
                                </div>
                            </section>
                        ))}
                    </Grid.VStack>
                )}
            </Wrapper.Body>
        </Section>
    );
}

export default Questions;