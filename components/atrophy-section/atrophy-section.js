const symptoms = [
  "You autocomplete a function you couldn't write by hand.",
  "You ship code you can't explain in review.",
  "Tab → tab → tab. When did you last actually read code?",
];

export default function AtrophySection() {
  return (
    <div className="relative min-h-[80vh] sm:min-h-[640px] container mx-auto flex flex-col justify-center items-center px-8 py-20">
      <div className="sm:w-[60%] text-center">
        <h4 className="text-lg sm:text-2xl text-footerTextDark">
          Your brain is a muscle
        </h4>
        <h2 className="text-5xl sm:text-7xl font-extrabold uppercase leading-[0.9]">
          Use it or lose it
        </h2>
      </div>

      <ol className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 mb-10 w-full max-w-5xl">
        {symptoms.map((symptom, index) => (
          <li
            key={index}
            className="group relative px-6 py-8 rounded-lg bg-cardsBackground border border-white/5 transition transform hover:scale-105 hover:border-yellow/40"
          >
            <span className="block text-5xl font-extrabold text-white/10 group-hover:text-yellow/60 transition-colors leading-none mb-4">
              0{index + 1}
            </span>
            <p className="text-base sm:text-lg text-textLight">{symptom}</p>
          </li>
        ))}
      </ol>

      <p className="text-2xl sm:text-3xl font-bold text-center">
        That&apos;s not productivity.{" "}
        <span className="text-yellow">That&apos;s atrophy.</span>
      </p>

      <div className="mt-8 max-w-2xl text-center">
        <p className="text-base sm:text-lg text-textLight">
          <b className="text-yellow">30 Seconds of Knowledge</b> is the gym for
          your engineering brain. Instead of a blank new tab, you get one real
          code snippet to read &mdash; a language feature, a framework pattern, an
          interview answer.
        </p>
        <p className="mt-3 text-base sm:text-lg text-footerTextDark">
          No course to finish, no streak to babysit. Just{" "}
          <b className="text-yellow">one small rep, every tab</b> &mdash; the
          fundamentals stay in your head, not just in the autocomplete.
        </p>
      </div>
    </div>
  );
}
