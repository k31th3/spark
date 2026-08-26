import { Grid, ProgressIndicator, 
    Text, Card, Button, 
    Icon} from "@/components";

import { TbDeviceImacBolt } from "react-icons/tb";
import {
  LuCircleCheck,
  LuShieldCheck,
} from "react-icons/lu";

const Overview = [
    "Updates Complete",
    "Performance Checked",
    "Security Reviewed"
];

const Recent = [
    {
        label: "System update completed",
        status: "20m ago"
    },
    {
        label: "Database optimization",
        status: "45m ago"
    },
    {
        label: "Security scan completed",
        status: "1hr ago"
    }
]

function MoreThanMaintenance() 
{
    return (
        <Card className="bg-violet-100 shadow-none py-4">

            <Card.Body>
                <Grid cols={{ base: 12 }} gap={0}>
                    
                    <Grid.Item span={{ base: 12, lg: 6, md: 5 }} className="p-6">
                        <Grid.VStack gap={4}>
                            <Grid.HStack gap={2}>
                                <Text variant="caption" color="primary" className="uppercase font-bold">
                                    more than maintenance 
                                </Text>
                                <ProgressIndicator size="xs" />
                            </Grid.HStack>
                        
                            <Text variant="h3" className="font-bold">
                                We weren't built. <br />
                                to be a <span className="text-gradient">silent supplier</span>. 
                            </Text>

                            <Text variant="label">
                                You deserve more than hearing from us only when something breaks. 
                                We stay involved, communicate clearly, and help you make better 
                                decisions about your technology.
                            </Text>

                            <div>
                                <Button variant="gradient" size="xs" className="rounded-lg">
                                    Learn More About Us
                                </Button>
                            </div>
                        </Grid.VStack>
                    </Grid.Item>

                    <Grid.Item span={{ base: 12, lg: 6, md: 7 }}>
                        
                        <Grid cols={{ base: 12 }} gap={2}>
                            <Grid.Item span={{ base: 12 }}>
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
                            </Grid.Item>

                            <Grid.Item span={{ base: 12, lg: 6, md: 6, sm: 6 }}>
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
                            </Grid.Item>

                            <Grid.Item span={{ base: 12, lg: 6, md: 6, sm: 6 }}>
                                <Card className="shadow-none h-full">
                                    <Card.Body>
                                        
                                        <div className="mb-4">
                                            <Text variant="caption" className="font-semibold">
                                                Recent Activity
                                            </Text>
                                        </div>

                                        <Grid.VStack gap={2}>
                                            {Recent.map(
                                                ({label, status} , index) => (
                                                    <Grid.HStack gap={2} align="center" key={`recent${index}`}>
                                                        <Icon icon={LuShieldCheck} size="sm" variant="warning" />
                                                        <Grid.VStack gap={0}>
                                                            <Text variant="label" className="font-medium">
                                                               {label} 
                                                            </Text>
                                                            <Text variant="label" color="muted">
                                                               {status} 
                                                            </Text>
                                                        </Grid.VStack>
                                                    </Grid.HStack>
                                                )
                                            )}
                                        </Grid.VStack> 

                                    </Card.Body>
                                </Card>
                            </Grid.Item>

                        </Grid>

                    </Grid.Item>
                </Grid>
            </Card.Body>

        </Card>
    )
}

export default MoreThanMaintenance;
