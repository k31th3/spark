
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa6";

import { PiBuildingsDuotone } from "react-icons/pi";
import { MdDesignServices } from "react-icons/md";
import { GrResources } from "react-icons/gr";

import { Text } from "@/components";

	const menus = [
	  	{
	    	title: "Company",
	    	links: [
	      		{  label: "About Us", href: "/about-us" },
			    {  label: "Our Story", href: "/lets-start-here" },
			    {  label: "Careers", href: "/careers" },
			    {  label: "Contact Us", href: "/contact-us" }
	    	],
	    	icon: PiBuildingsDuotone,
	    	enableIcon: true
	  	},
	  	{
	    	title: "Services",
	    	links: [
	      		{  label: "Web development", href: "/" },
	      		{  label: "IT Services", href: "/" },
			    {  label: "Cloud Solutions", href: "/" },
			    {  label: "System Integration", href: "/" },
			    {  label: "Support & Maintenance", href: "/" }
	    	],
	    	icon: MdDesignServices,
	    	enableIcon: false
	  	},
	  	{
	    	title: "Resources",
	    	links: [
	    		{  label: "Blog", href: "/" },
	      		{  label: "Case Studies", href: "/" },
			    {  label: "FAQ", href: "/frequently-asked-questions" },
			    {  label: "Privacy Policy", href: "/privacy-policy" },
			    {  label: "Terms of Service", href: "/" }
	    	],
	    	icon: GrResources,
	    	enableIcon: true
	  	}
	];

export default function Accordion() {

	const [open, setOpen] = useState(null);

	return <>

		{/*Desktop*/}

			<div className="hidden md:grid md:grid-cols-3 gap-10 px-5">
		        {menus.map((menu) => (
		        <div key={`accordion${menu.title}`}>
		            <Text variant="h4" className="mb-5">{menu.title}</Text>

		            <ul className="space-y-3">
		              	{menu.links.map((link) => (
						    <li key={`accordion${link.label}`}>
						      	<a
						        	href={link.href}
						        	aria-label={link.label}
						        	className="flex items-center gap-4 text-[11px] text-muted 
						        	hover:text-primary transition-colors">

						        	<Text variant="caption" className="text-[11px]">{link.label}</Text>

						        	{menu.enableIcon && (
						          		<FaChevronRight size={8} />
						        	)}
						      	</a>
						    </li>
						))}
		            </ul>
		        </div>
		        ))}
		    </div>

		{/*End desktop*/}

		{/*Mobile*/}
		    <div className="md:hidden divide-y divide-gray-200">
			  	{menus.map((menu, index) => (
			    	<div key={menu.title}>
			      		<button
			        		onClick={() => setOpen(open === index ? null : index)}
			        		className="flex w-full items-center justify-between py-4 cursor-pointer">
				        	
				        	<div>
				        		<menu.icon />
				        		<Text variant="h6">{menu.title}</Text>
				        	</div>

				        	<motion.div
				          		animate={{ rotate: open === index ? 90 : 0 }}
				          		transition={{ duration: 0.25 }}>
				          		<FaChevronRight size={12} />
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
					                    	className="flex items-center justify-between text-[12px] 
					                    	text-muted hover:text-primary">
					                    	<Text variant="caption">{link.label}</Text>
					                  	</a>
					                </motion.li>
					              	))}
					            </ul>
			          		</motion.div>
			        	)}
			      	</AnimatePresence>
			    </div>
			  ))}
			</div>

		{/*End mobile*/}

	</>
}
