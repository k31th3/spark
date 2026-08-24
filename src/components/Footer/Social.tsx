
import { TfiFacebook } from "react-icons/tfi";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaArrowUp } from "react-icons/fa6";
import { scrollToTop } from "@/utils";

import { Icon, 
    Button, Grid } from "@/components";

export default function Social() {

    const socialLinks = [
        {
            id: 1,
            icon: TfiFacebook,
            href: "https://facebook.com/yourusername",
        },
        {
            id: 2,
            icon: FaXTwitter,
            href: "https://x.com/yourusername",
        },
        {
            id: 3,
            icon: FaGithub,
            href: "https://github.com/yourusername",
        },
        {
            id: 4,
            icon: RiInstagramFill,
            href: "https://instagram.com/yourusername",
        }
    ];
    
    return (
        <div id="socialSection" className="border-y border-[#E7E8EA] py-3">
            <Grid cols={{ base: 1, sm: 2 }} gap={{ base: 4, sm: 4 }} className="items-center">
                
                {/* Left — Social links */}
                <Grid.Item span={{ base: 1, sm: 1 }}>
                    <Grid.HStack gap={2} className="items-center justify-center sm:justify-start">
                        <span className="mr-2 font-semibold text-sm">
                          Follow us
                        </span>

                        {socialLinks.map(({ id, icon, href }) => (
                            <a key={id} href={href} target="_blank" rel="noopener noreferrer">
                                <Button className="rounded-full border-0 p-0" variant="outline" size="sm">
                                    <Icon icon={icon} size="sm" variant="gradient" avatar={true}/>
                                </Button>
                            </a>
                        ))}
                    </Grid.HStack>
                </Grid.Item>

                {/* Right — Back to top */}
                <Grid.Item span={{ base: 1, sm: 1 }}>
                    <Grid.HStack gap={4} className="items-center justify-center sm:justify-end" >
                        <Button className="rounded-full p-0 shadow-[0px_12px_24px_rgba(187,77,192,0.4)]" 
                            variant="gradient" size="sm" onClick={scrollToTop}>
                            <Icon icon={FaArrowUp} size="sm" avatar={true} variant="light"/>
                        </Button>

                        <span className="mr-3 font-normal text-sm">
                            Back to top
                        </span>
                    </Grid.HStack>
                </Grid.Item>
            </Grid>
        </div>
    );
}