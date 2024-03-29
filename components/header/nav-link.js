"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className = {path.startsWith(href) ? `visited:bg-pink-600 active:bg-blue-600` : "visited:bg-pink-600"}
    >
      {children}
    </Link>
  );
}
