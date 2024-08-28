"use client";
import Image from "next/image";
import React from "react";
import Search from "../common/Search";
import WishlistDropDown from "./WishlistDropDown";
import CartDropDown from "./CartDropDown";
import ProfileDropDown from "./ProfileDropDown";

const MobileHeader = () => {
  return (
    <header className="mobile-header w-full flex flex-col gap-4 px-4 py-6">
      <div className="flex items-center justify-between gap-10">
        <Image src={`/logo.png`} alt="Logo" width={150} height={60} />
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
