import { BiMessageSquareDots } from "react-icons/bi";
import { Button, Grid } from "@/components";

type Tone = "brand" | "dark" | "light";

interface Props {
    tone?: Tone;
    primaryLabel?: string;
    className?: string;
}

const mailto = `mailto:${import.meta.env.VITE_CONTACT_EMAIL}`;

function CtaButtons({ tone = "dark", primaryLabel = "Let's Integrate", className = "" }: Props) {
    const onDark = tone === "light";

    return (
        <Grid.HStack gap={3} className={`flex-wrap ${className}`}>
            <Button
                href={mailto}
                variant={tone}
                size="hero"
                glow={tone === "dark"}
                roll
                arrow>
                {primaryLabel}
            </Button>

            <Button
                href={mailto}
                variant="outline"
                size="hero"
                roll
                className={onDark ? "border-white/30 text-white hover:bg-white/10" : "bg-white"}
                icon={<BiMessageSquareDots />}>
                Talk to Our Team
            </Button>
        </Grid.HStack>
    );
}

export default CtaButtons;