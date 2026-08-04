import { Seo, StructuredData, 
		Text, Image } from "@/components";

import { organizationSchema } from "@/config";

import FaqWebp from "@/assets/faq.webp"
import dashboardBg from "@/assets/dashboardBg.webp";

function PrivacyPolicy() {
	return <>
		
		<Seo title="GetSitGo | Spark Info-Tech Enterprise - Privacy Policy" description="We help businesses grow through innovative IT solutions, including hardware, 
		      		networking, cybersecurity, and custom software development. Our team is committed to delivering reliable technology and exceptional 
		      		service that supports your success." 
		        canonical="https://www.getsitgo.com/startHere" />
		        
		<StructuredData data={organizationSchema} />

		<div className="flex flex-col vstack my-10 gap-15">

			<div className="grid grid-cols-1 gap-0">
                
                <Image
	                src={dashboardBg}
	                alt="dashboard background"
	                className="absolute inset-0 w-full h-full object-cover object-center -z-10"/>

                <div className="flex items-center justify-center">
                    <div className="hstack gap-2">
                        <div className="flex flex-col gap-3">
                            <Text variant="h1" className="lg:text-1xl">
                                Frequently Asked
                                <br />
                                <span className="text-gradient">Questions</span>
                            </Text>

                            <div className="flex flex-col gap-2 text-xs">
                                <Text variant="caption">
                                    Find answers to the common 
                                <br />
                                questions about SIT and our services.</Text>
                            </div>
                        </div>
                    </div>
                    <Image
		      			src={FaqWebp}
		      			alt="Frequently Asked Questions"
		      			className="w-full max-w-[320px] object-cover"/>
                </div>

		  	</div>

		</div>


	</>;
}

export default PrivacyPolicy;
