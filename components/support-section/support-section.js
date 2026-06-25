import EditorWindow from "../editor/editor-window";
import Reveal from "../editor/reveal";

export default function SupportSection() {
  return (
    <section
      id="support"
      className="relative container mx-auto flex flex-col items-center px-6 sm:px-8 py-14 sm:py-16"
    >
      <Reveal className="w-full max-w-3xl">
        <EditorWindow filename="contribute.md" right="open source" bodyClassName="p-6 sm:p-8">
          <p className="font-mono text-sm text-comment"># support us</p>
          <h2 className="font-mono text-4xl sm:text-5xl font-bold tracking-tight mt-2">
            Keep brains <span className="text-yellow">sharp</span>
          </h2>
          <p className="prose-sans mt-4 text-base sm:text-lg text-textLight/90 max-w-[58ch]">
            If <b className="text-yellow">30 Seconds of Knowledge</b> keeps your
            edge from dulling, consider chipping in. It stays free and open for
            everyone.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-7">
            <a
              href="https://30secondsofknowledge.gumroad.com/l/thhgl"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-yellow px-5 py-3 font-mono font-bold text-background transition-transform hover:-translate-y-0.5"
            >
              <span className="text-lg leading-none">▸</span> donate
            </a>
            <a
              href="https://30-seconds-of-knowledge.creator-spring.com/"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-panel px-5 py-3 font-mono text-textLight hover:border-yellow/40 transition-colors"
            >
              # grab the merch →
            </a>
          </div>
        </EditorWindow>
      </Reveal>

      <Reveal className="w-full max-w-3xl mt-8" delay={150}>
        <EditorWindow filename="merch/" right="creator-spring" bodyClassName="">
          <iframe
            style={{ border: "none", display: "block" }}
            src="https://embed.creator-spring.com/widget?slug=30-seconds-of-knowledge&per=20&currency=&page=1&layout=carousel-wide&theme=dark"
            title="30 Seconds Of Knowledge Merch store powered by Spring"
            width="100%"
            height="420"
            data-reactroot=""
          />
        </EditorWindow>
      </Reveal>
    </section>
  );
}
