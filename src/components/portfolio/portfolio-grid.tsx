// src/components/portfolio/portfolio-grid.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_ITEMS } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.95, y: -10, transition: { duration: 0.3, ease: "easeIn" } },
};

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(PORTFOLIO_ITEMS.map(item => item.category)))];

  const filteredItems = activeCategory === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map(category => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => setActiveCategory(category)}
            className="px-6 py-2 rounded-full transition-all duration-200"
          >
            {category}
          </Button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredItems.map(item => (
            <motion.div layout key={item.id} variants={itemVariants} initial="hidden" animate="visible" exit="exit">
              <Card className="overflow-hidden bg-card/50 backdrop-blur border-primary/10 hover:border-primary/20 transition-all duration-300 h-full flex flex-col group">
                <div className="relative w-full h-48">
                  <Image src={item.imageUrl} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <CardHeader className="flex-grow">
                  <p className="text-sm font-semibold text-purple-400 mb-1">{item.category}</p>
                  <CardTitle className="text-xl">{item.name}</CardTitle>
                  <p className="text-sm text-gray-400 mt-2 line-clamp-3">{item.description}</p>
                </CardHeader>
                <CardContent className="p-6 pt-0 mt-auto">
                  {item.metrics && item.metrics.length > 0 && (
                    <div className="grid grid-cols-2 gap-4 my-4">
                      {item.metrics.map(metric => (
                        <div key={metric.label} className="text-center bg-gray-900/50 p-2 rounded-md">
                          <p className="text-lg font-bold text-purple-300">{metric.value}</p>
                          <p className="text-xs text-gray-400 uppercase tracking-wider">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.caseStudyLink && (
                      <Button asChild size="sm" className="flex-1">
                        <Link href={item.caseStudyLink}>Case Study <ArrowRight className="ml-2 h-4 w-4" /></Link>
                      </Button>
                    )}
                    {item.websiteLink && (
                      <Button variant="outline" asChild size="sm" className="flex-1">
                        <a href={item.websiteLink} target="_blank" rel="noopener noreferrer">Visit Site</a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}