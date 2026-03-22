"use client";

import { motion } from "framer-motion";
import Container from "../layout/container";
import SectionWrapper from "../layout/sectionwrapper";

export default function StartupTransparency() {
  return (
    <SectionWrapper className="py-20 bg-surface/10 relative overflow-hidden">
      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-50 pointer-events-none" />
      
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-8 relative z-10"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-xs sm:text-sm font-bold text-primary">🚀 We're Just Getting Started</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Startup Transparency
          </h2>

          <p className="text-base sm:text-xl text-text-secondary leading-relaxed font-medium">
            FarmZy is currently in its early stage. We're building the platform with real farmers and businesses. 
            Join early and help shape the future of agricultural trade.
          </p>

          <div className="pt-4">
            <div className="p-1 rounded-2xl bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 inline-block">
               <div className="px-8 py-4 rounded-[14px] bg-background/80 backdrop-blur-xl border border-white/5">
                 <p className="text-sm sm:text-base font-semibold text-text-primary">
                   Direct Connection. No Middlemen. Total Transparency.
                 </p>
               </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}
