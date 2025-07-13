"use client";

import {
  ArrowRight,
  Lightbulb,
  CheckCircle,
  Milestone,
  FileText,
  ShieldCheck,
  TrendingUp,
  Users,
  BarChart3,
  Network,
  Zap,
  Building,
  Plus,
  ChevronDown,
  Layers,
  Circle,
  Triangle,
  PenLine,
  MessageCircle,
  Calculator,
} from "lucide-react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { CtaButton } from "@/components/common/cta-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";

const services = [
  {
    icon: Lightbulb,
    title: "Tokenomics Design & Strategy",
    description:
      "Crafting sustainable token economies tailored to your project's goals, including supply, distribution, utility, and governance mechanisms.",
  },
  {
    icon: FileText,
    title: "Whitepaper & Litepaper Review",
    description:
      "In-depth analysis and feedback on your project's foundational documents to ensure clarity, coherence, and robustness.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Risk Assessment",
    description:
      "Identifying potential vulnerabilities in your token model and economic design to safeguard against exploits and ensure long-term stability.",
  },
  {
    icon: TrendingUp,
    title: "Incentive Mechanism Design",
    description:
      "Developing effective incentive structures to drive user adoption, network participation, and value accrual for your token holders.",
  },
];

// Placeholder timeline steps for Pre-TGE and Post-TGE
const preTgeTimeline = [
  {
    id: 1,
    icon: Milestone,
    title: "Project Audit",
    description: "Review stakeholders, market, and align on TGE goals.",
  },
  {
    id: 2,
    icon: Users,
    title: "Token Strategy Design",
    description: "Define token utility, incentives, and value alignment.",
  },
  {
    id: 3,
    icon: Lightbulb,
    title: "Partnership Foundations",
    description: "Begin key ecosystem, exchange, and investor outreach.",
  },
  {
    id: 4,
    icon: FileText,
    title: "Modeling & Documentation",
    description: "Finalize tokenomics, unlocks, and technical docs.",
  },
  {
    id: 5,
    icon: CheckCircle,
    title: "Launch Preparation",
    description: "Execute GTM plans, vesting logistics, and creatives.",
  },
];

const postTgeTimeline = [
  {
    id: 1,
    icon: Milestone,
    title: "Post-TGE Audit",
    description: "Comprehensive post-launch review and alignment.",
  },
  {
    id: 2,
    icon: Users,
    title: "Community & Content Strategy",
    description: "Plan engagement and refine token messaging.",
  },
  {
    id: 3,
    icon: Lightbulb,
    title: "Campaign Execution",
    description: "Deploy incentives and launch token marketing.",
  },
  {
    id: 4,
    icon: FileText,
    title: "Liquidity & Market Activity",
    description: "Manage listings, market entries, and OTC deals.",
  },
  {
    id: 5,
    icon: CheckCircle,
    title: "Community Engagement & Scaling",
    description: "Grow awareness and sustain momentum post-launch.",
  },
];

