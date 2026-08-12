import { Wrapper, Text, Chip,
         Image, Card, Icon, 
         Button} from "@/components";

import { FcCalendar } from "react-icons/fc";

import dashboardBg from "@/assets/dashboardBg.webp";
import termsService from "@/assets/termsService.png";

function TermsService() {
    return <>
        <Wrapper title="Terms of Service" path="terms-of-service">
            <div className="flex flex-col vstack my-10 gap-20">
                <div className="grid grid-cols-1 gap-0">
                    
                    <Image
                        src={dashboardBg}
                        alt="dashboard background"
                        className="absolute inset-0 w-full h-full object-cover object-center -z-10"/>

                    <div className="flex items-center justify-center">
                        
                        <div className="flex flex-col gap-4 sm:w-auto w-full">
                            <Text variant="h1" className="lg:text-1xl">
                                <span className="text-gradient">Terms</span> of Service
                            </Text>

                            <Text variant="caption">
                                Please read these Terms of Service carefully before,<br />
                                using our website or engaging with our services.
                            </Text>

                            <div className="hstack gap-2">
                                <div>
                                    <Icon icon={FcCalendar} size="md" variant="primary" />
                                </div>
                                <Text variant="caption">
                                    Last update: Aug 12, 2026
                                </Text>
                            </div>
                        </div>
                        
                        <div className="flex">
                            <Image
                            src={termsService}
                            alt="Case Studies"
                            className="w-full max-w-[480px] object-cover"/>
                        </div>

                    </div>
                </div>  

                <Card>
                    <Card.Body>
                    </Card.Body>
                </Card>

            </div>
        </Wrapper> 
    </>
}

export default TermsService;
