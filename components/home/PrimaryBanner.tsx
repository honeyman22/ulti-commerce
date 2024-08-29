"use client";
import useIsMobile from "@/hooks/useIsMobile";
import Image from "next/image";
import React from "react";
import MobileBanner from "../../public/banners/homemobilebanner.png";
import WebBanner from "../../public/banners/homebanner.png";

const PrimaryBanner = () => {
  const isMobile = useIsMobile(768);
  const bannerImage = isMobile ? MobileBanner : WebBanner;
  return (
    <div className="primarybanner-container">
      <Image src={bannerImage} alt="Banner" />
    </div>
  );
};

export default PrimaryBanner;
