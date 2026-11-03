import { LuShieldCheck } from "react-icons/lu";

import { Button, Form, Toast, Turnstile } from "@/components";

import type { ContactFormData } from "./Hero/ContactForm/ContactApi";
import { FormFields } from "./Hero/ContactForm/FormFields";
import { useContactForm } from "./Hero/ContactForm/useContactForm";

import styles from "./ContactUs.module.css";

/* =========================================================
   CONTACT FORM
========================================================= */

function ContactForm() {
    const {
        formData,
        isSubmitting,
        turnstileToken,
        turnstileRef,
        setTurnstileToken,
        handleChange,
        submitForm,
    } = useContactForm();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isSubmitting) return;

        if (!turnstileToken) {
            Toast.error("Please complete the verification to continue.");
            return;
        }

        submitForm(turnstileToken);
    };

    return (
        <Form
            autoComplete="off"
            onSubmit={handleSubmit}
            className={styles.card}
        >
            <div className={styles.fields}>
                {FormFields.map((field) => {
                    const value =
                        formData[field.name as keyof ContactFormData];

                    return (
                        <div
                            key={field.id}
                            className={
                                field.type === "textarea"
                                    ? styles.fieldFull
                                    : undefined
                            }
                        >
                            {field.type === "textarea" ? (
                                <Form.Textarea
                                    name={field.name}
                                    id={field.id}
                                    aria-label="Message"
                                    placeholder={field.placeholder}
                                    required={field.required}
                                    value={value}
                                    onChange={handleChange}
                                    className="rounded-xl"
                                />
                            ) : (
                                <Form.Input
                                    type={field.inputType}
                                    name={field.name}
                                    id={field.id}
                                    label={field.label}
                                    required={field.required}
                                    floating="top"
                                    value={value}
                                    onChange={handleChange}
                                    className="rounded-xl"
                                />
                            )}
                        </div>
                    );
                })}
            </div>

            <div className={styles.footerRow}>
                <Turnstile
                    ref={turnstileRef}
                    siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
                    action="contact"
                    theme="light"
                    onSuccess={(token) => setTurnstileToken(token)}
                    onError={() => {
                        setTurnstileToken("");
                        turnstileRef.current?.reset();
                    }}
                    onExpire={() => {
                        setTurnstileToken("");
                        turnstileRef.current?.reset();
                    }}
                />

                <Button
                    type="submit"
                    variant="brand"
                    size="hero"
                    roll={!isSubmitting}
                    arrow={!isSubmitting}
                    disabled={isSubmitting || !turnstileToken}
                    className={styles.submit}
                >
                    {isSubmitting ? (
                        <>
                            <span
                                aria-hidden="true"
                                className={styles.spinner}
                            />
                            Sending
                        </>
                    ) : (
                        "Send message"
                    )}
                </Button>
            </div>

            <p className={styles.privacy}>
                <LuShieldCheck aria-hidden="true" size={14} />
                We respect your privacy. Your information will never be
                shared.
            </p>
        </Form>
    );
}

export default ContactForm;