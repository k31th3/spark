
import { Button, SiteLogo } from "@/components";
import { PiHeadsetDuotone } from "react-icons/pi";
import { FiArrowRight } from "react-icons/fi";

import { Icon, Text } from "@/components";

export default function Company() {

	return <>

		<div className="vstack gap-3">

			<div className="vstack gap-4">
				<SiteLogo size="sm"/>
				<Text variant="h6">
					The Spark Info-Tech Enterprise
				</Text>
			</div>

			<div className="border border-[#E9D5FF] rounded-[24px] 
                shadow-[0px_12px_40px_rgba(143,19,149,0.08)] p-[20px] block lg:hidden">
				<div className="grid grid-cols-[48px_1fr] gap-4">
                    
                    <Icon icon={PiHeadsetDuotone} size="md" avatar={true} 
                        variant="gradient" />
	                <div className="flex xs:flex-row flex-col justify-between gap-4">
	                	<div className="vstack gap-0">
		                    <Text variant="caption">Need Help?</Text>
		                    <Text variant="label" color="muted">
		                        We’re here for you
		                    </Text>
		                </div>

		                <div className="w-full xs:w-auto">
			                <Button variant="gradient" size="sm" className="w-full xs:w-auto gap-1">
			                    Contact Spark <Icon icon={FiArrowRight} size="sm" variant="light" />
			                </Button>
		                </div>
	                </div>

	            </div>
			</div>

	</div>

	</>

}