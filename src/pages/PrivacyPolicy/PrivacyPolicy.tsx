import { Icon, Image, Text, Wrapper  } from "@/components";

import privacyPolicy from "@/assets/privacyPolicy.png"
import { dashboardBgWeBp } from "@/assets/Dashboard";


import { Contents } from "./Contents";

function PrivacyPolicy() {
	return <>

        <Wrapper title="Privacy policy" path="privacy-policy">

		<div className="flex flex-col vstack my-10 gap-20">

			<div className="grid grid-cols-1 gap-0">
                
                <Image
	                src={dashboardBgWeBp}
	                alt="dashboard background"
	                className="absolute inset-0 w-full h-full object-cover object-center -z-10"/>

                <div className="flex items-center justify-center">
                    <div className="flex flex-col gap-4 sm:w-auto w-full">
                        <div className="flex flex-col gap-3">
                            <Text variant="h1" className="lg:text-1xl">
                                Privacy <span className="text-gradient">policy</span>
                            </Text>

                            <div className="flex flex-col gap-2 text-xs">
                                <Text variant="caption">
                                    Your privacy is important to us.<br />
                                	This policy explain how we collect, use <br />
                                	and protect your information.
                            	</Text>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                    <Image
		      			src={privacyPolicy}
		      			alt="Frequently Asked Questions"
		      			className="w-full max-w-[480px] object-cover"/>
		      		</div>
                </div>

		  	</div>

		  	<div className="max-w-5xl mx-auto">
		  		<ul className="vstack gap-4 px-[16px]">
		    		{Contents.map((item, index) => {
                        return (
					    <li key={index}>
					      	<div className="grid grid-cols-[48px_1fr] gap-4">    
					          	<Icon icon={item.icon}
					            	size="md" variant="gradient" avatar={true}/>
					        
					        	<div className="flex flex-col gap-0">
					          		<Text variant="lead" className="font-medium">{item.title}</Text>
					          		<Text variant="bodySmall" color="muted">
								      	{item.lines.map((line, item) => (
								        	<span key={item}>
								          		{line}
								          	<br />
								        	</span>
								      	))}
								    </Text>
					        	</div>
					      	</div>
					    </li>
                        );
                    })}
		    	</ul>
		  	</div>

		</div>
		</Wrapper>

	</>;
}

export default PrivacyPolicy;
