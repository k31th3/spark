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
            <Wrapper title="Frequently asked questions" path="frequently-asked-questions">
		      	<div className="flex flex-col vstack my-10 gap-15">
		      		
		      		<div className="vstack gap-15">
			            <Image
			                src={dashboardBgWeBp}
			                alt="dashboard background"
			                className="absolute inset-0 w-full h-full object-cover object-center -z-10"/>
			            <Title />
		      			<AboutUsContent />
	            	</div>

		      		<TechnologyJumbotron />
		      		<WeSpeakHuman />

                </div>
		    </Wrapper>
		    </>
	    );	
	}

export default Home;

