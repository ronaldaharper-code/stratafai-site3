import Link from "next/link";
import { Section, SectionHeader } from "@/components/Section";
import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Platform Overview — StratafAI",
  description:
    "StratafAI is a modular platform for building, governing, and scaling enterprise AI agent systems. Not just tooling — a complete system.",
};

export default function PlatformPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-brand-500/5 rounded-full blur-[100px]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block mb-4 px-3 py-1 text-xs font-medium text-brand-400 bg-brand-500/10 border border-brand-500/20 rounded-full uppercase tracking-wider">
            Platform
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            A system, not a tool.
          </h1>
          <p className="text-xl text-surface-300 max-w-3xl leading-relaxed">
            StratafAI is a modular platform for the full agent lifecycle: build,
            deploy, govern, observe, and evolve. Every layer is designed to work
            independently or as part of an integrated system.
          </p>
        </div>
      </section>

      {/* Agent Runtime */}
      <Section>
        <SectionHeader
          badge="Agent Runtime"
          title="Build agents that reason, act, and learn."
          description="A production-grade runtime for deploying agents with tool access, persistent memory, and context-aware execution. Not wrappers around chat completions."
          centered={false}
        />
        <div className="grid md:grid-cols-3 gap-6">
          <Card
            title="Tool Integration"
            description="Connect agents to APIs, databases, internal systems, and third-party services with typed tool schemas and access controls."
          />
          <Card
            title="Memory & State"
            description="Persistent context across sessions. Short-term working memory, long-term knowledge, and organizational context."
          />
          <Card
            title="Multi-Agent Orchestration"
            description="Compose agents into workflows. Route tasks, manage handoffs, and coordinate multi-step reasoning chains."
          />
        </div>
      </Section>

      {/* Control Plane */}
      <Section dark>
        <SectionHeader
          badge="Agent Control Plane"
          title="The missing layer between LLMs and the enterprise."
          description="Lifecycle management, guardrails, cost controls, policy enforcement, and human-in-the-loop escalation. Everything you need to run agents in production."
          centered={false}
        />
        <div className="grid md:grid-cols-2 gap-6">
          <Card
            title="Guardrails & Policies"
            description="Define what agents can and cannot do. Enforce policies at the tool, action, and data level."
          />
          <Card
            title="Cost & Performance Monitoring"
            description="Track token spend, latency, success rates, and drift across every agent and workflow."
          />
          <Card
            title="Human-in-the-Loop"
            description="Configurable escalation paths. Agents know when to ask for help and who to ask."
          />
          <Card
            title="Audit & Decision Traces"
            description="Full audit trail of every agent decision, tool call, and outcome. Compliance-ready."
          />
        </div>
        <div className="mt-8">
          <Link
            href="/agent-control-plane"
            className="text-sm font-medium text-brand-400 hover:text-brand-300 transition-colors"
          >
            Deep dive into the Control Plane &rarr;
          </Link>
        </div>
      </Section>

      {/* Context & Memory */}
      <Section>
        <SectionHeader
          badge="Context & Memory Layer"
          title="Context is the scarcest resource in AI."
          description="The Context Layer manages what agents know, when they know it, and how that knowledge is composed, pruned, and prioritized."
          centered={false}
        />
        <div className="grid md:grid-cols-3 gap-6">
          <Card
            title="Context Composition"
            description="Dynamically assemble context from organizational data, task state, user history, and domain knowledge."
          />
          <Card
            title="Context Pruning"
            description="Intelligent management of limited context windows. Priority-based inclusion and relevance scoring."
          />
          <Card
            title="Organizational Context"
            description="Ground every agent interaction in the structure, policies, and priorities of the organization."
          />
        </div>
      </Section>

      {/* Org-Graph */}
      <Section dark>
        <SectionHeader
          badge="Org-Graph Intelligence"
          title="Your organization as machine-readable context."
          description="A structured representation of roles, teams, workflows, KPIs, data ownership, and decision authority. The foundation for agents that understand your business."
          centered={false}
        />
        <div className="grid md:grid-cols-2 gap-6">
          <Card
            title="Structural Intelligence"
            description="Roles, reporting lines, team composition, and cross-functional relationships as queryable data."
          />
          <Card
            title="Workflow Mapping"
            description="Business processes, approval chains, escalation paths, and decision points encoded for agent consumption."
          />
        </div>
        <div className="mt-8">
          <Link
            href="/org-graph"
            className="text-sm font-medium text-brand-400 hover:text-brand-300 transition-colors"
          >
            Learn about Org-Graph &rarr;
          </Link>
        </div>
      </Section>

      {/* Atlas */}
      <Section>
        <SectionHeader
          badge="Atlas Platform UI"
          title="See everything. Control everything."
          description="Atlas is the visual and operational interface to StratafAI. Where agents, org structures, workflows, metrics, and decision traces converge in a single pane of glass."
          centered={false}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card title="Dashboards" description="Real-time views of agent performance, costs, outcomes, and system health." />
          <Card title="Agent Maps" description="Visual topology of your agent ecosystem. See dependencies, data flows, and orchestration patterns." />
          <Card title="Decision Traces" description="Step-by-step replay of agent reasoning, tool calls, and outcomes." />
          <Card title="Scorecards" description="Track business outcomes tied to agent performance. ROI, accuracy, throughput, and satisfaction." />
        </div>
        <div className="mt-8">
          <Link
            href="/atlas"
            className="text-sm font-medium text-brand-400 hover:text-brand-300 transition-colors"
          >
            Explore Atlas &rarr;
          </Link>
        </div>
      </Section>

      <CTA />
    </>
  );
}
