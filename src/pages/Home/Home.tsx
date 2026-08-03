import { Seo, StructuredData, ScrollToTop } from "@/components";
import { organizationSchema } from "@/config";

import { Title, 
	AboutUsContent, TechnologyJumbotron, 
	WeSpeakHuman, WeSpeakHumanJumbotron,
	Footer } from "./";

	function Home() 
	{
	  	return (
		    <>
		      	<Seo title="GetSitGo | Spark Info-Tech Enterprise - Home" description="We help businesses grow through innovative IT solutions, including hardware, 
		      		networking, cybersecurity, and custom software development. Our team is committed to delivering reliable technology and exceptional 
		      		service that supports your success." 
		        canonical="https://www.getsitgo.com/Home" />
		        
		      	<StructuredData data={organizationSchema} />

		      	<div className="flex flex-col vstack my-10 lg:px-8 gap-8">

		      		<ScrollToTop />
		      		
		      		<Title />
		      		<AboutUsContent />
		      		<TechnologyJumbotron />
		      		<WeSpeakHuman />
		      		<WeSpeakHumanJumbotron />
		      		<Footer />

                </div>
		      	
		    </>
	    );	
	}

export default Home;

