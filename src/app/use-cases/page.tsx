import { Section, SectionHeader } from "@/components/Section";
import { CTA } from "@/components/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Use Cases — StratafAI",
  description:
    "See how StratafAI's agent platform solves real enterprise problems — from knowledge assistants to AI-powered PMOs, sales enablement, and internal platform copilots.",
};

const useCases = [
  {
    badge: "Knowledge & Research",
    title: "Enterprise Knowledge Assistants",
    problem:
      "Critical knowledge is scattered across wikis, docs, Slack threads, and people's heads. Employees waste hours searching for answers. New hires take months to get productive.",
    solution:
      "Deploy knowledge agents grounded in your Org-Graph that understand who knows what, which documents are authoritative, and how information flows through your organization. Agents compose answers from multiple sources with citations, access controls, and freshness awareness.",
    outcomes: [
      "Faster time-to-answer for complex organizational questions",
      "Reduced knowledge loss from attrition",
      "Access-controlled responses based on role and clearance",
      "Continuous improvement as the knowledge base evolves",
    ],
  },
  {
    badge: "Delivery & Operations",
    title: "AI-Powered PMO & Delivery Copilots",
    problem:
      "Project management is drowning in status updates, risk tracking, and dependency management. PMs spend more time reporting than managing. Risks surface too late.",
    solution:
      "Deploy delivery agents that monitor project health, surface risks proactively, draft status updates from real data, and track dependencies across teams. Integrated with your Org-Graph for proper escalation routing and authority mapping.",
    outcomes: [
      "Automated status aggregation from real project data",
      "Early risk and dependency identification",
      "Proper escalation routing based on organizational authority",
      "PM time recovered for actual leadership and decision-making",
    ],
  },
  {
    badge: "Revenue & Growth",
    title: "Sales & Revenue Enablement Agents",
    problem:
      "Sales teams juggle CRM data, competitive intelligence, proposal templates, and pricing models. Research takes hours. Proposals are inconsistent. Institutional knowledge walks out the door with every rep.",
    solution:
      "Deploy revenue agents that research prospects, assemble competitive intelligence, draft personalized proposals, and maintain institutional sales knowledge. Governed by the Control Plane to ensure pricing accuracy and compliance.",
    outcomes: [
      "Faster deal research and proposal generation",
      "Consistent messaging and pricing across the team",
      "Preserved institutional sales knowledge",
      "Compliance-governed outputs for regulated industries",
    ],
  },
  {
    badge: "Analytics & Insights",
    title: "Analytics & Insight Agents",
    problem:
      "Business users need data-driven answers but can't write SQL. Analysts are backlogged. Self-service BI tools are underutilized because they're too complex.",
    solution:
      "Deploy analytics agents that translate natural language questions into data queries, validate results against known business logic, and present insights with context. Org-Graph integration ensures users only see data they're authorized to access.",
    outcomes: [
      "Natural language access to business data",
      "Results validated against business rules and known metrics",
      "Role-based data access enforcement",
      "Analyst time freed for higher-value strategic work",
    ],
  },
  {
    badge: "Platform & Engineering",
    title: "Internal Platform Copilots",
    problem:
      "Engineering, data, and operations teams maintain complex internal platforms. Onboarding is slow. Documentation is outdated. Tribal knowledge creates bottlenecks.",
    solution:
      "Deploy platform copilots that help teams navigate internal tools, debug common issues, generate boilerplate, and maintain documentation. Agents understand the platform architecture through Org-Graph modeling of systems and ownership.",
    outcomes: [
      "Faster developer and operator onboarding",
      "Reduced support burden on platform teams",
      "Living documentation that stays current",
      "System-aware assistance that understands your architecture",
    ],
  },
];

export default function UseCasesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block mb-4 px-3 py-1 text-xs font-medium text-brand-400 bg-brand-500/10 border border-brand-500/20 rounded-full uppercase tracking-wider">
            Use Cases
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Where agents create value.
          </h1>
          <p className="text-xl text-surface-300 max-w-3xl leading-relaxed">
            Real problems. Agent-based solutions. Measurable outcomes. Here is
            how organizations use StratafAI to move from experiments to
            production AI systems.
          </p>
        </div>
      </section>

      {/* Use Cases */}
      {useCases.map((uc, i) => (
        <Section key={uc.title} dark={i % 2 === 1}>
          <div className="max-w-4xl">
            <span className="inline-block mb-4 px-3 py-1 text-xs font-medium text-brand-400 bg-brand-500/10 border border-brand-500/20 rounded-full uppercase tracking-wider">
              {uc.badge}
            </span>
            <h2 className="text-3xl font-bold text-white mb-8">{uc.title}</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-medium text-surface-500 uppercase tracking-wider mb-3">
                  The Problem
                </h3>
                <p className="text-surface-300 leading-relaxed">{uc.problem}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-surface-500 uppercase tracking-wider mb-3">
                  Agent-Based Solution
                </h3>
                <p className="text-surface-300 leading-relaxed">
                  {uc.solution}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-surface-500 uppercase tracking-wider mb-3">
                  Outcomes
                </h3>
                <ul className="space-y-2">
                  {uc.outcomes.map((outcome, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-surface-300"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>
      ))}

      <CTA
        title="See your use case here?"
        description="Talk to our team about building governed agent systems for your specific challenge."
        primaryLabel="Explore a Pilot"
      />
    </>
  );
}
