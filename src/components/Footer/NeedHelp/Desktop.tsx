
import { Button, Icon, Text } from "@/components";
import { PiHeadsetDuotone } from "react-icons/pi";
import { FiMail } from "react-icons/fi";
import { MdOutlinePhone } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";
import { FiArrowRight } from "react-icons/fi";

export default function Desktop() {

    const contactInfo = [
        {
            icon: FiMail,
            value: import.meta.env.VITE_CONTACT_EMAIL,
            href: `mailto:${import.meta.env.VITE_CONTACT_EMAIL}`
        },
        {
            icon: MdOutlinePhone,
            value: import.meta.env.VITE_CONTACT_PHONE,
            href: `tel:${import.meta.env.VITE_CONTACT_PHONE}`
        },
        {
            icon: LuMapPin,
            value: import.meta.env.VITE_CONTACT_ADDRESS,
            href: import.meta.env.VITE_CONTACT_GOOGLE_MAP
        }
    ];

    return (
        <>
            <div className="border border-[#E9D5FF] rounded-[24px] 
                shadow-[0px_12px_40px_rgba(143,19,149,0.08)] p-[20px]">

                <div className="vstack gap-[32px]">

                    <div className="hstack items-center gap-3">
                        
                        <Icon icon={PiHeadsetDuotone} size="md" avatar={true} 
                            variant="gradient" />

                        <div className="flex flex-col gap-0">
                            <Text variant="caption">Need Help?</Text>
                            <Text variant="label" color="muted">
                                We’re here for you
                            </Text>
                        </div>
                    </div>

                    <ul className="vstack gap-2">
                        {contactInfo.map((item, index) => {
                        const icon = item.icon;

                        return (
                            <li key={index}>
                                <div className="hstack gap-3">
                                    <div>
                                        <Icon
                                            icon={icon}    
                                            size="sm"
                                            variant="primary"/>
                                    </div>

                                    <div className="flex flex-col gap-0">
                                    <a
                                        href={item.href}
                                        target={item.href.startsWith("http") ? "_blank" : undefined}
                                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                        className="text-[11px] text-muted hover:text-primary transition-colors">
                                        {item.value}
                                    </a>
                                    </div>
                                </div>
                            </li>
                        );
                        })}
                    </ul>

                    <Button variant="gradient" size="sm" className="gap-1" 
                        onClick={() => window.location.href = `mailto:${import.meta.env.VITE_CONTACT_EMAIL}`}>
                        Contact SPARK <Icon icon={FiArrowRight} size="sm" variant="light" />
                    </Button>

                </div>

            </div>
        </>
    )

}