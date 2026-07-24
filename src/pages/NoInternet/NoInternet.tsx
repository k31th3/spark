import { motion } from "motion/react";

import { MdRefresh } from "react-icons/md";
import noInternet from "@/assets/noInternet.webp";

function NoInternet() {
  	return (
	    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-12 lg:px-8">
	    	<div className="sm:mx-auto sm:w-full sm:max-w-sm">

	    		<div className="vstack gap-4">
	    			
	    			{/*modern illustration*/}
		    		<div>
		    		<img
			            src={noInternet}
			            alt="icon"
			            className="w-full h-full object-cover"
			            onContextMenu={(e) => e.preventDefault()}
			        />
			    	</div>

			    	{/*title*/}
			    	<div className="text-center">
			    		<p className="font-bold text-[28px] text-dark / 60%">
			    			Opps... Looks like
			    			<br/>
			    			you're <span className="text-gradient">offline.</span>
			    		</p>
			    	</div>

			    	{/*body*/}
			    	<div className="text-center text-[#5F6B76] text-[14px] mb-10">
			    		<p>
			    		Technology takes a coffee break sometimes ☕
				    	</p>
				    	<span>Don't worry.</span>
				    	<p>
				    	We'll be here when your connection comes back.
				    	</p>
			    	</div>

			    	{/*footer*/}
			    	<div className="w-[80%] mx-auto">
			    		<motion.button
			                type="button"
			                whileHover={{ scale: 1.03 }}
			                whileTap={{ scale: 0.98 }}
			                className="sparkPrimaryBtn">
			                <MdRefresh size={20}/>
			                <span>Retry Connection</span>
			            </motion.button>
			    	</div>

	    		</div>

			</div>
	    </div>
  	);
}

export default NoInternet;