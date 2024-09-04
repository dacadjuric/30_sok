"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

import Logo from "../logo/logo";
import useGetDownloadUrl from "../../hooks/use-get-download-url";

function Header() {
  const { downloadUrl } = useGetDownloadUrl();
  return (
    <header className="mx-auto bg-background/50 sticky top-0 left-0 right-0 px-8 backdrop-blur-lg z-50">
      <div className="container mx-auto">
        <div className="flex place-content-between py-4">
          <div className="grid content-center">
            <Link href="/">
              <Logo className="w-32 height-auto basis-1/2" />
            </Link>
          </div>
          <nav className="flex">
            <div className="grid content-center">
              <a
                target="_blank"
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
