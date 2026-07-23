import { IconType } from "react-icons";

import {
  RiBrush2Line,
  RiComputerLine,
  RiCpuLine,
  RiFileListLine,
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
    title: "Custom PC Assembly",
    description:
      "Component assembly and configuration for a fully functional system.",
    icon: RiComputerLine,
  },
  {
    id: 2,
    title: "Component Upgrades",
    description:
      "Installing and updating hardware and device drivers to ensure proper functionality.",
    icon: RiCpuLine,
  },
  {
    id: 3,
    title: "Inventory Management",
    description:
      "Tracking and listing all hardware components and network devices present in the site.",
    icon: RiFileListLine,
  },
  {
    id: 4,
    title: "Deep Cleaning",
    description:
      "Cleaning devices to prevent dust buildup, lower temperatures, and protect laptop or computer parts.",
    icon: RiBrush2Line,
  },
];
