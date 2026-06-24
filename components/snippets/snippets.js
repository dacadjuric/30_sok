"use client";

import { useWindowSize } from "@uidotdev/usehooks";
import InfiniteGridScroller from "../infinite-grid-scroller/infinite-grid-scroller";
import Reveal from "../editor/reveal";

export default function SnippetsPage() {
  const size = useWindowSize();
  const rows = size.width >= 640 ? 5 : 3;
  return (
    <section
      id="snippets"
      className="relative container mx-auto flex flex-col sm:flex-row justify-center items-center gap-10 px-6 sm:px-8 py-14 sm:py-16"
    >
      <Reveal className="w-full sm:w-1/2 sm:min-w-0">
        <p className="font-mono text-sm text-comment">$ ls library/ | wc -l</p>
        <h2 className="font-mono text-5xl sm:text-7xl font-bold tracking-tight mt-2">
          1500<span className="text-yellow">+</span>
          <span className="block text-3xl sm:text-4xl text-textLight">
            reps
          </span>
        </h2>
        <p className="prose-sans mt-5 text-base text-textLight/90 max-w-[46ch]">
          One snippet per new tab.{" "}
          <span className="text-yellow font-semibold">One rep for your brain.</span>{" "}
          Pulled from <span className="text-yellow font-semibold">14 libraries</span>{" "}
          of languages, frameworks, and interview questions - with more to come.
        </p>
        <p className="font-mono text-xs text-comment mt-4">
          {"// pro tip: CSS snippets support Live Preview"}
        </p>
      </Reveal>

      <div className="w-full sm:w-1/2 sm:min-w-0 overflow-hidden">
        <InfiniteGridScroller rows={rows} />
      </div>
    </section>
  );
}
