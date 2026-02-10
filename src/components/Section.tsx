import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export function Section({ children, className = "", id, dark }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-24 lg:py-32 ${dark ? "bg-surface-900/50" : ""} ${className}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({
  badge,
  title,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-16`}>
      {badge && (
        <span className="inline-block mb-4 px-3 py-1 text-xs font-medium text-brand-400 bg-brand-500/10 border border-brand-500/20 rounded-full uppercase tracking-wider">
          {badge}
        </span>
      )}
      <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-surface-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
