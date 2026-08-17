import { Button, Card, Grid, 
    Text, Icon, Image } from "@/components";

import { FiArrowRight } from "react-icons/fi";
import { QuickAnswer } from "@/assets/TermsOfService";

function NeedQuickAnswer()
{
	return <>
		
		<Card className="rounded-lg bg-purple-50 px-2">
			<Card.Body>
				
				<Grid.VStack gap={4}>

					<Text variant="lead" className="font-medium">
						Need a quick answer?
					</Text>

					<Text variant="caption" className="leading-4">
						Check our FAQ or reach out
						anytime - we're happy to help.
					</Text>

					<Grid.HStack className="justify-between">
						
						<Grid.Item span={{base:1}}>
							<Button variant="primary" size="xs" 
								className="hstack gap-1 rounded-lg"
								onClick={() => window.location.href = `frequently-asked-questions`}>
								View FAQ <Icon icon={FiArrowRight} size="sm" variant="light" />
							</Button>
						</Grid.Item>

						<div className="relative overflow-hidden max-w-[100px]">
						<Image
	                        src={QuickAnswer}
	                        alt="Quick answer"
	                        className="block w-full h-auto"/>
	                    </div>
					</Grid.HStack>

				</Grid.VStack>

			</Card.Body>
		</Card>

	</>
}

export default NeedQuickAnswer;
