"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  {
    label: "Platform",
    href: "/platform",
    children: [
      { label: "Overview", href: "/platform" },
      { label: "Agent Control Plane", href: "/agent-control-plane" },
      { label: "Org-Graph", href: "/org-graph" },
      { label: "Atlas", href: "/atlas" },
    ],
  },
  { label: "Offerings", href: "/offerings" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Research", href: "/research" },
  {
    label: "Company",
    href: "/about",
    children: [
      { label: "About", href: "/about" },
      { label: "Who We Work With", href: "/who-we-work-with" },
      { label: "How We Engage", href: "/how-we-engage" },
    ],
  },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-surface-950/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-lg font-semibold text-white">
              Strataf<span className="text-brand-400">AI</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  item.children && setOpenDropdown(item.label)
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-4 py-2 text-sm text-surface-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                >
                  {item.label}
                  {item.children && (
                    <svg
                      className="inline-block ml-1 w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-56 rounded-xl border border-white/10 bg-surface-900/95 backdrop-blur-xl p-2 shadow-2xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-surface-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-5 py-2 text-sm font-medium text-white bg-brand-600 hover:bg-brand-500 rounded-lg transition-colors"
            >
              Book a Strategy Session
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-surface-400 hover:text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/5 bg-surface-950/95 backdrop-blur-xl">
          <div className="px-6 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 text-sm text-surface-300 hover:text-white rounded-lg"
                >
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setMobileOpen(false)}
                    className="block pl-8 py-2 text-sm text-surface-400 hover:text-white rounded-lg"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block mt-4 px-4 py-2.5 text-sm font-medium text-center text-white bg-brand-600 rounded-lg"
            >
              Book a Strategy Session
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
