import React from "react";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className="search border w-full  px-5 py-3 flex justify-between items-center rounded-md">
      <input type="text" placeholder="Search" className="outline-none " />
      <IoSearch size={20} fill="#969696" className="cursor-pointer" />
    </div>
  );
};

export default Search;
