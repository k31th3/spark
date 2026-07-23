
import style from "./Services.module.css";
import type { IconType } from "react-icons";

type Service = {
    id: number;
    icon: IconType;
    title: string;
    description: string;
};

type SectionBodyProps = {
    services: Service[];
};

const ServiceIcon = ({ Icon, className }) => (
        <div className={`${style.sectionBodyIcon} ${className}`}>
            <Icon className="text-[18px]" />
        </div>
    );

const SectionBody = ({ services }: SectionBodyProps) => {

    return (
        <section className="py-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service) => {
              const Icon = service.icon;

                return (
                <div key={service.id} className="flex gap-5">
                  
                    {/* Desktop */}
                    <ServiceIcon Icon={Icon} className="hidden xs:flex" />

                    {/* Content */}
                    <div className="flex flex-col gap-4">

                        {/* Mobile */}
                        <ServiceIcon Icon={Icon} className="flex xs:hidden" />

                        <div>
                            <h3 className={style.sectionBodyContentTitle}>
                                {service.title}
                            </h3>

                            <p className={style.sectionBodyContentDesc}>
                                {service.description}
                            </p>
                        </div>

                    </div>
                </div>
                );
            })}
            </div>
        </section>
    );
};

export default SectionBody;