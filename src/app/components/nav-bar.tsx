"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flex items-center justify-between px-6 py-4 text-white transition-colors duration-300 ${
        !scrolled && pathname === "/" ? "bgs-transparent" : "bg-black"
      }`}
      style={{ position: "sticky", top: 0, zIndex: 50 }}
    >
      <div className="text-xl font-bold">Toke Frederiksen</div>
      <div className="flex items-center gap-6">
        <Link href="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link href="/cv" className="hover:text-gray-300">
          CV
        </Link>
        <Link href="/projects" className="hover:text-gray-300">
          Projects
        </Link>
        <Link href="/contact" className="hover:text-gray-300">
          Contact
        </Link>
        <a
          href="https://linkedin.com/in/toke-frederiksen"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2"
          aria-label="LinkedIn"
        >
          {" "}
          <svg
            width="24"
            height="24"
            fill="currentColor"
            className="hover:text-blue-400"
          >
            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 10.29h-3v-4.5c0-1.07-.02-2.44-1.49-2.44-1.49 0-1.72 1.16-1.72 2.36v4.58h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v4.74z" />
          </svg>
        </a>
      </div>
    </nav>
  );
}
