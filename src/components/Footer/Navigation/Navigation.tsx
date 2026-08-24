
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { FaChevronRight } from "react-icons/fa6";

import { Icon, Text, Grid } from "@/components";
import { Items } from "./Items";

export default function Navigation() {

	const [open, setOpen] = useState(null);
    const location = useLocation();

    const handleNavigation = (e, href) => {
        const url = new URL(href, window.location.origin);
        if (url.pathname === location.pathname) {
            e.preventDefault();

            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

	return <>

        <Grid cols={{ base: 0, md: 3 }} gap={{ base: 10 }}  >
    	
           {/*Desktop*/}
           {Items.map((menu) => (
            <Grid.Item hide={{ base: true }} show={{ md: true }} key={`accordion${menu.title}`} >
	            <Text variant="h1" className="text-xl sm:text-xl lg:text-xl mb-5">{menu.title}</Text>
	            <ul className="space-y-3">
	              	{menu.links.map((link) => (
					    <li key={`accordion${link.label}`}>
					      	<a
					        	href={link.href}
					        	aria-label={link.label}
                                onClick={(e) => handleNavigation(e, link.href)}
					        	className="flex items-center gap-4 text-[11px] text-muted 
					        	hover:text-primary transition-colors">

					        	<Text variant="h2" className="sm:text-[11px] text-[11px] font-normal">{link.label}</Text>

					        	{menu.enableIcon && (
					          		<FaChevronRight size={8} />
					        	)}
					      	</a>
					    </li>
					))}
	            </ul>
            </Grid.Item>
    	    ))}
            {/*End desktop*/}

            {/*Mobile*/}
            <Grid.Item hide={{ md: true }}>
                {Items.map((menu, index) => (
                    <div key={menu.title}>
                        <button
                            onClick={() => setOpen(open === index ? null : index)}
                            className="flex w-full items-center justify-between py-4 cursor-pointer">
                            
                            <div>
                                <menu.icon />
                                <Text variant="h1" className="text-lg sm:text-lg lg:text-lg">{menu.title}</Text>
                            </div>

                            <motion.div
                                animate={{ rotate: open === index ? 90 : 0 }}
                                transition={{ duration: 0.25 }}>
                                <Icon icon={FaChevronRight} size="sm" />
                            </motion.div>
                        </button>

                    <AnimatePresence initial={false}>
                        {open === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden">
                                <ul className="pb-4 pl-4 space-y-3">
                                    {menu.links.map((link) => (
                                    <motion.li
                                        key={link.href}
                                        initial={{ opacity: 0, y: -8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -8 }}
                                        transition={{ duration: 0.2 }}>
                                        <a
                                            href={link.href}
                                            onClick={(e) => handleNavigation(e, link.href)}
                                            className="flex items-center justify-between text-[12px] 
                                            text-muted hover:text-primary">
                                            <Text variant="h2" className="sm:text-[12px] text-[12px] font-normal">{link.label}</Text>
                                        </a>
                                    </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                ))}
            </Grid.Item>
            {/*End mobile*/}
	    </Grid>

	</>
}
