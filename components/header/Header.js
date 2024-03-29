import Image from "next/image";
import Link from "next/link";

import Logo from "../logo/logo";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <header className="bg-indigo-950 sticky top-0 px-8">
        <div className="container mx-auto flex justify-between">
          <div className="size-24 grid content-center">
            <Link href="/">
              <Logo className="w-32 height-auto basis-1/2" />
            </Link>
          </div>
          <nav className="flex justify-items-center">
            <ul className="grid content-center justify-items-center grid-cols-3 gap-4 text-emerald-500 mr-4">
              <li className="basis-1/4">
                <NavLink href="/about" className="text-rose-400">
                  about
                </NavLink>
              </li>
              <li className="basis-1/4">
                <NavLink href="/snippets">snippets </NavLink>
              </li>
              <li className="basis-1/4">
                <NavLink href="/extension">extension </NavLink>
              </li>
            </ul>
            <div className="grid content-center">
              <button className="text-emerald-500 rounded-lg p-2 ring-2 ring-blue-500">
                Download extension
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
