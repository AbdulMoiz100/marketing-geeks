import React, { useState } from "react";
import { FaArrowRightLong, FaBars, FaXmark } from "react-icons/fa6";
import Contact from "./Contact";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full fixed top-0 z-50 backdrop-blur-2xl">
      <div className="flex items-center justify-between px-6 py-8 sm:px-12 md:px-24 lg:px-40">
        {/* left section`` */}
        <div>
          <span className="text-3xl font-bold text-dark">
            MarketingGeeks.io
          </span>
          <div className="w-4 h-4 bg-gray-700 rounded-full"></div>
        </div>
        {/* Mid section menu */}
        <div className="hidden md:flex items-center space-x-6 text-dark/80 font-semibold">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#workItems">Our Work</a>
          {/* <a href="#contact">Contact Us</a> */}
          <a href="/#contact">Contact Us</a>
        </div>

        {/* Right section button */}
        <div className="hidden md:block">
          <button className="px-6 py-2.5 bg-gray-700 text-white font-semibold rounded-full cursor-pointer flex items-center gap-2">
            Contact Us
            <FaArrowRightLong />
          </button>
        </div>
        {/* Mobile Version */}
        <div className="md:hidden z-10">
          {showMenu ? (
            <FaXmark
              onClick={() => setShowMenu(!showMenu)}
              lassName="text-xl text-dark"
            />
          ) : (
            <FaBars
              onClick={() => setShowMenu(!showMenu)}
              className="text-xl text-dark"
            />
          )}
        </div>
      </div>

      {/* Mobile version menu */}
      {showMenu && (
        <div className="md:hidden flex flex-col items-center justify-center space-y-6 fixed bg-cyan-950/80 w-64 top-0 right-0 h-screen text-white ">
          <a onClick={() => setShowMenu(!showMenu)} href="#home">Home</a>
          <a onClick={() => setShowMenu(!showMenu)} href="#services">Services</a>
          <a onClick={() => setShowMenu(!showMenu)} href="#workItems">Our Work</a>
          <a onClick={() => setShowMenu(!showMenu)} href="#contact">Contact Us</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
