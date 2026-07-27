import { motion } from "motion/react";

import { MdRefresh } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa6";
import { IconGradient } from "@/components";

import errorMaintenance from "@/assets/errorMaintenance.webp";

function ErrorMaintenance() {
  	return (
	    <div className="flex flex-col items-center justify-center px-6 lg:px-8">
	    	<div className="sm:mx-auto sm:w-full sm:max-w-sm">

	    		<div className="vstack gap-0">
	    			
	    			{/*modern illustration*/}
		    		<div>
		    		<img
			            src={errorMaintenance}
			            alt="icon"
			            className="w-full h-full object-cover"
			            onContextMenu={(e) => e.preventDefault()}
			        />
			    	</div>

			    	{/*title*/}
			    	<div className="text-center">
			    		<p className="font-black text-[38px] text-dark/60%
                                              mx-auto h-[100px] leading-none">
			    			We're making
			    			<br/>
			    			<span className="text-gradient">things better.</span>
			    		</p>
			    	</div>

			    	{/*body*/}
			    	<div className="text-center text-[#5F6B76] text-[12px] mb-8">
			    		<p>
			    		Sometimes technology needs a quick tune-up. 
				    	</p>
				    	<span>We're currently improving this page so it'll be even</span>
				    	<p>
				    	better when you come back.
				    	</p>
			    	</div>

			    	{/*footer*/}
			    	<div className="w-[80%] mx-auto">
			    		<div className="hstack gap-4 items-center">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-50">
                                <IconGradient />
                                <FaHeadset size={24} style={{ fill: "url(#iconGradient)" }} />
                            </div>
                            <div className="vstack gap-0">
                                <ul>
                                    <li className="font-medium text-[12px]">Need something urgent?</li>
                                    <li className="text-purple-700 text-[16px] hstack gap-2 items-center cursor-pointer">
                                        Contact Spark Support <FaLongArrowAltRight />
                                    </li>
                                </ul>
                            </div>
                        </div>
			    	</div>

	    		</div>

			</div>
	    </div>
  	);
}

export default ErrorMaintenance;