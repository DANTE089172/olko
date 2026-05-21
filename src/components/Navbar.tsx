"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/nav";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-jet/85 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center bg-tan font-heading text-sm text-jet">
            O
          </span>
          <span className="font-heading text-lg tracking-tightest">OLKO</span>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((l) => {
              const active =
                l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`text-sm transition ${
                      active ? "text-tan" : "text-stone/70 hover:text-stone"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Link href="/contact" className="hidden md:inline-flex btn-primary">
          Request Supply Support
        </Link>

        <button
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex h-10 w-10 flex-col items-center justify-center gap-1.5"
        >
          <span
            className={`block h-px w-6 bg-stone transition ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-stone transition ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-stone transition ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-stone/10">
          <ul className="container-page flex flex-col py-6">
            {navLinks.map((l) => (
              <li key={l.href} className="border-b border-stone/10">
                <Link
                  href={l.href}
                  className="block py-4 text-base text-stone/80"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-6">
              <Link href="/contact" className="btn-primary w-full">
                Request Supply Support
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
