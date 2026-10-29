"use client";

import { Wrapper, Grid, StructuredData, HomeHero, Projects } from "@/components";
import type { Project } from "@/components";
import { aboutUsSchema } from "@/config";

import { SitWithUs } from "./";

import HomeAbout from "@/components/HomeAbout/HomeAbout";
import HomeServices from "@/components/HomeServices/HomeServices";
import type { HomeServiceItem } from "@/components/HomeServices/HomeServices.types";

import HomeWhyUs from "@/components/HomeWhyUs/HomeWhyUs";
import type { HomeWhyUsItem } from "@/components/HomeWhyUs/HomeWhyUs.types";

import HomeFAQ from "@/components/HomeFaq/HomeFaq";
import type { HomeFAQItem } from "@/components/HomeFaq/HomeFaq.types";

import {
	SitAnimation, Cahel, LogoTransparent, Hardware, Software,Security, Applications, 
	Finya, Ubas, Placeholder1, AboutVideo, TextBeforeGoogle, Human, WeKeepItSimple,
	MoreThanMaintenance, FaqImg
} from "@/assets";



/* =========================================================
   PLACEHOLDER LINK (NO WORK PAGES EXIST YET)
========================================================= */

const WORK_PAGE = "/404";

/* =========================================================
   HERO CONTENT
========================================================= */

const HERO = {
	eyebrow: "Web & App Development Studio",
	headline: "Spark Info-Tech",
	subtitle:
		"Whether you need a modern web presence, a mobile app, or a scalable digital product, we've got you covered. Simple, effective, and built to grow with you.",
	ctaLabel: "Let's Get Started",
	ctaHref: "/contact",
	scrollTargetId: "work",
	wordmarkImage: LogoTransparent,
	video: { src: SitAnimation },
};

/* =========================================================
   WORK CONTENT
========================================================= */

const PROJECTS: Project[] = [
	{ id: "work-1", title: "Project one", category: "Web design", year: "2026", image: Cahel, href: WORK_PAGE },
	{ id: "work-2", title: "Project two", category: "App development", year: "2026", image: Finya, href: WORK_PAGE },
	{ id: "work-3", title: "Project three", category: "Branding", year: "2025", image: Ubas, href: WORK_PAGE },
	{ id: "work-4", title: "Project four", category: "Web design", year: "2025", image: Placeholder1, href: WORK_PAGE },
];

/* =========================================================
   ABOUT CONTENT
========================================================= */

const ABOUT = {
	eyebrow: "About Us",
	label: "Spark Info-Tech Enterprise",
	paragraphs: [
		[
			"We combine clean 👷 engineering, thoughtful 🎨 design, and a deep understanding 🧠 of modern web technology 💻 to help your business stand out.",
		],
		[
			'Every IT company says they "provide solutions." We\'d rather start 🏃 things.',
		],
		[
			"Because that's what a spark ✨ is.",
			"Not a fire 🔥🔥🔥.",
			"The beginning of one 🌌.",
			"A tiny moment that starts something bigger.",
			"A business. 💼",
			"A crazy idea. 💡",
			"A conversation. 💬",
			"Confidence. 💪",
			"Friendships. 👫",
			"Possibilities. ♾️",
		],
	],
	video: { src: AboutVideo, label: "Play the Spark Info-Tech video" },
};

/* =========================================================
   SERVICES CONTENT
========================================================= */

const SERVICES_PAGE = "/services";

const SERVICES: { items: HomeServiceItem[] } = {
	items: [
		{
			id: "hardware",
			title: "Hardware",
			image: Hardware,
			description:
				"Reliable equipment, set up and supported, so your team spends less time on broken devices.",
			href: `${SERVICES_PAGE}?tab=0`,
			tags: ["Devices", "Networking", "Setup"],
		},
		{
			id: "software",
			title: "Software",
			image: Software,
			description:
				"Custom and off-the-shelf software chosen and built around how your business actually works.",
			href: `${SERVICES_PAGE}?tab=1`,
			tags: ["Custom builds", "Integrations", "Support"],
		},
		{
			id: "security",
			title: "Security",
			image: Security,
			description:
				"Practical protection for your data, devices and people, without slowing the work down.",
			href: `${SERVICES_PAGE}?tab=2`,
			tags: ["Data protection", "Access control", "Monitoring"],
		},
		{
			id: "applications",
			title: "Applications",
			image: Applications,
			description:
				"Web and mobile apps designed, built and maintained to grow with you.",
			href: `${SERVICES_PAGE}?tab=3`,
			tags: ["Web apps", "Mobile apps", "Maintenance"],
		},
	],
};

/* =========================================================
   WHY US CONTENT
========================================================= */
 
