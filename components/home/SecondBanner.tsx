"use client";
import useIsMobile from "@/hooks/useIsMobile";
import Image from "next/image";
import React from "react";
import MobileBanner from "../../public/banners/homesecondmobilebanner.png";
import WebBanner from "../../public/banners/homesecondbanner.png";

const SecondBanner = () => {
  const isMobile = useIsMobile(768);
  const SecondBannaer = isMobile ? MobileBanner : WebBanner;
  return (
    <div className="secondbanner-container ">
      <Image src={SecondBannaer} alt="SecondBanner Banner" />
    </div>
  );
};

export default SecondBanner;
