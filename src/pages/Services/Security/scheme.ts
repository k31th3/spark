import { IconType } from "react-icons";

import { RiDeviceRecoverLine, RiVirusLine } from "react-icons/ri";
import { MdMemory } from "react-icons/md";

export interface Sheme {
  id: number;
  title: string;
  description: string;
  icon: IconType;
}

export const Scheme: Sheme[] = [
  {
    id: 1,
    title: "Threat Management",
    description:
      "Updating security software to scan for threats and protect systems against malware and viruses.",
    icon: RiVirusLine,
  },
  {
    id: 2,
    title: "Backup and Recovery",
    description:
      "Storing files via external drives or network servers and restoring data when needed to prevent loss.",
    icon: RiDeviceRecoverLine,
  },
];
