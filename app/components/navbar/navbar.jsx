"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar({ position = "" }) {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Accueil" },
    { href: "#about", label: "A propos" },
    { href: "#services", label: "Services" },
    { href: "#cover", label: "Realisation" },
    { href: "#galerie", label: "Galerie" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className={`relative z-30 px-4 pt-4 md:px-8 md:pt-6 ${position}`}>
      <div className="container-custom">
        <div className="rounded-full border border-[var(--line)]/90 bg-white/75 px-4 py-3 shadow-[0_18px_45px_rgba(120,94,55,0.12)] backdrop-blur md:px-6">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="flex items-center gap-3 transition-opacity hover:opacity-80"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--soft-gold)] bg-[var(--cream)] text-sm font-semibold tracking-[0.28em] text-[var(--gold)]">
                EM
              </span>
              <span className="flex flex-col">
                <span className="text-[0.65rem] uppercase tracking-[0.34em] text-[var(--gold)]">
                  Wedding Planner
                </span>
                <span className="text-lg font-semibold text-[var(--text)] md:text-xl">
                  Event Mariage
                </span>
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="rounded-full border border-[var(--line)] bg-[var(--cream)] p-2.5 text-[var(--text)] transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--soft-gold)]/60 lg:hidden"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
            >
              {open ? (
                <X className="h-8 w-8 transition-transform duration-300" />
              ) : (
                <Menu className="h-8 w-8 transition-transform duration-300" />
              )}
            </button>

            <div className="hidden items-center gap-4 lg:flex">
              <ul className="flex items-center gap-1 rounded-full border border-[var(--line)] bg-[#fbf8f3] p-1.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="rounded-full px-4 py-2.5 text-sm text-zinc-700 transition hover:bg-white hover:text-[var(--gold)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className="gold-btn inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium shadow-[0_12px_30px_rgba(199,166,106,0.28)]"
              >
                Organiser mon jour J
              </Link>
            </div>
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
              open ? "max-h-[32rem] opacity-100 pt-4" : "max-h-0 opacity-0"
            }`}
          >
            <div className="rounded-[2rem] border border-[var(--line)] bg-[#fbf8f3] p-4 shadow-[0_22px_50px_rgba(120,94,55,0.12)]">
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block rounded-2xl px-4 py-3 text-[var(--text)] transition hover:bg-white hover:text-[var(--gold)]"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className="gold-btn mt-3 inline-flex w-full items-center justify-center rounded-2xl px-6 py-3 text-sm font-medium"
                onClick={() => setOpen(false)}
              >
                Organiser mon jour J
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
