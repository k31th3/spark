import { Seo, StructuredData, ScrollToTop } from "@/components";
import { organizationSchema } from "@/config";

import { Title, 
	AboutUsContent, TechnologyJumbotron, 
	WeSpeakHuman
} from "./";

import dashboardBg from "@/assets/dashboardBg.webp";

	function Home() 
	{
	  	return (
		    <>
		      	<Seo title="GetSitGo | Spark Info-Tech Enterprise - Home" description="We help businesses grow through innovative IT solutions, including hardware, 
		      		networking, cybersecurity, and custom software development. Our team is committed to delivering reliable technology and exceptional 
		      		service that supports your success." 
		        canonical="https://www.getsitgo.com/Home" />
		        
		      	<StructuredData data={organizationSchema} />

		      	<div className="flex flex-col vstack my-10 lg:px-8 gap-15">

		      		<ScrollToTop />
		      		
		      		<div className="vstack gap-15">
			            <img
			                src={dashboardBg}
			                alt="dashboard background"
			                fetchPriority="high"
			                decoding="sync"
			                className="absolute inset-0 w-full h-full object-cover object-center -z-10"
			            	onContextMenu={(e) => e.preventDefault()}
    						draggable={false}/>

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

