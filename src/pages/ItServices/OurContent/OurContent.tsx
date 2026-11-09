import { FiSearch, FiCalendar, FiTrendingUp } from "react-icons/fi";
import { LuRocket } from "react-icons/lu";
import { Text, Section, Wrapper, Reveal } from "@/components";
import { SectionLabel, IconTile, HelpButton, SECTION, CONTAINER, SECTION_TITLE, SMALL_TITLE } from "@/pages/ItServices/Shared";

const steps = [
    { title: "Assess", icon: FiSearch, description: "We evaluate your environment, tools, and challenges." },
    { title: "Plan", icon: FiCalendar, description: "We design the right solution tailored to your goals." },
    { title: "Implement", icon: LuRocket, description: "We deploy, configure, and integrate with minimal disruption." },
    { title: "Optimize", icon: FiTrendingUp, description: "We monitor, improve, and keep your IT running at its best." }
];

function OurContent() {
    return (
        <Section spacing="none" className={SECTION}>
<Wrapper.Body className={CONTAINER}>
<Reveal variant="slide">
<div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">

            <div className="vstack gap-5">
                <SectionLabel>Our Approach</SectionLabel>
                <h2 className={SECTION_TITLE}>A Proven Approach, Real Results</h2>
                <Text variant="body" color="muted" className="max-w-sm">
                    We follow a simple but effective process to deliver IT services that
                    create long-term impact.
                </Text>
                <HelpButton className="pt-2" />
            </div>

            <ol className="grid grid-cols-2 gap-x-6 gap-y-10">
                {steps.map(({ title, description, icon }) => (
                    <li key={title} className="vstack items-center gap-2 text-center">
                        <IconTile icon={icon} />
                        <h3 className={SMALL_TITLE}>{title}</h3>
                        <Text variant="label" color="muted" className="max-w-[180px] text-xs">{description}</Text>
                    </li>
                ))}
            </ol>
        </div>
</Reveal>
</Wrapper.Body>
</Section>
    );
}

export default OurContent;