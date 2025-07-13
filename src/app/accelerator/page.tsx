"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import {
  ArrowRight,
  Users,
  Mountain,
  Rocket,
  Leaf,
  Network,
  Calendar,
  Award,
  Star,
  Clock,
  Sparkles,
  Briefcase,
  Code,
  Megaphone,
  GraduationCap,
  Zap,
  LineChart,
  CheckCircle,
  DollarSign,
  TrendingUp,
  Wrench,
  Network as NetworkIcon,
  AlignCenter,
  UserPlus,
  ClipboardCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { CtaButton } from "@/components/common/cta-button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";

const tracks = [
  {
    id: "wire-network",
    name: "Wire Network",
    type: "AI Accelerator",
    logo: "/chains/wire-network.png",
    description:
      "Building the future of AI infrastructure and applications on the blockchain.",
    link: "/accelerator/wire-network",
  },
  {
    id: "avalanche",
    name: "Avalanche",
    type: "App Chain Accelerator",
    logo: "/chains/avalanche.png",
    description:
      "Accelerating the next generation of application-specific blockchains.",
    link: "/accelerator/avalanche",
  },
  {
    id: "xion",
    name: "XION",
    type: "Consumer Accelerator",
    logo: "/chains/xion.png",
    description: "Empowering consumer-focused Web3 products and platforms.",
    link: "/accelerator/xion",
  },
  {
    id: "f-ecosystem",
    name: "FCHAIN",
    type: "Modular Accelerator",
    logo: "/chains/fchain.png",
    description:
      "Supporting modular blockchain infrastructure and tooling innovation.",
    link: "/accelerator/f-ecosystem",
  },
];

const pastCohorts = [
  {
    name: "Cohort 001",
    year: "2022",
    description: "Pioneering projects in early DeFi and NFT marketplaces.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "team success",
  },
  {
    name: "Cohort 002",
    year: "2023",
    description: "Focused on DAO tooling and decentralized identity solutions.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "community collaboration",
  },
];

const stats = [
  { label: "Startups Accelerated", value: "15+" },
  { label: "Capital Supported", value: "$3M+" },
  { label: "Total Applicants", value: "1200+" },
  { label: "Ecosystem Partners", value: "50+" },
];

const timeline = [
  {
    phase: "Application",
    duration: "2 Weeks",
    description: "Submit your project and team details",
  },
  {
    phase: "Selection",
    duration: "1 Week",
    description: "Review and interview process",
  },
  {
    phase: "Program",
    duration: "16 Weeks",
    description: "Intensive acceleration program",
  },
  {
    phase: "Demo Day",
    duration: "1 Day",
    description: "Present to investors and partners",
  },
];

const programBenefits = [
  "Capital investment",
  "Technical development support",
  "Strategic marketing",
  "Expert mentorship",
];

const chainSponsors = [
  { name: "avalanche", logo: "/Chains/avalanche.png" },
  { name: "celo", logo: "/Chains/celo.png" },
  { name: "fchain", logo: "/Chains/fchain.png" },
  { name: "fenwick", logo: "/Chains/fenwick.png" },
  { name: "flow", logo: "/Chains/flow.png" },
  { name: "futureverse", logo: "/Chains/futureverse.png" },
  { name: "hedgey", logo: "/Chains/hedgey.png" },
  { name: "kairon", logo: "/Chains/kairon.png" },
  { name: "wire network", logo: "/Chains/wire-network.png" },
  { name: "xion", logo: "/Chains/xion.png" },
];

const partnerLogos = Array(8)
  .fill(null)
  .map((_, i) => ({
    src: `https://placehold.co/120x60?text=Logo+${i + 1}`,
    alt: `Partner Logo ${i + 1}`,
  }));

const fadeInUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
};

const stagger = {
  animate: {
    transition: { staggerChildren: 0.12 },
  },
};

const programHighlights = [
  "Cohort-based, founder-first accelerator",
  "Access to capital, mentorship, and top-tier partners",
  "Hands-on support for tokenomics, go-to-market, and growth",
  "Focus on Web3, DeFi, consumer, modular, and AI tracks",
];

