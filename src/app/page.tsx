import Link from "next/link";
import { Section, SectionHeader } from "@/components/Section";
import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-24 text-center">
          <span className="inline-block mb-6 px-4 py-1.5 text-xs font-medium text-brand-400 bg-brand-500/10 border border-brand-500/20 rounded-full uppercase tracking-wider">
            From Apps to Agents. From Experiments to Systems.
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            The Control Plane for{" "}
            <span className="gradient-text">Enterprise AI</span>
          </h1>
          <p className="text-xl text-surface-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Design, govern, and scale AI agents safely. StratafAI combines agent
            orchestration, context intelligence, and organizational graph
            modeling to make AI reliable, auditable, and scalable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3.5 text-sm font-medium text-white bg-brand-600 hover:bg-brand-500 rounded-lg transition-colors"
            >
              Book a Strategy Session
            </Link>
            <Link
              href="/platform"
              className="px-8 py-3.5 text-sm font-medium text-surface-300 border border-white/10 hover:border-white/20 hover:text-white rounded-lg transition-colors"
            >
              Explore the Platform
            </Link>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <Section dark>
        <SectionHeader
          badge="The Problem"
          title="AI is everywhere. AI systems are nowhere."
          description="Organizations are drowning in AI tools but starving for AI systems. Copilots hallucinate. Automations break. No one knows which agent did what, why, or whether it should have."
        />
        <div className="grid md:grid-cols-3 gap-6">
          <Card
            icon={<FragmentIcon />}
            title="Fragmented Tools"
            description="Dozens of AI tools with no coordination. Each team runs its own experiments. Nothing connects to anything else."
          />
          <Card
            icon={<ShieldOffIcon />}
            title="No Governance"
            description="Agents make decisions without guardrails. No audit trail. No policy enforcement. No way to know what went wrong."
          />
          <Card
            icon={<DriftIcon />}
            title="Brittle & Drifting"
            description="Prompt-based systems drift silently. Performance degrades. Costs balloon. And nobody notices until something breaks."
          />
        </div>
      </Section>

      {/* The Solution */}
      <Section>
        <SectionHeader
          badge="The Solution"
          title="A platform that makes AI agents production-grade."
          description="StratafAI provides the orchestration, governance, and intelligence layers that turn isolated AI experiments into reliable, enterprise-ready agent systems."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card
            icon={<AgentIcon />}
            title="Agent Runtime"
            description="Build, deploy, and manage reasoning agents with tool access, memory, and context-aware execution."
          />
          <Card
            icon={<ControlIcon />}
            title="Agent Control Plane"
            description="Lifecycle management, guardrails, cost controls, and human-in-the-loop escalation. The missing layer between LLMs and the enterprise."
          />
          <Card
            icon={<GraphIcon />}
            title="Org-Graph"
            description="Ground agents in organizational reality. Roles, workflows, KPIs, data ownership, and decision authority as machine-readable context."
          />
          <Card
            icon={<DashboardIcon />}
            title="Atlas"
            description="The operational interface where agents, org structures, workflows, metrics, and decision traces converge."
          />
        </div>
      </Section>

      {/* Who It's For */}
      <Section dark>
        <SectionHeader
          badge="Who It's For"
          title="Built for builders, operators, and leaders."
        />
        <div className="grid md:grid-cols-3 gap-6">
          <Card
            title="Founders & CTOs"
            description="Move from prototype to production. Get agent architecture right the first time. Avoid the rewrite."
          />
          <Card
            title="Enterprise Leaders"
            description="Deploy AI with governance, auditability, and organizational alignment from day one. Not as an afterthought."
          />
          <Card
            title="Platform & Data Teams"
            description="Build the internal AI infrastructure your organization needs. Standardized, observable, and scalable."
          />
        </div>
      </Section>

      {/* How It Works */}
      <Section>
        <SectionHeader
          badge="How It Works"
          title="From assessment to autonomous systems."
          description="A structured approach to building agent systems that actually work in production."
        />
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Assess",
              desc: "Map your organization, workflows, and AI readiness. Build your Org-Graph.",
            },
            {
              step: "02",
              title: "Architect",
              desc: "Design agent systems, tool integrations, and governance policies.",
            },
            {
              step: "03",
              title: "Build & Deploy",
              desc: "Launch agents with full control plane integration, guardrails, and observability.",
            },
            {
              step: "04",
              title: "Evolve",
              desc: "Monitor, optimize, and scale. Agents improve as your organization learns.",
            },
          ].map((item) => (
            <div key={item.step} className="text-center lg:text-left">
              <span className="text-4xl font-bold text-brand-500/30 font-mono">
                {item.step}
              </span>
              <h3 className="text-lg font-semibold text-white mt-2 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-surface-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}

function FragmentIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h8m-8 6h16" />
    </svg>
  );
}

function ShieldOffIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622a12.02 12.02 0 00-.382-3.016z" />
    </svg>
  );
}

function DriftIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  );
}

function AgentIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function ControlIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function GraphIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm10 0a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1v-6z" />
    </svg>
  );
}

function DashboardIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
    </svg>
  );
}
