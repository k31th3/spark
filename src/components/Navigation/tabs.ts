
import { MdDesignServices } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";

import { IconType } from "react-icons";

export interface Tab {
  title: string;
  path?: string;
  id: number;
  icon?: IconType;
}

export const tabs: Tab[] = [
  {
    title: "Home",
    path: "",
    id: 1,
    icon: FaHome
  },
  {
    title: "Services",
    path: "services?tab=0",
    id: 2,
    icon: MdDesignServices
  },
  {
    title: "About us",
    path: "about",
    id: 3,
    icon: IoPeople
  }
];