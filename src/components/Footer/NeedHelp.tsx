
import { Button, Icon, Text } from "@/components";
import { PiHeadsetDuotone } from "react-icons/pi";
import { FiMail } from "react-icons/fi";
import { MdOutlinePhone } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";
import { FiArrowRight } from "react-icons/fi";

export default function NeedHelp() {

    const contactInfo = [
        {
            icon: FiMail,
            value: "hello@getsitgo.com",
            href: "mailto:hello@getsitgo.com",
        },
        {
            icon: MdOutlinePhone,
            value: "+63 000 000 0000",
            href: "tel:+630000000000",
        },
        {
            icon: LuMapPin,
            value: "Simkimban Building 4th flr, 9532B Taguig, Makati City, 1208 Metro Manila",
            href: "https://maps.app.goo.gl/Uosp84QvCXteTDsg8",
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

                    <Button variant="gradient" size="sm" className="gap-1">
                        Contact SPARK <Icon icon={FiArrowRight} size="sm" variant="light" />
                    </Button>

                </div>

            </div>
        </>
    )

}