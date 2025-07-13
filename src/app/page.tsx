import { motion } from "framer-motion";
import React, { Suspense } from 'react';
const LogoMarquee = React.lazy(() => import('@/components/ui/LogoMarquee').then(module => ({ default: module.LogoMarquee })));
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Zap, Shield, LineChart, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SparkleText } from "@/components/ui/sparkle-text";
import { ScrollBackground } from "@/components/ui/scroll-background";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionWrapper } from "@/components/common/section-wrapper";

const stats = [
  { label: "Companies Graduated", value: "15+" },
  { label: "Capital Supported", value: "$3M+" },
  { label: "Total Applicants", value: "1200+" },
  { label: "Ecosystem Partners", value: "50+" },
];

const features = [
  {
    icon: Zap,
    title: "Accelerator Program",
    description:
      "12-week intensive program to transform your Web3 project from concept to market-ready.",
    link: "/accelerator",
  },
  {
    icon: Shield,
    title: "Tokenomics Design",
    description:
      "Expert guidance in crafting sustainable token economies and incentive mechanisms.",
    link: "/consulting",
  },
  {
    icon: LineChart,
    title: "Market Strategy",
    description:
      "Data-driven insights to position your project for success in the Web3 ecosystem.",
    link: "/consulting",
  },
];

const testimonials = [
  {
    quote:
      "Denarii Labs transformed our vision into a thriving protocol with over $50M TVL.",
    author: "Sarah Chen",
    role: "Founder, DeFi Protocol",
    avatar:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
  },
  {
    quote:
      "Their tokenomics expertise helped us create a sustainable economic model that actually works.",
    author: "Michael Roberts",
    role: "CEO, GameFi Platform",
    avatar:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
  },
  {
    quote:
      "The network and mentorship we gained were invaluable for our growth and market presence.",
    author: "Elena Martinez",
    role: "CTO, Web3 Infrastructure",
    avatar:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
  },
];

const partners = [
  { name: "Ethereum Foundation", logo: "https://placehold.co/200x80.png" },
  { name: "Polygon", logo: "https://placehold.co/200x80.png" },
  { name: "Chainlink", logo: "https://placehold.co/200x80.png" },
  { name: "Arbitrum", logo: "https://placehold.co/200x80.png" },
  { name: "Optimism", logo: "https://placehold.co/200x80.png" },
  { name: "Avalanche", logo: "https://placehold.co/200x80.png" },
];

