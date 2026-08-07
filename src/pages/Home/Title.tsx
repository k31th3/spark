
import { Button } from "@/components";

export default function StartHere(){
	return <>
			<div className="vstack gap-6">

		      	<div className="mb-4">
		      		
		      		<h1 className="text-center font-semibold sm:text-[60px] text-[45px] leading-none mb-6">
		      			
		      			<p>We don’t provide solutions,</p> 
		      			<span className="text-gradient">We start things</span>
		      		
		      		</h1>

		      		<h2 className="text-center text-[14px] text-[#000000A3] font-normal">
		      			<p>SPARK exists to be the beginning of something bigger —</p> 
						a business, an idea, a conversation, confidence, friendships, possibilities.
		      		</h2>

	      		</div>

	      		<div className="text-center">
	      			<Button variant="gradient" size="md" className="disabled:opacity-100" disabled={true}>
	      				Our Story
	      			</Button>
	      		</div>

	      	</div>
		   </>	
};