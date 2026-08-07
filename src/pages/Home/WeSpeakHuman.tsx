"use client";

import { AiOutlineMessage } from "react-icons/ai";
import weSpeakHuman from "@/assets/startHereWeSpeakHuman.webp";

import { Button, Icon, 
        Image, Text } from "@/components";

export default function WeSpeakHuman() 
{
	const items = [
		{
		    title: "We Explain",
		    subtitle: "In a way that actually makes sense.",
            color: "primary"
		},
		{
		    title: "We Answer",
		    subtitle: `Your "stupid questions" don't exist.`,
            color: "warning"
		},
		{
		    title: "We Sketch",
		    subtitle: "On tissue paper if that's what makes it click.",
            color: "danger"
		},
		{
		    title: "We Listen",
		    subtitle: "Because good tech starts with understanding people.",
            color: "success"
		}
	];
	return <>
		
		<div className="vstack gap-6">

	      	<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
			  
			  	{/* Image */}
			  	<div className="flex flex-col">
				  	<div className="rounded-4xl overflow-hidden">
				    	<Image
				      		src={weSpeakHuman}
				      		alt="We Speak Human"
				      		className="w-full h-full object-cover"/>
				  	</div>
				</div>

			  	{/* Content */}
			  	<div className="flex flex-col gap-6">
			    	
			    	<div>	
				  		<Button variant="secondary" size="sm" className="disabled:opacity-100" disabled={true}>
		      				We Speak Human
		      			</Button>
		      		</div>

			    	<Text variant="h4">
			      		Technology should feel like talking to your smartest friend,
			      		not reading an instruction manual.
			    	</Text>

			    	<ul className="vstack gap-4 px-[16px]">
			    		{items.map((item, index) => (
						    <li key={index}>
						      	<div className="hstack items-center gap-3">
							        
						          	<Icon icon={AiOutlineMessage}
						            	size="md"
                                        avatar={true}
                                        variant={item.color}
						            	/>

						        	<div className="flex flex-col gap-0">
						          		<Text variant="lead">{item.title}</Text>
						          		<Text variant="caption" color="muted">
						            		{item.subtitle}
						          		</Text>
						        	</div>
						      	</div>
						    </li>
						 ))}
			    	</ul>

			  	</div>

			</div>

		</div>
	</>;
}