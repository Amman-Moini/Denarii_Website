// src/app/portfolio/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import { PORTFOLIO_ITEMS } from "@/lib/portfolio-data";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { Button } from "@/components/ui/button";

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const item = PORTFOLIO_ITEMS.find((p) => p.id === params.slug);

  if (!item) {
    notFound();
  }

  return (
    <SectionWrapper className="py-12 md:py-20">
      <div className="max-w-4xl mx-auto text-white">
        <p className="text-lg font-semibold text-purple-400 mb-2">{item.category} Case Study</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-8">{item.name}</h1>
        
        <div className="relative w-full h-56 md:h-96 mb-8 rounded-lg overflow-hidden shadow-lg shadow-purple-900/20">
          <Image src={item.imageUrl} alt={item.name} fill className="object-cover" />
        </div>

        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
          {item.description}
        </p>

        {item.metrics && item.metrics.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {item.metrics.map((metric) => (
              <div key={metric.label} className="bg-gray-900/50 p-6 rounded-lg border border-purple-800/50">
                <p className="text-3xl font-bold text-purple-400">{metric.value}</p>
                <p className="text-sm text-gray-400 uppercase tracking-wider">{metric.label}</p>
              </div>
            ))}
          </div>
        )}

        <div className="prose prose-invert lg:prose-xl max-w-none text-gray-300">
          <h2 className="text-3xl font-bold mt-12 mb-4 text-white">Our Approach</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        
        {item.websiteLink && (
          <div className="mt-12">
             <Button asChild>
                <a href={item.websiteLink} target="_blank" rel="noopener noreferrer">
                    Visit Project Website
                </a>
             </Button>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}