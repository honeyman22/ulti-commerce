"use client";
import useIsMobile from "@/hooks/useIsMobile";
import Image from "next/image";
import React from "react";

const PrimaryBanner = () => {
  const isMobile = useIsMobile(768);
  return (
    <div className="primarybanner-container w-full h-[173px] relative sm:h-[378px] ">
      {isMobile ? (
        <Image
          src={"/banners/homemobilebanner.png"}
          alt="Banner"
          layout="fill"
        />
      ) : (
        <Image src={"/banners/homebanner.png"} alt="Banner" layout="fill" />
      )}
    </div>
  );
};

export default PrimaryBanner;
