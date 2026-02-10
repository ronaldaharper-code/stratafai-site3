import { Section, SectionHeader } from "@/components/Section";
import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research — StratafAI",
  description:
    "StratafAI's research program covers Org-Graph theory, agent control systems, context engineering, and the Atlas experimental platform.",
};

export default function ResearchPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block mb-4 px-3 py-1 text-xs font-medium text-brand-400 bg-brand-500/10 border border-brand-500/20 rounded-full uppercase tracking-wider">
            Research
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Research that ships.
          </h1>
          <p className="text-xl text-surface-300 max-w-3xl leading-relaxed">
            Our research program exists to solve hard problems in enterprise AI
            — and to feed those solutions directly into production systems. This
            is not academic publishing for its own sake. Every research question
            we pursue has a path to the platform.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <Section>
        <div className="max-w-3xl">
          <SectionHeader
            badge="Philosophy"
            title="Why research matters now."
            centered={false}
          />
          <div className="space-y-4 text-surface-400 leading-relaxed">
            <p>
              The gap between what AI models can do and what organizations can
              safely deploy is widening. Models get more capable every quarter.
              The systems to govern, ground, and operate those models are barely
              being built.
            </p>
            <p>
              StratafAI invests in research because the hardest problems in
              enterprise AI are not model problems. They are systems problems,
              organizational problems, and governance problems. These require
              rigorous thinking, not just engineering.
            </p>
            <p>
              Every research area directly informs our platform capabilities.
              Org-Graph theory drives our context layer. Agent control systems
              research drives our governance tools. Context engineering research
              drives how we manage the scarcest resource in AI.
            </p>
          </div>
        </div>
      </Section>

      {/* Research Area 1: Org-Graph Theory */}
      <Section dark>
        <SectionHeader
          badge="Research Area"
          title="Org-Graph Theory"
          description="Organizational structure as machine-readable context. How do you represent the complexity of a real organization in a form that AI agents can consume, reason about, and act within?"
          centered={false}
        />
        <div className="grid md:grid-cols-2 gap-6">
          <Card
            title="Organizational Modeling"
            description="Formal representations of roles, teams, reporting structures, and cross-functional relationships as computationally useful graphs."
          />
          <Card
            title="Decision Rights & Authority"
            description="Modeling who can decide what, budget thresholds, approval chains, and escalation triggers as traversable structures."
          />
          <Card
            title="Incentive & Accountability Mapping"
            description="How measurement, incentives, and accountability structures shape behavior — and how agents should account for them."
          />
          <Card
            title="Dynamic Organizational Context"
            description="Organizations change. Research into how Org-Graph representations stay current as teams shift, roles evolve, and processes adapt."
          />
        </div>
      </Section>

      {/* Research Area 2: Agent Control Systems */}
      <Section>
        <SectionHeader
          badge="Research Area"
          title="Agent Control Systems"
          description="How do you govern AI agents that reason, act, and operate autonomously? The control problem is not theoretical — it is an engineering problem that organizations face today."
          centered={false}
        />
        <div className="grid md:grid-cols-2 gap-6">
          <Card
            title="Runtime Governance"
            description="Real-time policy enforcement during agent execution. How to constrain without crippling. How to govern without creating bottlenecks."
          />
          <Card
            title="Policy Engines"
            description="Declarative policy languages for agent behavior. Defining what agents can do, when, and under what conditions."
          />
          <Card
            title="Drift Detection"
            description="Identifying when agent behavior deviates from expected baselines. Silent degradation is the primary risk of production agent systems."
          />
          <Card
            title="Cost/Benefit Optimization"
            description="Balancing agent capability against resource consumption. Token economics, latency trade-offs, and value-per-interaction analysis."
          />
        </div>
      </Section>

      {/* Research Area 3: Context Engineering */}
      <Section dark>
        <SectionHeader
          badge="Research Area"
          title="Context Engineering"
          description="Context windows are the scarcest resource in AI. How you compose, prioritize, and manage context determines the quality of everything an agent does."
          centered={false}
        />
        <div className="grid md:grid-cols-3 gap-6">
          <Card
            title="Context as Scarce Resource"
            description="Token limits create hard constraints. Research into optimal allocation, priority ranking, and dynamic context budgeting."
          />
          <Card
            title="Context Composition"
            description="Assembling the right context from multiple sources — organizational data, task state, user history, domain knowledge — in the right proportions."
          />
          <Card
            title="Organizational vs. Task Context"
            description="Balancing stable organizational context with dynamic task-specific context. How to ground agents without consuming their entire window."
          />
        </div>
      </Section>

      {/* Research Area 4: Atlas Experiments */}
      <Section>
        <SectionHeader
          badge="Research Area"
          title="Atlas Experiments"
          description="Atlas is not just our platform UI — it is our primary experimental environment. We build, test, and iterate on ideas here before they become production features."
          centered={false}
        />
        <div className="grid md:grid-cols-3 gap-6">
          <Card
            title="Prototypes"
            description="Experimental agent interfaces, visualization approaches, and interaction patterns. Not everything ships. Everything teaches."
          />
          <Card
            title="Internal Tools"
            description="Tools we build for ourselves that often become tools for customers. Dogfooding as a research methodology."
          />
          <Card
            title="Open Questions"
            description="The problems we haven't solved yet. Published for transparency and to invite collaboration from the community."
          />
        </div>
      </Section>

      <CTA
        title="Interested in our research?"
        description="We publish findings, share prototypes, and engage with collaborators. Get in touch if our research areas overlap with your challenges."
        primaryLabel="Talk to the Research Team"
      />
    </>
  );
}
