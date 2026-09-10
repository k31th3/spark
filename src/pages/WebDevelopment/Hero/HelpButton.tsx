import { FiArrowRight } from "react-icons/fi";
import { BiMessageSquareDots } from "react-icons/bi";

import { Grid, Button, Icon } from "@/components";

function HelpButton() {
    return (
        <Grid.HStack gap={2}>
            <Button
                variant="gradient"
                size="sm"
                onClick={() => window.location.href = `mailto:${import.meta.env.VITE_CONTACT_EMAIL}`}
                className="gap-1 justify-center">
                Let's Build
                <Icon icon={FiArrowRight} size="sm" variant="light" />
            </Button>

            <Button
                variant="outline"
                size="sm"
                onClick={() => window.location.href = `mailto:${import.meta.env.VITE_CONTACT_EMAIL}`}
                className="gap-1 justify-center bg-white">
                Talk to Our Team
                <Icon icon={BiMessageSquareDots} size="sm" />
            </Button>
        </Grid.HStack>
    );
}

export default HelpButton;