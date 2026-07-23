import { IconType } from "react-icons";

import {
  RiInstallLine,
  RiSettings6Line,
  RiShieldKeyholeLine,
  RiSignalWifiLine,
  RiWrenchLine,
} from "react-icons/ri";

export interface Sheme {
  id: number;
  title: string;
  description: string;
  icon: IconType;
}

export const Scheme: Sheme[] = [
  {
    id: 1,
    title: "Troubleshooting",
    description:
      "Diagnosing and fixing faulty system components, network connection problems, and software errors.",
    icon: RiWrenchLine,
  },
  {
    id: 2,
    title: "System Tuning",
    description:
      "Removing temporary files and cached data to speed up file access and improve system efficiency.",
    icon: RiSettings6Line,
  },
  {
    id: 3,
    title: "Security & Firewalls",
    description:
      "Installing security software, scanning for threats, and configuring firewall rules to protect your network.",
    icon: RiShieldKeyholeLine,
  },
  {
    id: 4,
    title: "Network Design & Setup",
    description:
      "Planning network layouts and installing cables for organized, easy-to-maintain connections.",
    icon: RiSignalWifiLine,
  },
  {
    id: 5,
    title: "OS & Software Deployment",
    description:
      "Installing operating systems, managing application licenses, and ensuring software is updated.",
    icon: RiInstallLine,
  },
];
