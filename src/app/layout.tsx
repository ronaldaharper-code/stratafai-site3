import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "StratafAI — The Control Plane for Enterprise AI",
  description:
    "Design, govern, and scale AI agents safely. StratafAI combines agent orchestration, context intelligence, and organizational graph modeling to make AI reliable, auditable, and scalable.",
  keywords: [
    "enterprise AI",
    "AI agents",
    "agent orchestration",
    "AI governance",
    "control plane",
    "org-graph",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
