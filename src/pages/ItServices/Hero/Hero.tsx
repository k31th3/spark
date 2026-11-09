import { Image, Text, Section, Wrapper } from "@/components";
import { HeroGraphics } from "@/assets/ItServices"; // TODO: swap for the circuit-board photo from Figma
import { FiArrowDown } from "react-icons/fi";
import { LuActivity, LuZap, LuShieldCheck } from "react-icons/lu";

import { SectionLabel, IconTile, HelpButton, SECTION_FIRST, CONTAINER } from "../Shared";

const features = [
    { title: "Proactive Monitoring", text: "We catch issues before they slow your team down.", icon: LuActivity },
    { title: "Fast Response", text: "Real people on your ticket, fast.", icon: LuZap },
    { title: "Secure by Design", text: "Security built into every system we run.", icon: LuShieldCheck }
];

function Hero() {
    return (
        <Section spacing="none" className={SECTION_FIRST}>
<Wrapper.Body className={CONTAINER}>
<div className="vstack items-center gap-8">

            <div className="flex w-full items-center justify-between">
                <SectionLabel>Services</SectionLabel>
                <a href="#core-services" className="inline-flex items-center gap-1 text-[11px] text-muted">
                    (Scroll down) <FiArrowDown />
                </a>
            </div>

            <div className="vstack items-center gap-5 text-center">
                <h1 className="text-5xl font-medium leading-[1.05] sm:text-7xl lg:text-8xl tracking-[-0.035em] text-foreground">Info-Tech Services</h1>
                <Text variant="bodySmall" color="muted" className="max-w-xl sm:text-base">
                    Reliable, secure, and scalable IT services that keep your business
                    running smoothly, so you can focus on what matters.
                </Text>
                <HelpButton className="justify-center" primary="brand" />
            </div>

            <Image
                src={HeroGraphics}
                alt="Technician installing a network card into a server rack"
                loading="eager"
                fetchPriority="high"
                wrapperClassName="w-full aspect-[4/3] sm:aspect-[16/9] overflow-hidden rounded-3xl"
                className="h-full w-full object-cover" />

            <ul className="grid w-full grid-cols-1 gap-8 pt-2 sm:grid-cols-3">
                {features.map(({ title, text, icon }) => (
                    <li key={title} className="vstack items-center gap-2 text-center">
                        <IconTile icon={icon} />
                        <h3 className="text-2xl font-medium tracking-[-0.02em] text-foreground">{title}</h3>
                        <Text variant="body" color="muted" className="max-w-[280px]">{text}</Text>
                    </li>
                ))}
            </ul>
        </div>
</Wrapper.Body>
</Section>
    );
}

export default Hero;