"use client";
import Image from "next/image";
import { SectionWrapper } from "@/components/common/section-wrapper";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CalendarDays, Users, Target, Sparkles, Zap, Network, DollarSign, CheckCircle, CircleCheck, ArrowRight, Star, Rocket, Shield, Code, Clock, MapPin, TrendingUp, Award, Globe, Timer } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CtaButton } from "@/components/common/cta-button";
import { motion } from "framer-motion";
import type { ElementType } from "react";

type LucideIcon = ElementType;

interface AcceleratorPageProps {
  title: string;
  description: string;
  overview: string;
  focusAreas: string[];
  highlights: string[];
  duration: string;
  format: string;
  cohort: string;
  target: string;
  benefits: string[];
  ctaTitle: string;
  ctaDescription: string;
  icon: LucideIcon; // <--- NOW CORRECT
  technicalDetails?: {
    title: string;
    description: string;
    features: string[];
    website?: string;
  };
  whyBuildTitle?: string;
  learnMoreUrl?: string;
  applyUrl?: string;
}

interface ProgramDetail {
  label: string;
  value: string;
  icon: LucideIcon; // <--- NOW CORRECT
  className: string;
}


export default function AcceleratorTemplate({
  title,
  description,
  overview,
  focusAreas,
  highlights,
  duration,
  format,
  cohort,
  target,
  benefits,
  ctaTitle,
  ctaDescription,
  icon: Icon,
  technicalDetails,
  whyBuildTitle,
  learnMoreUrl,
  applyUrl,
}: AcceleratorPageProps) {
  const programDetails: ProgramDetail[] = [
    { 
      label: "Application Status", 
      value: "OPEN", 
      icon: CircleCheck,
      className: "text-green-400"
    },
    { 
      label: "Investment", 
      value: "$100,000", 
      icon: DollarSign,
      className: "text-purple-400"
    },
    { 
      label: "Location", 
      value: "Remote", 
      icon: MapPin,
      className: "text-purple-400"
    },
    { 
      label: "Duration", 
      value: "12 weeks", 
      icon: Clock,
      className: "text-purple-400"
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <SectionWrapper className="relative py-16 sm:py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="max-w-4xl">
            <h1 className="mb-6 sm:mb-8 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-600 animate-sparkle break-words">
              {title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 leading-relaxed">{description}</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12 mt-8 lg:mt-0">
            <div className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px]">
              {title.includes('Avalanche') && (
                <Image 
                  src="/Sponsors/avalanchelogo.png" 
                  alt="Avalanche Logo" 
                  fill
                  className="object-contain"
                />
              )}
              {title.includes('Wire') && (
                <Image 
                  src="/Sponsors/wirelogo.png" 
                  alt="Wire Network Logo"
                  fill 
                  className="object-contain"
                />
              )}
              {title.includes('XION') && (
                <Image 
                  src="/Chains/xion.png" 
                  alt="XION Logo" 
                  fill
                  className="object-contain"
                />
              )}
              {title.includes('F Ecosystem') && (
                <Image
                  src="/Chains/fchain.png" 
                  alt="F Ecosystem Logo" 
                  fill
                  className="object-contain"
                />
              )}
            </div>
            <div className="h-[2px] w-[200px] sm:h-[250px] sm:w-[2px] lg:h-[300px] bg-gradient-to-r sm:bg-gradient-to-b from-purple-500/50 via-pink-500/50 to-indigo-500/50" />
            <div className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px]">
              <Image 
                src="/Logo/Denarii-Logo_Stacked-Vertical -white.svg" 
                alt="Denarii Logo" 
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Program Overview and Details Section */}
      <SectionWrapper className="py-32">
        <div className="grid gap-20 lg:grid-cols-3 items-stretch">
          {/* Overview and Tags */}
          <div className="lg:col-span-2 h-full flex flex-col">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 h-full flex flex-col">
              <CardHeader className="pb-4">
                <CardTitle className="text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-600 leading-tight">
                  Program Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <p className="whitespace-pre-line text-foreground/90 leading-relaxed text-lg md:text-xl">
                    {overview}
                  </p>
                  {/* Types of Projects Section - REVERTED TO ORIGINAL */}
                  <div className="pt-4 border-t border-primary/20 mt-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-xl bg-gradient-to-r from-purple-500/10 to-indigo-500/10">
                        <Rocket className="h-6 w-6 text-purple-400" />
                      </div>
                      <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-600 drop-shadow-md">
                        Types of Projects We're Looking For
                      </h3>
                    </div>
                    <div className="grid gap-5">
                      {/* Map tags to their descriptions for Wire Network */}
                      {title.includes('Wire') ? ([
                        { tag: 'AI Agent-based Projects', desc: 'Platforms for autonomous transactions' },
                        { tag: 'AI-Powered DeFi', desc: 'Lending, trading, and liquidity platforms driven by AI' },
                        { tag: 'Gaming Ecosystems', desc: 'Real-time games requiring high-speed transactions' },
                        { tag: 'Universal Liquidity', desc: 'Cross-chain marketplaces for assets and NFTs' },
                        { tag: 'Developer Tools', desc: 'SDKs, APIs, and modular components' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/30 to-indigo-600/30 text-purple-100 font-semibold text-base shadow-md">
                            <CheckCircle className="h-4 w-4 text-purple-400" />
                            {item.tag}
                          </span>
                          <span className="text-foreground/70 text-sm sm:ml-3 sm:mt-0 mt-1">
                            {item.desc}
                          </span>
                        </div>
                      ))) : title.includes('Avalanche') ? ([
                        { tag: 'Financial Services', desc: 'On-chain finance, tokenized assets, and DeFi applications.' },
                        { tag: 'Enterprise Solutions', desc: 'Permissioned blockchains and custom Layer 1s for specific industries.' },
                        { tag: 'Sustainability-Focused Projects', desc: 'Blockchain applications with ESG goals leveraging eco-friendly consensus.' },
                        { tag: 'Gaming & Digital Assets', desc: 'High-speed, low-cost platforms for gaming and NFTs.' },
                        { tag: 'Data-Intensive Applications', desc: 'Robust transaction processing and privacy-focused projects.' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/30 to-indigo-600/30 text-purple-100 font-semibold text-base shadow-md">
                            <CheckCircle className="h-4 w-4 text-purple-400" />
                            {item.tag}
                          </span>
                          <span className="text-foreground/70 text-sm sm:ml-3 sm:mt-0 mt-1">
                            {item.desc}
                          </span>
                        </div>
                      ))) : title.includes('XION') ? ([
                        { tag: 'Consumer Platforms', desc: 'E-commerce, payments, and services for non-crypto-native users.' },
                        { tag: 'Social & Community Tools', desc: 'SocialFi apps, creator rewards, and decentralized engagement.' },
                        { tag: 'Entertainment & Gaming', desc: 'Music, gaming, and event platforms with immersive Web3 features.' },
                        { tag: 'Asset Tokenization', desc: 'Real-world asset linking via NFC chips, digital twins, and collectibles.' },
                        { tag: 'Web3 Enhancements', desc: 'Crypto payments, on-chain subscriptions, and privacy-preserving tools.' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/30 to-indigo-600/30 text-purple-100 font-semibold text-base shadow-md">
                            <CheckCircle className="h-4 w-4 text-purple-400" />
                            {item.tag}
                          </span>
                          <span className="text-foreground/70 text-sm sm:ml-3 sm:mt-0 mt-1">
                            {item.desc}
                          </span>
                        </div>
                      ))) : title.includes('F Ecosystem') ? ([
                        { tag: 'RWA Protocols', desc: 'Agent-driven access to tokenized real-world assets and collectibles.' },
                        { tag: 'DePIN Infrastructure', desc: 'Decentralized physical networks powering agentic automation.' },
                        { tag: 'Automated Yield', desc: 'Low-risk yield strategies optimized by autonomous agents.' },
                        { tag: 'AI-Powered GTM', desc: 'Agent-led growth, distribution, and go-to-market execution.' },
                        { tag: 'Intelligent Simulations', desc: 'Environments for agent coordination, testing, and strategy modeling.' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/30 to-indigo-600/30 text-purple-100 font-semibold text-base shadow-md">
                            <CheckCircle className="h-4 w-4 text-purple-400" />
                            {item.tag}
                          </span>
                          <span className="text-foreground/70 text-sm sm:ml-3 sm:mt-0 mt-1">
                            {item.desc}
                          </span>
                        </div>
                      ))) : (
                        focusAreas.map((area, index) => (
                          <span key={index} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/30 to-indigo-600/30 text-purple-100 font-semibold text-base shadow-md">
                            <CheckCircle className="h-4 w-4 text-purple-400" />
                            {area}
                          </span>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Program Details */}
          <div className="lg:col-span-1">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-indigo-500/10">
                    <CalendarDays className="h-6 w-6 text-purple-400" />
                  </div>
                  <CardTitle className="text-2xl">
                    Program Details
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {programDetails.map((item: ProgramDetail, index: number) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-purple-500/5 to-indigo-500/5 hover:from-purple-500/10 hover:to-indigo-500/10 transition-all duration-300">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/10 to-indigo-500/10">
                      <item.icon className={`h-5 w-5 ${item.className}`} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-lg">{item.label}</p>
                      <p className="text-foreground/70">{item.value}</p>
                    </div>
                  </div>
                ))}
                <a 
                  href={applyUrl || "/accelerator#apply"} 
                  className="w-full text-lg px-6 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white shadow-lg shadow-purple-900/30 hover:scale-105 transition-all duration-300 mt-4 flex items-center justify-center gap-2 rounded-xl font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </SectionWrapper>

      {/* Enhanced Technical Details Section */}
      {technicalDetails && (
        <SectionWrapper className="py-32">
          <div className="relative">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-indigo-900/10 rounded-3xl" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
            
            <Card className="relative bg-gradient-to-br from-gray-900/80 to-gray-950/90 backdrop-blur-xl border border-purple-500/20 shadow-2xl shadow-purple-900/20 overflow-hidden">
              {/* Animated border gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-indigo-500/20 opacity-50 animate-pulse" />
              <div className="absolute inset-[1px] bg-gradient-to-br from-gray-900/90 to-gray-950/95 rounded-[inherit]" />
              
              <CardHeader className="relative pb-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-6"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl blur-lg opacity-50" />
                    <div className="relative p-4 rounded-2xl bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20">
                      <Code className="h-10 w-10 text-purple-400" />
                    </div>
                  </div>
                  <div>
                    <CardTitle className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 leading-tight">
                      {technicalDetails.title}
                    </CardTitle>
                    <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-4" />
                  </div>
                </motion.div>
              </CardHeader>
              
              <CardContent className="relative space-y-10">
                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="relative"
                >
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full" />
                  <p className="text-xl text-foreground/90 leading-relaxed pl-8">
                    {technicalDetails.description}
                  </p>
                </motion.div>

                {/* Core Features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Sparkles className="h-6 w-6 text-purple-400" />
                    Core Features
                  </h3>
                  <div className="grid gap-6">
                    {technicalDetails.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="group flex items-start gap-4 p-6 rounded-xl bg-gradient-to-r from-purple-500/5 to-indigo-500/5 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
                      >
                        <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-r from-purple-500/20 to-indigo-500/20 group-hover:scale-110 transition-transform duration-300">
                          <Zap className="h-6 w-6 text-purple-400" />
                        </div>
                        <p className="text-lg text-foreground/90 leading-relaxed">
                          {feature}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Learn More Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="flex justify-center pt-8"
                >
                  <CtaButton
                    href={learnMoreUrl || technicalDetails?.website || "#"}
                    className="group relative text-xl px-12 py-6 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white font-bold shadow-2xl shadow-purple-900/30 border-none transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/40 overflow-hidden"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-center gap-3">
                      Learn More
                      <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </CtaButton>
                </motion.div>
              </CardContent>
            </Card>
          </div>
        </SectionWrapper>
      )}

      {/* Enhanced Why Build Section */}
      <SectionWrapper className="py-32">
        <div className="relative">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-transparent to-purple-900/10 rounded-3xl" />
          <div className="absolute top-1/4 right-0 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
          
          <div className="relative max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Enhanced Text */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl blur-lg opacity-50" />
                      <div className="relative p-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20">
                        <Rocket className="h-8 w-8 text-purple-400" />
                      </div>
                    </div>
                    <div className="h-1 flex-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" />
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 leading-tight">
                    {whyBuildTitle ? whyBuildTitle : `Why Build on ${title.split(' ')[0]}?`}
                  </h3>
                  
                  <div className="relative">
                    <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full" />
                    <p className="text-xl text-foreground/80 leading-relaxed pl-8">
                      {overview.split('\n\n')[0]}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Enhanced Visual Cards */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 gap-6"
              >
                {highlights.slice(0, 5).map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="group relative overflow-hidden bg-gradient-to-br from-gray-900/80 to-gray-950/90 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
                      {/* Animated background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <CardContent className="relative p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                            <div className="relative p-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 group-hover:scale-110 transition-transform duration-300">
                              {index === 0 && <Zap className="h-6 w-6 text-purple-400" />}
                              {index === 1 && <Network className="h-6 w-6 text-purple-400" />}
                              {index === 2 && <DollarSign className="h-6 w-6 text-purple-400" />}
                              {index === 3 && <Code className="h-6 w-6 text-purple-400" />}
                              {index === 4 && <Shield className="h-6 w-6 text-purple-400" />}
                            </div>
                          </div>
                          <div className="flex-1">
                            <p className="text-lg text-foreground/90 leading-relaxed group-hover:text-white transition-colors duration-300">
                              {highlight}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Compact CTA Section */}
      <SectionWrapper className="py-16 relative overflow-hidden">
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
              <Target className="h-6 w-6 text-purple-400" />
              <div className="h-px w-12 bg-gradient-to-r from-purple-500 to-indigo-500" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 leading-tight">
              {ctaTitle}
            </h2>
            
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              {ctaDescription}
            </p>

            {/* Compact CTA Button */}
            <CtaButton
              href={applyUrl || "/accelerator#apply"}
              className="group inline-flex items-center gap-2 text-lg px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold shadow-lg shadow-purple-900/30 border-none transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/40"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Rocket className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              Apply Now
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </CtaButton>
            
            <p className="text-foreground/60 text-sm max-w-xl mx-auto">
              Join the next cohort of successful Web3 startups. Application review begins immediately.
            </p>
          </motion.div>
        </div>
      </SectionWrapper>
    </>
  );
}