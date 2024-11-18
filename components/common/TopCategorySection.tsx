import Image from "next/image";
import React from "react";

const TopCategorySection = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <h3 className="text-[30px] font-semibold">Top Categories</h3>
      <div className="w-full grid grid-cols-3 gap-6">
        <div className="w-full border rounded-md overflow-hidden">
          <div className="w-full relative   h-[400px]">
            <Image src="/deleteable/jackets.png" layout="fill" alt="jackets" />
          </div>
          <div className="p-6">
            <h4 className="text-lg font-semibold">Womens accessories</h4>
            <p className="text-[#26798E]">Shop now</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCategorySection;
