"use client";

import { motion } from "framer-motion";
import Container from "../layout/container";
import SectionWrapper from "../layout/sectionwrapper";
import AnimatedCard from "../ui/animatedcard";
import { X, Check } from "lucide-react";

const COMPARISON = [
  { feature: "Profit Margins", traditional: "Low (Multiple Middlemen)", farmzy: "High (Direct Connect)" },
  { feature: "Payment Cycle", traditional: "15-45 Days", farmzy: "Instant (within 24 hours)" },
  { feature: "Transparency", traditional: "Opaque / Fragmented", farmzy: "Radical / Tech-driven" },
  { feature: "Logistics", traditional: "Unreliable / Expensive", farmzy: "Integrated / Optimized" },
];

export default function Benefits() {
  return (
    <SectionWrapper id="benefits">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl mb-6">Why Choose <span className="text-primary">FarmZy?</span></h2>
          <p className="text-text-secondary max-w-xl mx-auto">See how we stack up against the traditional agricultural supply chain.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <AnimatedCard className="p-6 sm:p-10 border-white/5 bg-white/[0.01]">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-text-secondary/80">Traditional Way</h3>
            <div className="space-y-4 sm:space-y-6">
              {COMPARISON.map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/5 space-y-2 sm:space-y-0">
                  <span className="text-sm sm:text-base text-text-secondary/60">{item.feature}</span>
                  <div className="flex items-center space-x-2 text-red-400/80">
                    <X className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="font-medium text-xs sm:text-sm">{item.traditional}</span>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedCard>

          <AnimatedCard className="p-6 sm:p-10 border-primary/20 bg-primary/[0.03]">
             <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-primary">FarmZy Edge</h3>
             <div className="space-y-4 sm:space-y-6">
              {COMPARISON.map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/5 space-y-2 sm:space-y-0">
                  <span className="text-sm sm:text-base text-text-secondary/60">{item.feature}</span>
                  <div className="flex items-center space-x-2 text-primary">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="font-bold text-xs sm:text-sm">{item.farmzy}</span>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedCard>
        </div>
      </Container>
    </SectionWrapper>
  );
}
