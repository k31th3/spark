"use client";

import { Button, IconGradient } from "@/components";
import weSpeakHuman from "@/assets/weSpeakHuman.webp";


export default function WeSpeakHuman() 
{
	return <>
		<div>
			<div className="vstack gap-6">

      			<div className="text-center">
		      		<Button variant="secondary" size="sm" className="gap-2" disabled={true}>
	      				We Speak Human
	      			</Button>
		      	</div>

		      	<div className="hstack">
		      		
		      		<div className="rounded-4xl overflow-hidden shadow-sm">
			    		<img
				            src={weSpeakHuman}
				            alt="frame"
				            className="w-full h-[350px] object-cover"
				            onContextMenu={(e) => e.preventDefault()}/>
				    </div>

		      	</div>

			</div>
		</div>
	</>;
}