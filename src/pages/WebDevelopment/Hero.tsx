import { FiArrowRight } from "react-icons/fi";
import { BiMessageSquareDots } from "react-icons/bi";

import { Grid, Text, Chip, Button, Icon } from "@/components";
import HelpButton from "./HelpButton";

function Hero() {
    return (
        <Grid cols={{ base: 12 }}>
            <Grid.Item span={{ base: 12 }}>
                <Chip variant="gradient" size="sm" className="uppercase border-0 shadow-lg shadow-orange-500/50 mb-6">
                    web development
                </Chip>

                <Grid.VStack gap={4}>
                    <Text variant="h2">
                        Websites That Work <br />
                        as Hard as <span className="text-gradient">You Do</span>.
                    </Text>
                    <Text variant="bodySmall" className="mb-4 block leading-6 max-w-[400px]">
                        We design and build fast, secure, and SEO-ready websites and
                        web applications that help your business grow online.
                    </Text>
                    <HelpButton />
                </Grid.VStack>
            </Grid.Item>
        </Grid>
    );
}

export default Hero;