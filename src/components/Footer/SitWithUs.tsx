
import { FiArrowRight } from "react-icons/fi";
import { Button, Icon, Text, Grid } from "@/components";
import { Jumboron } from "@/assets/StartHere";

export default function SitWithUs() {
    return (
        <div
              className="
                relative overflow-hidden rounded-4xl
                bg-[linear-gradient(90deg,_#FFEBFD_0%,_#FFE4D3_100%)]
                px-8 py-12
              ">
            <Grid cols={{ base: 1, md: 2 }} gap={{ base: 0, md: 10 }} className="min-h-50">
                {/*<Grid.Item span={{ base: 1, md: 1 }} className="relative z-10">
                    <Grid.VStack gap={6}>
                        <div>
                            <Text variant="h3" className="font-semibold">
                                So...{" "}
                                <span className="font-bold text-primary">
                                  SIT
                                </span>{" "}
                                with us.
                            </Text>

                            <Text variant="caption" className="text-sm font-medium text-[#000000A3]">
                                Tell us what you're building.
                                Because every great business starts with a{" "}
                                <span className="font-semibold text-primary">
                                  SPARK!
                                </span>
                            </Text>
                        </div>

                        <div>
                            <Button variant="gradient" size="md" className="gap-2"
                                onClick={() =>
                                  (window.location.href = `mailto:${import.meta.env.VITE_CONTACT_EMAIL}`)}>
                                Let's Talk
                                <Icon icon={FiArrowRight} variant="light" />
                            </Button>
                        </div>
                    </Grid.VStack>
                </Grid.Item>*/}
                
                <div
                    className="
                      pointer-events-none absolute inset-0 z-0
                      bg-no-repeat opacity-70 md:opacity-100
                      bg-[position:right_-80px_top_-50px] bg-[length:55%]
                      md:bg-[position:right_-70px_center]
                      md:bg-[length:55%]
                    "
                    style={{ backgroundImage: `url(${Jumboron})` }}/>
            </Grid>
        </div>
    );
}

