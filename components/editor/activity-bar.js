"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "hero", label: "newtab.js" },
  { id: "atrophy", label: "atrophy.diff" },
  { id: "snippets", label: "library/" },
  { id: "community", label: "community.log" },
  { id: "support", label: "contribute.md" },
];

// Thin left rail that doubles as section nav + scroll position. Desktop only.
export default function ActivityBar() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <nav
      aria-label="Sections"
      className="hidden lg:flex fixed left-0 top-1/2 -translate-y-1/2 z-40 flex-col gap-1 pl-3"
    >
      {SECTIONS.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className="group flex items-center gap-2 py-1.5 text-xs"
        >
          <span
            className={`h-6 w-0.5 rounded-full transition-colors ${
              active === s.id ? "bg-yellow" : "bg-line group-hover:bg-comment"
            }`}
          />
          <span
            className={`font-mono transition-colors ${
              active === s.id
                ? "text-yellow"
                : "text-comment/0 group-hover:text-comment"
            }`}
          >
            {s.label}
          </span>
        </a>
      ))}
    </nav>
  );
}
