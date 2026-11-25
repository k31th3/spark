import { useState } from "react";

import { LuShieldCheck } from "react-icons/lu";

import { Grid, Form, Button, Toast,
    Text, Icon, Turnstile } from "@/components";

import { FormFields } from "./Hero/ContactForm/FormFields";
import { useContactForm } from "./Hero/ContactForm/useContactForm";

import ContactReview, { type ReviewRow } from "./ContactReview";
import ContactSuccess from "./ContactSuccess";

type Field = (typeof FormFields)[number];

/* Label shown in the review list: the field label, else its placeholder */
function labelOf(field: Field): string {
    if ("label" in field && typeof field.label === "string") return field.label;
    if ("placeholder" in field && typeof field.placeholder === "string") return field.placeholder;
    return String(field.name);
}

function ContactForm() {

    const {
        formData,
        isSubmitting,
        turnstileToken,
        turnstileRef,
        setTurnstileToken,
        handleChange,
        submitForm
    } = useContactForm();

    const [reviewOpen, setReviewOpen] = useState(false);
    const [sentOpen, setSentOpen] = useState(false);

    /* ----- step 1: the form is submitted -> show the review modal ----- */
    const handleSubmit = (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        if (isSubmitting) {
            return;
        }

        if (!turnstileToken) {
            Toast.error(
                "Please check the box above to continue."
            );
            return;
        }

        setReviewOpen(true);
    };

    /* ----- step 2: confirmed in the modal -> really send ----- */
    const handleConfirm = async () => {
        if (isSubmitting || !turnstileToken) return;

        /* ASSUMPTION: submitForm resolves to `true` when the message was sent.
           If useContactForm doesn't return that yet, see the note in the chat. */
        const sent = (await submitForm(turnstileToken)) as unknown;

        /* a Turnstile token can only be used once */
        setTurnstileToken("");
        turnstileRef.current?.reset();

        setReviewOpen(false);

        if (sent === true) {
            setSentOpen(true);
        }
    };

    const reviewRows: ReviewRow[] = FormFields.map((field) => ({
        id: field.id,
        label: labelOf(field),
        value: String(formData[field.name] ?? "").trim()
    }));

    return (
        <>
            <Form
                    autoComplete="off"
                    onSubmit={handleSubmit}>

                <Grid cols={{ base: 12 }} gap={4} >

                    {FormFields.map((field) => (
                        <Grid.Item key={field.id} span={field.span} >
                            {field.type === "textarea" ? (
                                <Form.Textarea
                                    name={field.name}
                                    id={field.id}
                                    placeholder={field.placeholder}
                                    required={field.required}
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                    className="rounded-md"
                                />
                            ) : (
                                <Form.Input
                                    type={field.inputType}
                                    name={field.name}
                                    id={field.id}
                                    label={field.label}
                                    required={field.required}
                                    floating="top"
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                    className="rounded-md"
                                />
                            )}
                        </Grid.Item>
                    ))}

                    <Grid.Item span={{ base: 12 }}>
                        <Grid cols={{ base: 12 }} gap={4} >
                            <Grid.Item span={{ base: 12, lg: 6, md: 6, sm: 6 }}>
                            <Turnstile
                                ref={turnstileRef}
                                siteKey={
                                    import.meta.env.VITE_TURNSTILE_SITE_KEY
                                }
                                action="contact"
                                theme="light"
                                onSuccess={(token) => {
                                    setTurnstileToken(token);
                                }}
                                onError={() => {
                                    setTurnstileToken("");
                                    turnstileRef.current?.reset();
                                }}
                                onExpire={() => {
                                    setTurnstileToken("");
                                    turnstileRef.current?.reset();
                                }}
                            />
                            </Grid.Item>

                            <Grid.Item span={{ base: 12, lg: 6, md: 6, sm: 6 }}>
                                <div className="text-end">
                                    <Button
                                        type="submit"
                                        variant="brand"
                                        size="sm"
                                        roll
                                        arrow
                                        className="gap-2 mb-2 min-w-[140px]"
                                        disabled={isSubmitting || !turnstileToken}>
                                        Send Message
                                    </Button>
                                </div>
                            </Grid.Item>
                        </Grid>

                        <Grid.HStack gap={2} align="center">
                            <Icon icon={LuShieldCheck} size="sm" />

                            <Text variant="label">
                                We respect your privacy.
                                Your information will
                                never be shared
                            </Text>
                        </Grid.HStack>
                    </Grid.Item>
                </Grid>
            </Form>

            <ContactReview
                open={reviewOpen}
                rows={reviewRows}
                isSubmitting={isSubmitting}
                onClose={() => setReviewOpen(false)}
                onConfirm={handleConfirm} />

            <ContactSuccess
                open={sentOpen}
                onClose={() => setSentOpen(false)} />
        </>
    );
}

export default ContactForm;