const WHY_US: { items: HomeWhyUsItem[] } = {
	items: [
		{
			id: "speak-human",
			title: "We Speak Human.",
			image: Human,
			lines: [
				{ text: "Technology should feel like talking to your smartest friend…\n…not reading an instruction manual.", tone: "strong" },
				"If you don't know what RAM, DNS, VLAN, or RAID means...",
				"Good.",
				"That's what we're here for.",
				"We'll explain Wi-Fi in a way that actually makes sense.",
				'We\'ll answer your "stupid questions" because we don\'t believe they exist.',
				"We'll sketch ideas on tissue paper if that's what makes it click.",
				"Because understanding technology shouldn't require learning another language. Around here...",
				{ text: "We don't speak IT.\nWe speak people.", tone: "strong" },
			],
		},
		{
			id: "text-before-google",
			title: "We're Who You'll Text Before You Google.",
			image: TextBeforeGoogle,
			lines: [
				{ text: "The people who get excited about your next move…\nand remind you to back up your files because... let's be honest...\nyou probably forgot.", tone: "strong" },
				"We're not here to make technology less scary.",
				"We're here to make it feel easy.",
				"Maybe even a little fun.",
			],
		},
		{
			id: "more-than-maintenance",
			title: "More Than Maintenance",
			image: MoreThanMaintenance,
			lines: [
				"We weren't built to be a silent supplier.",
				"You deserve more than hearing from us only when something breaks.",
				"We don't Deploy. We Set You Up.",
				"We don't do Maintenance. We Check In.",
				"We don't close tickets. We keep conversations going.",
				"Because you're more than a ticket number.\nAnd yes...",
				{ text: "We'll probably become friends.", tone: "accent" },
			],
		},
		{
			id: "keep-it-simple",
			title: "We Keep It Simple.",
			image: WeKeepItSimple,
			lines: [
				"Technology doesn't have to be complicated.",
				"People do a pretty good job of that already.",
				"Technology shouldn't make people feel stupid.",
				"It shouldn't require a translator.",
				"It shouldn't be intimidating.",
				"It shouldn't get in the way of what you're building.",
				"Life's already complicated.",
				{ text: "Technology should feel like a teammate.", tone: "strong" },
				"Not another problem.",
				"It should help you move faster.\nBuild better.",
				{ text: "Dream bigger.", tone: "accent" },
			],
		},
	],
};

	/* =========================================================
	FAQ CONTENT 
	========================================================= */
	
	const FAQ_PAGE = "/frequently-asked-questions";
	
	const FAQS: HomeFAQItem[] = [
		{
			id: "services",
			question: "What services do you offer?",
			answer:
				"We offer web development, mobile app development, branding, and UI/UX design services tailored to your business needs.",
		},
		{
			id: "timeline",
			question: "How long does a typical project take?",
			answer:
				"Timelines vary by scope, but most projects range from 4 to 12 weeks from kickoff to launch.",
		},
		{
			id: "support",
			question: "Do you offer ongoing support after launch?",
			answer:
				"Yes, we offer maintenance and support packages to keep your product running smoothly after launch.",
		},
		{
			id: "cost",
			question: "How much does a project cost?",
			answer:
				"It depends on scope and complexity. After a short discovery call we send a clear, itemized quote with no hidden fees.",
		},
		{
			id: "ownership",
			question: "Do I own the code and designs?",
			answer:
				"Yes. Once the project is paid for, all source code, designs and assets are fully yours.",
		},
		{
			id: "hardware",
			question: "Can you work on hardware projects too?",
			answer:
				"Yes. We handle software and hardware projects, including system integration and device-connected apps.",
		},
	];

function Home()
	{
	  	return (
		    <>
                <Wrapper title="Spark Info-Tech Enterprise" path="">

                    {/* ===== HERO (FULL WIDTH, OUTSIDE THE BODY CONTAINER) ===== */}

                    <HomeHero {...HERO} />

                    {/* ===== WORK (ANCHOR: #work) ===== */}

                    <Projects
                        id="work"
                        eyebrow="Work"
                        title="Selected work"
                        projects={PROJECTS}
                        viewAllHref={WORK_PAGE}
                    />

                    {/* ===== ABOUT (ANCHOR: #about) ===== */}

                    <HomeAbout id="about" {...ABOUT} />

                    {/* ===== SERVICES (ANCHOR: #services) ===== */}

                    <HomeServices
                        id="services"
                        title="Hardware, software, security and applications: everything your business runs on."
                        {...SERVICES}
                    />

					<HomeWhyUs id="why-us" {...WHY_US} />

					<HomeFAQ
                        id="faq"
                        items={FAQS}
						image={FaqImg}
                        ctaTitle="Still have questions?"
                        ctaLabel="See all FAQs"
                        ctaHref={FAQ_PAGE}
                    />

                    <Wrapper.FullBleed className="relative">

                        <Wrapper.Body>

                            <Grid.VStack gap={12}>

                                <SitWithUs />

                            </Grid.VStack>

                        </Wrapper.Body>

                    </Wrapper.FullBleed>

                    <StructuredData data={aboutUsSchema} />
                </Wrapper>
		    </>
	    );
	}

export default Home;