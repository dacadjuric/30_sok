"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

import Logo from "../logo/logo";
import NavLink from "../nav-link/nav-link";
import useGetDownloadUrl from "../../hooks/use-get-download-url";

function Header() {
  const { downloadUrl, isSupported } = useGetDownloadUrl();
  return (
    <header className="mx-auto bg-background/50 sticky top-0 left-0 right-0 px-8 border-b border-textLight backdrop-blur-lg z-10">
      <div className="container mx-auto">
        <div className="mx-auto flex justify-between">
          <div className="size-24 grid content-center">
            <Link href="/">
              <Logo className="w-32 height-auto basis-1/2" />
            </Link>
          </div>
          <nav className="flex justify-items-center">
            <ul className="grid content-center justify-items-center grid-cols-3 gap-4 text-text text-xs mr-4">
              <li>
                <NavLink href="/snippets"> Random Snippet </NavLink>
              </li>
              <li>
                <NavLink href="/about" className="text-text">
                  Favourites
                </NavLink>
              </li>
              <li>
                <NavLink href="/extension">All Snippets </NavLink>
              </li>
            </ul>
            <div className="grid content-center">
              <a
                className="text-background font-roboto font-semibold uppercase text-sm rounded-lg px-4 py-3 bg-yellow"
                href={downloadUrl}
              >
                add to browser
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default dynamic(() => Promise.resolve(Header), { ssr: false });
