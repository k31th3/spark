"use client";

import { Text, Icon, Card } from "@/components";
import { RiNumber1 } from "react-icons/ri";

import { LuRocket } from "react-icons/lu";
import { TbMessageHeart } from "react-icons/tb";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";

import { PiAirplaneTiltDuotone } from "react-icons/pi";

export default function WeSpeakHuman() 
{
    const msgMaintenance = [
        `We weren't built to be a silent supplier.`,
        `You deserve more than hearing from us only when something breaks.`,
    ];

    const cardMaintenance = [

        { icon: LuRocket, info: "We don't Deploy. We Set You Up." },
        { icon: TbMessageHeart, info: "We don't do Maintenance. We Check In." },
        { icon: IoPeopleCircleOutline, info: "We don't close tickets. We keep conversations going." }

    ];

    const msgPhilosopy = [
        `Technology shouldn't make people feel stupid.`,
        `It shouldn't require a translator.`,
        `It shouldn't be intimidating.`,
        `It shouldn't get in the way of what you're building.`,
    ];

	return <>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
            <div className="col-span-1">
                
                <Text variant="h3" className="font-bold mb-2 flex gap-4">
                    <Icon icon={RiNumber1} variant="primary" size="sm" avatar={true} />
                    More Than <br/>Maintenance
                </Text>

                <div className="vstack gap-2 mb-4">
                {msgMaintenance.map((message, index) => (
                    <Text key={`maintenance${index}`} variant="caption" className="block leading-4 font-medium">
                        {message}
                    </Text>
                ))}
                </div>

                <div className="grid max-xs:grid-cols-1 grid-cols-3 gap-4 mb-4">

                    {cardMaintenance.map((item, info) => (
                        <Card key={`card${info}`}>
                            <Card.Body>

                                <div className="vstack gap-4 items-center">

                                    <div>
                                        <Icon icon={item.icon} size="lg" />
                                    </div>

                                    <Text variant="label" className="block leading-4 
                                        font-medium text-muted text-center">
                                        {item.info}
                                    </Text>

                                </div>

                            </Card.Body>
                        </Card>
                    ))}
                </div>

                <Text variant="caption" className="block leading-4 font-medium mb-4">
                    Because you're more than a ticket number. <br /> And yes...
                </Text>

                <Text variant="lead" className="block leading-4 font-medium" color="primary">
                    We'll probably become friends.
                </Text>

            </div>

            <div className="col-span-1">

                <Card >
                    <Card.Body className="p-10">
                        <Text variant="h3" className="font-bold mb-2 flex gap-4">
                            We Keep It Simple.
                        </Text>
                        <div className="vstack gap-2 mb-4">
                            <Text variant="caption" className="block leading-4 font-medium">
                                Technology doesn't have to be complicated.
                            </Text>
                            <Text variant="caption" className="block leading-4 font-medium">
                                People do a pretty good job of that already.
                            </Text>
                        </div>

                        <div className="vstack gap-2 mb-4">
                        {msgPhilosopy.map((message, index) => (
                            <Text key={`philosopy${index}`} variant="label" className="block 
                                leading-4 text-muted hstack gap-2 font-medium">
                                <Icon icon={FaCircleCheck} size="sm" variant="gradient" />{message} 
                            </Text>
                        ))}
                        </div>

                        <div className="vstack gap-2 mb-4">
                            <Text variant="caption" className="block leading-4">
                                Life's already complicated.
                            </Text>
                            <Text variant="lead" className="block leading-4 font-medium">
                                Technology should feel like a teammate.                            
                            </Text>
                            <Text variant="caption" className="block leading-4">
                                Not another problem.
                            </Text>
                        </div>

                        <Card className="bg-primary/5 border border-1 border-primary rounded-md">
                            <Card.Body>

                                <div className="flex flex-row gap-4">

                                    <div className="flex">
                                        <Icon icon={PiAirplaneTiltDuotone} size="lg" variant="gradient" />
                                    </div>

                                    <div>

                                        <Text variant="caption" className="block leading-4 font-medium">
                                            It should help you move faster. <br />
                                            Build better.
                                        </Text>
                                        <Text variant="caption" color="primary" className="font-medium">
                                            Dream bigger.
                                        </Text>

                                    </div>

                                </div>

                            </Card.Body>
                        </Card>
                    
                    </Card.Body>
                </Card>

            </div>

        </div>
		
	</>;
}