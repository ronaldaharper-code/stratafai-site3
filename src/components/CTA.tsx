import Link from "next/link";

interface CTAProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTA({
  title = "Ready to move from AI experiments to AI systems?",
  description = "Talk to our team about building governed, production-grade agent systems for your organization.",
  primaryLabel = "Book a Strategy Session",
  primaryHref = "/contact",
  secondaryLabel = "Explore the Platform",
  secondaryHref = "/platform",
}: CTAProps) {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-950 via-surface-900 to-surface-950 border border-brand-500/20 p-12 lg:p-16 text-center glow">
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="relative">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {title}
            </h2>
            <p className="text-lg text-surface-300 max-w-2xl mx-auto mb-8">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={primaryHref}
                className="px-8 py-3 text-sm font-medium text-white bg-brand-600 hover:bg-brand-500 rounded-lg transition-colors"
              >
                {primaryLabel}
              </Link>
              <Link
                href={secondaryHref}
                className="px-8 py-3 text-sm font-medium text-surface-300 border border-white/10 hover:border-white/20 hover:text-white rounded-lg transition-colors"
              >
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
