import { LuCheck } from "react-icons/lu";
import { Image, Text, Section, Wrapper, Reveal } from "@/components";
import { WhySpark } from "@/assets/ItServices";
import { SectionLabel, IconTile, SECTION, CONTAINER, SECTION_TITLE } from "@/pages/ItServices/Shared";

const points = [
    "Reduce downtime and IT disruptions",
    "Strengthen security and data protection",
    "Optimize performance and productivity",
    "Access expert support when you need it"
];

function WhySparkItServices() {
    return (
        <Section spacing="none" className={SECTION}>
<Wrapper.Body className={CONTAINER}>
<Reveal variant="slide">
<div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">

            <Image
                src={WhySpark}
                alt="Team working together on a laptop"
                wrapperClassName="w-full aspect-[4/5] overflow-hidden rounded-3xl"
                className="h-full w-full object-cover" />

            <div className="vstack gap-5">
                <SectionLabel>Why Spark</SectionLabel>
                <h2 className={SECTION_TITLE}>We handle the technology behind your success.</h2>
                <Text variant="body" color="muted" className="max-w-md">
                    From day-to-day IT operations to complex infrastructure needs, we deliver
                    solutions that are secure, efficient, and built to scale with your business.
                </Text>
                <ul className="vstack gap-3 pt-2">
                    {points.map(point => (
                        <li key={point} className="flex items-center gap-3">
                            <IconTile icon={LuCheck} tone="green" className="h-8 w-8 rounded-lg" />
                            <Text variant="bodySmall">{point}</Text>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
</Reveal>
</Wrapper.Body>
</Section>
    );
}

export default WhySparkItServices;