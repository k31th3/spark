import { AnimatePresence, motion } from "motion/react";
import { FiArrowDown } from "react-icons/fi";
import { IoClose, IoSearch } from "react-icons/io5";

import { Button, Grid, Icon, Section, Text, Wrapper } from "@/components";

import { SectionLabel } from "../Shared";
import styles from "./Hero.module.css";

interface Props {
    categories: string[];
    category: string;
    onCategory: (category: string) => void;
    search: string;
    onSearch: (value: string) => void;
}

function Hero({ categories, category, onCategory, search, onSearch }: Props) {
    return (
        <Section spacing="none" className={styles.section}>
            <Wrapper.Body className={styles.container}>
                <Grid.VStack gap={8} align="center">

                    <Grid.HStack justify="between" align="center" className={styles.topRow}>
                        <SectionLabel>FAQ</SectionLabel>
                        <a href="#faq-list" className={styles.scrollHint}>
                            (Scroll down) <FiArrowDown />
                        </a>
                    </Grid.HStack>

                    <Grid.VStack gap={5} align="center" className={styles.heading}>
                        <h1 className={styles.title}>
                            Frequently Asked<br />Questions
                        </h1>
                        <Text variant="bodySmall" color="muted" className={styles.subtitle}>
                            Find answers to the common questions about SIT and our services.
                        </Text>
                    </Grid.VStack>

                    {/* Categories */}
                    <Grid.HStack gap={3} justify="center" className={styles.chips}>
                        {categories.map(name => (
                            <Button
                                key={name}
                                variant={name === category ? "dark" : "outline"}
                                size="nav"
                                aria-pressed={name === category}
                                className={name === category ? undefined : "bg-white"}
                                onClick={() => onCategory(name)}>
                                {name}
                            </Button>
                        ))}
                    </Grid.HStack>

                    {/* Search */}
                    <div className={styles.search}>
                        <input
                            id="search"
                            name="search"
                            type="text"
                            autoComplete="off"
                            aria-label="Search questions"
                            placeholder="Looking for something?"
                            value={search}
                            onChange={event => onSearch(event.target.value)}
                            className={styles.input} />

                        <div className={styles.iconSlot}>
                            <AnimatePresence mode="wait" initial={false}>
                                {search ? (
                                    <motion.button
                                        key="clear"
                                        type="button"
                                        aria-label="Clear search"
                                        onClick={() => onSearch("")}
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.5 }}
                                        transition={{ duration: 0.2 }}
                                        className={styles.clear}>
                                        <Icon icon={IoClose} aria-hidden="true" variant="primary" size="sm" />
                                    </motion.button>
                                ) : (
                                    <motion.div
                                        key="search"
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.5 }}
                                        transition={{ duration: 0.2 }}>
                                        <Icon icon={IoSearch} aria-hidden="true" size="sm" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </Grid.VStack>
            </Wrapper.Body>
        </Section>
    );
}

export default Hero;