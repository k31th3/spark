import { FiArrowRight } from "react-icons/fi";
import { BiMessageSquareDots } from "react-icons/bi";

import { Grid, Button, Icon } from "@/components";

const buttons = [
    {
        id: "explore",
        label: "Explore services",
        variant: "gradient" as const,
        icon: FiArrowRight,
        iconVariant: "light",
        className: "gap-1 justify-center",
        href: "/services"
    },
    {
        id: "team",
        label: "Talk to Our Team",
        variant: "outline" as const,
        icon: BiMessageSquareDots,
        className: "gap-1 justify-center bg-white",
        href: `mailto:${import.meta.env.VITE_CONTACT_EMAIL}`
    }
];

function HelpButton() 
{
    return (
        <Grid.HStack gap={2}>

            {buttons.map(
                ({ id, label, variant, icon, iconVariant, className, href }) => (
                    <Button
                        key={id}
                        variant={variant}
                        size="sm"
                        onClick={() => window.location.href = href}
                        className={className}>
                        {label}
                        <Icon icon={icon} size="sm" variant={iconVariant} />
                    </Button>
                )
            )}

        </Grid.HStack>
    );
}

export default HelpButton;