import React from "react";
import {
  FaAmazon,
  FaApple,
  FaFacebook,
  FaGoogle,
  FaGoogleDrive,
  FaInstagram,
  FaLinkedin,
  FaMicrosoft,
} from "react-icons/fa6";

function Company() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <p className="text-xl md:text-2xl text-center mb-16">
          Trusted by Leading Companies
        </p>
        {/* display company icons */}
        <div className="flex flex-wrap items-center justify-center gap-12">
          <div className="w-20 h-20 rounded-full border border-b-cyan-950/60 flex items-center justify-center hover:scale-105 duration-300 transition cursor-pointer">
            <FaMicrosoft className="w-10 h-10 text-cyan-950" />
          </div>
          <div className="w-20 h-20 rounded-full border border-b-cyan-950/60 flex items-center justify-center hover:scale-105 duration-300 transition cursor-pointer">
            <FaFacebook className="w-10 h-10 text-cyan-950" />
          </div>
          <div className="w-20 h-20 rounded-full border border-b-cyan-950/60 flex items-center justify-center hover:scale-105 duration-300 transition cursor-pointer">
            <FaLinkedin className="w-10 h-10 text-cyan-950" />
          </div>
          <div className="w-20 h-20 rounded-full border border-b-cyan-950/60 flex items-center justify-center hover:scale-105 duration-300 transition cursor-pointer">
            <FaApple className="w-10 h-10 text-cyan-950" />
          </div>
          <div className="w-20 h-20 rounded-full border border-b-cyan-950/60 flex items-center justify-center hover:scale-105 duration-300 transition cursor-pointer">
            <FaInstagram className="w-10 h-10 text-cyan-950" />
          </div>

          <div className="w-20 h-20 rounded-full border border-b-cyan-950/60 flex items-center justify-center hover:scale-105 duration-300 transition cursor-pointer">
            <FaGoogle className="w-10 h-10 text-cyan-950" />
          </div>
          <div className="w-20 h-20 rounded-full border border-b-cyan-950/60 flex items-center justify-center hover:scale-105 duration-300 transition cursor-pointer">
            <FaGoogleDrive className="w-10 h-10 text-cyan-950" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;
