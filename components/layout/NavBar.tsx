import { NavBarProps } from "@/utils/dtos/reusabledto";
import React from "react";
import { FaTshirt } from "react-icons/fa";
import ReusableNavDropDown from "../common/ReusableNavDropDown";
import { MdOutlineSportsBasketball } from "react-icons/md";
import ApplianceImage from "../../public/navicons/electronics.png";
import GeocesiesImage from "../../public/navicons/grocessires.png";
import Image from "next/image";

const NavBar = () => {
  const category: NavBarProps[] = [
    {
      title: "Fashion",
      icon: <FaTshirt size={20} fill="#ffffff" />,
      feature: true,
      link: "/fashion",
    },
    {
      title: "Sports",
      icon: <MdOutlineSportsBasketball size={20} fill="#ffffff" />,
      feature: true,
      link: "/fashion",
    },
    {
      title: "Electronics",
      icon: (
        <Image src={ApplianceImage} alt="Electronics" className="max-w-5" />
      ),
      feature: true,
      link: "/fashion",
    },
    {
      title: "Grocery",
      icon: <Image src={GeocesiesImage} alt="Grocery" className="max-w-4" />,
      feature: true,
      link: "/fashion",
    },
  ];
  return (
    <nav className="navigation-bar w-full bg-[#268E3B] hidden sm:flex flex-row gap-10 px-4 py-3">
      {category.map((item: NavBarProps) => (
        <ReusableNavDropDown key={item.title} item={item} />
      ))}
    </nav>
  );
};

export default NavBar;
