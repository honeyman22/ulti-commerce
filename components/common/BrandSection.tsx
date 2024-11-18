import React from "react";
import { HorizontalMarquee } from "./animations/HorizontalMarquee";
import Image from "next/image";

const BrandSection = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <h3 className="text-[30px] font-semibold">Shop by Brands</h3>
      <HorizontalMarquee speed="slow" direction="right" pauseOnHover>
        {["Brand 1", "Brand 2", "Brand 3"].map((item) => (
          <div
            key={item + 1}
            className="w-[320px] h-[180px] border relative flex items-center justify-center"
          >
            <Image
              src="/deleteable/asus.png"
              alt={item}
              layout="fill"
              className="h-20 w-full object-contain"
            />
          </div>
        ))}
      </HorizontalMarquee>
      <HorizontalMarquee speed="slow" direction="left" pauseOnHover>
        {["Brand 1", "Brand 2", "Brand 3"].map((item) => (
          <div
            key={item + 6}
            className="w-[320px] h-[180px] border relative flex items-center justify-center"
          >
            <Image
              src="/deleteable/asus.png"
              alt={item}
              layout="fill"
              className="h-20 w-full object-contain"
            />
          </div>
        ))}
      </HorizontalMarquee>
    </div>
  );
};

export default BrandSection;
