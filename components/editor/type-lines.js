"use client";

import { useEffect, useRef, useState } from "react";

// Types out an array of plain-text lines, then swaps in the final
// highlighted nodes. Reduced-motion users see the final state immediately.
export default function TypeLines({
  plain, // array of plain strings to "type"
  final, // array of React nodes shown after typing completes
  startLine = 1,
  speed = 28,
  className = "",
}) {
  const total = plain.join("\n").length;
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const startedRef = useRef(false);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setCount(total);
      setDone(true);
      return;
    }
    if (startedRef.current) return;
    startedRef.current = true;
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setCount(i);
      if (i >= total) {
        clearInterval(id);
        setTimeout(() => setDone(true), 350);
      }
    }, speed);
    return () => clearInterval(id);
  }, [total, speed]);

  // Build the partially-typed view from the flat character count.
  let remaining = count;
  const typedLines = plain.map((line) => {
    const take = Math.max(0, Math.min(line.length, remaining));
    remaining -= line.length + 1; // +1 for the newline
    return { text: line.slice(0, take), full: take >= line.length };
  });

  const lastTypingIdx = typedLines.findIndex((l) => !l.full);
  const cursorLine = lastTypingIdx === -1 ? plain.length - 1 : lastTypingIdx;

  return (
    <div className={`font-mono text-[13px] sm:text-[15px] leading-7 ${className}`}>
      {(done ? final : typedLines.map((l) => l.text)).map((node, i) => (
        <div key={i} className="flex">
          <span className="select-none w-10 sm:w-12 shrink-0 pr-3 text-right text-comment/60 border-r border-line">
            {startLine + i}
          </span>
          <code className="px-3 sm:px-4 whitespace-pre-wrap break-words">
            {done ? (
              node === "" ? (
                " "
              ) : (
                node
              )
            ) : (
              <>
                <span className="text-textLight">{node || " "}</span>
                {i === cursorLine && (
                  <span className="ml-0.5 inline-block w-[8px] h-[1.1em] translate-y-[2px] bg-yellow animate-blink" />
                )}
              </>
            )}
          </code>
        </div>
      ))}
    </div>
  );
}
