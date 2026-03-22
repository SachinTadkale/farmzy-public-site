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
    <SectionWrapper id="features" className="py-20">
      <Container>
        <div className="text-center mb-20 space-y-4">
          <p className="text-primary font-bold tracking-widest uppercase text-sm">Powerful Ecosystem</p>
          <h2 className="text-4xl md:text-6xl max-w-3xl mx-auto">
            Everything you need <br />
            <span className="text-text-secondary">to scale your supply chain.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:auto-rows-[300px]">
          {/* Large Card */}
          <div className="md:col-span-8 md:row-span-2">
            <AnimatedCard className="h-full p-8 sm:p-12 flex flex-col justify-end bg-gradient-to-br from-primary/5 via-transparent to-transparent min-h-[400px] md:min-h-0">
              <Store className="w-12 h-12 sm:w-16 sm:h-16 text-primary mb-4 sm:mb-6" />
              <h3 className="text-3xl sm:text-4xl mb-4 sm:mb-6">Digital Marketplace</h3>
              <p className="text-lg sm:text-xl text-text-secondary max-w-md">
                Browse and trade verified agricultural produce from direct farmer collectives.
                Standardized quality checks and direct logistics included.
              </p>
            </AnimatedCard>
          </div>

          {/* Small Cards */}
          <div className="md:col-span-4 h-[250px] md:h-full">
            <AnimatedCard className="h-full p-6 sm:p-8 flex flex-col justify-between">
              <BrainCircuit className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              <div>
                <h3 className="text-xl sm:text-2xl mb-2">AI Assistant</h3>
                <p className="text-text-secondary line-clamp-2 text-sm sm:text-base">Predictive pricing and crop health insights powered by ML.</p>
              </div>
            </AnimatedCard>
          </div>

          <div className="md:col-span-4 h-[250px] md:h-full">
            <AnimatedCard className="h-full p-6 sm:p-8 flex flex-col justify-between">
              <Workflow className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              <div>
                <h3 className="text-xl sm:text-2xl mb-2">Service Discovery</h3>
                <p className="text-text-secondary line-clamp-2 text-sm sm:text-base">Logistics, warehousing, and testing labs at your fingertips.</p>
              </div>
            </AnimatedCard>
          </div>

          {/* Medium Card */}
          <div className="md:col-span-12">
            <AnimatedCard className="h-full p-8 sm:p-12 flex flex-col md:flex-row md:items-center justify-between bg-surface min-h-[300px] md:min-h-0">
              <div className="md:max-w-xl">
                 <Info className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4 sm:mb-6" />
                 <h3 className="text-2xl sm:text-3xl mb-4">Information Hub</h3>
                 <p className="text-base sm:text-lg text-text-secondary">
                   Access government schemes, weather alerts, and agricultural best practices tailored to your region.
                   Stay informed with real-time updates from verified sources.
                 </p>
              </div>
              <div className="mt-8 md:mt-0 px-6 sm:px-8 py-3 sm:py-4 rounded-xl border border-border bg-surface/50 text-xs sm:text-sm font-medium w-fit">
              <div className="flex items-center space-x-2">
                <Activity className="w-3 h-3 text-primary animate-pulse" />
                <span className="text-text-primary">Early Access Open</span>
              </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
