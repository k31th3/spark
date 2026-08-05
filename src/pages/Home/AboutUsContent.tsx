import { useEffect, useRef } from "react";

import { PiBriefcaseDuotone } from "react-icons/pi";
import { PiLightbulbFilamentDuotone } from "react-icons/pi";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { PiSparkleDuotone } from "react-icons/pi";

import DashboardPlayVid from "@/assets/dashboardPlayVid.mp4";
import DashboardCaptions from "@/assets/dashboardPlayVid.en.vtt";

import { Text } from "@/components";

export default function AboutUsContent()
{
	const items = [
  		{ icon: PiBriefcaseDuotone, label: "Business" },
  		{ icon: PiLightbulbFilamentDuotone, label: "Ideas" },
  		{ icon: LiaUserFriendsSolid, label: "Friendship" },
  		{ icon: PiSparkleDuotone, label: "Possibilities" }
	];

	const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current?.textTracks.length) {
            videoRef.current.textTracks[0].mode = "hidden"; // o "disabled"
        }
    }, []);

	return <>
		
		<div>
			<div className="rounded-4xl overflow-hidden shadow-sm relative ">

	    		<div className="w-full aspect-video
                    flex items-center justify-center cursor-pointer">
                    <video
                          ref={videoRef}
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="metadata"
                          className="block h-full w-full rounded-t-3xl object-cover object-center bg-transparent">
                        
                        <source src={DashboardPlayVid} type="video/mp4" />

                        <track
                            kind="captions"
                            src={DashboardCaptions}
                            srcLang="en"
                            label="English"
                            default/>

                        Your browser does not support the video tag.
                    </video>
                </div>

		        <div className="rounded-b-4xl h-[100px] bg-gradient-to-r from-[#FFEBFD] to-[#FFE4D3] p-[16px]">
		        	<ul className="hstack gap-3 justify-around items-center h-full">
					  	{items.map(({ icon: Icon, label }) => (
					    	<li
					      		key={label}
					      		className="flex flex-col items-center sm:text-[14px] text-[12px] gap-2">
					      		<Icon size={28} style={{ fill: "url(#iconGradient)" }} />
					      		<Text variant="caption" className="font-semibold">{label}</Text>
					    	</li>
					  	))}
					</ul>
		        </div>
		    </div>
	    </div>

	</>;	
};