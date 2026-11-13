import type { ClientQuestions } from "./clientQuestions";

export const CATEGORY_ALL = "All";

export function makeId(group: string, question: string) {
    return `${group}-${question}`;
}

export function filterQuestions(
    groups: ClientQuestions[],
    search: string,
    category: string
): ClientQuestions[] {
    const term = search.trim().toLowerCase();

    return groups
        .filter(group => category === CATEGORY_ALL || group.title === category)
        .map(group => ({
            ...group,
            frequently: group.frequently.filter(item =>
                !term ||
                item.question.toLowerCase().includes(term) ||
                item.answer.toLowerCase().includes(term)
            )
        }))
        .filter(group => group.frequently.length > 0);
}

export function escapeRegExp(value: string) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}