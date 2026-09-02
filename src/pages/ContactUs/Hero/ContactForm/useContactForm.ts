import { useRef, useState } from "react";

import {
    Toast,
    type TurnstileRef,
} from "@/components";

import {
    submitContactForm,
    type ContactFormData
} from "./ContactApi";

import {
    formatPhoneNumber,
    getCleanPhoneNumber,
    formatEmail
} from "./Formatters";

const initialFormData: ContactFormData = {
    full_name: "",
    email_address: "",
    company_name: "",
    phone_number: "",
    message: ""
};

export function useContactForm() {
    const turnstileRef =
        useRef<TurnstileRef>(null);

    const [formData, setFormData] =
        useState<ContactFormData>(initialFormData);

    const [turnstileToken, setTurnstileToken] =
        useState("");

    const [isSubmitting, setIsSubmitting] =
        useState(false);

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement
        >
    ) => {
        const { name, value } = e.target;

        let formattedValue = value;

        if (name === "phone_number") {
            formattedValue = formatPhoneNumber(value);
        }

        if (name === "email_address") {
            formattedValue = formatEmail(value);
        }

        setFormData((prev) => ({
            ...prev,
            [name]: formattedValue,
        }));
    };

    const submitForm = async (
        token: string
    ) => {
        if (isSubmitting || !token) {
            return;
        }

        setIsSubmitting(true);

        try {
            const payload: ContactFormData = {
                ...formData,
                phone_number: getCleanPhoneNumber(
                    formData.phone_number
                ),
                email_address: formatEmail(
                    formData.email_address
                ),
            };

            const data =
                await submitContactForm(
                    payload,
                    token
                );

            Toast.success(data.message);

            setFormData(initialFormData);
            setTurnstileToken("");

            turnstileRef.current?.reset();

        } catch (error) {
            Toast.error(
                error instanceof Error
                    ? error.message
                    : "Unable to send your message. Please try again."
            );

            // // Reset Turnstile if submission fails
            // setTurnstileToken("");
            // turnstileRef.current?.reset();

        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        formData,
        isSubmitting,
        turnstileToken,
        turnstileRef,
        setTurnstileToken,
        handleChange,
        submitForm
    };
}
