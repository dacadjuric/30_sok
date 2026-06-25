"use client";

import Link from "next/link";

import Logo from "../logo/logo";
import useGetDownloadUrl from "../../hooks/use-get-download-url";

export default function Header() {
  const { downloadUrl } = useGetDownloadUrl();
  return (
    <header className="sticky top-0 left-0 right-0 z-50 border-b border-line bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3 min-w-0">
            <Link href="/" className="shrink-0" aria-label="30 Seconds of Knowledge home">
              <Logo className="w-24 sm:w-28 height-auto" />
            </Link>
            <span className="hidden sm:inline font-mono text-xs text-comment truncate">
              ~/30-seconds-of-knowledge <span className="text-line">·</span> main
            </span>
          </div>
          <nav aria-label="Primary">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono font-bold text-xs sm:text-sm rounded-md px-3 py-2 sm:px-4 sm:py-2.5 bg-yellow text-background transition-transform hover:-translate-y-0.5"
              href={downloadUrl}
            >
              <span className="leading-none">▸</span> add to browser
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
