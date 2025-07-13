// src/app/portfolio/page.tsx
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";
import { SectionWrapper } from "@/components/common/section-wrapper";

export default function PortfolioPage() {
  return (
    <SectionWrapper>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 mb-4">
          Our Portfolio
        </h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          A showcase of the innovative Web3 ventures we've accelerated and advised.
        </p>
      </div>
      <PortfolioGrid />
    </SectionWrapper>
  );
}