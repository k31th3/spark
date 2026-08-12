import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

import { Wrapper, Text, Chip,
         Image, Card, Icon} from "@/components";

import { FcCalendar } from "react-icons/fc";
import { GoDotFill } from "react-icons/go";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

import dashboardBg from "@/assets/dashboardBg.webp";
import termsService from "@/assets/termsService.png";

import { Contents } from "./Contents";

function TermsService() {

    const [openIndex, setOpenIndex] = useState(0);

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

                <Card>
                    <Card.Body>
                        
                        {Contents.map((item, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div key={`accordion${index}`}>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setOpenIndex(isOpen ? null : index)
                                        }
                                        className="flex w-full cursor-pointer items-center justify-between py-4 text-left">
                                        
                                        <span className="font-semibold">{item.title}</span>

                                        <motion.span
                                            transition={{ duration: 0.2 }}>
                                            {isOpen ? (
                                                <FaMinus className="h-4 w-4" />
                                            ) : (
                                                <FaPlus className="h-4 w-4" />
                                            )}
                                        </motion.span>
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                initial={{
                                                    height: 0,
                                                    opacity: 0,
                                                }}
                                                animate={{
                                                    height: "auto",
                                                    opacity: 1,
                                                }}
                                                exit={{
                                                    height: 0,
                                                    opacity: 0,
                                                }}
                                                transition={{
                                                    duration: 0.3,
                                                    ease: "easeInOut",
                                                }}
                                                className="overflow-hidden">
                                                <Text variant="caption" color="muted" className="pb-4 px-4">
                                                    {item.description}
                                                </Text>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}

                    </Card.Body>
                </Card>

            </div>
        </Wrapper> 
    </>
}

export default TermsService;
