
import { FiArrowRight } from "react-icons/fi";
import { LuShieldCheck } from "react-icons/lu";

import { Grid, Form, Button, Toast,
    Text, Icon, Turnstile, type TurnstileRef } from "@/components";

import { FormFields } from "./FormFields";
import { useContactForm } from "./useContactForm";

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

        submitForm(turnstileToken);
    };

    return (
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
                                    variant="gradient"
                                    size="sm"
                                    className="rounded-md gap-2 mb-2 min-w-[140px]"
                                    disabled={isSubmitting || !turnstileToken}>
                                    {isSubmitting
                                        ? <div className="size-5 animate-spin rounded-full border-5 border-white/30 border-t-white" />
                                        : "Send Message"}

                                    {!isSubmitting && (
                                        <Icon
                                            icon={FiArrowRight}
                                            size="sm"
                                            variant="light"
                                        />
                                    )}
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
    );
}

export default ContactForm;
