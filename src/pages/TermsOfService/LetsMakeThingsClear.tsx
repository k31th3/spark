import { useState } from "react";

import { Accordion, Card, Grid, 
    Text, Icon, Wrapper } from "@/components";

import { MakeItClear } from "./MakeItClear";

function LetsMakeThingsClear()
{
    const [isOpen, setIsOpen] = useState(false);

    const makeItClear = (startIndex = 0, endIndex = MakeItClear.length) => {
        return MakeItClear.slice(startIndex, endIndex).map((item, index) => {
            const originalIndex = index + startIndex;
            return (
                <Grid.Item
                    span={{ base: 1 }}
                    key={`makeItClearItem${originalIndex}`}>
                    <Grid.HStack gap={8}>
                        <div>
                            <Icon icon={item.icon} size="md" avatar={true} variant="primary"/>
                        </div>

                        <Grid.VStack gap={2}>
                            <Text variant="caption" className="text-primary font-normal">
                                {item.title}
                            </Text>

                            <Text variant="label" className="font-normal">
                                {item.description}
                            </Text>
                        </Grid.VStack>
                    </Grid.HStack>
                </Grid.Item>
            );
        });
    };

    return <>
        <Card className="rounded-lg pb-4 hidden md:block">
            <Card.Header>
                <Text variant="caption">
                    Let’s Make Things <span className="text-gradient font-semibold">Clear</span>
                </Text>
            </Card.Header>
            <Card.Body>
                <Grid cols={{ base: 1 }} gap={{ base: 8 }}>
                    {makeItClear()}
                </Grid>
            </Card.Body>
        </Card>

        <Wrapper.FullBleed className="relative md:hidden">
            <Accordion defaultOpen="" icon={false} >
                <Accordion.Item
                            id={`makeItClear`}
                            className="shadow-sm bg-white border border-mist-300">

                    <Accordion.Header className="block pt-6" onClick={() => setIsOpen((prev) => !prev)}>
                        <Grid.VStack gap={6}>
                            <Text variant="caption">
                                Let’s Make Things <span className="text-gradient font-semibold">Clear</span>
                            </Text>
                            <Grid cols={{ base: 1 }} gap={{ base: 8 }} className="px-4 pb-2">
                                {makeItClear(0, 1)}
                            </Grid>

                            {!isOpen && (
                                <Text variant="label" className="text-center">
                                    Read more.
                                </Text>
                            )}

                        </Grid.VStack>
                    </Accordion.Header>
                    
                    <Accordion.Body className="border-mist-300 px-8 pb-8">
                        <Grid cols={{ base: 1 }} gap={{ base: 8 }}>
                            {makeItClear(1)} 
                            <Accordion.Close className="hover:bg-transparent" onClick={() => setIsOpen(false)}>
                                Show less
                            </Accordion.Close>
                        </Grid>
                    </Accordion.Body>

                </Accordion.Item>
            </Accordion>
        </Wrapper.FullBleed>
    </>
}

export default LetsMakeThingsClear;