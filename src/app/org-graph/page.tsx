import { Section, SectionHeader } from "@/components/Section";
import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Org-Graph — StratafAI",
  description:
    "A structured representation of your organization as machine-readable context. Roles, workflows, KPIs, data ownership, and decision authority — grounding AI agents in organizational reality.",
};

export default function OrgGraphPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block mb-4 px-3 py-1 text-xs font-medium text-brand-400 bg-brand-500/10 border border-brand-500/20 rounded-full uppercase tracking-wider">
            Research-Informed Capability
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Org-Graph
          </h1>
          <p className="text-xl text-surface-300 max-w-3xl leading-relaxed">
            Your organization as machine-readable context. A structured
            representation of roles, teams, workflows, KPIs, data ownership, and
            decision authority — the foundation for agents that understand your
            business.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <Section>
        <SectionHeader
          badge="The Problem"
          title="Flat prompts fail in complex organizations."
          description="AI agents operating without organizational context produce generic, misaligned, and often dangerous outputs. They don't know who owns the data, who approves the decision, or what the actual workflow is."
        />
        <div className="grid md:grid-cols-3 gap-6">
          <Card
            title="No Role Awareness"
            description="Agents don't know who they're serving, what that person's authority is, or what information they should and shouldn't access."
          />
          <Card
            title="No Process Context"
            description="Without workflow knowledge, agents skip steps, bypass approvals, and produce outputs that don't fit the actual business process."
          />
          <Card
            title="No Accountability Mapping"
            description="When something goes wrong, there's no way to trace the decision back to organizational roles, policies, or data ownership."
          />
        </div>
      </Section>

      {/* What Org-Graph Is */}
      <Section dark>
        <SectionHeader
          badge="What It Is"
          title="Your organization, structured for AI."
        />
        <div className="grid md:grid-cols-2 gap-6">
          <Card
            title="Roles & Teams"
            description="Structured representation of who does what, reporting lines, team composition, and cross-functional relationships."
          />
          <Card
            title="Workflows & Processes"
            description="Business processes, approval chains, escalation paths, and handoff points encoded as traversable graphs."
          />
          <Card
            title="KPIs & Objectives"
            description="What success looks like for each role, team, and process. Agents optimize toward real business outcomes."
          />
          <Card
            title="Data Ownership"
            description="Who owns what data, who can access it, and under what conditions. Critical for governing agent behavior."
          />
          <Card
            title="Decision Authority"
            description="Who can approve what. Budget thresholds, signing authority, and escalation triggers mapped to the org structure."
          />
          <Card
            title="Incentive Structures"
            description="How people and teams are measured. Agents understand the motivations and constraints of the humans they serve."
          />
        </div>
      </Section>

      {/* How It Helps */}
      <Section>
        <SectionHeader
          badge="Outcomes"
          title="What Org-Graph makes possible."
        />
        <div className="grid md:grid-cols-3 gap-6">
          <Card
            title="Improved Accuracy"
            description="Agents grounded in organizational structure produce outputs that are relevant, properly scoped, and aligned with real workflows."
          />
          <Card
            title="Enhanced Safety"
            description="Data access, action scope, and decision authority are enforced based on organizational reality, not just static rules."
          />
          <Card
            title="Contextual Relevance"
            description="Every agent interaction is shaped by who's asking, what they need, and where it fits in the organizational picture."
          />
        </div>
      </Section>

      {/* Research Foundation */}
      <Section dark>
        <div className="max-w-3xl">
          <span className="inline-block mb-4 px-3 py-1 text-xs font-medium text-brand-400 bg-brand-500/10 border border-brand-500/20 rounded-full uppercase tracking-wider">
            Research Foundation
          </span>
          <h2 className="text-3xl font-bold text-white mb-4">
            Built on organizational theory, not just engineering intuition.
          </h2>
          <p className="text-lg text-surface-400 leading-relaxed mb-6">
            Org-Graph draws from decades of organizational design research,
            decision theory, and systems thinking. We model organizations as
            information-processing systems — because that is what they are, and
            that is what agents need to understand.
          </p>
          <p className="text-surface-400 leading-relaxed">
            This is not a fancy org chart. It is a computationally useful
            representation of how your organization actually works: how
            decisions flow, where authority lives, what data matters, and how
            people and processes connect.
          </p>
        </div>
      </Section>

      <CTA
        title="Ground your agents in organizational reality."
        description="Learn how Org-Graph can make your AI systems smarter, safer, and more aligned with how your organization actually works."
        primaryLabel="Explore a Pilot"
      />
    </>
  );
}
