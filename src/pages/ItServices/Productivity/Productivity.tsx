import { Text, Button, Section, Wrapper, Reveal } from "@/components";
import { Stats } from "./Productivity.data";
import { SECTION, CONTAINER, SECTION_TITLE } from "../Shared";
import Animated from "./Productivity.animated";

const ICON_COLOR = {
    primary: "text-primary",
    orange: "text-orange-500",
    white: "text-white"
} as const;

function Productivity() {
    return (
        <Section spacing="none" className={SECTION}>
<Wrapper.Body className={CONTAINER}>
<Reveal variant="slide">
<div>

            <div className="mb-12 flex flex-col gap-8 sm:mb-16 md:flex-row md:items-end md:justify-between">
                <div className="vstack gap-3">
                    <h2 className={SECTION_TITLE}>Real IT Numbers,<br />Real Business Impact</h2>
                    <Text variant="bodySmall" color="muted">
                        More than words, proven by the numbers.
                    </Text>
                </div>
                <Button
                    href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`}
                    variant="dark"
                    size="sm"
                    glow
                    roll>
                    Let's Talk
                </Button>
            </div>

            <div className="grid grid-cols-1 gap-0 md:grid-cols-5">
                {Stats.map(({ value, label, icon: IconCmp, pill, number, labelColor, span }) => (
                    <div
                        key={label}
                        className={`flex min-h-[130px] items-center gap-4 rounded-full px-8 py-8 sm:px-10 ${pill} ${span}`}>
                        {IconCmp && <IconCmp className={`h-8 w-8 ${ICON_COLOR[number]}`} />}
                        <p className={`font-display text-4xl font-medium tracking-tight sm:text-5xl ${ICON_COLOR[number]}`}><Animated value={value} duration={1200} /></p>
                        <Text variant="label" color={labelColor} className="max-w-[9rem] leading-tight">
                            {label}
                        </Text>
                    </div>
                ))}
            </div>
        </div>
</Reveal>
</Wrapper.Body>
</Section>
    );
}

export default Productivity;