import { LuServer, LuHeadphones, LuShieldCheck, LuCloud, LuCompass } from "react-icons/lu";
import { Text, Icon, Section, Wrapper, Reveal } from "@/components";
import { LinkButton, SECTION, CONTAINER, SECTION_TITLE, ITEM_TITLE } from "../Shared";

const services = [
    { title: "Managed IT Services", icon: LuServer, wide: false,
      href: "/support-and-maintenance",
      description: "We manage your IT operations so you can focus on growing your business." },
    { title: "IT Support & Helpdesk", icon: LuHeadphones, wide: false,
      href: "/support-and-maintenance",
      description: "Fast, friendly, and reliable support for your teams anytime, anywhere." },
    { title: "Cybersecurity", icon: LuShieldCheck, wide: false,
      href: "/services?tab=2",
      description: "Protect your systems, data, and users with multi-layered security solutions." },
    { title: "Cloud Solutions", icon: LuCloud, wide: true,
      href: "/cloud-solutions",
      description: "Move, manage, and optimize your workloads in the cloud with confidence." },
    { title: "IT Consulting", icon: LuCompass, wide: true,
      href: "/contact-us",
      description: "Strategic guidance to align technology with your business goals." }
];

function OurCoreItServices() {
    return (
        <Section id="core-services" spacing="none" className={SECTION}>
            <Wrapper.Body className={CONTAINER}>
                <Reveal variant="slide">
                    <div className="relative isolate">

                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-x-0 top-1/4 -z-10 mx-auto h-[28rem] max-w-5xl blur-3xl
                                bg-[radial-gradient(ellipse_at_30%_70%,rgba(209,41,221,0.28),transparent_55%),radial-gradient(ellipse_at_65%_20%,rgba(255,143,39,0.20),transparent_55%)]" />

                        <div className="mb-12 vstack items-center gap-3 text-center sm:mb-16">
                            <h2 className={SECTION_TITLE}>Our Core IT Services</h2>
                            <Text variant="bodySmall" color="muted" className="max-w-md">
                                End-to-end IT solutions for every business need.
                            </Text>
                        </div>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
                            {services.map(({ title, description, icon, href, wide }) => (
                                <article
                                    key={title}
                                    className={`vstack min-h-[270px] justify-between gap-8 rounded-3xl border border-gray-100 bg-white p-6
                                        shadow-[0_10px_40px_rgba(80,40,120,0.08)]
                                        ${wide ? "md:col-span-3" : "md:col-span-2"}`}>
                                    <div className="vstack gap-5">
                                       
                                        <Icon
                                            icon={icon}
                                            variant="gradient"
                                            size="lg"
                                            style={{ fill: "none", stroke: "url(#iconGradient)" }} />
                                        <h3 className={ITEM_TITLE}>{title}</h3>
                                        <Text variant="bodySmall" color="muted">{description}</Text>
                                    </div>
                                    <div>
                                        <LinkButton to={href} variant="dark" size="sm" glow roll>
                                            Learn More
                                        </LinkButton>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </Reveal>
            </Wrapper.Body>
        </Section>
    );
}

export default OurCoreItServices;