
import { Text, Chip, ProgressIndicator,
         Icon, Grid} from "@/components";

import { FcCalendar } from "react-icons/fc";
import { LuShieldCheck } from "react-icons/lu";
import { TbFileTextShield } from "react-icons/tb";

function HeroSection()
{
    return <>
        <Grid cols={{ base: 1, md: 12 }} gap={{ base: 6, md: 8, lg: 10 }} >
            
            <Grid.Item span={{ base: 1, md: 7 }} className="z-10">
                <Chip variant="primary" size="md" className="uppercase mb-8 font-bold">
                    <Icon icon={LuShieldCheck} size="md" variant="primary" /> legal
                </Chip>

                <Grid.VStack gap={2}>

                    <Grid.HStack gap={4}>
                        <Text variant="h1" className="lg:text-6xl">
                            Terms of Service
                        </Text>

                        <Grid.Item span={{ base: 1 }} hide={{ md: true }}>
                            <Icon icon={TbFileTextShield} size="sm" avatar={true} variant="primary" />
                        </Grid.Item>
                    </Grid.HStack>

                    <ProgressIndicator size="md" />

                    <Text variant="body" className="text-muted mt-4">
                        These Terms of Service outline the rules, responsibilities, and
                        guidelines for using SIT website, services, and digital products.
                        By using our services, you agree to these terms.
                    </Text>

                    <Grid.HStack gap={2} >
                        <Icon icon={FcCalendar} size="md" variant="primary" />
                        <Text variant="caption">
                            Last update: Aug 12, 2026
                        </Text>
                    </Grid.HStack>

                </Grid.VStack>
            </Grid.Item>

            <Grid.Item span={{ base: 1, md: 5 }} hide={{ base: true }} show={{ md: true }}>
                <div className="flex h-50 items-center justify-center">
                    <Icon icon={TbFileTextShield} size="2xl" avatar={true} variant="primary" />
                </div>
            </Grid.Item>

        </Grid>
    </>
}

export default HeroSection;
