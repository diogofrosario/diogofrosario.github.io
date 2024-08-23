"use client";

import Image from "next/image";
import SocialIcon from "./SocialIcons";
import React from "react";
import { useEffect, useState } from "react";

import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

export function Header() {
  const openPDF = () => {
    window.open("/CV - Diogo Rosário.pdf", "_blank");
  };

  return (
    <div className="flex flex-row items-center justify-center h-50 w-full p-4 m-1 text-xl gap-16 font-mono">
      <div> About </div>
      <div> Skills </div>
      <div> Experience </div>
      <div> Education </div>
      <div onClick={openPDF} className="cursor-pointer">
        Resume <PictureAsPdfIcon />
      </div>
    </div>
  );
}

export function Intro() {
  return (
    <div className="flex justify-center h-screen bg-black text-white">
      <div className="grid grid-cols-3 h-full w-full">
        {/* First Column */}
        <div className="flex flex-col items-center justify-center space-y-3">
          <Image
            src="/headshot.jpg"
            width={300}
            height={300}
            alt="Picture of the author"
            className="rounded-full"
          />
        </div>

        {/* Second Column */}
        <div className="flex flex-col items-center justify-center space-y-5">
          <div className="typewriter">
            <h3 className="text-lg">
              Machine Learning Engineer @{" "}
              <a
                className="underline cursor-pointer"
                href="https://www.issuu.com"
                target="_blank"
              >
                Issuu
              </a>{" "}
            </h3>
          </div>
          <div className="flex flex-row items-center space-x-4">
            <SocialIcon type="linkedin" size="large" color="steel blue" />
            <SocialIcon type="github" size="large" />
          </div>
        </div>

        {/* Third Column */}
        <div></div>
      </div>
    </div>
  );
}

export function About() {
  return <div>ola</div>;
}
