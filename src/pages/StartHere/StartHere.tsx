import { Wrapper, Text, Image } from "@/components";
import { hereGrouping } from "@/assets/startHere"

import { storySections } from "./storySections";

	function StartHere() 
	{
	  	return (
		    <>
        		<Wrapper title="Lets start here" path="lets-start-here">
		      	<div className="flex flex-col vstack my-10 gap-15">

		      		<div className="text-center vstack gap-1">
			      		<Text variant="label" color="primary">
			      			Published Aug 3, 2026
			      		</Text>
			      		<Text variant="h3">
			      			This is Our Story
			      		</Text>
			      		<Text variant="caption" color="muted">
			      			This is who we are, how we think, and why we do what we do.
			      		</Text>
		      		</div>
		      		
		      		<div className="rounded-4xl overflow-hidden">
				    	<Image
				      		src={hereGrouping}
				      		alt="Start Here Grouping"
				      		className="w-full h-[400px] object-cover"/>
				  	</div>

				  	<div className="max-w-xl mx-auto vstack gap-6">
					  	{storySections.map(({ title, lines }) => (
						  	<div key={title} className="text-start">
							    <Text variant="h4" className="mb-4">
							      	{title}
							    </Text>

							    <Text variant="bodySmall" color="muted">
							      	{lines.map((line, index) => (
							        	<span key={index}>
							          		{line}
							          	<br />
							        	</span>
							      	))}
							    </Text>
						  	</div>
						))}
					</div>

                </div>
		      	</Wrapper>
		    </>
	    );	
	}

export default StartHere;