// Timeline steps for Accelerator Process
const processTimeline = [
  {
    icon: "AlignCenter",
    step: 1,
    title: "Alignment",
    description:
      "Denarii Labs and the Ecosystem / Chain develop custom curriculum and align on objectives for the program.",
  },
  {
    icon: "Megaphone",
    step: 2,
    title: "Promotion",
    description: "Marketing the Chain to attract Web3 project applications.",
  },
  {
    icon: "Users",
    step: 3,
    title: "Review Applicants",
    description:
      "Denarii Labs conducts due diligence, selects projects, and promotes the selected chain.",
  },
  {
    icon: "UserPlus",
    step: 4,
    title: "Onboarding",
    description:
      "Successful projects are integrated into the Denarii Labs framework.",
  },
  {
    icon: "Rocket",
    step: 5,
    title: "Build",
    description:
      "Intensive 12-week accelerator curriculum focused on tokenomics and fundraising.",
  },
  {
    icon: "ClipboardCheck",
    step: 6,
    title: "Review",
    description:
      "Evaluation and preparation for post-accelerator launch and funding.",
  },
  {
    icon: "Award",
    step: 7,
    title: "RBV Summit",
    description:
      "A conference for companies to connect with investors and industry leaders.",
  },
  {
    icon: "TrendingUp",
    step: 8,
    title: "Post-Accelerator",
    description:
      "Support for launch, market entry, growth strategies, and alumni network.",
  },
];

// Icon map for static imports
const iconMap = {
  AlignCenter,
  Megaphone,
  Users,
  UserPlus,
  Rocket,
  ClipboardCheck,
  Award,
  TrendingUp,
};

type TimelineStep = {
  icon: string;
  step: number;
  title: string;
  description: string;
};

