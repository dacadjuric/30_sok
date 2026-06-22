"use client";

import { useState } from "react";

import DownloadButton from "../download-button/download-button";

import Squiggle from "../icons/squiggle";
import SquigglesX from "../icons/squiggles-x";

export default function LandingPage() {
  const [isTransform, setIsTransform] = useState(false);

  return (
    <div className="relative min-h-[100vh] sm:min-h-[768px] px-8 container mx-auto flex flex-col place-content-center">
      <div className="absolute inset-x-0 -top-[76px] bottom-0 flex flex-col justify-center items-center text-[600px] leading-[450px] z-0 overflow-hidden">
        <div className="absolute top-0 left-0 bottom-0 w-40 bg-gradient-to-r from-background z-10"></div>
        <div className="absolute top-0 right-0 bottom-0 w-40 bg-gradient-to-l from-background z-10"></div>
        <span
          className={`font-black opacity-5 uppercase ${
            isTransform ? "bg-text-top-end" : "bg-text-start"
          }`}
        >
          brain
        </span>
        <span
          className={`font-black opacity-5 uppercase text-clip ${
            isTransform ? "bg-text-bottom-end" : "bg-text-start"
          }`}
        >
          rot
        </span>
      </div>

      <div className="relative mx-auto text-center flex flex-col justify-items-center items-center gap-8">
        <Squiggle
          width={140}
          className="absolute hidden sm:flex -top-[104px] sm:-right-[44px] rotate-[140deg] animate-shake"
        />
        <span className="inline-flex items-center gap-2 text-xs sm:text-sm tracking-[0.2em] uppercase font-bold text-yellow bg-yellow/10 border border-yellow/30 rounded-full px-4 py-1.5">
          <span className="size-1.5 rounded-full bg-yellow animate-pulse"></span>
          30 Seconds of Knowledge
        </span>
        <h1 className="text-4xl leading-[0.9] sm:text-[64px] sm:leading-[0.86] uppercase font-bold max-w-[16ch]">
          Don&apos;t let your <span className="text-yellow">engineering brain</span> rot in the age of AI
        </h1>
        <div className="text-sm sm:text-base max-w-[52ch]">
          <span className="inline sm:block">
            AI writes the code. You <b className="text-yellow">forget how it works</b>.
          </span>{" "}
          <span className="inline sm:block">
            Every new tab, read one real code snippet and
            <b className="text-yellow"> stay sharp</b>
          </span>
          <span className="inline sm:block">
            &mdash; in <b className="text-yellow">30 seconds or less</b>.
          </span>
        </div>
        <DownloadButton
          onMouseEnter={() => setIsTransform(true)}
          onMouseLeave={() => setIsTransform(false)}
        />
        <div className="absolute hidden sm:inline top-64 -left-4 -bottom-[110px] rotate-[140deg]">
          <SquigglesX height={160} className="animate-shock sm:flex" />
        </div>
      </div>
      <div className="absolute inline sm:hidden mx-auto inset-x-1/2 -bottom-11 rotate-90 ">
        <SquigglesX height={160} className="animate-shock sm:flex" />
      </div>
    </div>
  );
}
