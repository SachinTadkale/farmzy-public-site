"use client";

import { motion } from "framer-motion";
import Container from "../layout/container";
import SectionWrapper from "../layout/sectionwrapper";
import AnimatedCard from "../ui/animatedcard";
import { Store, Workflow, BrainCircuit, Info, Activity } from "lucide-react";

const FEATURES = [
  {
    title: "Digital Marketplace",
    description: "Browse and trade verified agricultural produce from direct farmer collectives.",
    icon: Store,
    size: "lg", // Large card
  },
  {
    title: "Service Discovery",
    description: "Connect with logistics partners, warehousing solutions, and quality testing labs.",
    icon: Workflow,
    size: "sm",
  },
  {
    title: "AI Assistant",
    description: "Get predictive pricing and platform guidance powered by our custom ML models.",
    icon: BrainCircuit,
    size: "sm",
  },
  {
    title: "Information Hub",
    description: "Access government schemes, weather alerts, and agricultural best practices tailored to your region.",
    icon: Info,
    size: "md",
  },
];

export default function BentoFeatures() {
  return (
    <SectionWrapper id="features" className="py-20 sm:py-32 bg-background/50">
      <Container>
        <div className="text-center mb-16 sm:mb-24 space-y-4">
          <p className="text-primary font-bold tracking-[0.2em] uppercase text-xs sm:text-sm">Ecosystem</p>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black max-w-4xl mx-auto leading-[0.95] tracking-tighter">
            Everything you need <br />
            <span className="opacity-30">to scale your supply chain.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:auto-rows-[350px]">
          {/* Large Card */}
          <div className="md:col-span-8 md:row-span-2">
            <AnimatedCard className="h-full p-8 sm:p-14 flex flex-col justify-end bg-gradient-to-br from-primary/10 via-transparent to-transparent min-h-[450px] md:min-h-0 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 group-hover:rotate-0 transition-transform duration-700">
                  <Store className="w-64 h-64 text-primary" />
               </div>
              <Store className="w-12 h-12 sm:w-16 sm:h-16 text-primary mb-6 sm:mb-8" />
              <h3 className="text-3xl sm:text-5xl font-black mb-4 sm:mb-6 tracking-tight">Digital Marketplace</h3>
              <p className="text-lg sm:text-2xl text-text-secondary max-w-lg leading-relaxed">
                Browse and trade verified agricultural produce from direct farmer collectives.
                Standardized quality checks and direct logistics included.
              </p>
            </AnimatedCard>
          </div>

          {/* Small Cards */}
          <div className="md:col-span-4 h-auto md:h-full">
            <AnimatedCard className="h-full p-6 sm:p-10 flex flex-col justify-between min-h-[300px] md:min-h-0 bg-surface/40 backdrop-blur-md border-border/40">
              <BrainCircuit className="w-8 h-8 sm:w-12 sm:h-12 text-primary" />
              <div>
                <h3 className="text-2xl sm:text-3xl font-black mb-3 tracking-tight">AI Assistant</h3>
                <p className="text-text-secondary text-base sm:text-lg leading-relaxed">Predictive pricing and crop health insights powered by custom ML.</p>
              </div>
            </AnimatedCard>
          </div>

          <div className="md:col-span-4 h-auto md:h-full">
            <AnimatedCard className="h-full p-6 sm:p-10 flex flex-col justify-between min-h-[300px] md:min-h-0 bg-surface/40 backdrop-blur-md border-border/40">
              <Workflow className="w-8 h-8 sm:w-12 sm:h-12 text-primary" />
              <div>
                <h3 className="text-2xl sm:text-3xl font-black mb-3 tracking-tight">Service Discovery</h3>
                <p className="text-text-secondary text-base sm:text-lg leading-relaxed">Logistics, warehousing, and testing labs at your fingertips.</p>
              </div>
            </AnimatedCard>
          </div>

          {/* Medium Card */}
          <div className="md:col-span-12">
            <AnimatedCard className="h-full p-8 sm:p-16 flex flex-col md:flex-row md:items-center justify-between bg-surface/60 backdrop-blur-xl border-border/40 min-h-[350px] md:min-h-0">
              <div className="md:max-w-2xl">
                 <Info className="w-10 h-10 sm:w-14 sm:h-14 text-primary mb-6 sm:mb-8" />
                 <h3 className="text-3xl sm:text-4xl font-black mb-4 sm:mb-6 tracking-tight">Information Hub</h3>
                 <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
                   Access government schemes, weather alerts, and agricultural best practices tailored to your region.
                   Stay informed with real-time updates from verified sources.
                 </p>
              </div>
              <div className="mt-8 md:mt-0 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl border border-primary/20 bg-primary/5 text-sm sm:text-base font-bold w-fit">
              <div className="flex items-center space-x-3">
                <Activity className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-primary uppercase tracking-widest text-xs">System Live</span>
              </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
