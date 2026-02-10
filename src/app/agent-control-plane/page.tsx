import { Section, SectionHeader } from "@/components/Section";
import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agent Control Plane — StratafAI",
  description:
    "The missing layer between LLMs and the enterprise. Lifecycle management, guardrails, policies, cost controls, and audit trails for production AI agents.",
};

export default function AgentControlPlanePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-brand-500/5 rounded-full blur-[100px]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block mb-4 px-3 py-1 text-xs font-medium text-brand-400 bg-brand-500/10 border border-brand-500/20 rounded-full uppercase tracking-wider">
            Core Differentiator
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Agent Control Plane
          </h1>
          <p className="text-xl text-surface-300 max-w-3xl leading-relaxed">
            The missing layer between LLMs and the enterprise. The Control Plane
            gives you lifecycle management, guardrails, cost controls, and full
            auditability for every agent in your organization.
          </p>
        </div>
      </section>

      {/* Why It Matters */}
      <Section>
        <SectionHeader
          badge="The Gap"
          title="LLMs are powerful. But power without control is liability."
          description="Most organizations connect LLMs directly to tools and hope for the best. The Control Plane provides the governance, observability, and safety layers that make agent systems enterprise-ready."
        />
      </Section>

      {/* Capabilities */}
      <Section dark>
        <SectionHeader
          badge="Capabilities"
          title="Everything you need to run agents in production."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="Agent Lifecycle Management"
            description="Create, configure, deploy, version, pause, and retire agents through a unified management layer. Full control over agent state and configuration."
          />
          <Card
            title="Guardrails & Policies"
            description="Define what agents can and cannot do at the tool, action, data, and scope level. Enforce policies before execution, not after failure."
          />
          <Card
            title="Permissions & Access Control"
            description="Role-based access for agents. Control which tools, data sources, and actions each agent can access based on context and authorization."
          />
          <Card
            title="Cost & Performance Monitoring"
            description="Track token spend, API costs, latency, throughput, and success rates across every agent. Set budgets and alerts."
          />
          <Card
            title="Drift Detection"
            description="Continuously monitor agent behavior against baselines. Detect when outputs degrade, costs spike, or behavior diverges from expectations."
          />
          <Card
            title="Tool Access Control"
            description="Fine-grained control over which tools agents can call, when, and with what parameters. Sandbox dangerous operations."
          />
          <Card
            title="Human-in-the-Loop Escalation"
            description="Configurable escalation triggers. Agents know when they are uncertain, when stakes are high, and who to route decisions to."
          />
          <Card
            title="Audit Logs & Decision Traces"
            description="Complete record of every agent decision, tool invocation, context used, and outcome produced. Compliance and forensics ready."
          />
          <Card
            title="Multi-Agent Coordination"
            description="Manage interactions between agents. Prevent conflicts, coordinate shared resources, and maintain consistency across agent systems."
          />
        </div>
      </Section>

      {/* Architecture */}
      <Section>
        <SectionHeader
          badge="Architecture"
          title="How the Control Plane fits."
          description="The Control Plane sits between your agents and the outside world. Every tool call, every decision, every output passes through governed checkpoints."
        />
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {[
              { layer: "Applications & Users", desc: "Where requests originate and results are consumed." },
              { layer: "Agent Control Plane", desc: "Policy enforcement, routing, monitoring, and audit.", highlight: true },
              { layer: "Agent Runtime", desc: "Reasoning, tool execution, and memory management." },
              { layer: "Tools & Data Sources", desc: "APIs, databases, internal systems, and external services." },
            ].map((item) => (
              <div
                key={item.layer}
                className={`rounded-xl p-6 border ${
                  item.highlight
                    ? "border-brand-500/30 bg-brand-500/5 glow"
                    : "border-white/5 bg-surface-900/50"
                }`}
              >
                <h3 className={`text-lg font-semibold mb-1 ${item.highlight ? "text-brand-400" : "text-white"}`}>
                  {item.layer}
                </h3>
                <p className="text-sm text-surface-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CTA
        title="Ready to govern your AI agents?"
        description="Talk to our team about implementing the Control Plane for your organization."
        primaryLabel="Talk to an Architect"
      />
    </>
  );
}
