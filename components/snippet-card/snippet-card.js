import Image from "next/image";

import gitLogo from "../../assets/logos/git.svg";
import { Pill } from "../editor/tokens";

const codeLines = [
  "git restore --staged <pathspec>",
  "",
  "# Examples",
  'git restore --staged "30seconds.txt"',
  "# Remove the file from the staging area",
  "",
  "git restore --staged .",
  "# Remove all changes from the staging area",
];

function CopyIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

// Faithful replica of a real "new tab" snippet, so the hero literally
// shows the product.
export default function SnippetCard() {
  return (
    <div className="p-5 sm:p-7">
      {/* mini browser nav, echoing the extension */}
      <div className="flex items-center justify-end gap-4 text-xs text-comment mb-6">
        <span className="text-yellow">Random Snippet</span>
        <span>Favourites</span>
        <span>All Snippets</span>
      </div>

      {/* title row */}
      <div className="flex items-start gap-4">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-yellow">
          <Image src={gitLogo} alt="Git" className="size-7" />
        </span>
        <div className="min-w-0">
          <h2 className="prose-sans text-xl sm:text-2xl font-bold leading-tight">
            Remove files from the staging area
          </h2>
          <p className="text-xs text-comment mt-1">
            Updated On: <span className="text-textLight">February 6, 2019</span>
          </p>
        </div>
      </div>

      {/* description + bullets */}
      <p className="prose-sans text-sm text-textLight/90 mt-5">
        Removes files from the staging area.
      </p>
      <ul className="prose-sans text-sm text-textLight/90 mt-3 space-y-2.5">
        <li className="flex gap-2">
          <span className="text-yellow">•</span>
          <span>
            Use <Pill>{"git restore --staged <pathspec>"}</Pill> to remove files
            from the staging area.
          </span>
        </li>
        <li className="flex gap-2">
          <span className="text-yellow">•</span>
          <span>
            <Pill>{"<pathspec>"}</Pill> can be a filename or a fileglob.
          </span>
        </li>
      </ul>

      {/* purple code block, like the extension */}
      <div className="relative mt-5 rounded-lg bg-codeBg p-4 sm:p-5 font-mono text-[13px] leading-6 overflow-x-auto">
        <button
          type="button"
          aria-label="Copy code"
          className="absolute top-3 right-3 text-codeComment hover:text-white transition-colors"
        >
          <CopyIcon />
        </button>
        <pre className="whitespace-pre">
          {codeLines.map((line, i) => (
            <div key={i} className={line.startsWith("#") ? "text-codeComment" : "text-codeText"}>
              {line === "" ? " " : line}
            </div>
          ))}
          <span className="inline-block w-[8px] h-[1.05em] translate-y-[2px] bg-yellow animate-blink" />
        </pre>
      </div>
    </div>
  );
}
