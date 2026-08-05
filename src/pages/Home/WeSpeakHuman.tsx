"use client";

import { AiOutlineMessage } from "react-icons/ai";
import weSpeakHuman from "@/assets/startHereWeSpeakHuman.webp";

import { Button, Image } from "@/components";

export default function WeSpeakHuman() 
{
	const items = [
		{
		    title: "We Explain",
		    subtitle: "In a way that actually makes sense.",
		    bgColor: "bg-[#FAF5FF]",
		    iconColor: "text-[#A855F7]"
		},
		{
		    title: "We Answer",
		    subtitle: `Your "stupid questions" don't exist.`,
		    bgColor: "bg-[#FFF7ED]",
		    iconColor: "text-[#F97316]"
		},
		{
		    title: "We Sketch",
		    subtitle: "On tissue paper if that's what makes it click.",
		    bgColor: "bg-[#FDF2F8]",
		    iconColor: "text-[#EC4899]"
		},
		{
		    title: "We Listen",
		    subtitle: "Because good tech starts with understanding people.",
		    bgColor: "bg-[#EFF6FF]",
		    iconColor: "text-[#3B82F6]"
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

			    	<p className="text-2xl font-semibold leading-tight">
			      		Technology should feel like talking to your smartest friend,
			      		not reading an instruction manual.
			    	</p>

			    	<ul className="vstack gap-4 px-[16px]">
			    		{items.map((item, index) => (
						    <li key={index}>
						      	<div className="hstack items-center gap-3">
							        <div
							          	className={`flex items-center justify-center h-8 w-8 rounded-full ${item.bgColor}`}>
							          	<AiOutlineMessage
							            	size={16}
							            	className={item.iconColor}/>
							        </div>

						        	<div className="flex flex-col gap-0">
						          		<p className="font-medium text-[20px]">{item.title}</p>
						          		<span className="font-tiny text-[14px] text-[#6E7884]">
						            		{item.subtitle}
						          		</span>
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