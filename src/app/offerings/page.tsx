import { Section, SectionHeader } from "@/components/Section";
import { CTA } from "@/components/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offerings — StratafAI",
  description:
    "From app-to-agent transformation to enterprise governance, StratafAI provides the services to build, deploy, and scale production-grade AI agent systems.",
};

export default function OfferingsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/3 left-1/2 w-[400px] h-[400px] bg-brand-500/5 rounded-full blur-[100px]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block mb-4 px-3 py-1 text-xs font-medium text-brand-400 bg-brand-500/10 border border-brand-500/20 rounded-full uppercase tracking-wider">
            Offerings
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            From strategy to systems.
          </h1>
          <p className="text-xl text-surface-300 max-w-3xl leading-relaxed">
            StratafAI combines platform capabilities with hands-on architecture
            and implementation services. We help you design, build, govern, and
            scale agent systems that work in production.
          </p>
        </div>
      </section>

      {/* Offering 1 */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="inline-block mb-4 px-3 py-1 text-xs font-medium text-brand-400 bg-brand-500/10 border border-brand-500/20 rounded-full uppercase tracking-wider">
              01
            </span>
            <h2 className="text-3xl font-bold text-white mb-4">
              Apps to Agents Transformation
            </h2>
            <p className="text-lg text-surface-400 leading-relaxed mb-6">
              Convert SaaS workflows into agent-driven systems. Replace brittle
              rule-based automations with reasoning agents that adapt, learn,
              and improve.
            </p>
            <ul className="space-y-3">
              {[
                "Audit existing tool sprawl and automation gaps",
                "Identify high-value agent opportunities",
                "Design agent architectures for internal ops, support, analytics, and enablement",
                "Migrate from static workflows to dynamic agent systems",
                "Deploy with governance and observability from day one",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-surface-300">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="gradient-border rounded-xl bg-surface-900/30 p-8">
            <h3 className="text-sm font-medium text-surface-500 uppercase tracking-wider mb-4">
              Ideal For
            </h3>
            <p className="text-surface-300 leading-relaxed">
              Organizations with mature SaaS stacks that want to move from tool
              sprawl to coordinated agent systems. Internal operations, customer
              support, revenue operations, and analytics teams.
            </p>
          </div>
        </div>
      </Section>

      {/* Offering 2 */}
      <Section dark>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="inline-block mb-4 px-3 py-1 text-xs font-medium text-brand-400 bg-brand-500/10 border border-brand-500/20 rounded-full uppercase tracking-wider">
              02
            </span>
            <h2 className="text-3xl font-bold text-white mb-4">
              Agent Architecture & Build
            </h2>
            <p className="text-lg text-surface-400 leading-relaxed mb-6">
              Custom agent systems built for your specific domain, data, and
              workflows. From single-agent tools to multi-agent orchestration
              systems.
            </p>
            <ul className="space-y-3">
              {[
                "Custom agent design and development",
                "Tool and API integration with typed schemas",
                "Multi-agent orchestration and workflow design",
                "Secure deployment patterns and infrastructure",
                "Memory, context, and knowledge system setup",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-surface-300">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="gradient-border rounded-xl bg-surface-900/30 p-8">
            <h3 className="text-sm font-medium text-surface-500 uppercase tracking-wider mb-4">
              Ideal For
            </h3>
            <p className="text-surface-300 leading-relaxed">
              Technical teams building their first production agent systems.
              Companies that have validated AI use cases and need expert
              architecture to scale.
            </p>
          </div>
        </div>
      </Section>

      {/* Offering 3 */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="inline-block mb-4 px-3 py-1 text-xs font-medium text-brand-400 bg-brand-500/10 border border-brand-500/20 rounded-full uppercase tracking-wider">
              03
            </span>
            <h2 className="text-3xl font-bold text-white mb-4">
              Enterprise Agent Governance
            </h2>
            <p className="text-lg text-surface-400 leading-relaxed mb-6">
              Set up the control plane, policies, and governance frameworks your
              organization needs to run AI agents safely at scale.
            </p>
            <ul className="space-y-3">
              {[
                "Control Plane implementation and configuration",
                "Policy design for agent behavior, data access, and action scope",
                "Risk assessment and compliance mapping",
                "AI readiness assessments and gap analysis",
                "Audit trail and decision trace infrastructure",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-surface-300">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="gradient-border rounded-xl bg-surface-900/30 p-8">
            <h3 className="text-sm font-medium text-surface-500 uppercase tracking-wider mb-4">
              Ideal For
            </h3>
            <p className="text-surface-300 leading-relaxed">
              Enterprises in regulated industries, organizations scaling AI
              beyond pilots, and teams that need compliance-grade AI governance.
            </p>
          </div>
        </div>
      </Section>

      {/* Offering 4 */}
      <Section dark>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="inline-block mb-4 px-3 py-1 text-xs font-medium text-brand-400 bg-brand-500/10 border border-brand-500/20 rounded-full uppercase tracking-wider">
              04
            </span>
            <h2 className="text-3xl font-bold text-white mb-4">
              AI Operating Model Design
            </h2>
            <p className="text-lg text-surface-400 leading-relaxed mb-6">
              Design the organizational operating model for an AI-augmented
              enterprise. Define how humans and agents collaborate, who is
              accountable, and how outcomes are measured.
            </p>
            <ul className="space-y-3">
              {[
                "Agent-first workflow design and optimization",
                "Human + AI collaboration models and handoff protocols",
                "Metrics, KPIs, and accountability frameworks",
                "Org-Graph modeling and organizational mapping",
                "Change management and adoption planning",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-surface-300">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="gradient-border rounded-xl bg-surface-900/30 p-8">
            <h3 className="text-sm font-medium text-surface-500 uppercase tracking-wider mb-4">
              Ideal For
            </h3>
            <p className="text-surface-300 leading-relaxed">
              Transformation leaders, COOs, and product executives building the
              organizational muscle for sustained AI adoption.
            </p>
          </div>
        </div>
      </Section>

      <CTA
        title="Which offering fits your challenge?"
        description="Talk to our team to scope the right engagement for your organization."
        primaryLabel="Talk to an Architect"
        secondaryLabel="See How We Engage"
        secondaryHref="/how-we-engage"
      />
    </>
  );
}
