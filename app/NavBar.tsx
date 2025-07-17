"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const currentPath = usePathname()  //  To get the current path of the page using usePathname() from next/navigation

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex h-20 items-center justify-between px-7">
      {/* logo */}
      <Link href={"/"}>Logo</Link>
      {/* Links */}
      <ul className="flex gap-4">
        {links.map((link) => (
          <Link
            key={link.href}
            className={`${link.href === currentPath ? "text-zinc-900" : "text-zinc-500"} hover:text-zinc-800 transition-colors`}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
