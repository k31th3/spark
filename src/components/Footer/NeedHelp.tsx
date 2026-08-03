
import { Button } from "@/components";
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
            value: "+63 923 456 7890",
            href: "tel:+639234567890",
        },
        {
            icon: LuMapPin,
            value: "Simkimban Building 5th flr, 9532B Taguig, Makati City, 1208 Metro Manila",
            href: "https://maps.app.goo.gl/Uosp84QvCXteTDsg8",
        }
    ];

    return (
        <>
            <div className="border border-[#E9D5FF] rounded-[52px] 
                shadow-[0px_12px_40px_rgba(143,19,149,0.08)] p-[20px]">

                <div className="vstack gap-[32px]">

                    <div className="hstack items-center gap-3">
                        <div
                            className={`flex items-center justify-center h-10 w-10 rounded-full bg-[#FAF5FF]`}>
                            <PiHeadsetDuotone size={20} style={{ fill: "url(#iconGradient)" }} />
                        </div>

                        <div className="flex flex-col gap-0">
                            <p className="font-semibold text-sm">Need Help?</p>
                            <span className="font-tiny text-[12px] text-[#6E7884]">
                                We’re here for you
                            </span>
                        </div>
                    </div>

                    <ul className="vstack gap-2">
                        {contactInfo.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <li key={index}>
                                <div className="hstack gap-3">
                                    <div>
                                        <Icon
                                            size={16}
                                            className="text-[#A855F7]"/>
                                    </div>

                                    <div className="flex flex-col gap-0">
                                    <a
                                        href={item.href}
                                        target={item.href.startsWith("http") ? "_blank" : undefined}
                                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                        className="text-[11px] text-[#6E7884] hover:text-[#A855F7] transition-colors">
                                        {item.value}
                                    </a>
                                    </div>
                                </div>
                            </li>
                        );
                        })}
                    </ul>

                    <Button variant="gradient" size="sm" className="gap-2">
                        Contact SPARK <FiArrowRight />
                    </Button>

                </div>

            </div>
        </>
    )

}