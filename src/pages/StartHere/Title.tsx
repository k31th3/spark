
import { Button } from "@/components";
import { FiArrowRight } from "react-icons/fi";
import { GoPerson } from "react-icons/go";

export default function StartHere(){
	return <>
				<div className="vstack gap-6">

	      			<div className="text-center">
			      		<Button variant="secondary" size="sm" className="gap-2" disabled={true}>
		      				<GoPerson /> About Us
		      			</Button>
			      	</div>

			      	<div className="mb-4">
			      		
			      		<div className="text-center font-semibold sm:text-[60px] text-[45px] leading-none mb-6">
			      			
			      			<p>We don’t provide solutions,</p> 
			      			<span className="text-gradient">We start things</span>
			      		
			      		</div>

			      		<div className="text-center text-[14px] text-[#000000A3] font-normal">
			      			<p>SPARK exists to be the beginning of something bigger —</p> 
							a business, an idea, a conversation, confidence, friendships, possibilities.
			      		</div>

		      		</div>

		      		<div className="text-center">
		      			<Button variant="gradient" size="lg" className="gap-2">
		      				Our Story <FiArrowRight />
		      			</Button>
		      		</div>

		      	</div>
		   </>	
};