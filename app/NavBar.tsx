import Link from "next/link";

const NavBar = () => {
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
            className="text-zinc-800 hover:text-zinc-500 transition-colors"
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
