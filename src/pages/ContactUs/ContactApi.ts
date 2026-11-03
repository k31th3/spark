export interface ContactFormData {
    full_name: string;
    email_address: string;
    company_name: string;
    phone_number: string;
    message: string;
}

export interface ContactResponse {
    success: boolean;
    message: string;
}

const CONTACT_WEBHOOK_URL =
    `${import.meta.env.VITE_CONTACT_WEBHOOK_URL}/spark/ContactUs`;

export async function submitContactForm(
    formData: ContactFormData,
    turnstileToken: string
): Promise<ContactResponse> {
    const response = await fetch(CONTACT_WEBHOOK_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            fullName: formData.full_name,
            emailAddress: formData.email_address,
            companyName: formData.company_name,
            phoneNumber: formData.phone_number,
            message: formData.message,
            turnstileToken
        })
    });

    let data: ContactResponse;

    try {
        data = await response.json();
    } catch {
        if (response.status === 429) {
            throw new Error(
                "Too many requests. Please try again later."
            );
        }

        throw new Error("Invalid response from server.");
    }

    if (response.status === 429) {
        throw new Error(
            "Too many requests. Please try again later."
        );
    }

    if (!response.ok || !data.success) {
        throw new Error(
            data.message || "Please check your information."
        );
    }

    return data;
}
