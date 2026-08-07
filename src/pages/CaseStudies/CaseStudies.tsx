import { useState } from "react";

import { Tabs } from "@material-tailwind/react";

import { Wrapper, Text, Chip,
		 Image, Card, Icon } from "@/components";

import dashboardBg from "@/assets/dashboardBg.webp";
import { caseStudiesPng} from "@/assets/CaseStudies";
import { cards, tabs, icons } from "./Content";

function CaseStudy() {

	const [activeTab, setActiveTab] = useState("All Projects");

  	const filteredProjects =
    activeTab === "All Projects" ? cards
      : cards.filter(
          (card) => card.category === activeTab
        );

	return <>

		<Wrapper title="Case Study" path="caseStudy">

			<div className="flex flex-col vstack my-10 gap-20">

				<div className="grid grid-cols-1 gap-0">
					
					<Image
		                src={dashboardBg}
		                alt="dashboard background"
		                className="absolute inset-0 w-full h-full object-cover object-center -z-10"/>

	                <div className="flex items-center justify-center">
	                    
	                    <div className="flex flex-col gap-4 sm:w-auto w-full">
	                    	<div className="mb-4">
								<Chip variant="primary" size="lg" className="uppercase">
									our work
								</Chip>
							</div>
	                        <Text variant="h1" className="lg:text-1xl">
	                            <span className="text-gradient">Case</span> Studies
	                        </Text>

	                        <Text variant="caption">
                                Real challenges, Smart solutions,<br />
                                Measurable results.
                        	</Text>
	                    </div>
	                    
	                    <div className="flex">
	                    	<Image
			      			src={caseStudiesPng}
			      			alt="Case Studies"
			      			className="w-full max-w-[480px] object-cover"/>
	                    </div>

					</div>
				</div>	

				<div className="mb-4 relative md:w-full
						  w-screen max-md:left-1/2 max-md:-translate-x-1/2 ">
	  				<div className="w-full md:w-fit bg-white md:rounded-full shadow-md overflow-hidden absolute">
	  					<div className="px-4 py-2 md:p-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

						<Tabs defaultValue="All Projects" value={activeTab} onValueChange={setActiveTab}>
					      	<Tabs.List>
						        {tabs.map((tab) => (
							        <Tabs.Trigger key={tab} value={tab} className={`
							        	whitespace-nowrap cursor-pointer h-10 px-4 
							        	rounded-full text-xs ease-out z-10 transition-all duration-300 ease-in
							        	${
								            activeTab === tab
								              ? "text-white"
								              : ""
								        }`}>
							           	{tab}
							        </Tabs.Trigger>
							    ))}
						        <Tabs.TriggerIndicator className="rounded-full bg-gradient opacity-80 overflow-hidden"  />
					    	</Tabs.List>
	          			</Tabs>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
			        {filteredProjects.map((project) => {
						const ProjectIcon = icons[project.category];
						return (
						    <Card key={project.id}>
						      	<Card.Body>
							        <div className="hstack gap-4">

							          	<Icon icon={ProjectIcon} size="lg" />

							          	<div className="flex flex-col gap-2">
							          		<Chip variant="default" size="sm">
												{project.category}
											</Chip>
								            <Text variant="h6">
								              	{project.title}
								            </Text>
								            <Text variant="label" className="text-gray-500">
								              	{project.information}
								            </Text>
							          	</div>
							          	
							        </div>
						      	</Card.Body>
						    </Card>
						);
					})}
			    </div>

			</div>

		</Wrapper>

	</>
}

export default CaseStudy;