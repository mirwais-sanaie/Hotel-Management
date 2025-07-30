"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathName = usePathname();

  const navLinks = [
    {
      href: "/cabins",
      label: "Cabins",
      isActive: pathName === "/cabins",
    },
    {
      href: "/about",
      label: "About",
      isActive: pathName === "/about",
    },
    {
      href: "/account",
      label: "Guest area",
      isActive: pathName === "/account",
    },
  ];
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        {navLinks.map((link, i) => (
          <li key={i}>
            <Link
              href={link.href}
              className={`hover:text-accent-400 transition-colors ${
                link.isActive && "text-accent-400"
              } `}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
