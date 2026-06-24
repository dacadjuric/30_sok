import Reveal from "../editor/reveal";

const symptoms = [
  "You autocomplete a function you couldn't write by hand.",
  "You ship code you can't explain in review.",
  "Tab → tab → tab - when did you last actually read code?",
];

export default function AtrophySection() {
  return (
    <section
      id="atrophy"
      className="relative container mx-auto flex flex-col items-center px-6 sm:px-8 py-14 sm:py-16"
    >
      <Reveal className="w-full max-w-4xl text-center mb-10">
        <p className="font-mono text-sm text-comment">
          {"// "}your brain is a muscle
        </p>
        <h2 className="font-mono text-4xl sm:text-6xl font-bold uppercase tracking-tight mt-2">
          Use it or lose it
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl items-stretch">
        {/* The problem */}
        <Reveal className="h-full">
          <div className="h-full flex flex-col rounded-xl border border-line bg-panel p-6 sm:p-7">
            <p className="font-mono text-sm text-comment"># the symptoms</p>
            <ul className="mt-4 space-y-3 flex-1">
              {symptoms.map((s, i) => (
                <li key={i} className="flex gap-3 prose-sans text-textLight/90">
                  <span className="font-mono text-comment select-none">−</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
            <p className="font-mono text-lg sm:text-xl font-bold mt-6">
              That&apos;s not productivity.{" "}
              <span className="text-yellow">That&apos;s atrophy.</span>
            </p>
          </div>
        </Reveal>

        {/* The fix - what the extension actually is */}
        <Reveal className="h-full" delay={120}>
          <div className="h-full flex flex-col rounded-xl border border-yellow/40 bg-panel p-6 sm:p-7">
            <p className="font-mono text-sm text-yellow"># the fix</p>
            <h3 className="prose-sans text-2xl sm:text-3xl font-bold mt-3 leading-tight">
              One real snippet. <span className="text-yellow">Every new tab.</span>
            </h3>
            <p className="prose-sans text-base text-textLight/90 mt-4">
              <b className="text-yellow font-semibold">30 Seconds of Knowledge</b>{" "}
              is a browser extension that replaces your blank new tab with one
              real code snippet to read - a language feature, a framework
              pattern, an interview answer.
            </p>
            <p className="prose-sans text-base text-textLight/80 mt-3">
              No course to finish, no streak to babysit. Just{" "}
              <b className="text-yellow font-semibold">one small rep, every tab</b>{" "}
              - the fundamentals stay in your head, not just in the autocomplete.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
