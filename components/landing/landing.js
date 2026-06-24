"use client";

import { useState } from "react";

import DownloadButton from "../download-button/download-button";
import EditorWindow from "../editor/editor-window";
import SnippetCard from "../snippet-card/snippet-card";
import StarRating from "../icons/stars";

export default function LandingPage() {
  const [isTransform, setIsTransform] = useState(false);

  return (
    <section
      id="hero"
      className="code-grid relative min-h-[100vh] sm:min-h-[768px] overflow-hidden px-6 sm:px-8 container mx-auto flex flex-col place-content-center pt-12 pb-16 sm:pt-16 sm:pb-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-[76px] bottom-0 z-0 flex flex-col items-center justify-center overflow-hidden text-[600px] leading-[450px] select-none"
      >
        <div className="absolute top-0 left-0 bottom-0 z-10 w-40 bg-gradient-to-r from-background" />
        <div className="absolute top-0 right-0 bottom-0 z-10 w-40 bg-gradient-to-l from-background" />
        <span
          className={`font-sans font-black uppercase opacity-[0.02] ${
            isTransform ? "bg-text-top-end" : "bg-text-start"
          }`}
        >
          seconds
        </span>
        <span
          className={`font-sans font-black uppercase text-clip opacity-[0.02] ${
            isTransform ? "bg-text-bottom-end" : "bg-text-start"
          }`}
        >
          knowledge
        </span>
      </div>

      <div className="relative z-10 grid lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-14 items-center">
        {/* left: marketing */}
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-md border border-line bg-panel px-3 py-1.5 text-xs text-comment">
            <span className="size-1.5 rounded-full bg-yellow animate-pulse" />
            <span className="text-textLight">30 Seconds of Knowledge</span>
            <span className="text-comment">· new-tab extension</span>
          </span>

          <h1 className="font-mono font-bold text-3xl sm:text-[44px] leading-[1.1] tracking-tight">
            <span className="text-comment">{"// "}</span>
            Don&apos;t let your{" "}
            <span className="text-yellow">engineering brain</span> rot in the age
            of AI
          </h1>

          <p className="prose-sans max-w-[52ch] text-base sm:text-lg text-textLight/90">
            AI writes the code. You{" "}
            <b className="text-yellow font-semibold">forget how it works</b>.
            Every new tab, read one real code snippet and{" "}
            <b className="text-yellow font-semibold">stay sharp</b> &mdash; in 30
            seconds or less.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-5 pt-2">
            <DownloadButton
              onMouseEnter={() => setIsTransform(true)}
              onMouseLeave={() => setIsTransform(false)}
            />
            <div className="flex items-center gap-2.5 text-sm text-comment">
              <StarRating size={18} />
              <span>
                <b className="text-textLight">25K+</b> devs
              </span>
            </div>
          </div>
        </div>

        {/* right: the product itself - a real new-tab snippet */}
        <EditorWindow filename="new tab" right="⌘T" glow className="w-full">
          <SnippetCard />
        </EditorWindow>
      </div>
    </section>
  );
}
