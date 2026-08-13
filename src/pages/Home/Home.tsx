import { Image, Wrapper } from "@/components";

import { Title, 
	AboutUsContent, TechnologyJumbotron, 
	WeSpeakHuman
} from "./";

import { dashboardBgWeBp } from "@/assets/Dashboard";

	function Home() 
	{
	  	return (
		    <>
            <Wrapper title="Spark Info-Tech Enterprise" path="">
		      	<div className="vstack gap-15">
		      		
		            <Image
		                src={dashboardBgWeBp}
		                alt="dashboard background"
		                className="absolute inset-0 w-full h-full object-cover object-center -z-10"/>

                    <div className="absolute w-[100%] h-[100%] bottom-0 left-0 right-0 sm:bg-white" 
                    style={{ maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))" }} />

		            <Title />
	      			<AboutUsContent />

		      		<TechnologyJumbotron />
		      		<WeSpeakHuman />

                </div>
		    </Wrapper>
		    </>
	    );	
	}

export default Home;

