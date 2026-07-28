import { Seo, StructuredData } from "@/components";
import { Title, AboutUsContent, 
	TechnologyJumbotron, WeSpeakHuman } from "./";

	function StartHere() 
	{
		const pageUrl = `${window.location.origin}/startHere`;
	  	return (
		    <>
		      	<Seo title="Let's Start Here" description="We help businesses grow through innovative IT solutions, including hardware, 
		      		networking, cybersecurity, and custom software development. Our team is committed to delivering reliable technology and exceptional 
		      		service that supports your success." 
		        canonical={pageUrl} />
		        
		      	<StructuredData data={""} />

		      	<div className="flex flex-col vstack my-10 lg:px-8 gap-8">

		      		<Title />
		      		<AboutUsContent />
		      		<TechnologyJumbotron />
		      		<WeSpeakHuman />

                </div>
		      	
		    </>
	    );	
	}

export default StartHere;

