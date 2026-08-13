import { LuCircleArrowRight } from "react-icons/lu";
import { PiAirplaneTiltDuotone } from "react-icons/pi";

import { Wrapper, Text, Card,
    Image, Button, Icon } from "@/components";

import career from "@/assets/career.png"

import { Contents } from "./Contents";
import { OpenPositions } from "./OpenPositions";

function Careers() {
	return <>
		<Wrapper title="Careers" path="careers">

            <Wrapper.FullBleed className="relative min-h-screen">

                <Wrapper.Background/>
            
                <Wrapper.Body className="vstack gap-12">
                    
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-16 w-full">
                        <div className="flex flex-col gap-3 sm:w-auto w-full">
                            <Text variant="h1" className="lg:text-1xl">
                                Build The Future <br /> 
                                with <span className="text-gradient">Spark</span>
                            </Text>

                            <div className="vstack gap-8 text-xs">
                                <Text variant="caption">
                                    We're a team of innovators, creators, and problem solvers.<br />
                                    passionate about building solations that make a difference.
                                </Text>

                                <div>
                                    <Button variant="gradient" className="shadow-sm flex gap-4">
                                        Open positions <Icon icon={LuCircleArrowRight} size="lg" variant="light"/>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                        <Image
                            src={career}
                            alt="Careers"
                            className="w-full max-w-[480px] object-cover"/>
                        </div>
                    </div>

                    <div className="text-center">
                        <Text variant="h3">
                            Why work with us?
                        </Text>
                        <Text variant="label" color="muted">
                            Great people. Big impact. Growing together.
                        </Text>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">

                        {Contents.map((item, index) => (
                        
                        <Card key={`${item.title}-${index}`}>
                            <Card.Body>
                                {/*Title*/}
                                <div className="vstack items-center gap-2">
                                    <Icon icon={item.icon} size="xl" variant="gradient" />
                                    <Text variant="h6" className="text-center">{item.title}</Text>
                                </div>

                                {/*Subtitle*/}
                                <Text variant="label" color="muted" className="block leading-4 text-center">
                                    {item.lines.map((line, item) => (
                                        <span key={item}>
                                            {line}
                                        <br />
                                        </span>
                                    ))}
                                </Text>
                            </Card.Body>
                        </Card>

                        ))}
                    </div>

                    <div className="text-center">
                        <Text variant="h3">
                            Open Positions
                        </Text>
                        <Text variant="label" color="muted">
                            Join our mission and be part of something great.
                        </Text>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                    {OpenPositions.map((item, index) => (
                    
                        <Card key={`${item.title}-${index}`}>
                            <Card.Body className="text-center vstack gap-4">
                                {/*Title*/}
                                <Text variant="h4">{item.title}</Text>
                                {/*Subtitle*/}
                                <div className="flex flex-col justify-between gap-4">

                                    <Text variant="label" color="muted">
                                        {item.lines.map((line, item) => (
                                            <span key={item}>
                                                {line}
                                            <br />
                                            </span>
                                        ))}
                                    </Text>

                                    <div className="text-end">
                                        <Button variant="outline" size="sm" className="rounded-lg border-1 
                                            border-pink-400 hover:bg-transparent shadow-sm">
                                            <Text variant="label" color="gradient">
                                                View Details
                                            </Text>
                                        </Button>
                                    </div>

                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                    </div>

                    <Card className="p-4">
                        <Card.Body className="flex flex-row justify-between gap-4">
                            <div className="flex">
                                <Icon icon={PiAirplaneTiltDuotone} size="xl" variant="gradient" />
                            </div>
                            
                            <div className="flex sm:flex-row flex-col gap-8">
                                <div className="vstack gap-4">

                                    <Text variant="h4">
                                        Don't see the right role?
                                    </Text>
                                    <Text variant="label" color="muted" className="flex flex-col ">
                                        We're always looking for talented people. Even if you don't see a position that matches your skills today, 
                                        we'd love to hear from you. Send us your resume, and we'll keep you in mind for future opportunities.
                                    </Text>

                                </div>

                                <div className="flex justify-end items-center">
                                    <Button variant="gradient" className="shadow-sm flex gap-4">
                                        Send <Icon icon={LuCircleArrowRight} size="lg" variant="light"/>
                                    </Button>
                                </div>

                            </div>
                        </Card.Body>
                    </Card>

                </Wrapper.Body>

            </Wrapper.FullBleed>
		
		</Wrapper>
	</>;
}

export default Careers;
