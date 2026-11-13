"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Wrapper } from "@/components";

import { clientQuestions } from "./clientQuestions";
import { CATEGORY_ALL, filterQuestions, makeId } from "./Faq.helpers";
import { Hero, Questions } from "./";

const categories = [CATEGORY_ALL, ...clientQuestions.map(group => group.title)];

function Faq() {
    const [searchParams, setSearchParams] = useSearchParams();

    const [search, setSearch] = useState(() => searchParams.get("search") ?? "");
    const [category, setCategory] = useState(CATEGORY_ALL);

    const [open, setOpen] = useState<string | null>(null);

    const groups = useMemo(
        () => filterQuestions(clientQuestions, search, category),
        [search, category]
    );

    const handleSearch = (value: string) => {
        setSearch(value);
        setSearchParams(value ? { search: value } : {}, { replace: true });

        const first = filterQuestions(clientQuestions, value, category)[0];
        const item = first?.frequently[0];
        setOpen(value.trim() && item ? makeId(first.title, item.question) : null);
    };

    const handleCategory = (value: string) => {
        setCategory(value);
        setOpen(null);
    };

    return (
        <Wrapper title="Frequently asked questions" path="frequently-asked-questions">
            <Hero
                categories={categories}
                category={category}
                onCategory={handleCategory}
                search={search}
                onSearch={handleSearch} />

            <Questions
                groups={groups}
                open={open}
                onToggle={id => setOpen(current => (current === id ? null : id))}
                search={search} />
        </Wrapper>
    );
}

export default Faq;