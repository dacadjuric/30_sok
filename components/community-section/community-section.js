import DownloadCard from "./download-card/download-card";
import EditorWindow from "../editor/editor-window";
import Reveal from "../editor/reveal";

import StarRating from "../icons/stars";
import GithubIcon from "../icons/github";
import ProductHuntIcon from "../icons/product-hunt";

const log = [
  { cmd: "sok stats --community" },
  { out: "25,000+ developers who refuse to rust" },
  { out: "1,000+ GitHub stars" },
  { out: "#2 Product of the Day · Product Hunt" },
  { out: "★★★★★ featured on the Chrome Web Store" },
];

export default function CommunitySection() {
  return (
    <section
      id="community"
      className="relative container mx-auto flex flex-col justify-center items-center px-6 sm:px-8 py-14 sm:py-16"
    >
      <Reveal className="w-full max-w-3xl text-center mb-10">
        <p className="font-mono text-sm text-comment">{"// "}sharp minds, sharp tools</p>
        <h2 className="font-mono text-5xl sm:text-6xl font-bold tracking-tight mt-2">
          25K<span className="text-yellow">+</span> developers
        </h2>
        <p className="prose-sans text-comment mt-2">who refuse to rust</p>
      </Reveal>

      <Reveal className="w-full max-w-3xl" delay={120}>
        <EditorWindow filename="community.log" right="$ tail -f" bodyClassName="py-4 px-4 sm:px-5 font-mono text-sm sm:text-[15px] leading-7">
          {log.map((l, i) =>
            l.cmd ? (
              <p key={i} className="text-textLight">
                <span className="text-yellow">$</span> {l.cmd}
              </p>
            ) : (
              <p key={i} className="text-comment">
                <span className="text-yellow">→</span>{" "}
                <span className="text-textLight">{l.out}</span>
              </p>
            )
          )}
          <p className="text-comment">
            <span className="animate-blink text-yellow">▋</span>
          </p>
        </EditorWindow>
      </Reveal>

      <Reveal
        className="flex flex-row flex-wrap lg:flex-nowrap justify-center gap-5 sm:gap-6 mt-10 w-full max-w-3xl"
        delay={200}
      >
        <DownloadCard />

        <a
          href="https://www.producthunt.com/products/css-galore#30-seconds-of-knowledge"
          target="_blank"
          className="flex-1 min-w-[240px] px-6 py-7 rounded-lg bg-panel border border-line hover:border-yellow/40 transition-colors flex flex-col items-center"
        >
          <ProductHuntIcon width={48} height={48} color="#ffc800" className="mb-3" />
          <h3 className="text-xl">
            <b className="text-yellow">#2</b> Product of the Day
          </h3>
          <p className="text-sm text-comment mt-1">Product Hunt</p>
        </a>

        <a
          href="https://github.com/petrovicstefanrs/30_seconds_of_knowledge"
          target="_blank"
          className="flex-1 min-w-[240px] px-6 py-7 rounded-lg bg-panel border border-line hover:border-yellow/40 transition-colors flex flex-col items-center"
        >
          <GithubIcon width={42} height={42} color="#fff" className="mb-3" />
          <h3 className="text-xl">
            <b className="text-yellow">1,000+</b> GitHub stars
          </h3>
          <p className="text-sm text-comment mt-1">30_seconds_of_knowledge</p>
        </a>
      </Reveal>

      <Reveal className="mt-10 flex items-center gap-3" delay={260}>
        <StarRating size={30} />
        <span className="font-mono text-sm text-comment">5.0 average</span>
      </Reveal>
    </section>
  );
}
