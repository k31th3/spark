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
    `${import.meta.env.VITE_CONTACT_WEBHOOK_URL}/sitLandingPageContactUs`;

export async function submitContactForm(
    formData: ContactFormData
): Promise<ContactResponse> {
    const response = await fetch(CONTACT_WEBHOOK_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });

    let data: ContactResponse;

    try {
        data = await response.json();
    } catch {
        throw new Error("Invalid response from server.");
        
    }

    if (!response.ok || !data.success) {
        throw new Error(
            data.message || "Something went wrong."
        );
    }

    return data;
}
