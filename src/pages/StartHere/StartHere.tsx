import { Seo, StructuredData } from "@/components";

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

		      	<div className="flex flex-col items-center justify-center px-4 py-12 lg:px-8">
                    
		      		<div className="vstack gap-4">
		      			
		      			
		      			
		      		</div>

                </div>
		      	
		    </>
	    );	
	}

export default StartHere;
