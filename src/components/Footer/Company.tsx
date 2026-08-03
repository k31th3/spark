
import { Button, SiteLogo } from "@/components";
import { PiHeadsetDuotone } from "react-icons/pi";
import { FiArrowRight } from "react-icons/fi";

export default function Company() {

	return <>

		<div className="vstack gap-3">

			<div className="vstack gap-4">
				<SiteLogo width={30} height={30}/>
				<p className="font-medium leading-none">
					The Spark Info-Tech Enterprise
				</p>
			</div>

			<div className="border border-[#E9D5FF] rounded-[24px] 
                shadow-[0px_12px_40px_rgba(143,19,149,0.08)] p-[20px] flex lg:hidden">
				<div className="flex items-center justify-between gap-3">
	                <div
	                    className={`flex items-center justify-center h-10 w-10 rounded-full bg-[#FAF5FF]`}>
	                    <PiHeadsetDuotone size={20} style={{ fill: "url(#iconGradient)" }} />
	                </div>

	                <div className="flex flex-col gap-0">
	                    <p className="font-semibold text-sm">Need Help?</p>
	                    <span className="font-tiny text-[12px] text-[#6E7884]">
	                        We’re here for you
	                    </span>
	                </div>

	                <div>
		                <Button variant="gradient" size="sm" className="gap-2">
		                    Contact Us <FiArrowRight />
		                </Button>
	                </div>
	            </div>
			</div>

	</div>

	</>

}