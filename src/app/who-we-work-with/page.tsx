import { Section, SectionHeader } from "@/components/Section";
import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who We Work With — StratafAI",
  description:
    "StratafAI partners with startups, enterprises, data teams, and transformation offices to build production-grade AI agent systems.",
};

export default function WhoWeWorkWithPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-500/5 rounded-full blur-[100px]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block mb-4 px-3 py-1 text-xs font-medium text-brand-400 bg-brand-500/10 border border-brand-500/20 rounded-full uppercase tracking-wider">
            Who We Work With
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Partners, not vendors.
          </h1>
          <p className="text-xl text-surface-300 max-w-3xl leading-relaxed">
            We work with organizations that take AI seriously — not as a trend,
            but as infrastructure. Here is who we partner with and what we bring
            to each relationship.
          </p>
        </div>
      </section>

      {/* Segments */}
      <Section>
        <SectionHeader
          badge="Our Partners"
          title="Organizations at every scale."
        />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="gradient-border rounded-xl bg-surface-900/50 p-8">
            <h3 className="text-xl font-semibold text-white mb-3">
              Startups & Scaleups
            </h3>
            <p className="text-surface-400 leading-relaxed mb-6">
              You are building fast but want to build right. Agent architecture
              decisions made now will compound for years. We help you avoid the
              rewrite by getting the foundations right the first time.
            </p>
            <h4 className="text-sm font-medium text-surface-500 uppercase tracking-wider mb-3">
              What we bring
            </h4>
            <ul className="space-y-2">
              {[
                "Agent architecture design that scales",
                "Production deployment patterns",
                "Governance frameworks that grow with you",
                "Speed without technical debt",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-surface-300"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="gradient-border rounded-xl bg-surface-900/50 p-8">
            <h3 className="text-xl font-semibold text-white mb-3">
              Enterprises
            </h3>
            <p className="text-surface-400 leading-relaxed mb-6">
              You have the complexity, the compliance requirements, and the
              organizational scale that makes AI deployment genuinely hard. We
              bring the governance, control, and organizational intelligence to
              make it work.
            </p>
            <h4 className="text-sm font-medium text-surface-500 uppercase tracking-wider mb-3">
              What we bring
            </h4>
            <ul className="space-y-2">
              {[
                "Enterprise-grade governance and compliance",
                "Org-Graph modeling for organizational alignment",
                "Control Plane for policy and cost management",
                "Atlas for operational visibility",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-surface-300"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="gradient-border rounded-xl bg-surface-900/50 p-8">
            <h3 className="text-xl font-semibold text-white mb-3">
              Data & Platform Teams
            </h3>
            <p className="text-surface-400 leading-relaxed mb-6">
              You are building the internal AI infrastructure your organization
              depends on. We help you create standardized, observable, and
              scalable agent platforms that your entire organization can build
              on.
            </p>
            <h4 className="text-sm font-medium text-surface-500 uppercase tracking-wider mb-3">
              What we bring
            </h4>
            <ul className="space-y-2">
              {[
                "Platform architecture for multi-team agent systems",
                "Standardized agent deployment patterns",
                "Observability and monitoring infrastructure",
                "Internal developer experience for agent builders",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-surface-300"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="gradient-border rounded-xl bg-surface-900/50 p-8">
            <h3 className="text-xl font-semibold text-white mb-3">
              Product & Transformation Offices
            </h3>
            <p className="text-surface-400 leading-relaxed mb-6">
              You are leading the organizational shift to AI-augmented
              operations. We provide the frameworks, operating models, and
              platform to make that transformation real and sustainable.
            </p>
            <h4 className="text-sm font-medium text-surface-500 uppercase tracking-wider mb-3">
              What we bring
            </h4>
            <ul className="space-y-2">
              {[
                "AI operating model design",
                "Human + agent collaboration frameworks",
                "Metrics and accountability structures",
                "Change management and adoption planning",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-surface-300"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <CTA
        title="See yourself in one of these?"
        description="Every engagement starts with a conversation. Tell us where you are and what you're trying to solve."
        primaryLabel="Book a Strategy Session"
        secondaryLabel="See How We Engage"
        secondaryHref="/how-we-engage"
      />
    </>
  );
}
