import InfiniteGridScroller from "../infinite-grid-scroller/infinite-grid-scroller";

export default function SnippetsPage() {
  return (
    <div className="relative min-h-[768px] container mx-auto flex flex-row justify-center items-center px-8">
      <div className="w-[50%]">
        <h1 className="text-6xl font-extrabold">1500+ SNIPPETS</h1>
        <h3>
          In <span className="font-bold text-yellow">14 Snippet Libraries</span>{" "}
          consisted of{" "}
          <span className="font-bold text-yellow">Programming Languages</span>,
          <br />
          popular <span className="font-bold text-yellow">Frameworks</span>, and
          <span className="font-bold text-yellow"> Interview Questions</span>,
          <br />
          with more to come soon!
        </h3>
        <br />
        <p className="italic text-xs">
          (Pro tip: CSS Snippets support Live Preview)
        </p>
      </div>
      <InfiniteGridScroller />
    </div>
  );
}
