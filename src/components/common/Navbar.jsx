import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";
import "../../index.css"

const Navbar = () => {
  return (
    <div className="w-full bg-red-700 top-0 fixed">
      <div className="w-[1200px] h-16 m-auto flex direction-row justify-between font-bold items-center text-white">
        <div className="flex">
          <GiHamburgerMenu className="mr-2" />
          <div className="flex direction-row items-center text-sm">MENU</div>
        </div>
        <div className="logo text-3xl"><a href="/">BB</a></div>
        <div className="flex">
          <AiOutlineSearch className="mr-2" />
          <div className="flex direction-row items-center text-sm">BUSCAR</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