export default function ConsultingPage() {
  // State for expanded cards
  const [expandedCards, setExpandedCards] = useState<{
    [key: string]: boolean;
  }>({
    tokenDesign: false,
    growthVolume: false,
    brandContent: false,
    financialManagement: false,
  });

  // State for expanded timeline step
  const [expandedTimelineStep, setExpandedTimelineStep] = useState<
    number | null
  >(null);

  // State for timeline toggle
  const [timelineType, setTimelineType] = useState<"pre" | "post">("pre");

  // Toggle card expansion
  const toggleCard = (cardId: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));
  };

  const handleExpandTimelineStep = (stepId: number) => {
    setExpandedTimelineStep(expandedTimelineStep === stepId ? null : stepId);
  };

  // Choose timeline steps based on toggle
  const timelineSteps =
    timelineType === "pre" ? preTgeTimeline : postTgeTimeline;

  return (
    <>
      {/* Split-Section Intro */}
      <section className="py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="flex flex-col justify-center max-w-xl mx-auto lg:mx-0">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-8">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-600 animate-sparkle">
                  Tokenomics Consulting Services
                </span>
              </h1>
              <ul className="space-y-6 mb-4">
                <li className="flex items-start gap-4 group transition-all duration-300 cursor-pointer">
                  <div className="rounded-full bg-purple-600/20 p-1.5 mt-1.5 group-hover:bg-purple-600/40 group-hover:scale-110 transition-all duration-300">
                    <CheckCircle className="h-6 w-6 text-purple-400 group-hover:text-purple-300" />
                  </div>
                  <span className="text-xl md:text-2xl text-gray-300 font-medium leading-tight group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                    Customized tokenomics designs tailored to your project's
                    unique goals
                  </span>
                </li>
                <li className="flex items-start gap-4 group transition-all duration-300 cursor-pointer">
                  <div className="rounded-full bg-purple-600/20 p-1.5 mt-1.5 group-hover:bg-purple-600/40 group-hover:scale-110 transition-all duration-300">
                    <CheckCircle className="h-6 w-6 text-purple-400 group-hover:text-purple-300" />
                  </div>
                 <span className="text-xl md:text-2xl text-gray-300 font-medium leading-tight group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                    Strategic expertise from Web3 veterans with proven success
                  </span>
                </li>
                <li className="flex items-start gap-4 group transition-all duration-300 cursor-pointer">
                  <div className="rounded-full bg-purple-600/20 p-1.5 mt-1.5 group-hover:bg-purple-600/40 group-hover:scale-110 transition-all duration-300">
                    <CheckCircle className="h-6 w-6 text-purple-400 group-hover:text-purple-300" />
                  </div>
                  <span className="text-xl md:text-2xl text-gray-300 font-medium leading-tight group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                    Sustainable frameworks that drive long-term value and
                    adoption
                  </span>
                </li>
              </ul>
              <div className="mt-8">
                <Button
                  className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold hover:scale-110 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 text-xl py-8 px-10 min-w-[240px]"
                  size="lg"
                  asChild
                >
                  <Link
                    href="#contact"
                    className="flex items-center justify-center gap-3"
                  >
                    <Lightbulb className="h-6 w-6" />
                    Book a Consultation
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Column - Tokenomics Illustration */}
            <div className="p-8 bg-transparent">
              <div className="aspect-square relative flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Central token circle - increased size */}
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-purple-900/80 to-indigo-900/80 flex items-center justify-center z-20 shadow-lg shadow-purple-900/30 animate-[pulse_8s_ease-in-out_infinite]">
                    <span className="text-4xl font-bold text-white">TOKEN</span>
                  </div>

                  {/* Connecting lines and orbit */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Static connecting lines to corners */}
                    <div className="absolute w-full h-full">
                      {/* Line to top-left */}
                      <div className="absolute top-0 left-0 w-1/3 h-1/3 border-t-2 border-l-2 border-blue-500/30 rounded-tl-xl"></div>
                      {/* Line to top-right */}
                      <div className="absolute top-0 right-0 w-1/3 h-1/3 border-t-2 border-r-2 border-indigo-500/30 rounded-tr-xl"></div>
                      {/* Line to bottom-left */}
                      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 border-b-2 border-l-2 border-pink-500/30 rounded-bl-xl"></div>
                      {/* Line to bottom-right */}
                      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 border-b-2 border-r-2 border-purple-500/30 rounded-br-xl"></div>
                    </div>

                    {/* Increased orbit size */}
                    <div className="w-80 h-80 rounded-full border-2 border-dashed border-purple-500/30 animate-[spin_30s_linear_infinite]">
                      {/* Orbit elements - larger and more prominent with slower animation */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 p-3 rounded-full shadow-lg shadow-blue-500/30 hover:scale-110 transition-all duration-300">
                        <BarChart3 className="h-6 w-6 text-white" />
                      </div>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-purple-500 p-3 rounded-full shadow-lg shadow-purple-500/30 hover:scale-110 transition-all duration-300">
                        <Network className="h-6 w-6 text-white" />
                      </div>
                      <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500 p-3 rounded-full shadow-lg shadow-indigo-500/30 hover:scale-110 transition-all duration-300">
                        <Building className="h-6 w-6 text-white" />
                      </div>
                      <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-pink-500 p-3 rounded-full shadow-lg shadow-pink-500/30 hover:scale-110 transition-all duration-300">
                        <Zap className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Consulting Categories */}
      <section className="py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl text-white">
            Core Consulting Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Token Design */}
            <div
              className={`relative h-[340px] perspective-1000 cursor-pointer group`}
              onClick={() => toggleCard("tokenDesign")}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-3d group/card-outer ${
                  expandedCards.tokenDesign ? "rotate-y-180" : ""
                }`}
                style={
                  !expandedCards.tokenDesign ? { willChange: "transform" } : {}
                }
              >
                {/* Slight flip on hover if not flipped */}
                <style jsx>{`
                  .group\/card-outer:hover:not(.rotate-y-180) {
                    transform: perspective(1000px) rotateY(8deg);
                  }
                `}</style>
                {/* Front */}
                <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-purple-900/10 via-indigo-900/5 to-purple-800/10 rounded-2xl border border-purple-400/30 shadow-xl flex flex-col items-center justify-center p-8 overflow-hidden group/card">
                  {/* Pattern Background */}
                  <div className="absolute inset-0 opacity-5">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(147, 51, 234, 0.3) 1px, transparent 0)`,
                        backgroundSize: "24px 24px",
                      }}
                    ></div>
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `linear-gradient(45deg, rgba(147, 51, 234, 0.1) 25%, transparent 25%, transparent 75%, rgba(147, 51, 234, 0.1) 75%, rgba(147, 51, 234, 0.1)), linear-gradient(45deg, rgba(147, 51, 234, 0.1) 25%, transparent 25%, transparent 75%, rgba(147, 51, 234, 0.1) 75%, rgba(147, 51, 234, 0.1))`,
                        backgroundSize: "48px 48px",
                        backgroundPosition: "0 0, 24px 24px",
                      }}
                    ></div>
                  </div>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-indigo-500/10 opacity-50"></div>

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="rounded-full bg-gradient-to-br from-purple-600/20 to-indigo-600/20 p-7 w-24 h-24 flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300">
                      <Lightbulb className="h-12 w-12 text-purple-300 group-hover:text-purple-200 transition-colors duration-300" />
                    </div>
                    <h3 className="text-3xl font-extrabold text-white text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-indigo-200 group-hover:from-purple-100 group-hover:to-indigo-100 transition-all duration-300">
                      Product & Token Design
                    </h3>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-gray-900/95 via-purple-900/40 to-gray-900/95 rounded-2xl border border-purple-400/20 shadow-lg flex flex-col justify-center p-6 rotate-y-180 backdrop-blur-xs">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-300 text-lg font-bold">
                        •
                      </span>
                      <div>
                        <span className="font-bold text-purple-200">
                          Research & Analysis:
                        </span>
                        <span className="text-white/90 ml-1">
                          Monitor on-chain growth metrics and analyze comparable
                          tokens.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-300 text-lg font-bold">
                        •
                      </span>
                      <div>
                        <span className="font-bold text-purple-200">
                          Utility:
                        </span>
                        <span className="text-white/90 ml-1">
                          Design features that incentivize participation and
                          create value.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-300 text-lg font-bold">
                        •
                      </span>
                      <div>
                        <span className="font-bold text-purple-200">
                          Token Model:
                        </span>
                        <span className="text-white/90 ml-1">
                          Optimize token structures for sustainability and
                          utility.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-300 text-lg font-bold">
                        •
                      </span>
                      <div>
                        <span className="font-bold text-purple-200">
                          Governance:
                        </span>
                        <span className="text-white/90 ml-1">
                          Empower communities with governance models and
                          decision-making tools.
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Growth & Volume */}
            <div
              className={`relative h-[340px] perspective-1000 cursor-pointer group`}
              onClick={() => toggleCard("growthVolume")}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-3d group/card-outer ${
                  expandedCards.growthVolume ? "rotate-y-180" : ""
                }`}
                style={
                  !expandedCards.growthVolume ? { willChange: "transform" } : {}
                }
              >
                {/* Slight flip on hover if not flipped */}
                <style jsx>{`
                  .group\/card-outer:hover:not(.rotate-y-180) {
                    transform: perspective(1000px) rotateY(8deg);
                  }
                `}</style>
                {/* Front */}
                <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-purple-900/10 via-indigo-900/5 to-purple-800/10 rounded-2xl border border-purple-400/30 shadow-xl flex flex-col items-center justify-center p-8 overflow-hidden group/card">
                  {/* Pattern Background */}
                  <div className="absolute inset-0 opacity-5">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(147, 51, 234, 0.3) 1px, transparent 0)`,
                        backgroundSize: "24px 24px",
                      }}
                    ></div>
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `linear-gradient(45deg, rgba(147, 51, 234, 0.1) 25%, transparent 25%, transparent 75%, rgba(147, 51, 234, 0.1) 75%, rgba(147, 51, 234, 0.1)), linear-gradient(45deg, rgba(147, 51, 234, 0.1) 25%, transparent 25%, transparent 75%, rgba(147, 51, 234, 0.1) 75%, rgba(147, 51, 234, 0.1))`,
                        backgroundSize: "48px 48px",
                        backgroundPosition: "0 0, 24px 24px",
                      }}
                    ></div>
                  </div>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-indigo-500/10 opacity-50"></div>

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="rounded-full bg-gradient-to-br from-purple-600/20 to-indigo-600/20 p-7 w-24 h-24 flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300">
                      <TrendingUp className="h-12 w-12 text-purple-300 group-hover:text-purple-200 transition-colors duration-300" />
                    </div>
                    <h3 className="text-3xl font-extrabold text-white text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-indigo-200 group-hover:from-purple-100 group-hover:to-indigo-100 transition-all duration-300">
                      Growth and Volume
                    </h3>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-gray-900/95 via-purple-900/40 to-gray-900/95 rounded-2xl border border-purple-400/20 shadow-lg flex flex-col justify-center p-6 rotate-y-180 backdrop-blur-xs">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-300 text-lg font-bold">
                        •
                      </span>
                      <div>
                        <span className="font-bold text-purple-200">
                          Market Making:
                        </span>
                        <span className="text-white/90 ml-1">
                          Liquidity strategies and implementation for healthy
                          trading and price stability.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-300 text-lg font-bold">
                        •
                      </span>
                      <div>
                        <span className="font-bold text-purple-200">
                          Exchange Relations:
                        </span>
                        <span className="text-white/90 ml-1">
                          Listing strategy and management to maximize token
                          accessibility.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-300 text-lg font-bold">
                        •
                      </span>
                      <div>
                        <span className="font-bold text-purple-200">
                          Community Growth:
                        </span>
                        <span className="text-white/90 ml-1">
                          Engagement and retention programs to foster a loyal
                          user base.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-300 text-lg font-bold">
                        •
                      </span>
                      <div>
                        <span className="font-bold text-purple-200">
                          Volume Generation:
                        </span>
                        <span className="text-white/90 ml-1">
                          Sustainable trading strategies to drive consistent
                          token volume.
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Brand & Content */}
            <div
              className={`relative h-[340px] perspective-1000 cursor-pointer group`}
              onClick={() => toggleCard("brandContent")}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-3d group/card-outer ${
                  expandedCards.brandContent ? "rotate-y-180" : ""
                }`}
                style={
                  !expandedCards.brandContent ? { willChange: "transform" } : {}
                }
              >
                {/* Slight flip on hover if not flipped */}
                <style jsx>{`
                  .group\/card-outer:hover:not(.rotate-y-180) {
                    transform: perspective(1000px) rotateY(8deg);
                  }
                `}</style>
                {/* Front */}
                <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-purple-900/10 via-indigo-900/5 to-purple-800/10 rounded-2xl border border-purple-400/30 shadow-xl flex flex-col items-center justify-center p-8 overflow-hidden group/card">
                  {/* Pattern Background */}
                  <div className="absolute inset-0 opacity-5">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(147, 51, 234, 0.3) 1px, transparent 0)`,
                        backgroundSize: "24px 24px",
                      }}
                    ></div>
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `linear-gradient(45deg, rgba(147, 51, 234, 0.1) 25%, transparent 25%, transparent 75%, rgba(147, 51, 234, 0.1) 75%, rgba(147, 51, 234, 0.1)), linear-gradient(45deg, rgba(147, 51, 234, 0.1) 25%, transparent 25%, transparent 75%, rgba(147, 51, 234, 0.1) 75%, rgba(147, 51, 234, 0.1))`,
                        backgroundSize: "48px 48px",
                        backgroundPosition: "0 0, 24px 24px",
                      }}
                    ></div>
                  </div>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-indigo-500/10 opacity-50"></div>

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="rounded-full bg-gradient-to-br from-purple-600/20 to-indigo-600/20 p-7 w-24 h-24 flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300">
                      <FileText className="h-12 w-12 text-purple-300 group-hover:text-purple-200 transition-colors duration-300" />
                    </div>
                    <h3 className="text-3xl font-extrabold text-white text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-indigo-200 group-hover:from-purple-100 group-hover:to-indigo-100 transition-all duration-300">
                      Brand and Content
                    </h3>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-gray-900/95 via-purple-900/40 to-gray-900/95 rounded-2xl border border-purple-400/20 shadow-lg flex flex-col justify-center p-6 rotate-y-180 backdrop-blur-xs">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-300 text-lg font-bold">
                        •
                      </span>
                      <div>
                        <span className="font-bold text-purple-200">
                          Brand Identity:
                        </span>
                        <span className="text-white/90 ml-1">
                          Positioning and visual strategy to create a memorable
                          brand.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-300 text-lg font-bold">
                        •
                      </span>
                      <div>
                        <span className="font-bold text-purple-200">
                          Content Strategy:
                        </span>
                        <span className="text-white/90 ml-1">
                          Creation and distribution planning to engage your
                          audience.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-300 text-lg font-bold">
                        •
                      </span>
                      <div>
                        <span className="font-bold text-purple-200">
                          Narrative:
                        </span>
                        <span className="text-white/90 ml-1">
                          Messaging and story frameworks to communicate your
                          vision.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-300 text-lg font-bold">
                        •
                      </span>
                      <div>
                        <span className="font-bold text-purple-200">
                          Community:
                        </span>
                        <span className="text-white/90 ml-1">
                          Engagement and educational content to build a strong
                          community.
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Token Financial Management */}
            <div
              className={`relative h-[340px] perspective-1000 cursor-pointer group`}
              onClick={() => toggleCard("financialManagement")}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-3d group/card-outer ${
                  expandedCards.financialManagement ? "rotate-y-180" : ""
                }`}
                style={
                  !expandedCards.financialManagement
                    ? { willChange: "transform" }
                    : {}
                }
              >
                {/* Slight flip on hover if not flipped */}
                <style jsx>{`
                  .group\/card-outer:hover:not(.rotate-y-180) {
                    transform: perspective(1000px) rotateY(8deg);
                  }
                `}</style>
                {/* Front */}
                <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-purple-900/10 via-indigo-900/5 to-purple-800/10 rounded-2xl border border-purple-400/30 shadow-xl flex flex-col items-center justify-center p-8 overflow-hidden group/card">
                  {/* Pattern Background */}
                  <div className="absolute inset-0 opacity-5">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(147, 51, 234, 0.3) 1px, transparent 0)`,
                        backgroundSize: "24px 24px",
                      }}
                    ></div>
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `linear-gradient(45deg, rgba(147, 51, 234, 0.1) 25%, transparent 25%, transparent 75%, rgba(147, 51, 234, 0.1) 75%, rgba(147, 51, 234, 0.1)), linear-gradient(45deg, rgba(147, 51, 234, 0.1) 25%, transparent 25%, transparent 75%, rgba(147, 51, 234, 0.1) 75%, rgba(147, 51, 234, 0.1))`,
                        backgroundSize: "48px 48px",
                        backgroundPosition: "0 0, 24px 24px",
                      }}
                    ></div>
                  </div>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-indigo-500/10 opacity-50"></div>

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="rounded-full bg-gradient-to-br from-purple-600/20 to-indigo-600/20 p-7 w-24 h-24 flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300">
                      <BarChart3 className="h-12 w-12 text-purple-300 group-hover:text-purple-200 transition-colors duration-300" />
                    </div>
                    <h3 className="text-3xl font-extrabold text-white text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-indigo-200 group-hover:from-purple-100 group-hover:to-indigo-100 transition-all duration-300">
                      Token Financial Management
                    </h3>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-gray-900/95 via-purple-900/40 to-gray-900/95 rounded-2xl border border-purple-400/20 shadow-lg flex flex-col justify-center p-6 rotate-y-180 backdrop-blur-xs">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-300 text-lg font-bold">
                        •
                      </span>
                      <div>
                        <span className="font-bold text-purple-200">
                          Treasury:
                        </span>
                        <span className="text-white/90 ml-1">
                          Diversification and optimization of treasury assets
                          for sustainability.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-300 text-lg font-bold">
                        •
                      </span>
                      <div>
                        <span className="font-bold text-purple-200">Risk:</span>
                        <span className="text-white/90 ml-1">
                          Mitigation strategies and planning to safeguard assets
                          and operations.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-300 text-lg font-bold">
                        •
                      </span>
                      <div>
                        <span className="font-bold text-purple-200">
                          Modeling:
                        </span>
                        <span className="text-white/90 ml-1">
                          Scenario planning and analysis to inform strategic
                          decisions.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-300 text-lg font-bold">
                        •
                      </span>
                      <div>
                        <span className="font-bold text-purple-200">
                          Revenue:
                        </span>
                        <span className="text-white/90 ml-1">
                          Sustainable framework development to maximize and
                          diversify revenue.
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Timeline Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Timeline Toggle */}
        <div className="flex justify-center items-center gap-6 mb-10">
          <button
            className={`px-6 py-2 rounded-full text-lg font-semibold transition-colors duration-200 border border-purple-700/30 focus:outline-none focus:ring-2 focus:ring-purple-500/40 ${
              timelineType === "pre"
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow"
                : "bg-gray-900/60 text-purple-200 hover:bg-purple-800/20"
            }`}
            onClick={() => setTimelineType("pre")}
            aria-pressed={timelineType === "pre"}
          >
            Pre-TGE
          </button>
          <Switch
            checked={timelineType === "post"}
            onCheckedChange={(checked) =>
              setTimelineType(checked ? "post" : "pre")
            }
            className="mx-2 border-purple-700/30 bg-gray-800 data-[state=checked]:bg-indigo-600"
            aria-label="Toggle Pre-TGE/Post-TGE"
          />
          <button
            className={`px-6 py-2 rounded-full text-lg font-semibold transition-colors duration-200 border border-purple-700/30 focus:outline-none focus:ring-2 focus:ring-purple-500/40 ${
              timelineType === "post"
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow"
                : "bg-gray-900/60 text-purple-200 hover:bg-purple-800/20"
            }`}
            onClick={() => setTimelineType("post")}
            aria-pressed={timelineType === "post"}
          >
            Post-TGE
          </button>
        </div>
        {/* Background gradient elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 to-transparent opacity-30 pointer-events-none"></div>

        <div className="container px-4 md:px-6 mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold md:text-4xl text-white mb-4">
              Our Consulting Process
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A structured approach to designing and implementing effective
              tokenomics solutions
            </p>
          </div>

          {/* Desktop Timeline (hidden on mobile) */}
          <div className="hidden md:block relative min-h-[1000px]">
            {/* Timeline Line - absolutely positioned, static, covers full section height, with animated shine */}
            <div className="pointer-events-none absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-600/80 to-indigo-600/80 rounded-full z-10 overflow-hidden">
              {/* Animated shine overlay */}
              <div
                className="absolute top-0 left-0 w-full h-full z-20 animate-timeline-shine pointer-events-none"
                style={{
                  background:
                    "linear-gradient(120deg, transparent 60%, rgba(255,255,255,0.25) 80%, transparent 100%)",
                  backgroundSize: "100% 200%",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <style jsx>{`
                @keyframes timeline-shine {
                  0% {
                    background-position-y: -100%;
                  }
                  100% {
                    background-position-y: 200%;
                  }
                }
                .animate-timeline-shine {
                  animation: timeline-shine 3.5s linear infinite;
                }
              `}</style>
            </div>
            <div className="relative z-20">
              {timelineSteps.map((step, index) => {
                const isExpanded = expandedTimelineStep === step.id;
                return (
                  <div key={step.id} className="relative mb-24 last:mb-0">
                    {/* Timeline Node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20">
                      <div
                        className={`relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 shadow-lg border-2 group-hover:scale-110 transition-transform duration-300
                        ${
                          isExpanded
                            ? "shadow-purple-400/60 border-purple-400/60"
                            : "shadow-purple-900/30 border-gray-900"
                        }`}
                      >
                        {/* Animated shine overlay for the number circle */}
                        <div className="absolute inset-0 rounded-full pointer-events-none overflow-hidden z-10">
                          <div
                            className="absolute inset-0 w-full h-full animate-circle-shine"
                            style={{
                              background:
                                "linear-gradient(120deg, transparent 60%, rgba(255,255,255,0.35) 80%, transparent 100%)",
                              backgroundSize: "200% 100%",
                              backgroundRepeat: "no-repeat",
                            }}
                          ></div>
                        </div>
                        <span className="relative z-20 text-white text-xl font-bold drop-shadow-lg">
                          {step.id}
                        </span>
                        <style jsx>{`
                          @keyframes circle-shine {
                            0% {
                              background-position-x: -100%;
                            }
                            100% {
                              background-position-x: 200%;
                            }
                          }
                          .animate-circle-shine {
                            animation: circle-shine 2.5s linear infinite;
                          }
                        `}</style>
                      </div>
                    </div>
                    {/* Content Grid */}
                    <div className="grid grid-cols-2 gap-16 items-center">
                      {/* Left Content - For odd steps */}
                      <div
                        className={
                          index % 2 === 0
                            ? "pr-16"
                            : "opacity-0 pointer-events-none"
                        }
                      >
                        <div
                          className={`relative bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-sm rounded-xl border border-gray-800/50 p-8 shadow-lg transition-all duration-300 group cursor-pointer ${
                            isExpanded
                              ? "shadow-purple-900/20 border-purple-500/30"
                              : "hover:shadow-xl hover:shadow-purple-900/10 hover:border-purple-900/30"
                          }`}
                          tabIndex={0}
                          role="button"
                          aria-expanded={isExpanded}
                          aria-controls={`timeline-step-${step.id}`}
                          onClick={() => handleExpandTimelineStep(step.id)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ")
                              handleExpandTimelineStep(step.id);
                          }}
                          style={{ position: "relative" }}
                        >
                          {/* Chevron Icon in top right */}
                          <span
                            className={`absolute top-4 right-4 transition-transform duration-300 ${
                              isExpanded
                                ? "rotate-90 text-purple-300"
                                : "text-gray-500"
                            }`}
                            style={{ zIndex: 2 }}
                          >
                            <ChevronDown className="h-6 w-6" />
                          </span>
                          <div className="flex items-center gap-4 mb-4">
                            <div className="rounded-full bg-gradient-to-br from-purple-600/20 to-indigo-600/20 p-3 text-purple-400">
                              <step.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors duration-300">
                              {step.title}
                            </h3>
                          </div>
                          <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                            {step.description}
                          </p>
                          {/* Expanded Content (seamless, no box) */}
                          <div
                            id={`timeline-step-${step.id}`}
                            className={`overflow-hidden transition-all duration-500 ${
                              isExpanded
                                ? "max-h-80 opacity-100 mt-4"
                                : "max-h-0 opacity-0 mt-0"
                            }`}
                            aria-hidden={!isExpanded}
                          >
                            <ul className="text-gray-300 text-base leading-relaxed space-y-2 pl-4 list-disc">
                              {timelineType === "pre" && step.id === 1 && (
                                <>
                                  <li>Stakeholder mapping and analysis</li>
                                  <li>Competitive and landscape research</li>
                                  <li>Define token generation benchmarks</li>
                                  <li>
                                    Align internal goals and success metrics
                                  </li>
                                </>
                              )}
                              {timelineType === "pre" && step.id === 2 && (
                                <>
                                  <li>
                                    Define core token utility and functions
                                  </li>
                                  <li>
                                    Structure community incentive mechanisms
                                  </li>
                                  <li>Align token roles with user behaviors</li>
                                  <li>
                                    Validate utility assumptions through
                                    workshops
                                  </li>
                                </>
                              )}
                              {timelineType === "pre" && step.id === 3 && (
                                <>
                                  <li>Begin partnership and BD outreach</li>
                                  <li>Identify relevant exchange listings</li>
                                  <li>
                                    Initiate unlock modeling and vesting
                                    strategy
                                  </li>
                                  <li>Map partner value-add and timing</li>
                                </>
                              )}
                              {timelineType === "pre" && step.id === 4 && (
                                <>
                                  <li>
                                    Draft and refine Lightpaper / Whitepaper
                                  </li>
                                  <li>Develop token distribution schedules</li>
                                  <li>Create token branding and iconography</li>
                                  <li>Design supporting visuals and memes</li>
                                </>
                              )}
                              {timelineType === "pre" && step.id === 5 && (
                                <>
                                  <li>Finalize GTM (go-to-market) strategy</li>
                                  <li>
                                    Coordinate vesting + unlock smart contracts
                                  </li>
                                  <li>
                                    Align launch timelines across stakeholders
                                  </li>
                                  <li>Prep materials for TGE announcements</li>
                                </>
                              )}
                              {timelineType === "post" && step.id === 1 && (
                                <>
                                  <li>Stakeholder and team alignment</li>
                                  <li>Conduct brand and content review</li>
                                  <li>Analyze competitive positioning</li>
                                  <li>
                                    Review token distribution & circulating
                                    supply
                                  </li>
                                </>
                              )}
                              {timelineType === "post" && step.id === 2 && (
                                <>
                                  <li>Build event-driven content calendar</li>
                                  <li>
                                    Identify key KOLs and community leaders
                                  </li>
                                  <li>Design new content, memes, and assets</li>
                                  <li>
                                    Refine token tone, voice, and messaging
                                  </li>
                                </>
                              )}
                              {timelineType === "post" && step.id === 3 && (
                                <>
                                  <li>
                                    Launch new incentive & growth campaigns
                                  </li>
                                  <li>Oversee social media token comms</li>
                                  <li>
                                    Push updates to listings (DEXScreener, CMC,
                                    CG)
                                  </li>
                                  <li>
                                    Track sentiment and adjust based on feedback
                                  </li>
                                </>
                              )}
                              {timelineType === "post" && step.id === 4 && (
                                <>
                                  <li>
                                    Coordinate OTC sales and market timing
                                  </li>
                                  <li>Activate GTM token-specific campaigns</li>
                                  <li>
                                    Introduce token to KOLs & partner ecosystems
                                  </li>
                                  <li>Monitor volume and market reactions</li>
                                </>
                              )}
                              {timelineType === "post" && step.id === 5 && (
                                <>
                                  <li>
                                    Manage Telegram & Discord growth loops
                                  </li>
                                  <li>Host AMAs and community events</li>
                                  <li>
                                    Launch feedback loops with users and holders
                                  </li>
                                  <li>
                                    Prepare community for next ecosystem phase
                                  </li>
                                </>
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* Right Content - For even steps */}
                      <div
                        className={
                          index % 2 === 1
                            ? "pl-16"
                            : "opacity-0 pointer-events-none"
                        }
                      >
                        <div
                          className={`relative bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-sm rounded-xl border border-gray-800/50 p-8 shadow-lg transition-all duration-300 group cursor-pointer ${
                            isExpanded
                              ? "shadow-purple-900/20 border-purple-500/30"
                              : "hover:shadow-xl hover:shadow-purple-900/10 hover:border-purple-900/30"
                          }`}
                          tabIndex={0}
                          role="button"
                          aria-expanded={isExpanded}
                          aria-controls={`timeline-step-${step.id}`}
                          onClick={() => handleExpandTimelineStep(step.id)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ")
                              handleExpandTimelineStep(step.id);
                          }}
                          style={{ position: "relative" }}
                        >
                          {/* Chevron Icon in top right */}
                          <span
                            className={`absolute top-4 right-4 transition-transform duration-300 ${
                              isExpanded
                                ? "rotate-90 text-purple-300"
                                : "text-gray-500"
                            }`}
                            style={{ zIndex: 2 }}
                          >
                            <ChevronDown className="h-6 w-6" />
                          </span>
                          <div className="flex items-center gap-4 mb-4">
                            <div className="rounded-full bg-gradient-to-br from-purple-600/20 to-indigo-600/20 p-3 text-purple-400">
                              <step.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors duration-300">
                              {step.title}
                            </h3>
                          </div>
                          <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                            {step.description}
                          </p>
                          {/* Expanded Content (seamless, no box) */}
                          <div
                            id={`timeline-step-${step.id}`}
                            className={`overflow-hidden transition-all duration-500 ${
                              isExpanded
                                ? "max-h-80 opacity-100 mt-4"
                                : "max-h-0 opacity-0 mt-0"
                            }`}
                            aria-hidden={!isExpanded}
                          >
                            <ul className="text-gray-300 text-base leading-relaxed space-y-2 pl-4 list-disc">
                              {timelineType === "pre" && step.id === 1 && (
                                <>
                                  <li>Stakeholder mapping and analysis</li>
                                  <li>Competitive and landscape research</li>
                                  <li>Define token generation benchmarks</li>
                                  <li>
                                    Align internal goals and success metrics
                                  </li>
                                </>
                              )}
                              {timelineType === "pre" && step.id === 2 && (
                                <>
                                  <li>
                                    Define core token utility and functions
                                  </li>
                                  <li>
                                    Structure community incentive mechanisms
                                  </li>
                                  <li>Align token roles with user behaviors</li>
                                  <li>
                                    Validate utility assumptions through
                                    workshops
                                  </li>
                                </>
                              )}
                              {timelineType === "pre" && step.id === 3 && (
                                <>
                                  <li>Begin partnership and BD outreach</li>
                                  <li>Identify relevant exchange listings</li>
                                  <li>
                                    Initiate unlock modeling and vesting
                                    strategy
                                  </li>
                                  <li>Map partner value-add and timing</li>
                                </>
                              )}
                              {timelineType === "pre" && step.id === 4 && (
                                <>
                                  <li>
                                    Draft and refine Lightpaper / Whitepaper
                                  </li>
                                  <li>Develop token distribution schedules</li>
                                  <li>Create token branding and iconography</li>
                                  <li>Design supporting visuals and memes</li>
                                </>
                              )}
                              {timelineType === "pre" && step.id === 5 && (
                                <>
                                  <li>Finalize GTM (go-to-market) strategy</li>
                                  <li>
                                    Coordinate vesting + unlock smart contracts
                                  </li>
                                  <li>
                                    Align launch timelines across stakeholders
                                  </li>
                                  <li>Prep materials for TGE announcements</li>
                                </>
                              )}
                              {timelineType === "post" && step.id === 1 && (
                                <>
                                  <li>Stakeholder and team alignment</li>
                                  <li>Conduct brand and content review</li>
                                  <li>Analyze competitive positioning</li>
                                  <li>
                                    Review token distribution & circulating
                                    supply
                                  </li>
                                </>
                              )}
                              {timelineType === "post" && step.id === 2 && (
                                <>
                                  <li>Build event-driven content calendar</li>
                                  <li>
                                    Identify key KOLs and community leaders
                                  </li>
                                  <li>Design new content, memes, and assets</li>
                                  <li>
                                    Refine token tone, voice, and messaging
                                  </li>
                                </>
                              )}
                              {timelineType === "post" && step.id === 3 && (
                                <>
                                  <li>
                                    Launch new incentive & growth campaigns
                                  </li>
                                  <li>Oversee social media token comms</li>
                                  <li>
                                    Push updates to listings (DEXScreener, CMC,
                                    CG)
                                  </li>
                                  <li>
                                    Track sentiment and adjust based on feedback
                                  </li>
                                </>
                              )}
                              {timelineType === "post" && step.id === 4 && (
                                <>
                                  <li>
                                    Coordinate OTC sales and market timing
                                  </li>
                                  <li>Activate GTM token-specific campaigns</li>
                                  <li>
                                    Introduce token to KOLs & partner ecosystems
                                  </li>
                                  <li>Monitor volume and market reactions</li>
                                </>
                              )}
                              {timelineType === "post" && step.id === 5 && (
                                <>
                                  <li>
                                    Manage Telegram & Discord growth loops
                                  </li>
                                  <li>Host AMAs and community events</li>
                                  <li>
                                    Launch feedback loops with users and holders
                                  </li>
                                  <li>
                                    Prepare community for next ecosystem phase
                                  </li>
                                </>
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Timeline (visible only on mobile) */}
          <div className="md:hidden relative">
            {/* Continuous Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600/80 to-indigo-600/80 rounded-full"></div>

            {timelineSteps.map((step) => {
              const isExpanded = expandedTimelineStep === step.id;
              return (
                <div key={step.id} className="relative pl-16 mb-12 last:mb-0">
                  {/* Timeline Node */}
                  <div className="absolute left-6 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 shadow-lg shadow-purple-900/30 border-2 border-gray-900">
                      <span className="text-white text-base font-bold">
                        {step.id}
                      </span>
                    </div>
                  </div>

                  {/* Expandable Content */}
                  <div
                    className={`bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-sm rounded-xl border border-gray-800/50 p-6 shadow-lg transition-all duration-300 group cursor-pointer ${
                      isExpanded
                        ? "shadow-purple-900/20 border-purple-500/30"
                        : "hover:shadow-xl hover:shadow-purple-900/10 hover:border-purple-900/30"
                    }`}
                    tabIndex={0}
                    role="button"
                    aria-expanded={isExpanded}
                    aria-controls={`timeline-step-mobile-${step.id}`}
                    onClick={() =>
                      setExpandedTimelineStep(isExpanded ? null : step.id)
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ")
                        setExpandedTimelineStep(isExpanded ? null : step.id);
                    }}
                    style={{ position: "relative" }}
                  >
                    {/* Chevron Icon in top right */}
                    <span
                      className={`absolute top-4 right-4 transition-transform duration-300 ${
                        isExpanded
                          ? "rotate-90 text-purple-300"
                          : "text-gray-500"
                      }`}
                      style={{ zIndex: 2 }}
                    >
                      <ChevronDown className="h-6 w-6" />
                    </span>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="rounded-full bg-gradient-to-br from-purple-600/20 to-indigo-600/20 p-2 text-purple-400">
                        <step.icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">
                      {step.description}
                    </p>
                    {/* Expanded Content (seamless, no box) */}
                    <div
                      id={`timeline-step-mobile-${step.id}`}
                      className={`overflow-hidden transition-all duration-500 ${
                        isExpanded
                          ? "max-h-80 opacity-100 mt-2"
                          : "max-h-0 opacity-0 mt-0"
                      }`}
                      aria-hidden={!isExpanded}
                    >
                      <ul className="text-gray-300 text-base leading-relaxed space-y-2 pl-4 list-disc">
                        {timelineType === "pre" && step.id === 1 && (
                          <>
                            <li>Stakeholder mapping and analysis</li>
                            <li>Competitive and landscape research</li>
                            <li>Define token generation benchmarks</li>
                            <li>Align internal goals and success metrics</li>
                          </>
                        )}
                        {timelineType === "pre" && step.id === 2 && (
                          <>
                            <li>Define core token utility and functions</li>
                            <li>Structure community incentive mechanisms</li>
                            <li>Align token roles with user behaviors</li>
                            <li>
                              Validate utility assumptions through workshops
                            </li>
                          </>
                        )}
                        {timelineType === "pre" && step.id === 3 && (
                          <>
                            <li>Begin partnership and BD outreach</li>
                            <li>Identify relevant exchange listings</li>
                            <li>
                              Initiate unlock modeling and vesting strategy
                            </li>
                            <li>Map partner value-add and timing</li>
                          </>
                        )}
                        {timelineType === "pre" && step.id === 4 && (
                          <>
                            <li>Draft and refine Lightpaper / Whitepaper</li>
                            <li>Develop token distribution schedules</li>
                            <li>Create token branding and iconography</li>
                            <li>Design supporting visuals and memes</li>
                          </>
                        )}
                        {timelineType === "pre" && step.id === 5 && (
                          <>
                            <li>Finalize GTM (go-to-market) strategy</li>
                            <li>Coordinate vesting + unlock smart contracts</li>
                            <li>Align launch timelines across stakeholders</li>
                            <li>Prep materials for TGE announcements</li>
                          </>
                        )}
                        {timelineType === "post" && step.id === 1 && (
                          <>
                            <li>Stakeholder and team alignment</li>
                            <li>Conduct brand and content review</li>
                            <li>Analyze competitive positioning</li>
                            <li>
                              Review token distribution & circulating supply
                            </li>
                          </>
                        )}
                        {timelineType === "post" && step.id === 2 && (
                          <>
                            <li>Build event-driven content calendar</li>
                            <li>Identify key KOLs and community leaders</li>
                            <li>Design new content, memes, and assets</li>
                            <li>Refine token tone, voice, and messaging</li>
                          </>
                        )}
                        {timelineType === "post" && step.id === 3 && (
                          <>
                            <li>Launch new incentive & growth campaigns</li>
                            <li>Oversee social media token comms</li>
                            <li>
                              Push updates to listings (DEXScreener, CMC, CG)
                            </li>
                            <li>
                              Track sentiment and adjust based on feedback
                            </li>
                          </>
                        )}
                        {timelineType === "post" && step.id === 4 && (
                          <>
                            <li>Coordinate OTC sales and market timing</li>
                            <li>Activate GTM token-specific campaigns</li>
                            <li>
                              Introduce token to KOLs & partner ecosystems
                            </li>
                            <li>Monitor volume and market reactions</li>
                          </>
                        )}
                        {timelineType === "post" && step.id === 5 && (
                          <>
                            <li>Manage Telegram & Discord growth loops</li>
                            <li>Host AMAs and community events</li>
                            <li>
                              Launch feedback loops with users and holders
                            </li>
                            <li>Prepare community for next ecosystem phase</li>
                          </>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section with Credibility Tagline */}
      <section id="contact" className="py-24">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold md:text-4xl mb-6 text-white">
              Ready to Elevate Your Tokenomics?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Let's discuss how our expert consultants can help your project
              succeed. Schedule a free initial consultation today.
            </p>
            <div>
              <Button
                className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white text-lg py-6 px-10 rounded-lg shadow-lg shadow-purple-900/30 transition-all duration-300"
                size="lg"
                asChild
              >
                <Link href="/insights#contact-form">
                  Book a Consultation <Lightbulb className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
