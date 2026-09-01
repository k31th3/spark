
import { FiArrowRight } from "react-icons/fi";
import { Grid, Text, 
    Icon, Button } from "@/components";

import { ContactItems } from "./ContactItems";

function OtherWayConnect()
{
    return (<Grid cols={{ base: 12 }} gap={8}>
        {ContactItems.map((item, index) => (
            <Grid.Item span={{ base: 12 }} key={`otherWayConnect${index}`}>
                <Grid.HStack gap={4}>
                    <div>
                    <Icon
                        icon={item.icon}    
                        size="md"
                        variant={item.color}
                        avatar={true} />
                    </div>
                    <Grid.VStack gap={0}>
                        <Text variant="label" className="font-semibold">
                            {item.title}
                        </Text>
                        {item.href ? (
                            <a 
                                href={item.href}
                                target={item.href.startsWith("http") ? "_blank" : undefined}
                                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className="text-[13px] hover:text-primary transition-colors">{item.content}</a>
                            ) : (
                            <Text variant="label">{item.content}</Text>
                        )}
                        {item.description && (
                            <Text variant="label">{item.description}</Text>
                        )}
                        
                        {item.action && (
                            <div>
                                <Button variant="ghost" size="sm" 
                                    className="rounded-md gap-2 p-0 text-primary hover:bg-transparent">
                                    {item.action} <Icon icon={FiArrowRight} size="sm" variant="primary" />
                                </Button>
                            </div>
                        )}
                    </Grid.VStack>
                </Grid.HStack>    
            </Grid.Item>
        ))}
    </Grid>)
}

export default OtherWayConnect;
