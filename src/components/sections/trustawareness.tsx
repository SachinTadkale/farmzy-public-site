"use client";

import { motion } from "framer-motion";
import Container from "../layout/container";
import SectionWrapper from "../layout/sectionwrapper";

const TRUST_ITEMS = [
  { name: "Government Certified", icon: "🏛️" },
  { name: "Verified Farmer Groups", icon: "🚜" },
  { name: "Direct Settlement", icon: "💳" },
  { name: "Quality Assured", icon: "✨" },
];

export default function TrustAwareness() {
  return (
    <SectionWrapper className="bg-surface/30">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {TRUST_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl border border-white/5 bg-white/[0.02]"
            >
              <span className="text-3xl sm:text-4xl mb-4">{item.icon}</span>
              <h4 className="text-base sm:text-lg font-bold text-text-primary">{item.name}</h4>
              <p className="text-[10px] sm:text-xs text-text-secondary mt-2">100% compliant with Agri-norms</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 sm:mt-20 p-8 sm:p-12 rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10">
          <div className="max-w-xl text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl mb-4">Empowering the <span className="text-primaryitalic">Next Billion</span></h3>
            <p className="text-sm sm:text-base text-text-secondary">We are aligned with Digital India and government agricultural reforms to ensure every farmer has access to global markets.</p>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-end gap-3 sm:gap-6 grayscale opacity-60">
             {/* Simulating government/org badges */}
             <div className="px-4 sm:px-6 py-2 rounded-lg border border-white/20 text-[10px] sm:text-xs font-bold tracking-widest uppercase">MSME Verified</div>
             <div className="px-4 sm:px-6 py-2 rounded-lg border border-white/20 text-[10px] sm:text-xs font-bold tracking-widest uppercase">StartUp India</div>
             <div className="px-4 sm:px-6 py-2 rounded-lg border border-white/20 text-[10px] sm:text-xs font-bold tracking-widest uppercase">Agri-Stack</div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
