import { Seo, StructuredData, ScrollToTop } from "@/components";
import { organizationSchema } from "@/config";

	function StartHere() 
	{
	  	return (
		    <>
		      	<Seo title="GetSitGo | Spark Info-Tech Enterprise - Let's Start Here" description="We help businesses grow through innovative IT solutions, including hardware, 
		      		networking, cybersecurity, and custom software development. Our team is committed to delivering reliable technology and exceptional 
		      		service that supports your success." 
		        canonical="https://www.getsitgo.com/startHere" />
		        
		      	<StructuredData data={organizationSchema} />

		      	<div className="flex flex-col vstack my-10 lg:px-8 gap-8">

		      		<ScrollToTop />
		      		
                </div>
		      	
		    </>
	    );	
	}

export default StartHere;

