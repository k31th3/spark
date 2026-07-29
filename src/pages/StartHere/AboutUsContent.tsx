import { PiBriefcaseDuotone } from "react-icons/pi";
import { PiLightbulbFilamentDuotone } from "react-icons/pi";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { PiSparkleDuotone } from "react-icons/pi";

import { IconGradient } from "@/components";
import startHereGrouping from "@/assets/startHereGrouping.webp";

export default function AboutUsContent()
{
	const items = [
  		{ icon: PiBriefcaseDuotone, label: "Business" },
  		{ icon: PiLightbulbFilamentDuotone, label: "Ideas" },
  		{ icon: LiaUserFriendsSolid, label: "Friendship" },
  		{ icon: PiSparkleDuotone, label: "Possibilities" }
	];

	return <>
		
		<div>
			<div className="rounded-4xl overflow-hidden shadow-sm">
	    		<img
		            src={startHereGrouping}
		            alt="Start Here Grouping"
		            loading="lazy"
		            fetchPriority="high"
                	decoding="sync"
		            className="w-full h-[350px] object-cover"
		            onContextMenu={(e) => e.preventDefault()}/>
		        <div className="rounded-b-4xl h-[100px] bg-gradient-to-r from-[#FFEBFD] to-[#FFE4D3] p-[16px]">
                    <IconGradient />
		        	<ul className="hstack gap-3 justify-around items-center h-full">
					  	{items.map(({ icon: Icon, label }) => (
					    	<li
					      		key={label}
					      		className="flex flex-col items-center sm:text-[14px] text-[12px] gap-2">
					      		<Icon size={28} style={{ fill: "url(#iconGradient)" }} />
					      		<span className="font-semibold">{label}</span>
					    	</li>
					  	))}
					</ul>
		        </div>
		    </div>
	    </div>

	</>;	
};