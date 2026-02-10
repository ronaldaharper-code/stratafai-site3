import { Section, SectionHeader } from "@/components/Section";
import { CTA } from "@/components/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How We Engage — StratafAI",
  description:
    "From advisory to full platform implementation, StratafAI offers flexible engagement models for every stage of your AI journey.",
};

export default function HowWeEngagePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-brand-500/5 rounded-full blur-[100px]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block mb-4 px-3 py-1 text-xs font-medium text-brand-400 bg-brand-500/10 border border-brand-500/20 rounded-full uppercase tracking-wider">
            How We Engage
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Flexible models. Serious outcomes.
          </h1>
          <p className="text-xl text-surface-300 max-w-3xl leading-relaxed">
            Every organization is at a different point in the AI journey. Our
            engagement models adapt to where you are and where you need to go.
          </p>
        </div>
      </section>

      {/* Engagement Models */}
      <Section>
        <SectionHeader
          badge="Engagement Models"
          title="Four ways to work with us."
        />
        <div className="space-y-8">
          {[
            {
              num: "01",
              title: "Advisory & Strategy",
              desc: "Strategic guidance for AI leadership. Readiness assessments, roadmap development, operating model design, and architecture review.",
              details: [
                "AI readiness and maturity assessment",
                "Agent strategy and roadmap development",
                "Architecture review and recommendations",
                "Operating model design for AI-augmented teams",
              ],
              fit: "Leaders exploring their AI strategy, CTOs evaluating agent architectures, and transformation executives planning the path forward.",
            },
            {
              num: "02",
              title: "Build & Launch",
              desc: "Hands-on design and development of agent systems. From use case validation through production deployment.",
              details: [
                "Use case validation and scoping",
                "Agent architecture and design",
                "Development, integration, and testing",
                "Production deployment with governance",
              ],
              fit: "Teams with validated use cases that need expert architecture and development to build production-grade agent systems.",
            },
            {
              num: "03",
              title: "Platform Implementation",
              desc: "Full deployment of the StratafAI platform — Control Plane, Org-Graph, Atlas, and agent infrastructure for your organization.",
              details: [
                "Platform deployment and configuration",
                "Org-Graph modeling of your organization",
                "Control Plane policy design and setup",
                "Atlas dashboard and monitoring configuration",
              ],
              fit: "Organizations ready to standardize their AI infrastructure and build a governed, scalable foundation for agent systems.",
            },
            {
              num: "04",
              title: "Retainer & Evolution",
              desc: "Ongoing partnership for continuous improvement. Agent optimization, new use case development, and platform evolution.",
              details: [
                "Ongoing agent performance optimization",
                "New use case identification and development",
                "Platform updates and capability expansion",
                "Strategic advisory and technology roadmapping",
              ],
              fit: "Organizations with running agent systems that want continuous improvement, expansion, and expert guidance on an ongoing basis.",
            },
          ].map((model) => (
            <div
              key={model.num}
              className="gradient-border rounded-xl bg-surface-900/50 p-8 lg:p-10"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <span className="text-3xl font-bold text-brand-500/30 font-mono">
                    {model.num}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-2 mb-3">
                    {model.title}
                  </h3>
                  <p className="text-surface-400 leading-relaxed mb-6">
                    {model.desc}
                  </p>
                  <ul className="space-y-2">
                    {model.details.map((d, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-surface-300"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t lg:border-t-0 lg:border-l border-white/5 pt-6 lg:pt-0 lg:pl-8">
                  <h4 className="text-sm font-medium text-surface-500 uppercase tracking-wider mb-3">
                    Best Fit
                  </h4>
                  <p className="text-sm text-surface-400 leading-relaxed">
                    {model.fit}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CTA
        title="Not sure which model fits?"
        description="Start with a strategy session. We'll help you figure out the right engagement based on where you are and what you're trying to achieve."
        primaryLabel="Book a Strategy Session"
        secondaryLabel="View Offerings"
        secondaryHref="/offerings"
      />
    </>
  );
}
