"use client";

import Image from "next/image";
import SocialIcon from "./SocialIcons";
import React from "react";

import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

export function Header() {
  const openPDF = () => {
    window.open("/CV - Diogo Rosário.pdf", "_blank");
  };

  return (
    <div className="flex flex-row items-center justify-center h-50 w-full p-4 text-xl gap-16 font-mono bg-white fixed">
      <div className="header-btns cursor-pointer">
        <a href="#about">About</a>{" "}
      </div>
      <div className="header-btns cursor-pointer">
        <a href="#timeline">Timeline</a>{" "}
      </div>
      <div className="header-btns cursor-pointer">
        <a href="#skills">Skills</a>{" "}
      </div>
      <div className="header-btns cursor-pointer">
        <a href="#education">Education</a>{" "}
      </div>
      <div onClick={openPDF} className="cursor-pointer header-btns">
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
  return (
    <div className="flex flex-col bg-gray-200 h-screen w-full p-2" id="about">
      {/* top part */}
      <div className="flex flex-row gap-x-8 m-10 pt-10">
        <Image
          src="/running_pic.jpg"
          width={300}
          height={300}
          alt="Picture of the author running"
          className="rounded-full shadow-2xl"
        />
        <div className="space-y-5">
          <p className="font-bold text-2xl">Diogo Rosário</p>
          <p className="text-lg font-light">
            University of Minho '22, Machine Learning Engineer & Data Scientist,
            Portugal
          </p>
          <p>
            I graduated form the University of Minho in 2022 with a degree in
            Applied Statistics. I'm currently fininshing my Master's degree in
            Mathematics and Computer Science at the University of Minho.
          </p>
          <p>
            My interests are Computer Science, Mathematics & Statistics. These
            interests come together with my passion for Machine Learning and
            Data Science.
          </p>
          <ul className="list-disc">
            {" "}
            University of Minho:
            <li className="ml-12">Msc in Mathematics and Computer Science</li>
            <li className="ml-12">Bsc in Applied Statistics</li>
          </ul>
          <p>
            I spend most of my free time doing competitive long-distance running
            and have been doing it for the last 13 years. I have represented
            Portugal in the European Junior Championships in Athletics in 2019
            and I have been a national champion once along with a lot of other
            podium finishes.
          </p>
        </div>
      </div>
      {/* bottom part */}
      <div></div>
    </div>
  );
}

export function Timeline() {
  return (
    <div className="timeline h-auto w-full p-16" id="timeline">
      <div className="container left">
        <div className="content">
          <h2>2019-Present</h2>
          <h3 className="text-yellow-400 font-bold">University of Minho</h3>
          <p>Bsc Applied Statistics & Msc Mathematics & Computer Science</p>
        </div>
      </div>
      <div className="container right">
        <div className="content">
          <h2>Summer 2021</h2>
          <h3 className="text-yellow-400 font-bold">Anybrain</h3>
          <p>Data Science Intern</p>
        </div>
      </div>
      <div className="container left">
        <div className="content">
          <h2>March 2022 - July 2022</h2>
          <h3 className="text-yellow-400 font-bold">Natixis</h3>
          <p>Data Science Intern</p>
        </div>
      </div>
      <div className="container right">
        <div className="content">
          <h2>November 2022 - February 2023</h2>
          <h3 className="text-yellow-400 font-bold">Issuu</h3>
          <p>Data Labeler Intern</p>
        </div>
      </div>
      <div className="container left">
        <div className="content">
          <h2>March 2023 - May 2024</h2>
          <h3 className="text-yellow-400 font-bold">Issuu</h3>
          <p>Data Science Intern</p>
        </div>
      </div> 
      <div className="container right">
        <div className="content">
          <h2>May 2024 - Present</h2>
          <h3 className="text-yellow-400 font-bold">Issuu</h3>
          <p>Machine Learning Engineer</p>
        </div>
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <div className="h-screen w-full">
      
    </div>
  )
}