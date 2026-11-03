import { ToastContainer } from "react-toastify";

import { Reveal, Section, Wrapper } from "@/components";

import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";

import styles from "./ContactUs.module.css";

/* =========================================================
   CONTACT PAGE
========================================================= */

function Contact() {
    return (
        <Wrapper title="Contact Us" path="contact-us">
            <ToastContainer />

            <Section
                spacing="none"
                aria-labelledby="contact-heading"
                className={styles.page}
            >
                <Wrapper.Body className={styles.container}>

                    {/* =============================================
                        HEADER
                    ============================================= */}

                    <header className={styles.header}>
                        <Reveal variant="fade">
                            <span className={styles.eyebrow}>
                                <span
                                    aria-hidden="true"
                                    className={styles.eyebrowDot}
                                />
                                (Contact Us)
                            </span>
                        </Reveal>

                        <div className={styles.headline}>
                            <Reveal variant="slide" delay={100}>
                                <h1
                                    id="contact-heading"
                                    className={styles.title}
                                >
                                    How can we help you today?
                                </h1>
                            </Reveal>

                            <Reveal variant="slide" delay={200}>
                                <p className={styles.subtitle}>
                                    Tell us about your software or hardware
                                    project and we will get back to you
                                    within one business day.
                                </p>
                            </Reveal>
                        </div>
                    </header>

                    {/* =============================================
                        DETAILS + FORM
                    ============================================= */}

                    <div className={styles.body}>
                        <Reveal
                            variant="slide"
                            delay={150}
                            className={styles.detailsCol}
                        >
                            <ContactDetails />
                        </Reveal>

                        <Reveal
                            variant="slide"
                            delay={100}
                            className={styles.formCol}
                        >
                            <ContactForm />
                        </Reveal>
                    </div>

                    {/* =============================================
                        MAP
                    ============================================= */}

                    <ContactMap />

                </Wrapper.Body>
            </Section>
        </Wrapper>
    );
}

export default Contact;