import { Image } from "@/components";

import { Title, 
	AboutUsContent, TechnologyJumbotron, 
	WeSpeakHuman
} from "./";

import dashboardBg from "@/assets/dashboardBg.webp";

	function Home() 
	{
	  	return (
		    <>
		      	<div className="flex flex-col vstack my-10 gap-15">
		      		
		      		<div className="vstack gap-15">
			            <Image
			                src={dashboardBg}
			                alt="dashboard background"
			                className="absolute inset-0 w-full h-full object-cover object-center -z-10"/>
			            <Title />
		      			<AboutUsContent />
	            	</div>

		      		<TechnologyJumbotron />
		      		<WeSpeakHuman />

                </div>
		      	
		    </>
	    );	
	}

export default Home;