function TimelineWheel({ steps }: { steps: TimelineStep[] }) {
  const [active, setActive] = useState(0);
  const stepCount = steps.length;
  const stepAngle = 360 / stepCount;
  const radius = 220; // circle
  const center = 260;

  // Calculate positions for steps (circle)
  const positions = steps.map((_, i) => {
    const theta = (i * stepAngle - 90) * (Math.PI / 180);
    return {
      x: radius * Math.cos(theta) + center,
      y: radius * Math.sin(theta) + center,
    };
  });

  const handlePrev = () => {
    setActive((active - 1 + stepCount) % stepCount);
  };

  const handleNext = () => {
    setActive((active + 1) % stepCount);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full gap-12 md:gap-20 py-12 md:py-20">
      {/* Wheel and chevron arrows on the left */}
      <div className="flex flex-row items-center justify-center">
        {/* Left chevron arrow */}
        <button
          aria-label="Previous Step"
          onClick={handlePrev}
          className="p-0 bg-transparent border-none outline-none focus:outline-none mr-4"
        >
          <svg
            width="32"
            height="54"
            viewBox="0 0 32 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-lg transition-transform duration-150 hover:scale-110 hover:drop-shadow-[0_0_8px_#fff]"
            style={{ display: "block" }}
          >
            <polyline
              points="27,6 6,27 27,48"
              stroke="white"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </button>
        {/* Wheel */}
        <div
          className="relative flex-shrink-0"
          style={{ width: 520, height: 520, maxWidth: "100%" }}
        >
          {/* SVG arrows connecting steps */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            width={520}
            height={520}
          >
            {positions.map((pos, i) => {
              const next = positions[(i + 1) % stepCount];
              // Arrow from pos to next
              const dx = next.x - pos.x;
              const dy = next.y - pos.y;
              const angle = Math.atan2(dy, dx);
              const arrowPadding = 44; // more space from the circles
              const arrowLength =
                Math.sqrt(dx * dx + dy * dy) - arrowPadding * 2;
              const startX = pos.x + arrowPadding * Math.cos(angle);
              const startY = pos.y + arrowPadding * Math.sin(angle);
              const endX = startX + arrowLength * Math.cos(angle);
              const endY = startY + arrowLength * Math.sin(angle);
              return (
                <g key={i}>
                  <line
                    x1={Number(startX.toFixed(2))}
                    y1={Number(startY.toFixed(2))}
                    x2={Number(endX.toFixed(2))}
                    y2={Number(endY.toFixed(2))}
                    stroke="#a855f7"
                    strokeWidth={2}
                    strokeDasharray="6 6"
                    markerEnd="url(#arrowhead)"
                    opacity={0.5}
                  />
                </g>
              );
            })}
            <defs>
              <marker
                id="arrowhead"
                markerWidth="8"
                markerHeight="8"
                refX="6"
                refY="4"
                orient="auto"
                markerUnits="strokeWidth"
              >
                <polygon points="0 0, 8 4, 0 8" fill="#a855f7" />
              </marker>
            </defs>
          </svg>
          <div className="absolute inset-0">
            {steps.map((step: TimelineStep, i: number) => {
              const { x, y } = positions[i];
              const isActive = active === i;
              const Icon = iconMap[step.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={step.step}
                  className={`absolute flex flex-col items-center justify-center select-none cursor-pointer transition-all duration-300 ${
                    isActive ? "z-10" : "z-0"
                  }`}
                  style={{
                    left: x,
                    top: y,
                    transform: isActive
                      ? "translate(-50%,-50%) scale(1.15)"
                      : "translate(-50%,-50%) scale(0.85)",
                    filter: isActive
                      ? "drop-shadow(0 0 20px #a855f7cc)"
                      : "none",
                  }}
                  onClick={() => setActive(i)}
                >
                  <div className="flex flex-col items-center">
                    {/* Step number badge at top center */}
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black border-2 border-purple-400 text-lg font-bold text-purple-300 shadow-md mb-2 mt-1 z-10">
                      {step.step}
                    </div>
                    <div
                      className={`flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 shadow-lg ${
                        isActive ? "ring-4 ring-purple-400/40" : ""
                      }`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div
                      className={`mt-4 text-sm font-semibold uppercase tracking-wide text-center ${
                        isActive ? "text-white" : "text-gray-400"
                      }`}
                    >
                      {step.title}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        {/* Right chevron arrow */}
        <button
          aria-label="Next Step"
          onClick={handleNext}
          className="p-0 bg-transparent border-none outline-none focus:outline-none ml-4"
        >
          <svg
            width="32"
            height="54"
            viewBox="0 0 32 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-lg transition-transform duration-150 hover:scale-110 hover:drop-shadow-[0_0_8px_#fff]"
            style={{ display: "block" }}
          >
            <polyline
              points="5,6 26,27 5,48"
              stroke="white"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </button>
      </div>
      {/* Hero text and dynamic step info on the right */}
      <div className="flex-1 flex flex-col items-center md:items-start justify-center min-w-[220px] max-w-xl mx-auto text-center md:text-left">
        <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
          24-Week Accelerator Process
        </h3>
        <p className="text-lg text-gray-300 mb-8 max-w-xl">
          Denarii Labs guides founders through a comprehensive, hands-on 24-week
          journey. From alignment and onboarding to building, launching, and
          post-accelerator growth, each step is designed to maximize your
          project's success.
        </p>
        <div className="w-full border-t border-purple-700/30 my-8" />
        <div className="w-full">
          <div className="text-xl font-bold text-purple-300 mb-2 uppercase tracking-wide">
            {steps[active].title}
          </div>
          <div className="text-base text-white mb-2 min-h-[56px]">
            {steps[active].description}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AcceleratorPage() {
  const router = useRouter();

  const handleTrackNavigation = (trackId: string) => {
    if (trackId) {
      router.push(`/accelerator/${trackId}`);
    }
  };

  return (
    <main>
      {/* Hero Section (copied exactly from main site, but accelerator-specific) */}
      <section className="py-24 md:py-32 w-full relative overflow-hidden min-h-[90vh] flex items-center bg-black">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto text-center">
          <div className="flex flex-col items-center justify-center space-y-10">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-600 animate-sparkle">
                Backing the Next Generation
              </span>
              <br />
              <span className="text-white">of Tokenized Startups</span>
            </h1>
            <p className="max-w-2xl text-lg text-gray-300 md:text-xl font-medium mb-4">
              Scaling Web3 startups with capital, mentorship, and a world-class
              network. Backed by Red Beard Ventures.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 w-full max-w-xl mx-auto">
              <Button
                className="flex-1 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold hover:scale-110 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 text-xl py-8 px-10 min-w-[240px]"
                size="lg"
                asChild
              >
                <Link
                  href="#apply"
                  className="flex items-center justify-center gap-3"
                >
                  <Zap className="h-6 w-6" />
                  Apply to Accelerator
                </Link>
              </Button>
              <Button
                variant="outline"
                className="flex-1 bg-transparent text-white border-purple-600 hover:bg-black hover:border-purple-400 hover:text-white hover:scale-110 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 text-xl py-8 px-10 min-w-[240px]"
                size="lg"
                asChild
              >
                <Link
                  href="#tracks"
                  className="flex items-center justify-center gap-3"
                >
                  <LineChart className="h-6 w-6" />
                  Explore Tracks
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full mt-16">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
                >
                  <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                    {stat.value}
                  </span>
                  <span className="text-gray-400 text-sm text-center mt-2">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About/Overview Section - Clean, Animated, Professional */}
      <SectionWrapper className="py-20">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
          className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-br from-gray-900/80 to-gray-950/90 border border-purple-700/20 shadow-2xl flex flex-col md:flex-row items-stretch overflow-hidden backdrop-blur-lg"
        >
          {/* Left: Animated Text */}
          <div className="flex-1 p-8 md:p-16 flex flex-col justify-center gap-8">
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-3 mb-2"
            >
              <span className="inline-block w-2 h-8 rounded-full bg-gradient-to-b from-purple-500 via-pink-500 to-indigo-500" />
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Accelerator Track
              </h2>
            </motion.div>
            <motion.h3
              variants={fadeInUp}
              className="text-lg font-medium text-purple-200 mb-2 leading-relaxed"
            >
              Backing visionary startups building real utility across leading
              blockchain ecosystems.
            </motion.h3>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-200 leading-relaxed max-w-xl"
            >
              Denarii Labs, in partnership with Red Beard Ventures, offers a
              24-week accelerator driving projects to build meaningful,
              token-powered applications on partner chains.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-2">
              <span className="font-semibold text-white mb-2 block">
                Program Benefits:
              </span>
              <ul className="flex flex-col gap-2 mt-1">
                {programBenefits.map((benefit, i) => (
                  <motion.li
                    key={i}
                    variants={fadeInUp}
                    className="flex items-center gap-2 text-gray-300 text-base font-medium"
                  >
                    <span className="text-purple-400 text-lg">•</span>
                    {benefit}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
          {/* Right: Animated Chain Sponsors Grid */}
          <motion.div
            variants={stagger}
            className="flex-1 min-h-[320px] bg-gradient-to-br from-purple-900/30 to-indigo-900/30 flex flex-col items-center justify-center p-8 md:p-14"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 w-full h-full max-w-none">
              {chainSponsors.map((sponsor, idx) => (
                <div
                  key={sponsor.name}
                  className="flex items-center justify-center w-full h-full"
                  style={{ minHeight: "80px" }}
                >
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name + " Logo"}
                    width={160}
                    height={80}
                    className="object-contain w-full h-auto max-h-20"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </SectionWrapper>

      {/* Cohorts & Tracks Section */}
      <section className="py-32 bg-black">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Cohort 003 — Now Accepting Applications
            </h2>
            {/* Cool styled tags for the 4 items */}
            <div className="flex flex-wrap justify-center gap-4 mb-2">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold text-sm shadow-md">
                <DollarSign className="w-4 h-4" /> $100K Funding
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold text-sm shadow-md">
                <TrendingUp className="w-4 h-4" /> Growth & GTM
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold text-sm shadow-md">
                <Wrench className="w-4 h-4" /> Tech Help
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold text-sm shadow-md">
                <NetworkIcon className="w-4 h-4" /> Partner Ecosystems
              </span>
            </div>
          </div>

          {/* Track Cards in a single row on desktop */}
          <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {tracks.map((track) => (
                <div
                  key={track.id}
                  className="group relative rounded-3xl bg-gradient-to-br from-gray-900/70 to-gray-950/80 border border-purple-700/20 p-8 flex flex-col items-center justify-between shadow-xl transition-all duration-200 hover:shadow-2xl hover:border-purple-400/40 min-h-[340px] backdrop-blur-sm"
                >
                  <div className="flex flex-col items-center text-center flex-1 w-full justify-start">
                    <div
                      className="flex items-center justify-center w-full"
                      style={{ height: "140px", marginBottom: "0" }}
                    >
                      <Image
                        src={track.logo}
                        alt={track.name + " Logo"}
                        width={260}
                        height={140}
                        className="object-contain w-full max-h-36"
                      />
                    </div>
                    <div
                      style={{
                        height: "36px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                      }}
                    >
                      <span className="text-base font-medium text-purple-400">
                        {track.type}
                      </span>
                    </div>
                  </div>
                  <Link
                    href={track.link}
                    className="inline-flex items-center justify-center w-full px-6 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 mt-2"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accelerator Process Timeline Section */}
      <SectionWrapper className="py-24">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          Accelerator Process Timeline
        </h2>
        <TimelineWheel steps={processTimeline} />
      </SectionWrapper>

      {/* Past Cohorts Section */}
      <SectionWrapper id="past-cohorts" className="bg-secondary/30">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          Past Cohorts
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {pastCohorts.map((cohort) => (
            <Card
              key={cohort.name}
              className="overflow-hidden bg-card transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <Image
                src={cohort.imageUrl}
                alt={cohort.name}
                width={600}
                height={400}
                className="aspect-[16/9] w-full object-cover"
                data-ai-hint={cohort.dataAiHint}
              />
              <CardHeader className="p-6">
                <CardTitle className="text-2xl">
                  {cohort.name} - {cohort.year}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <CardDescription>{cohort.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Compact Application CTA Section */}
      <SectionWrapper id="apply" className="py-16 relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-indigo-900/5" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Compact Header */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <Rocket className="h-6 w-6 text-purple-400" />
              <div className="h-px w-12 bg-gradient-to-r from-purple-500 to-indigo-500" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 leading-tight">
              Ready to Build the Future?
            </h2>
            
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Join Cohort 003 and get the support you need to succeed. Applications are now open!
            </p>

            {/* Compact CTA Button */}
            <CtaButton
              href="https://airtable.com/apphGHvP2djrz67Ij/page3HaBQAelT3whO/form"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-lg px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold shadow-lg shadow-purple-900/30 border-none transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/40"
            >
              <Users className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              Apply Now
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </CtaButton>
            
            <p className="text-foreground/60 text-sm max-w-xl mx-auto">
              Join the next cohort of successful Web3 startups. Application review begins immediately.
            </p>
          </motion.div>
        </div>
      </SectionWrapper>
    </main>
  );
}