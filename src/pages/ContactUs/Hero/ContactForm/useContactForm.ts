import { useState } from "react";

import { Toast } from "@/components";

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
    const [formData, setFormData] =
        useState<ContactFormData>(initialFormData);

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

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        if (isSubmitting) {
            return;
        }

        setIsSubmitting(true);

        try {
            const payload = {
                ...formData,
                phone_number: getCleanPhoneNumber(
                    formData.phone_number
                ),
                email_address: formatEmail(
                    formData.email_address
                ),
            };

            const data = await submitContactForm(payload);

            Toast.success(data.message);

            setFormData(initialFormData);
        } catch (error) {
            Toast.error(
                error instanceof Error
                    ? error.message
                    : "Unable to send your message. Please try again."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        formData,
        isSubmitting,
        handleChange,
        handleSubmit
    };
}