export default function Home() {
  return (
    <ScrollBackground>
      <main>
        {/* Hero Section - Accelerator + Consulting Focus */}
        <section className="py-24 md:py-32 w-full relative overflow-hidden min-h-[80vh] flex items-center">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16 md:gap-24">
              {/* Left: Text, CTAs */}
              <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-10">
                <div>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-600 animate-sparkle">
                      Accelerator & Consulting for Web3
                    </span>
                  </h1>
                  <p className="max-w-2xl text-lg text-gray-300 md:text-xl font-medium mb-8 mt-4">
                    Denarii Labs empowers founders and protocols with a
                    world-class accelerator and an expert tokenomics consulting
                    arm. Scale your Web3 project with capital, tokenomics, and
                    hands-on support—backed by Red Beard Ventures.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 w-full max-w-xl md:max-w-none mx-auto md:mx-0">
                  <Button
                    className="flex-1 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold hover:scale-110 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 text-xl py-8 px-10 min-w-[200px]"
                    size="lg"
                    asChild
                  >
                    <Link
                      href="/accelerator"
                      className="flex items-center justify-center gap-3"
                    >
                      <Zap className="h-6 w-6" />
                      Explore Accelerator
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 bg-transparent text-white border-purple-600 hover:bg-black hover:border-purple-400 hover:text-white hover:scale-110 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 text-xl py-8 px-10 min-w-[200px]"
                    size="lg"
                    asChild
                  >
                    <Link
                      href="/consulting"
                      className="flex items-center justify-center gap-3"
                    >
                      <LineChart className="h-6 w-6" />
                      Tokenomics Consulting
                    </Link>
                  </Button>
                </div>
              </div>
              {/* Right: Visual Placeholder */}
              <div className="w-full md:w-1/2 flex items-center justify-center mb-12 md:mb-0">
                {/* You can replace this with a Lottie animation, illustration, or logo marquee */}
                <div className="relative h-[320px] w-[320px] md:h-[400px] md:w-[400px] flex items-center justify-center">
                  <Image
                    src="https://placehold.co/400x400/222/fff?text=Denarii+Labs"
                    alt="Denarii Labs Visual Placeholder"
                    fill
                    className="object-contain rounded-2xl shadow-2xl border border-white/10"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Backed By Section */}
        <section className="py-24 bg-black">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left Column - RBV Card */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black p-8 border border-gray-800/50 h-full">
                  {/* Network pattern background */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `
                      linear-gradient(to right, #8b5cf6 1px, transparent 1px),
                      linear-gradient(to bottom, #8b5cf6 1px, transparent 1px)
                    `,
                      backgroundSize: "40px 40px",
                      maskImage:
                        "radial-gradient(ellipse at center, black 30%, transparent 70%)",
                    }}
                  />

                  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-8">
                    {/* RBV Logo */}
                    <div className="mb-8 w-40 h-40 relative">
                      <Image
                        src="/Logo/rbvlogo.png"
                        alt="Red Beard Ventures Logo"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Red Beard Ventures
                    </h3>
                    <p className="text-purple-300/80 text-sm font-medium">
                      Early-Stage Web3 Investment Firm
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="lg:pt-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Backed by{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                    Red Beard Ventures
                  </span>
                </h2>
                <p className="text-gray-300 text-lg mb-10 max-w-2xl">
                  Denarii Labs is proud to be backed by Red Beard Ventures — one
                  of Web3's most active and respected early-stage investment
                  firms. With a global presence and deep operator experience,
                  RBV empowers the next generation of decentralized innovation.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                  {[
                    { value: "80M+", label: "Capital Deployed" },
                    { value: "200+", label: "Portfolio Companies" },
                    { value: "5K+", label: "LPs Worldwide" },
                  ].map((stat, index) => (
                    <div key={stat.label} className="group">
                      <div className="relative pb-4 border-b-2 border-gray-800 group-hover:border-purple-500/50 transition-colors duration-300">
                        <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-400 mb-1">
                          {stat.value}
                        </div>
                        <div className="absolute -bottom-0.5 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                      </div>
                      <div className="mt-3 text-sm font-medium text-gray-400 uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Logo Rows Section */}
        <Suspense fallback={<div className="h-48" />}>
        <section className="py-16">
          <div className="w-full overflow-hidden">
            {/* Top Row - Scrolls right */}
            <div className="mb-12 group">
              <LogoMarquee direction="right" count={12} className="py-6" />
            </div>

            {/* Bottom Row - Scrolls left */}
            <div className="group">
              <LogoMarquee direction="left" count={12} className="py-6" />
            </div>
          </div>
        </section>
        </Suspense>
        {/* Features Section */}
        <SectionWrapper className="relative">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl mb-4">
              Comprehensive Support
            </h2>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              End-to-end support for Web3 projects, from ideation to market
              leadership.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
               <motion.div
                  key={feature.title}
                  className="bg-card/50 backdrop-blur border-primary/10 rounded-lg" // Card is a div, so we replicate its base styles
                  whileHover={{ y: -8, boxShadow: "0 10px 20px rgba(168, 85, 247, 0.1)" }}
                  transition={{ duration: 0.2, ease: "easeOut" }}>
                  
                <CardHeader>
                  <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">{feature.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="text-primary" asChild>
                    <Link href={feature.link}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Partners Section */}
        <SectionWrapper>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl mb-4">
              Trusted Partners
            </h2>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              Working with leading protocols and platforms in the Web3
              ecosystem.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner) => (
              <motion.div
                key={partner.name}
                className="flex items-center justify-center p-4"
                whileHover={{ scale: 1.1, filter: "brightness(1.1)" }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={200}
                  height={80}
                  className="opacity-50 transition-opacity duration-300"
                />
              </motion.div>
            ))}
          </div>
        </SectionWrapper>
      </main>
    </ScrollBackground>
  );
}
