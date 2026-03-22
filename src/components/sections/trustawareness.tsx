"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "../layout/container";
import SectionWrapper from "../layout/sectionwrapper";
import { ShieldCheck, Database, Languages, RefreshCw, Sparkles } from "lucide-react";

const PILLARS = [
  {
    id: "security",
    title: "Secure by Design",
    description: "End-to-end protection for every transaction and user access. Our architecture follows strict zero-trust principles to safeguard user data at scale.",
    icon: ShieldCheck,
  },
  {
    id: "integrity",
    title: "Reliable Data Integrity",
    description: "State-of-the-art tracking ensures every platform activity and payment state is consistent. No data mismatch, no lost records—absolute accountability.",
    icon: Database,
  },
  {
    id: "multilingual",
    title: "Multilingual Experience",
    description: "Built for India's diversity. Seamless support for multiple regional languages ensures every farmer can interact with the platform in their native tongue.",
    icon: Languages,
  },
  {
    id: "backup",
    title: "Backup & Recovery",
    description: "Automatic real-time data persistence with redundant multi-region failovers. Your records are protected against any system failure or disruption.",
    icon: RefreshCw,
  },
  {
    id: "ai",
    title: "AI-Powered Assistance",
    description: "Smart, localized insights for pricing and trading decisions. Our intelligence layer helps navigate market fluctuations with data-driven confidence.",
    icon: Sparkles,
  },
];

function PillarRow({ pillar, index }: { pillar: typeof PILLARS[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="group relative border-b border-border/50 last:border-0"
    >
      {/* Accent Line */}
      <div className="absolute inset-y-0 left-0 w-[2px] bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-6 lg:gap-20 py-10 lg:py-14 px-6 lg:px-10 transition-colors duration-500 group-hover:bg-surface/30">
        {/* Left: Icon + Title */}
        <div className="lg:col-span-4 flex items-center space-x-6">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center group-hover:border-primary/30 transition-all duration-500">
            <pillar.icon className="w-5 h-5 text-text-primary/40 group-hover:text-primary transition-colors duration-500" strokeWidth={1.5} />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight group-hover:text-primary transition-colors duration-500">
            {pillar.title}
          </h3>
        </div>

        {/* Right: Description */}
        <div className="lg:col-span-8">
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity duration-500 max-w-2xl">
            {pillar.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function TrustAwareness() {
  return (
    <SectionWrapper id="platform" className="bg-background relative overflow-hidden py-24 lg:py-48">
      {/* Sharp Technical Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.2] -z-10" />

      <Container>
        <div className="mb-20 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6"
          >
            Engineering & Intelligence
          </motion.div>
          <h2 className="text-4xl md:text-7xl font-display text-text-primary tracking-tighter leading-none mb-8">
            Built Like a <br /> <span className="text-primary italic">Real Platform.</span>
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl leading-relaxed opacity-80">
            Engineered for <span className="text-text-primary font-medium">security, intelligence, and reliability</span> — designed for real-world agricultural trade.
          </p>
        </div>

        <div className="relative border-t border-border/50">
          {PILLARS.map((pillar, index) => (
            <PillarRow key={pillar.id} pillar={pillar} index={index} />
          ))}
        </div>
        
      </Container>
    </SectionWrapper>
  );
}
