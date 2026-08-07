
import { TfiFacebook } from "react-icons/tfi";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaArrowUp } from "react-icons/fa6";

import { Icon, Button } from "@/components";

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

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>

            <div className="flex sm:flex-row flex-col gap-4
                items-center justify-between py-3 border-y-1 border-[#E7E8EA]"
                 id="socialSection">

                {/*left*/}
                <ul className="hstack gap-2 items-center">
                    
                    <li className="font-semibold text-sm mr-2">
                        Follow us
                    </li>

                    {socialLinks.map(({ id, icon, href }) => (
                        <li key={id}>
                            <Button
                                className="rounded-full p-0 border-0 h-0"
                                variant="outline"
                                size="sm">
                            <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer">
                                <Icon 
                                    icon={icon}
                                    size="sm"
                                    variant="gradient"
                                    avatar={true}/>
                            </a>
                          </Button>
                        </li>
                      ))}

                </ul>

                {/*right*/}
                <div>
                    <ul className="hstack gap-4 items-center">

                        <li>
                            <Button
                                className="rounded-full rounded-full p-0 shadow-[0px_12px_24px_rgba(187,77,192,0.4)]"
                                variant="gradient"
                                size="sm"
                                onClick={scrollToTop}>
                                <Icon icon={FaArrowUp} size="sm" avatar={true} variant="light"/>
                            </Button>
                        </li>

                        <li className="font-normal text-sm mr-3">
                            Back to top
                        </li>

                    </ul>
                </div>

            </div>

        </>
    );
}