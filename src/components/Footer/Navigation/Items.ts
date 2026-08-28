
import { IconType } from "react-icons";
import { PiBuildingsDuotone } from "react-icons/pi";
import { MdDesignServices } from "react-icons/md";
import { GrResources } from "react-icons/gr";

interface LinkItem {
    label: string;
    href: string;
}

export interface Item {
    title: string;
    links: LinkItem[];
    icon: IconType;
    enableIcon: boolean;
}

export const Items: Item[] = [
	  	{
	    	title: "Company",
	    	links: [
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
	      		{  label: "Web development", href: "/web-development" },
	      		{  label: "IT Services", href: "/it-services" },
			    {  label: "Cloud Solutions", href: "/cloud-solutions" },
			    {  label: "System Integration", href: "/system-integration" },
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