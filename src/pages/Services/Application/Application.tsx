
import { SectionHeader } from "@/pages/Services";
import CardButton from "./CardButton";

// import Pinya from "@/assets/pinya.svg";
// import Ubas from "@/assets/ubas.svg";

export default function Application() {
    return (
    <>
        <div className="vstack gap-4">
            <SectionHeader
                title="Application Services"
                description="Design, develop, and maintain custom web and mobile applications tailored to your business needs. 
                We create secure, scalable, and user-friendly solutions that streamline operations, improve productivity 
                and support your business growth."/>

            <div className="flex sm:flex-row flex-col gap-4 px-2">
            
                <CardButton
                    title=""
                    subtitle=""
                    icon=""
                    iconBg="bg-orange-500"
                    href=""/>

                <CardButton
                    title=""
                    subtitle=""
                    icon=""
                    iconBg="bg-purple-400"
                    href=""/>
            </div>
        </div>
    </>
    );
}