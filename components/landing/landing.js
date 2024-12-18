"use client";

import { useState } from "react";

import DownloadButton from "../download-button/download-button";

import Squiggle from "../icons/squiggle";
import SquigglesX from "../icons/squiggles-x";

export default function LandingPage() {
  const [isTransform, setIsTransform] = useState(false);

  return (
    <div className="relative min-h-[100vh] sm:min-h-[768px] px-8 container mx-auto flex flex-col place-content-center">
      <div className="absolute inset-x-0 -top-[76px] bottom-0 flex flex-col justify-center items-center text-[240px] leading-[450px] text-[600px] leading-[450px] z-0 overflow-hidden">
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

      <div className="relative mx-auto text-center flex flex-col justify-items-center items-center gap-8">
        <Squiggle
          width={140}
          className="absolute sm:flex -top-[104px] sm:-right-[44px] rotate-[140deg] animate-shake"
        />
        <h1 className="text-6xl leading-5 sm:text-[100px] sm:leading-[50px] uppercase font-bold">
          30 seconds <br />
          <span className="text-4xl sm:text-6xl leading-normal whitespace-nowrap">
            of knowledge
          </span>
        </h1>
        <div className="text-sm text-base">
          <span className="inline sm:block">
            Become a <b className="text-yellow">better Developer</b>, one
            <b className="text-yellow"> New Tab</b> at a time.
          </span>{" "}
          <span className="inline sm:block">
            Get a random code snippet, from
            <b className="text-yellow"> 14 availabe categories</b>, &nbsp;
          </span>
          <span className="inline sm:block">
            that you can read and understand in
            <b className="text-yellow"> 30 seconds or less</b>.
          </span>
        </div>
        <DownloadButton
          onMouseEnter={() => setIsTransform(true)}
          onMouseLeave={() => setIsTransform(false)}
        />
        <div className="absolute top-64 -left-4 rotate-[140deg]">
          <SquigglesX height={160} className="animate-shock hidden sm:flex" />
        </div>
      </div>
    </div>
  );
}
