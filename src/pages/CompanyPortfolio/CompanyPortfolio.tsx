"use client";

import { useMemo, useState } from "react";

import { Wrapper } from "@/components";

import { ALL, cards, tabs } from "./Content";
import { Hero, PortfolioGrid } from "./";

function CompanyPortfolio() {
    const [active, setActive] = useState<string>(ALL);

    const projects = useMemo(
        () => (active === ALL ? cards : cards.filter(card => card.category === active)),
        [active]
    );

    return (
        <Wrapper title="Company Portfolio" path="company-portfolio">
            <Hero tabs={tabs} active={active} onChange={setActive} />
            <PortfolioGrid projects={projects} />
        </Wrapper>
    );
}

export default CompanyPortfolio;