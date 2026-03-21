"use client";

import { motion } from "framer-motion";
import Container from "../layout/container";
import SectionWrapper from "../layout/sectionwrapper";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <SectionWrapper className="py-20 sm:py-32 overflow-hidden bg-[#020617]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[300px] sm:h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" />
      
      <Container className="relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
           className="space-y-8 sm:space-y-10"
        >
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter max-w-4xl mx-auto leading-tight">
            The future of agriculture is <span className="text-primary italic">Direct.</span>
          </h2>
          
          <p className="text-base sm:text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto px-4 sm:px-0">
            Join 12,000+ farmers and 500+ companies already trading on FarmZy. 
            No middlemen, just radical transparency.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-4 sm:pt-6">
            <button className="group w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-primary text-background font-bold text-lg sm:text-xl hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(126,217,87,0.4)]">
              <span className="flex items-center justify-center">
                Start Selling Directly
                <ArrowRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white font-semibold text-lg sm:text-xl hover:bg-white/10 transition-colors">
              Talk to Sales
            </button>
          </div>
          
          <div className="pt-12 sm:pt-20 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 opacity-40">
             <div className="text-[10px] sm:text-sm font-bold tracking-widest uppercase">Secured by AES-256</div>
             <div className="text-[10px] sm:text-sm font-bold tracking-widest uppercase">Verified KYC</div>
             <div className="text-[10px] sm:text-sm font-bold tracking-widest uppercase">24/7 Support</div>
             <div className="text-[10px] sm:text-sm font-bold tracking-widest uppercase">IoT Verified</div>
          </div>
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}
