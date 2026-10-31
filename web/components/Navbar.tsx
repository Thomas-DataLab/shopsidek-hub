"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Overview" },
  { href: "/calculators", label: "AOV Calculators" },
  { href: "/templates", label: "Theme Blueprints" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#151413]/90 backdrop-blur-md border-b border-[rgba(239,233,222,0.1)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="w-6 h-6 rounded bg-[#efe9de] text-[#151413] font-mono font-bold text-xs flex items-center justify-center shadow-[0_1px_2px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.4)]">
              /
            </span>
            <span className="font-semibold text-[#efe9de] text-sm tracking-tight">
              ShopSideK{" "}
              <span className="text-[rgba(239,233,222,0.4)] font-normal">· CRO Hub</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-5 text-xs font-medium text-[rgba(239,233,222,0.6)]">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-[#efe9de] transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="h-4 w-px bg-[rgba(239,233,222,0.12)]" />

            <a
              href="https://apps.shopify.com/bundle-deals?mref=fcmkmjly"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#efe9de] text-[#151413] text-xs font-semibold shadow-[0_1px_2px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.4)] hover:bg-[#f5f0e7] transition-all duration-150 active:scale-[0.98]"
            >
              <span>Get Partner Deal</span>
              <span className="text-[10px] bg-[rgba(21,20,19,0.15)] text-[#151413] px-1 rounded font-mono">
                SAVE20
              </span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-1.5 rounded text-[rgba(239,233,222,0.6)] hover:text-[#efe9de] transition-colors"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-[rgba(239,233,222,0.1)] py-3 space-y-2 text-xs animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 px-1 text-[rgba(239,233,222,0.7)] hover:text-[#efe9de] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://apps.shopify.com/bundle-deals?mref=fcmkmjly"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-mono font-semibold text-[#efe9de] hover:text-[rgba(239,233,222,0.7)] transition-colors py-2 px-1"
            >
              <span>Partner Deal (SAVE20)</span>
              <span>↗</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
