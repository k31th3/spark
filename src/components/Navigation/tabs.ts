
import { MdDesignServices } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";

import { IconType } from "react-icons";

export interface Tab {
  title: string;
  path?: string;
  id: number;
  icon?: IconType;
}

export const tabs: Tab[] = [
  {
    title: "Services",
    path: "services?tab=0",
    id: 2,
    icon: MdDesignServices
  },
  {
    title: "Let’s Start Here",
    path: "lets-start-here",
    id: 3,
    icon: IoBookOutline
  }
];