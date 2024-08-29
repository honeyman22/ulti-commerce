import { ReactNode } from "react";

export interface NavBarProps {
  title: string;
  link: string;
  icon: ReactNode;
  feature: boolean;
}
