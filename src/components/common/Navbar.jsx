import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";
import "../../index.css"

const Navbar = () => {
  return (
    <div className="min-w-full bg-[#C4170C] top-0 fixed z-10">
      <nav className=" h-16 m-auto flex direction-row justify-around font-bold items-center text-white">
        <div className="flex">
          <GiHamburgerMenu className="mr-2" />
          <div className="flex direction-row items-center text-xs">MENU</div>
        </div>
        <div className="logo text-3xl"><a href="/">BB</a></div>
        <div className="flex">
          <AiOutlineSearch className="mr-2" />
          <div className="flex direction-row items-center text-xs">BUSCAR</div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
