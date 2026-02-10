import { Section, SectionHeader } from "@/components/Section";
import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atlas Platform — StratafAI",
  description:
    "The visual and operational interface to StratafAI. Where agents, org structures, workflows, metrics, and decision traces converge.",
};

export default function AtlasPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/4 right-1/3 w-[400px] h-[400px] bg-brand-500/5 rounded-full blur-[100px]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block mb-4 px-3 py-1 text-xs font-medium text-brand-400 bg-brand-500/10 border border-brand-500/20 rounded-full uppercase tracking-wider">
            Platform Interface
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Atlas
          </h1>
          <p className="text-xl text-surface-300 max-w-3xl leading-relaxed">
            The visual and operational interface to StratafAI. Atlas is where
            agents, org structures, workflows, metrics, and decision traces
            converge — giving you a single pane of glass for your entire AI
            operation.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <Section>
        <SectionHeader
          badge="Capabilities"
          title="See everything. Control everything."
        />
        <div className="grid md:grid-cols-2 gap-6">
          <div className="gradient-border rounded-xl bg-surface-900/50 p-8">
            <h3 className="text-xl font-semibold text-white mb-3">
              Dashboards
            </h3>
            <p className="text-surface-400 leading-relaxed mb-4">
              Real-time operational dashboards showing agent performance, cost
              trends, system health, and business outcomes. Customizable views
              for operators, executives, and platform teams.
            </p>
            <ul className="space-y-2 text-sm text-surface-400">
              <li className="flex items-start gap-2">
                <span className="text-brand-400 mt-0.5">&#9654;</span>
                Agent performance and throughput metrics
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-400 mt-0.5">&#9654;</span>
                Cost tracking and budget consumption
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-400 mt-0.5">&#9654;</span>
                Error rates, drift indicators, and alerts
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-400 mt-0.5">&#9654;</span>
                Business outcome scorecards
              </li>
            </ul>
          </div>

          <div className="gradient-border rounded-xl bg-surface-900/50 p-8">
            <h3 className="text-xl font-semibold text-white mb-3">
              Agent Maps
            </h3>
            <p className="text-surface-400 leading-relaxed mb-4">
              Visual topology of your agent ecosystem. See how agents connect,
              what tools they use, how data flows between them, and where
              orchestration patterns emerge.
            </p>
            <ul className="space-y-2 text-sm text-surface-400">
              <li className="flex items-start gap-2">
                <span className="text-brand-400 mt-0.5">&#9654;</span>
                Agent dependency graphs
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-400 mt-0.5">&#9654;</span>
                Data flow visualization
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-400 mt-0.5">&#9654;</span>
                Tool and API connection maps
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-400 mt-0.5">&#9654;</span>
                Orchestration pattern views
              </li>
            </ul>
          </div>

          <div className="gradient-border rounded-xl bg-surface-900/50 p-8">
            <h3 className="text-xl font-semibold text-white mb-3">
              Decision Traces
            </h3>
            <p className="text-surface-400 leading-relaxed mb-4">
              Step-by-step replay of agent reasoning. See what context was used,
              what tools were called, what decisions were made, and what outcomes
              were produced.
            </p>
            <ul className="space-y-2 text-sm text-surface-400">
              <li className="flex items-start gap-2">
                <span className="text-brand-400 mt-0.5">&#9654;</span>
                Full reasoning chain visualization
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-400 mt-0.5">&#9654;</span>
                Context composition breakdown
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-400 mt-0.5">&#9654;</span>
                Tool call sequences and responses
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-400 mt-0.5">&#9654;</span>
                Outcome and confidence scoring
              </li>
            </ul>
          </div>

          <div className="gradient-border rounded-xl bg-surface-900/50 p-8">
            <h3 className="text-xl font-semibold text-white mb-3">
              Context Flows
            </h3>
            <p className="text-surface-400 leading-relaxed mb-4">
              Visualize how context is assembled, prioritized, and consumed.
              Understand what information agents work with and how context
              quality affects outcomes.
            </p>
            <ul className="space-y-2 text-sm text-surface-400">
              <li className="flex items-start gap-2">
                <span className="text-brand-400 mt-0.5">&#9654;</span>
                Context source mapping
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-400 mt-0.5">&#9654;</span>
                Priority and relevance scoring
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-400 mt-0.5">&#9654;</span>
                Window utilization metrics
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-400 mt-0.5">&#9654;</span>
                Context quality indicators
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Scorecards */}
      <Section dark>
        <SectionHeader
          badge="Scorecards & Outcomes"
          title="Tie agent performance to business results."
          description="Atlas scorecards connect agent metrics to the outcomes that matter. Track ROI, accuracy, throughput, user satisfaction, and process efficiency in one place."
        />
        <div className="grid md:grid-cols-4 gap-6">
          <Card title="ROI Tracking" description="Measure the business value of each agent system against its cost of operation." />
          <Card title="Accuracy Metrics" description="Track correctness, hallucination rates, and output quality over time." />
          <Card title="Throughput" description="Volume of tasks processed, latency distributions, and capacity utilization." />
          <Card title="Satisfaction" description="User feedback, escalation rates, and human override frequency as quality signals." />
        </div>
      </Section>

      <CTA
        title="See your AI operation clearly."
        description="Book a demo of Atlas and see how operational visibility transforms agent management."
        primaryLabel="Book a Demo"
      />
    </>
  );
}
