import { IconType } from "react-icons";
import type { ComponentType } from "react";

import { 
         IoHardwareChipOutline, 
         IoCodeOutline, 
         IoLockClosedOutline, 
         IoIdCardOutline } from "react-icons/io5";

import {
         Hardware,
         Software,
         Security,
         Application } from "./";

export interface Tab {
  title: string;
  icon: IconType;
  component: ComponentType;
}

export const tabs: Tab[] = [
  {
    title: "Hardware",
    icon: IoHardwareChipOutline,
    component: Hardware,
  },
  {
    title: "Software",
    icon: IoCodeOutline,
    component: Software,
  },
  {
    title: "Security",
    icon: IoLockClosedOutline,
    component: Security,
  },
  {
    title: "Applications",
    icon: IoIdCardOutline,
    component: Application,
  }
];