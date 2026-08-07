import { LuCircleArrowRight } from "react-icons/lu";
import { PiAirplaneTiltDuotone } from "react-icons/pi";

import { Wrapper, Text, Image, Button } from "@/components";

import career from "@/assets/career.png"
import dashboardBg from "@/assets/dashboardBg.webp";

import { Contents } from "./Contents";
import { OpenPositions } from "./OpenPositions";

function Careers() {
	return <>

		<Wrapper title="Careers" path="careers">

		<div className="flex flex-col vstack my-10 gap-20">

			<div className="grid grid-cols-1 gap-0">
                
                <Image
	                src={dashboardBg}
	                alt="dashboard background"
	                className="absolute inset-0 w-full h-full object-cover object-center -z-10"/>

                <div className="flex items-center justify-center">
                    <div className="flex flex-col gap-3 sm:w-auto w-full">
                        <Text variant="h1" className="lg:text-1xl">
                            Build The Future <br /> 
                            with <span className="text-gradient">Spark</span>
                        </Text>

                        <div className="vstack gap-8 text-xs">
                            <Text variant="caption">
                                We're a team of innovators, creators, and problem solvers.<br />
                            	passionate about building solations that make a difference.
                        	</Text>

                        	<div>
                        		<Button variant="gradient" className="shadow-sm">
                        			Open positions <LuCircleArrowRight size={24} className="ms-4"/>
                        		</Button>
                        	</div>
                        </div>
                    </div>
                    <div className="flex">
                    <Image
		      			src={career}
		      			alt="Careers"
		      			className="w-full max-w-[480px] object-cover"/>
                	</div>
                </div>

		  	</div>

		  	<div className="max-w-5xl mx-auto vstack gap-8">

		  		<div className="text-center">
		  			<Text variant="h3">
		  				Why work with us?
		  			</Text>
		  			<Text variant="label" color="muted">
		  				Great people. Big impact. Growing together.
		  			</Text>
		  		</div>

		  		<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">

		  			{Contents.map((item, index) => (
		  			
		  			<div className="rounded-lg overflow-hidden shadow-lg
		  			 border-1 border-[#E7E8EA]" key={`${item.title}-${index}`}>

		  				<div className="px-8 py-4">

		  					<div className="vstack gap-2">
		  						
		  						{/*Title*/}
		  						<div className="vstack items-center gap-2">
		  							<item.icon size={40} 
		  								style={{ fill: "url(#iconGradient)" }}/>
		  							<Text variant="h6" className="text-center">{item.title}</Text>
		  						</div>

		  						{/*Subtitle*/}
		  						<Text variant="label" color="muted" className="text-center">
		  							{item.lines.map((line, item) => (
							        	<span key={item}>
							          		{line}
							          	<br />
							        	</span>
							      	))}
		  						</Text>

		  					</div>

		  				</div>	

		  			</div>

		  			))}

		  		</div>

		  		<div className="text-center">
		  			<Text variant="h3">
		  				Open Positions
		  			</Text>
		  			<Text variant="label" color="muted">
		  				Join our mission and be part of something great.
		  			</Text>
		  		</div>

		  		<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

		  			{OpenPositions.map((item, index) => (
		  			
		  			<div className="rounded-lg overflow-hidden shadow-sm
		  			 border-1 border-[#E7E8EA]" key={`${item.title}-${index}`}>

		  				<div className="px-8 py-4">

		  					<div className="vstack gap-2">
		  						
		  						{/*Title*/}
		  						<Text variant="h4">{item.title}</Text>

		  						{/*Subtitle*/}

		  						<div className="flex flex-col justify-between gap-4">

			  						<Text variant="label" color="muted">
			  							{item.lines.map((line, item) => (
								        	<span key={item}>
								          		{line}
								          	<br />
								        	</span>
								      	))}
			  						</Text>

			  						<div className="text-end">
			  							<Button variant="outline" size="sm" className="rounded-lg border-1 
			  								border-pink-400 hover:bg-transparent p-4 shadow-sm">
			  								<Text variant="label" color="gradient">
											    View Details
											</Text>
			  							</Button>
			  						</div>

		  						</div>
		  					</div>

		  				</div>	

		  			</div>

		  			))}

		  		</div>

		  		<div className="rounded-lg shadow-sm p-8">

		  			<div className="flex flex-row justify-between gap-4">

		  				<div className="flex">
			  			<PiAirplaneTiltDuotone size={40}
			  				style={{ fill: "url(#iconGradient)" }}/>
			  			</div>
			  			
			  			<div className="flex sm:flex-row flex-col gap-8">
				  			<div className="vstack gap-4">

				  				<Text variant="h4">
					  				Don't see the right role?
					  			</Text>
					  			<Text variant="label" color="muted" className="flex flex-col ">
					  				We're always looking for talented people. Even if you don't see a position that matches your skills today, 
					  				we'd love to hear from you. Send us your resume, and we'll keep you in mind for future opportunities.
					  			</Text>

				  			</div>

				  			<div className="flex justify-end items-center">
	                    		<Button variant="gradient" className="shadow-sm">
	                    			Send <LuCircleArrowRight size={24} className="ms-4"/>
	                    		</Button>
	                    	</div>

	                    </div>

		  			</div>

		  		</div>

		  	</div>

		</div>
		</Wrapper>
	</>;
}

export default Careers;
