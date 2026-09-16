import { FiArrowRight } from "react-icons/fi";
import { BiMessageSquareDots } from "react-icons/bi";

import { Grid, Button, Icon } from "@/components";

function HelpButton() {
    return (
        <>
            <Button
                variant="gradient"
                size="sm"
                onClick={() => window.location.href = `mailto:${import.meta.env.VITE_CONTACT_EMAIL}`}
                className="gap-1 justify-center">
                Book a Demo
                <Icon icon={FiArrowRight} size="sm" variant="light" />
            </Button>

            <Button
                variant="outline"
                size="sm"
                onClick={() => window.location.href = `company-portfolio`}
                className="gap-1 justify-center bg-white">
                See Our Work
                <Icon icon={BiMessageSquareDots} size="sm" />
            </Button>
        </>
    );
}

export default HelpButton;