import { Section, SectionHeader } from "@/components/Section";
import { CTA } from "@/components/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — StratafAI",
  description:
    "StratafAI is a founder-led, research-driven AI platform company. We believe in systems over prompts, governance over speed, and outcomes over demos.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block mb-4 px-3 py-1 text-xs font-medium text-brand-400 bg-brand-500/10 border border-brand-500/20 rounded-full uppercase tracking-wider">
            About
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Systems over prompts.
          </h1>
          <p className="text-xl text-surface-300 max-w-3xl leading-relaxed">
            StratafAI exists because the hardest problems in enterprise AI are
            not model problems. They are systems problems, organizational
            problems, and governance problems.
          </p>
        </div>
      </section>

      {/* Mission */}
      <Section>
        <div className="max-w-3xl">
          <SectionHeader
            badge="Mission"
            title="Make AI agents production-grade."
            centered={false}
          />
          <div className="space-y-4 text-surface-400 leading-relaxed">
            <p>
              Every organization is experimenting with AI. Few are operating AI
              systems. The gap between a working demo and a production system
              is enormous — and it is not a gap that better models will close.
            </p>
            <p>
              StratafAI bridges that gap with platform infrastructure,
              governance frameworks, and organizational intelligence that make
              AI agents reliable, auditable, and scalable. We help organizations
              move from isolated experiments to governed, production-grade agent
              systems.
            </p>
          </div>
        </div>
      </Section>

      {/* Philosophy */}
      <Section dark>
        <SectionHeader
          badge="Philosophy"
          title="What we believe."
        />
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              title: "Systems, not prompts",
              desc: "Prompt engineering is necessary but insufficient. Production AI requires systems thinking — architecture, governance, observability, and lifecycle management.",
            },
            {
              title: "Governance is a feature",
              desc: "Control, auditability, and policy enforcement are not overhead. They are what make AI agents enterprise-ready. Governance enables speed, not the opposite.",
            },
            {
              title: "Organizational context matters",
              desc: "AI agents that ignore organizational structure produce generic, misaligned, and often dangerous outputs. Context grounded in real org structure changes everything.",
            },
            {
              title: "Research feeds production",
              desc: "We invest in research because the hardest problems are unsolved. But every research question we pursue has a path to the platform. Theory without shipping is a hobby.",
            },
            {
              title: "Agents are systems, not magic",
              desc: "We treat AI agents as engineering artifacts — things to be designed, tested, governed, monitored, and improved. Not black boxes to be hoped at.",
            },
            {
              title: "Long-term thinking",
              desc: "We are building infrastructure for the next decade of enterprise AI. This means making architectural decisions that compound, not quick wins that create debt.",
            },
          ].map((item) => (
            <div key={item.title} className="space-y-2">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-surface-400 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Founder-Led */}
      <Section>
        <div className="max-w-3xl">
          <SectionHeader
            badge="Team"
            title="Founder-led. Research-driven."
            centered={false}
          />
          <div className="space-y-4 text-surface-400 leading-relaxed">
            <p>
              StratafAI is a founder-led company built at the intersection of
              enterprise AI, organizational design, and systems architecture.
              We bring experience from building and scaling AI systems at
              enterprise scale — and a conviction that the current approach to
              deploying AI agents is not sustainable.
            </p>
            <p>
              Our team combines deep technical expertise in AI/ML systems with
              practical experience in enterprise transformation, organizational
              design, and platform engineering. We have built production systems,
              managed large-scale deployments, and seen firsthand what works and
              what fails when organizations try to operationalize AI.
            </p>
          </div>
        </div>
      </Section>

      {/* Vision */}
      <Section dark>
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader
            badge="Vision"
            title="The long-term platform."
          />
          <p className="text-surface-400 leading-relaxed">
            We are building toward a future where every organization has a
            governed, observable, and continuously improving AI operating system.
            Where agents are first-class citizens of the enterprise — with the
            same rigor, accountability, and lifecycle management we apply to
            every other critical system. StratafAI is the platform that makes
            this possible.
          </p>
        </div>
      </Section>

      <CTA
        title="Want to work with us?"
        description="We're building the control plane for enterprise AI. If that resonates, let's talk."
        primaryLabel="Get in Touch"
      />
    </>
  );
}
