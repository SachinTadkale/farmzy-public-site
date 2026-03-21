"use client";

import { motion } from "framer-motion";
import Container from "../layout/container";
import SectionWrapper from "../layout/sectionwrapper";
import { CheckCircle2 } from "lucide-react";

export default function SolutionSection() {
  return (
    <SectionWrapper variant="primary-green" className="py-20 sm:py-32">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 items-center">
        <div className="space-y-6 sm:space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20"
          >
            <span className="text-xs sm:text-sm font-bold text-white">Introducing FarmZy</span>
          </motion.div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl text-white leading-tight">
            A radical shift in <br />
            <span className="text-primary italic">how we trade.</span>
          </h2>

          <p className="text-lg text-white/70 max-w-xl">
            FarmZy bypasses the friction of traditional supply chains. 
            By connecting farmers directly to organizations, we ensure higher margins for growers and lower costs for buyers.
          </p>

          <ul className="space-y-4">
            {[
              "Direct-to-Company connectivity",
              "Real-time market insights",
              "Smart sorting and inventory management",
              "Verified farmer credit profiles",
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 text-white/80"
              >
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative aspect-square lg:aspect-video rounded-3xl overflow-hidden border border-white/10 bg-black/20 backdrop-blur-3xl group"
        >
          {/* Dashboard Preview Mock */}
          <div className="absolute inset-0 p-8 flex flex-col space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="w-24 h-3 bg-white/20 rounded-full" />
              <div className="flex space-x-2">
                <div className="w-4 h-4 rounded-full bg-red-400/50" />
                <div className="w-4 h-4 rounded-full bg-yellow-400/50" />
                <div className="w-4 h-4 rounded-full bg-green-400/50" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="h-32 rounded-xl bg-white/5 border border-white/5 animate-pulse" />
              <div className="h-32 rounded-xl bg-white/5 border border-white/5" />
            </div>
            
            <div className="h-24 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <span className="text-primary font-bold text-sm tracking-widest uppercase">Direct Order Verified</span>
            </div>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#064e3b] via-transparent to-transparent opacity-60" />
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}
