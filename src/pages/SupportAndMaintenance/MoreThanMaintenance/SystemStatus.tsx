import { TbDeviceImacBolt } from "react-icons/tb";

import { Grid, Text, 
    Card, Icon} from "@/components";
    
function SystemStatus()
{
    return (
        <Card className="shadow-none">
            <Card.Body>

                <Grid.HStack gap={4} justify="between">

                    <Grid.VStack justify="between">
                        <Text variant="caption" className="font-semibold">
                            System Status
                        </Text>
                        <Text variant="label" color="green" className="font-semibold hstack gap-1 items-center">
                            <Icon icon={TbDeviceImacBolt} size="sm" variant="success"/> All Systems Operational
                        </Text>
                    </Grid.VStack>

                    <Grid.VStack gap={0}>

                        <Text variant="label">
                            Uptime
                        </Text>
                        <Text variant="h3" color="green">
                            99.9%
                        </Text>
                        <Text variant="label" color="muted" className="font-medium">
                            Last 30 days
                        </Text>

                    </Grid.VStack>    

                </Grid.HStack>

            </Card.Body>
        </Card>
    )
}

export default SystemStatus;
