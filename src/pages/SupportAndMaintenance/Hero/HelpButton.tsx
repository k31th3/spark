import { FiArrowRight } from "react-icons/fi";
import { BiMessageSquareDots } from "react-icons/bi";

import { Grid, Button, Icon } from "@/components";

const buttons = [
    {
        id: "support",
        label: "Get Support",
        variant: "gradient" as const,
        icon: FiArrowRight,
        iconVariant: "light",
        className: "gap-1 justify-center"
    },
    {
        id: "team",
        label: "Talk to Our Team",
        variant: "outline" as const,
        icon: BiMessageSquareDots,
        className: "gap-1 justify-center bg-white"
    }
];

function HelpButton() 
{
    return (
        <Grid.HStack gap={2} justify="center">

            {buttons.map(
                ({ id, label, variant, icon, iconVariant, className }) => (
                    <Button
                        key={id}
                        variant={variant}
                        size="sm"
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