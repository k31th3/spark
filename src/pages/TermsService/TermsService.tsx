
import { Wrapper, Text, Chip, Card,
         Image, Icon, Accordion} from "@/components";

import { FcCalendar } from "react-icons/fc";
import { GoDotFill } from "react-icons/go";

import { dashboardBgWeBp } from "@/assets/Dashboard";
import termsService from "@/assets/termsService.png";

import { Contents } from "./Contents";


function TermsService() {

    return <>
        <Wrapper title="Terms of Service" path="terms-of-service">
            <div className="flex flex-col vstack my-10 gap-20">
                <div className="grid grid-cols-1 gap-0">
                    
                    <Image
                        src={dashboardBgWeBp}
                        alt="dashboard background"
                        className="absolute inset-0 w-full h-full object-cover object-center -z-10"/>

                    <div className="flex items-center justify-center">
                        
                        <div className="flex flex-col gap-4 sm:w-auto w-full">

                            <div>
                                <div className="mb-4">
                                    <Chip variant="primary" size="lg" className="uppercase px-3">
                                        <Icon icon={GoDotFill} size="sm" variant="danger" /> legal
                                    </Chip>
                                </div>

                                <Text variant="h1" className="lg:text-1xl">
                                    Terms of Service
                                </Text>

                                <Text variant="h4">
                                    Clear expectations. <span className="text-gradient">Better partnerships.</span>
                                </Text>

                                <div className="lg:hidden px-8">
                                    <Image
                                    src={termsService}
                                    alt="Case Studies"
                                    className="w-full max-w-[480px] object-cover"/>
                                </div>
                            </div>

                            <Text variant="caption">
                                These Terms of Service outline the rules, responsibilities, and <br />
                                guidelines for using SIT website, services, and digital products. <br />
                                By using our services, you agree to these terms.
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

                        <div className="hidden lg:flex ">
                            <Image
                            src={termsService}
                            alt="Case Studies"
                            className="w-full max-w-[480px] object-cover"/>
                        </div>

                    </div>
                </div>  

                <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-4">

                    <div>
                        <Card>
                            <Card.Body>
                            </Card.Body>                                
                        </Card>
                    </div>     

                    <Accordion defaultOpen="accordion0" className="vstack gap-2">
                        {Contents.map((item, index) => {
                            return (
                                <Accordion.Item
                                    key={`accordion${index}`}
                                    id={`accordion${index}`}
                                    className="border border-gray-300 rounded-lg shadow-sm bg-white">
                                    
                                    <Accordion.Header>
                                        <Text variant="h6">{item.title}</Text>
                                    </Accordion.Header>

                                    <Accordion.Body className="border-t border-gray-300 rounded-b-lg
                                        py-4 bg-primary/4">
                                            {item.description.map((line, row) => (
                                                <Text 
                                                    key={`text${row}`}
                                                    variant="label" 
                                                    className="block leading-4 mb-2">         
                                                    {line}
                                                </Text>
                                            ))}
                                        {item.email ? 
                                            <>
                                            <span className="text-xs">Email:{" "}</span>
                                            <a href={`mailto:${item.email}`} className="text-xs text-primary">
                                                {item.email}</a> 
                                            </>: ""
                                        }
                                    </Accordion.Body>

                                </Accordion.Item>
                            );
                        })}
                    </Accordion>
                </div>

            </div>
        </Wrapper> 
    </>
}

export default TermsService;
