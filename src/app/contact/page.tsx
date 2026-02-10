import { Section } from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — StratafAI",
  description:
    "Book a strategy session, talk to an architect, or explore a pilot with StratafAI.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/3 left-1/2 w-[400px] h-[400px] bg-brand-500/5 rounded-full blur-[100px]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block mb-4 px-3 py-1 text-xs font-medium text-brand-400 bg-brand-500/10 border border-brand-500/20 rounded-full uppercase tracking-wider">
            Contact
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Let&apos;s build something real.
          </h1>
          <p className="text-xl text-surface-300 max-w-3xl leading-relaxed">
            Whether you are exploring a first agent system or scaling across the
            enterprise, we would like to hear about your challenge.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Options */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Ways to engage
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Book a Strategy Session",
                    desc: "A focused conversation about your organization's AI challenges, readiness, and the path from experiments to production systems.",
                  },
                  {
                    title: "Talk to an Architect",
                    desc: "Technical deep dive into agent architecture, control plane design, or platform integration. Bring your hardest questions.",
                  },
                  {
                    title: "Explore a Pilot",
                    desc: "Scope a focused pilot to demonstrate value with a specific use case in your organization.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="gradient-border rounded-xl bg-surface-900/50 p-6"
                  >
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-surface-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="gradient-border rounded-xl bg-surface-900/50 p-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              Get in touch
            </h2>
            <form className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-surface-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-surface-950 border border-white/10 rounded-lg text-white placeholder-surface-500 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/50 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-surface-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-surface-950 border border-white/10 rounded-lg text-white placeholder-surface-500 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/50 transition-colors"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-surface-300 mb-2"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 bg-surface-950 border border-white/10 rounded-lg text-white placeholder-surface-500 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/50 transition-colors"
                  placeholder="Your company"
                />
              </div>
              <div>
                <label
                  htmlFor="interest"
                  className="block text-sm font-medium text-surface-300 mb-2"
                >
                  I&apos;m interested in
                </label>
                <select
                  id="interest"
                  name="interest"
                  className="w-full px-4 py-3 bg-surface-950 border border-white/10 rounded-lg text-white focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/50 transition-colors"
                >
                  <option value="">Select an option</option>
                  <option value="strategy">Strategy Session</option>
                  <option value="architecture">Architecture Deep Dive</option>
                  <option value="pilot">Pilot Exploration</option>
                  <option value="platform">Platform Demo</option>
                  <option value="other">Something Else</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-surface-300 mb-2"
                >
                  Tell us about your challenge
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-surface-950 border border-white/10 rounded-lg text-white placeholder-surface-500 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/50 transition-colors resize-none"
                  placeholder="What are you trying to solve?"
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 text-sm font-medium text-white bg-brand-600 hover:bg-brand-500 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
}
