"use client";
import useIsMobile from "@/hooks/useIsMobile";
import Image from "next/image";
import React from "react";

const SecondBanner = () => {
  const isMobile = useIsMobile(768);
  return (
    <div className="secondbanner-container w-full h-[104px] relative sm:h-[165px] ">
      {isMobile ? (
        <Image
          src={"/banners/homesecondmobilebanner.png"}
          alt="Banner"
          layout="fill"
        />
      ) : (
        <Image
          src={"/banners/homesecondbanner.png"}
          alt="Banner"
          layout="fill"
        />
      )}
    </div>
  );
};

export default SecondBanner;
