import { ReactNode } from "react";

interface CardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function Card({ icon, title, description, className = "" }: CardProps) {
  return (
    <div
      className={`gradient-border rounded-xl bg-surface-900/50 p-6 lg:p-8 hover:bg-surface-900/80 transition-colors ${className}`}
    >
      {icon && (
        <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-500/10 text-brand-400">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-surface-400 leading-relaxed text-sm">{description}</p>
    </div>
  );
}
