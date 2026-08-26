import { Grid, Text, 
    Card, Icon} from "@/components";

import { LuShieldCheck } from "react-icons/lu";

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

function RecentActivity()
{
    return (
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
    )
}

export default RecentActivity;
