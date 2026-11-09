import { BiMessageSquareDots } from "react-icons/bi";
import { Button } from "@/components";
import LinkButton from "./LinkButton";

interface Props {
    className?: string;
    primary?: "brand" | "dark";
}

function HelpButton({ className = "", primary = "dark" }: Props) {
    return (
        <div className={`flex flex-wrap gap-3 ${className}`}>
            <LinkButton to="/services" variant={primary} size="hero" glow={primary === "dark"} roll arrow>
                Explore Services
            </LinkButton>

            <Button
                href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`}
                variant="outline"
                size="hero"
                roll
                className="bg-white"
                icon={<BiMessageSquareDots />}>
                Talk to Our Team
            </Button>
        </div>
    );
}

export default HelpButton;