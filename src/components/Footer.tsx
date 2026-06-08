import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/lib/nav";

export function Footer() {
  return (
    <footer className="border-t border-stone/10 bg-jet">
      <div className="container-page py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.jpg"
                alt="OLKO"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <span className="font-heading text-lg tracking-tightest">
                OLKO
              </span>
            </Link>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-stone/60">
              Strategic sourcing, intelligent supply and procurement support for
              polymers, packaging, pharmaceutical and industrial materials.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow">Navigate</p>
            <ul className="mt-6 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-stone/70 hover:text-stone"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow">Contact</p>
            <ul className="mt-6 space-y-3 text-sm text-stone/70">
              <li>
                <a href="mailto:hello@olko.com.au" className="hover:text-stone">
                  hello@olko.com.au
                </a>
              </li>
              <li>
                <a href="https://www.olko.com.au" className="hover:text-stone">
                  www.olko.com.au
                </a>
              </li>
              <li>Global supply &middot; sourcing on request</li>
            </ul>
            <Link href="/contact" className="mt-8 inline-flex btn-secondary">
              Speak with OLKO
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-stone/10 pt-8 text-xs text-stone/40 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} OLKO. All rights reserved.</p>
          <p>Polymer sourcing &middot; Supply intelligence &middot; Procurement</p>
        </div>
      </div>
    </footer>
  );
}
