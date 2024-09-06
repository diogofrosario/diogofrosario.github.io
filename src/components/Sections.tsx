"use client";

import Image from "next/image";
import SocialIcon from "./SocialIcons";
import React, { useState } from "react";

import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { FaPython, FaLinux, FaAws } from "react-icons/fa";
import {
  SiPytorch,
  SiRstudioide,
  SiTensorflow,
  SiHuggingface,
  SiScikitlearn,
  SiJupyter,
} from "react-icons/si";

import SkillCard from "./SkillCard";

export function Header() {
  const openPDF = () => {
    window.open("/CV-Diogo_Rosario.pdf", "_blank");
  };

  return (
    <div className="flex flex-row items-center justify-center h-50 w-full p-4 text-xl gap-16 font-mono bg-white fixed z-50">
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
    <div className="flex justify-center h-screen bg-black text-white" id="intro">
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
            <h3 className="text-2xl">Machine Learning Engineer & Data Scientist</h3>
          </div>
            <h5 className="text-sm text-center">Natural Language Processing, Computer Vision, Time Series, and more</h5>
          <div className="flex flex-row items-center space-x-4">
            <SocialIcon type="linkedin" size="large" color="steel blue" />
            <SocialIcon type="github" size="large" />
            <SocialIcon type="email" size="large" />
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
    <div className="timeline h-screen w-full" id="timeline">
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
    <div className="bg-black text-white h-screen w-full p-4" id="skills">
      <p>Main Tools & Technologies:</p>
      <div className="grid grid-cols-3 gap-4 mt-10 w-1/2 mx-auto">
        <SkillCard Icon={FaPython} skillName="Python" />
        <SkillCard Icon={SiPytorch} skillName="Pytorch" />
        <SkillCard Icon={SiTensorflow} skillName="Tensorflow" />
        <SkillCard
          Icon={SiHuggingface}
          skillName="Huggingface & Transformers"
        />
        <SkillCard Icon={SiScikitlearn} skillName="Scikit-learn" />
        <SkillCard Icon={FaLinux} skillName="Linux" />
        <SkillCard Icon={FaAws} skillName="AWS" />
        <SkillCard Icon={SiRstudioide} skillName="R" />
        <SkillCard Icon={SiJupyter} skillName="Jupyter" />
      </div>
    </div>
  );
}