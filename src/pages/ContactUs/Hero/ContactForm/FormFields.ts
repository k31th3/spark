interface FieldSpan {
    base: number;
    lg?: number;
    md?: number;
    sm?: number;
}

interface FormField {
    type: "input" | "textarea";
    name: string;
    id: string;
    label?: string;
    placeholder?: string;
    inputType?: "text" | "email" | "number" | "tel" | "password";
    span: FieldSpan;
}

export const FormFields: FormField[] = [
    {
        type: "input",
        name: "full_name",
        id: "fullname",
        label: "Full Name",
        span: { base: 12, lg: 6, md: 6, sm: 6 }
    },
    {
        type: "input",
        inputType: "email",
        name: "email_address",
        id: "emailAddress",
        label: "Email Address",
        span: { base: 12, lg: 6, md: 6, sm: 6 }
    },
    {
        type: "input",
        name: "company_name",
        id: "companyName",
        label: "Company Name",
        span: { base: 12, lg: 6, md: 6, sm: 6 }
    },
    {
        type: "input",
        name: "phone_number",
        id: "phoneNumber",
        label: "Phone number",
        span: { base: 12, lg: 6, md: 6, sm: 6 }
    },
    {
        type: "textarea",
        name: "message",
        id: "message",
        placeholder: "Tell us about your project or inquiry...",
        span: { base: 12 }
    }
];
