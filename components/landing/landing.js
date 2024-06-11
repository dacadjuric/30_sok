"use client";

import { useState } from "react";

import DownloadButton from "../download-button/download-button";
import Squiggles from "../icons/Squiggles";
import SquigglesX from "../icons/SquigglesX";

export default function LandingPage() {
  const [isTransform, setIsTransform] = useState(false);

  return (
    <div className="relative min-h-[768px] container mx-auto flex flex-col place-content-center">
      <div className="absolute inset-x-0 -top-[76px] bottom-0 flex flex-col justify-center items-center text-[600px] leading-[450px] overflow-hidden z-0">
        <div className="absolute top-0 left-0 bottom-0 w-40 bg-gradient-to-r from-background z-10"></div>
        <div className="absolute top-0 right-0 bottom-0 w-40 bg-gradient-to-l from-background z-10"></div>
        <span
          className={`font-black opacity-5 uppercase ${
            isTransform ? "bg-text-top-end" : "bg-text-start"
          }`}
        >
          seconds
        </span>
        <span
          className={`font-black opacity-5 uppercase text-clip ${
            isTransform ? "bg-text-bottom-end" : "bg-text-start"
          }`}
        >
          knowledge
        </span>
      </div>

      <div className="relative mx-auto text-center flex flex-col justify-items-center content-center gap-8">
        <Squiggles
          width={140}
          className="absolute -top-[104px] -right-[44px] rotate-[140deg] animate-shake"
        />
        <h1 className="text-[100px] leading-[50px] uppercase font-bold">
          30 seconds <br />
          <span className="text-6xl leading-[0px] whitespace-nowrap">
            of knowledge
          </span>
        </h1>
        <p className="text-base">
          Become a <b className="text-yellow">better Developer</b>, one{" "}
          <b className="text-yellow">New Tab</b> at a time.
          <br /> Get a random code snippet, from
          <b className="text-yellow"> 14 availabe categories</b>
          ,
          <br />
          that you can read and understand in
          <b className="text-yellow"> 30 seconds or less</b>.
        </p>
        <DownloadButton
          onMouseEnter={() => setIsTransform(true)}
          onMouseLeave={() => setIsTransform(false)}
        />
        <div className="absolute top-64 -left-4 rotate-[140deg]">
          <SquigglesX height={160} className="animate-shock" />
        </div>
      </div>
    </div>
  );
}
