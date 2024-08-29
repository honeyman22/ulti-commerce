"use client";
import Image from "next/image";
import React from "react";
import Search from "../common/Search";
import WishlistDropDown from "./WishlistDropDown";
import CartDropDown from "./CartDropDown";
import ProfileDropDown from "./ProfileDropDown";
import Logo from "../../public/logo.png";

const MobileHeader = () => {
  return (
    <header className="mobile-header w-full flex flex-col gap-4 px-4 py-6">
      <div className="flex items-center justify-between gap-10">
        <div className="max-w-[120px] sm:max-w-[150px] lg:max-w-[200px]">
          <Image src={Logo} alt="Logo" />
        </div>

        <div className="hidden md:block w-full">
          <Search />
        </div>
        <div className="icon-contaioner flex gap-4">
          <CartDropDown />
          <WishlistDropDown />
          <ProfileDropDown />
        </div>
      </div>
      <div className="md:hidden">
        <Search />
      </div>
    </header>
  );
};

export default MobileHeader;
