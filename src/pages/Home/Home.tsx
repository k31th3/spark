"use client";

import { Wrapper, Grid, StructuredData, HomeHero, Projects } from "@/components";
import type { Project } from "@/components";
import { aboutUsSchema } from "@/config";

import {
	WeSpeakHuman, TextBeforeGoogle,
	MoreThanMaintenance, SitWithUs
} from "./";

import SitAnimation from "@/assets/Hero/sit-animation.webm";
import WordmarkLogo from "@/assets/Hero/logo-transparent.webp";

import Cahel from "@/assets/SelectedWork/cahel_mockup.webp";
import Finya from "@/assets/SelectedWork/finya_mockup.webp";
import Ubas from "@/assets/SelectedWork/ubas_mockup.webp";
import Placeholder1 from "@/assets/SelectedWork/services-branding.webp";

import AboutVideo from "@/assets/Dashboard/dashboardPlayVid.mp4";
import HomeAbout from "@/components/HomeAbout/HomeAbout";

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
	wordmarkImage: WordmarkLogo,
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
   ABOUT CONTENT (EMOJI ARE WRAPPED ARIA-HIDDEN BY THE COMPONENT)
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

                    <HomeAbout id="about" {...ABOUT} />

                    {/* ===== EXISTING SECTIONS (TO BE REPLACED ONE BY ONE) ===== */}

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