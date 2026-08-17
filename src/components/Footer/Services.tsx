
import { LuArrowUpRight } from "react-icons/lu";
import { PiBuildingsDuotone } from "react-icons/pi";
import { MdDesignServices } from "react-icons/md";
import { GrResources } from "react-icons/gr";

import { Accordion, Text, Grid } from "@/components";

	const navigation = [
	  	{
	    	title: "Company",
	    	links: [
	      		{  label: "About Us", href: "/about-us" },
			    {  label: "Our Story", href: "/" },
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
			    {  label: "Support & Maintenance", href: "/support-and-maintenance" }
	    	],
	    	icon: MdDesignServices,
	    	enableIcon: false
	  	},
	  	{
	    	title: "Resources",
	    	links: [
	    		{  label: "Blog", href: "/" },
	      		{  label: "Company Portfolio", href: "/company-portfolio" },
			    {  label: "FAQ", href: "/frequently-asked-questions" },
			    {  label: "Privacy Policy", href: "/privacy-policy" },
			    {  label: "Terms of Service", href: "/terms-of-service" }
	    	],
	    	icon: GrResources,
	    	enableIcon: true
	  	}
	];

export default function Services() {

	return <>

        <Grid cols={{ base: 0, md: 3 }} gap={{ base: 10 }}  >
    	
           {/*Desktop*/}
           {navigation.map((menu) => (
            <Grid.Item hide={{ base: true }} show={{ md: true }} key={`accordion${menu.title}`} >
	            <Text variant="h1" className="text-xl sm:text-xl lg:text-xl mb-5">{menu.title}</Text>
	            <ul className="space-y-3">
	              	{menu.links.map((link) => (
					    <li key={`accordion${link.label}`}>
					      	<a
					        	href={link.href}
					        	aria-label={link.label}
					        	className="flex items-center gap-2 text-[11px] text-muted 
					        	hover:text-primary transition-colors">

					        	<Text variant="h2" className="sm:text-[11px] text-[11px] font-normal">{link.label}</Text>

					        	{menu.enableIcon && (
					          		<LuArrowUpRight size={12} />
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
                <Accordion defaultOpen="" className="vstack gap-2" icon="comparison">

                    {navigation.map((row, index) => {
                        return (
                            <>
                            <Accordion.Item
                                key={`navigation${index}`}
                                id={`navigation${index}`}>
                                
                                <Accordion.Header>
                                    <Text variant="h6">{row.title}</Text>
                                </Accordion.Header>

                                <Accordion.Body className="px-12">
                                    <Grid.VStack gap={2}> 
                                    {row.links.map((link) => (
                                        <a
                                            href={link.href}
                                            className="text-muted hover:text-primary">
                                            <Text variant="h2" className="sm:text-[14px] 
                                                text-[14px] font-normal">{link.label}</Text>
                                        </a>
                                    ))}
                                    </Grid.VStack> 
                                </Accordion.Body>

                            </Accordion.Item>
                            </>
                        )
                    })}

                </Accordion>
            </Grid.Item>
            {/*End mobile*/}
	    </Grid>

	</>
}
