export interface FrequentlyAskedQuestion {
    question: string;
    answer: string;
}

export interface ClientQuestions {
    title: string;
    frequently: FrequentlyAskedQuestion[];
}

export const clientQuestions: ClientQuestions[] = [
    {
        title: "General",
        frequently: [
            { question: "What is SIT?", answer: "SIT is a software company that provides..." },
            { question: "Who can use SIT?", answer: "" },
            { question: "What makes SIT different?", answer: "" },
            { question: "Is SIT available worldwide?", answer: "" },
        ]
    },
    {
        title: "Services",
        frequently: [
            { question: "What services does SIT offer?", answer: "" },
            { question: "How does the process work?", answer: "" },
            { question: "Can I customize a service for my business?", answer: "" },
            { question: "Do you offer support?", answer: "" },
        ]
    },
    {
        title: "Account & Billing",
        frequently: [
            { question: "How do I create an account?", answer: "" },
            { question: "What payment methods do you accept?", answer: "" },
            { question: "Can I change or cancel my plan?", answer: "" },
            { question: "Is there a refund policy?", answer: "" },
        ]
    }
];