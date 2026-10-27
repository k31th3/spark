"use client";

import { Wrapper, Grid, StructuredData, HomeHero } from "@/components";
import { aboutUsSchema } from "@/config";

import { LetStartHere,
	WeSpeakHuman, TextBeforeGoogle,
	MoreThanMaintenance, SitWithUs
} from "./";

import SitAnimation from "@/assets/Hero/sit-animation.webm";

/* =========================================================
   HERO CONTENT (PLACEHOLDER COPY FROM THE EDITORIAL TEMPLATE)
========================================================= */

const HERO = {
	eyebrow: "Web & App Development Studio",
	headline: "Spark Info-Tech",
	subtitle:
		"Whether you need a modern web presence, a mobile app, or a scalable digital product, we've got you covered. Simple, effective, and built to grow with you.",
	ctaLabel: "Let's Get Started",
	ctaHref: "/contact", // TODO: set to your real contact route
	scrollTargetId: "home-content",
	// wordmarkImage: WordmarkLogo, // add once the logo asset is in the company site
	video: { src: SitAnimation },
};

	function Home()
	{
	  	return (
		    <>
                <Wrapper title="Spark Info-Tech Enterprise" path="">

                    {/* ===== HERO (FULL WIDTH, OUTSIDE THE BODY CONTAINER) ===== */}

                    <HomeHero {...HERO} />

                    <Wrapper.Background/>

                    {/* ===== SCROLL TARGET FOR THE HERO'S "SCROLL DOWN" ===== */}

                    <div id="home-content">

                        <Wrapper.FullBleed className="relative">

                            <Wrapper.Body>

                                <Grid.VStack gap={12}>

                                    <LetStartHere />
                                    <WeSpeakHuman />
                                    <TextBeforeGoogle />
                                    <MoreThanMaintenance />
                                    <SitWithUs />

                                </Grid.VStack>

                            </Wrapper.Body>

                        </Wrapper.FullBleed>

                    </div>

                    <StructuredData data={aboutUsSchema} />
                </Wrapper>
		    </>
	    );
	}

export default Home;