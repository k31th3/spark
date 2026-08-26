import { Grid, Text, 
    Card, Icon} from "@/components";

import {
  LuCircleCheck,
} from "react-icons/lu";

const Overview = [
    "Updates Complete",
    "Performance Checked",
    "Security Reviewed"
];

function SystemLog()
{
    return (
        <Card className="shadow-none h-full">
            <Card.Body>
                <Grid.VStack gap={4}>
                    {Overview.map(
                        (item, index) => (
                            <Grid.HStack gap={1} align="center" key={`overview${index}`}>
                                <Icon icon={LuCircleCheck} size="sm" variant="success" />
                                <Text variant="label" className="font-medium">
                                   {item} 
                                </Text>
                            </Grid.HStack>
                        )
                    )}
                </Grid.VStack>    
            </Card.Body>
        </Card>
    )
}

export default SystemLog;
