"use client";

import { Wrapper, Grid, StructuredData, HomeHero, Projects } from "@/components";
import type { Project } from "@/components";
import { aboutUsSchema } from "@/config";

import {
	WeSpeakHuman, TextBeforeGoogle,
	MoreThanMaintenance, SitWithUs
} from "./";

import HomeAbout from "@/components/HomeAbout/HomeAbout";
import HomeServices from "@/components/HomeServices/HomeServices";
import type { HomeServiceItem } from "@/components/HomeServices/HomeServices.types";

import {
	SitAnimation, Cahel, LogoTransparent, Hardware, Software,
	Security, Applications , Finya, Ubas, Placeholder1, AboutVideo, 
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
   SERVICES CONTENT (PLACEHOLDER COPY, NO PHOTOS YET)
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

                    <Wrapper.FullBleed className="relative">

                        <Wrapper.Body>

                            <Grid.VStack gap={12}>

                                <WeSpeakHuman />
                                <TextBeforeGoogle />
                                <MoreThanMaintenance />
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