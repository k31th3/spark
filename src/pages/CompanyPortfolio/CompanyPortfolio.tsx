import { useState } from "react";

import { Tabs } from "@material-tailwind/react";
import { TbArrowNarrowRight } from "react-icons/tb";

import { Wrapper, Text, Chip,
		 Image, Card, Icon, 
         Button} from "@/components";

import { dashboardBgWeBp } from "@/assets/Dashboard";
import { companyPortfolioPng } from "@/assets/CompanyPortfolio";
import { cards, tabs, icons, colors } from "./Content";

function CompanyPortfolio() {

	const [activeTab, setActiveTab] = useState("All Projects");

  	const filteredProjects =
    activeTab === "All Projects" ? cards
      : cards.filter(
          (card) => card.category === activeTab
        );

	return <>

		<Wrapper title="Company Portfolio" path="company-portfolio">

			<div className="flex flex-col vstack my-10 gap-20">

				<div className="grid grid-cols-1 gap-0">
					
					<Image
		                src={dashboardBgWeBp}
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
	                            <span className="text-gradient">Company</span> Portfolio
	                        </Text>

	                        <Text variant="caption">
                                Real challenges, Smart solutions,<br />
                                Measurable results.
                        	</Text>
	                    </div>
	                    
	                    <div className="flex">
	                    	<Image
			      			src={companyPortfolioPng}
			      			alt="Company Portfolio"
			      			className="w-full max-w-[480px] object-cover"/>
	                    </div>

					</div>
				</div>	

				<div className="mb-2 relative md:w-full
						  w-screen max-md:left-1/2 max-md:-translate-x-1/2 ">
	  				<div className="w-full md:w-fit bg-white md:rounded-full shadow-md overflow-hidden absolute">
	  					<div className="px-4 py-2 md:p-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

						<Tabs defaultValue="All Projects" value={activeTab} onValueChange={setActiveTab}>
					      	<Tabs.List className="gap-2">
						        {tabs.map((tab) => (
							        <Tabs.Trigger key={tab} value={tab} className={`
							        	whitespace-nowrap cursor-pointer h-10 px-4 
							        	rounded-full text-xs ease-out z-10 transition-all duration-300 ease-in
                                        shadow-sm 
							        	${
								            activeTab === tab
								              ? "text-white"
								              : "dark:text-black"
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
						const icon = icons[project.category];
                        const color = colors[project.category];
						return (
						    <Card key={project.id}>
						      	<Card.Body>
							        <div className="hstack gap-4 mb-4">

                                        <div>
        						          	<Icon icon={icon} size="md" avatar={true} variant={color} />
                                        </div>
                                        
							          	<div className="flex flex-col gap-2">
							          		<Chip variant={color} size="sm">
												{project.category}
											</Chip>
								            <div>
                                                <Text variant="h6" className="animate-pulse text-gray-800 bg-gray-800 
                                                    rounded-full p-0 text-[12px] mb-4">
                                                    {project.title}
                                                </Text>
                                                <Text variant="label" className="animate-pulse text-gray-500 bg-gray-500 line-clamp-3 
                                                    rounded-sm">
                                                    {project.information}
                                                </Text>
                                            </div>
							          	</div>
							          	
							        </div>

                                    <div>
                                        <Button variant="ghost" size="sm" className="hover:opacity-80 
                                            hover:bg-transparent text-primary items-center gap-1 p-0">
                                            Go to information <Icon icon={TbArrowNarrowRight} size="md" variant="primary" />
                                        </Button>
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

export default CompanyPortfolio;