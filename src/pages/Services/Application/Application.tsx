
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
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum."/>

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