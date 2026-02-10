import Link from "next/link";

const footerLinks = {
  Platform: [
    { label: "Overview", href: "/platform" },
    { label: "Agent Control Plane", href: "/agent-control-plane" },
    { label: "Org-Graph", href: "/org-graph" },
    { label: "Atlas", href: "/atlas" },
  ],
  Services: [
    { label: "Offerings", href: "/offerings" },
    { label: "Use Cases", href: "/use-cases" },
    { label: "How We Engage", href: "/how-we-engage" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Research", href: "/research" },
    { label: "Who We Work With", href: "/who-we-work-with" },
    { label: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-lg font-semibold text-white">
                Strataf<span className="text-brand-400">AI</span>
              </span>
            </Link>
            <p className="text-sm text-surface-400 leading-relaxed">
              The control plane for enterprise AI. Design, govern, and scale
              agent systems safely.
            </p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white mb-4">
                {category}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-surface-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-surface-500">
            &copy; {new Date().getFullYear()} StratafAI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/contact"
              className="text-sm text-surface-400 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
