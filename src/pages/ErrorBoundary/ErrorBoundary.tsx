
import { PiHeadsetDuotone } from "react-icons/pi";
import { FaLongArrowAltRight } from "react-icons/fa";

import { Component, type ReactNode } from "react";
import { Button, Card, Text,
    Grid, Icon, Image, IconGradient } from "@/components";

type Props = {
    children: ReactNode;
};

type State = {
    hasError: boolean;
};

class ErrorBoundary extends Component<Props, State> {
    state: State = { hasError: false };

    static getDerivedStateFromError(): State {
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: React.ErrorInfo) {
        console.error("ErrorBoundary caught:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="max-w-[420px] m-auto">
                    <IconGradient />
                    <Grid cols={{ base: 12 }} className="min-h-dvh items-stretch">
                        <Grid.Item span={{ base: 12 }} className="w-full flex items-center 
                            justify-center px-4 sm:px-6">
                        
                            <Card className="shadow-none">
                                
                                <Card.Header className="border-0">
                                    <Image src="/errorBoundary.webp" />
                                </Card.Header>
                                
                                <Card.Body className="text-center">
                                    <Grid.VStack className="mb-4">
                                        <Text variant="h2" className="font-black mb-4">
                                            We're making <span className="text-gradient">things better.</span>
                                        </Text>

                                        <Text variant="label" color="muted">
                                            <p>Sometimes technology needs a quick tune-up.</p>
                                            <span>We're currently improving this page so it'll be even</span>
                                            better when you come back.
                                        </Text>
                                    </Grid.VStack>

                                    <Grid.HStack gap={4} align="center">
                                        <Icon icon={PiHeadsetDuotone} size="lg" avatar={true} 
                                            variant="gradient" />
                                        <Grid.VStack gap={0} align="start">
                                            <Text variant="label" color="muted">
                                                Need something urgent?
                                            </Text>
                                            <Button variant="ghost" className="hover:bg-transparent gap-2 p-0 text-primary">
                                                Contact Spark Support <Icon icon={FaLongArrowAltRight} variant="primary" />
                                            </Button>
                                        </Grid.VStack>
                                    </Grid.HStack>

                                </Card.Body>
                            </Card>
                            
                        </Grid.Item>
                    </Grid>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
