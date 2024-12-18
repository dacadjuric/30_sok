"use client";

import { useWindowSize } from "@uidotdev/usehooks";
import InfiniteGridScroller from "../infinite-grid-scroller/infinite-grid-scroller";

export default function SnippetsPage() {
  const size = useWindowSize();
  const rows = size.width >= 640 ? 5 : 3;
  return (
    <div className="relative min-h-[100vh] sm:min-h-[768px] container mx-auto flex flex-col sm:flex-row justify-center items-center px-8">
      <div className="sm:w-[50%] mb-3">
        <h2 className="text-5xl font-bold text-center sm:text-6xl sm:font-extrabold sm:text-left">
          1500+ SNIPPETS
        </h2>
        <div className="text-sm text-center sm:text-base sm:text-left">
          In <span className="font-bold text-yellow">14 Snippet Libraries</span>{" "}
          consisted of{" "}
          <span className="font-bold text-yellow">Programming Languages</span>,
          <br />
          popular <span className="font-bold text-yellow">Frameworks</span>, and
          <span className="font-bold text-yellow"> Interview Questions</span>,
          <br />
          with more to come soon!
        </div>
        <br />
        <p className="italic text-xs text-center sm:text-left">
          (Pro tip: CSS Snippets support Live Preview)
        </p>
      </div>
      <InfiniteGridScroller rows={rows} />
    </div>
  );
}
