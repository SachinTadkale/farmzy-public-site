"use client";

import { motion } from "framer-motion";
import Container from "../layout/container";
import SectionWrapper from "../layout/sectionwrapper";

import { Store, BrainCircuit, CreditCard, Truck } from "lucide-react";

const TRUST_ITEMS = [
  { 
    name: "Direct Marketplace", 
    icon: <Store className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />,
    description: "Sell crops directly to companies without middlemen."
  },
  { 
    name: "FarmZy AI Assistant", 
    icon: <BrainCircuit className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />,
    description: "Get smart assistance for selling, pricing, and platform guidance."
  },
  { 
    name: "Transparent Payments", 
    icon: <CreditCard className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />,
    description: "Track orders and payments with full visibility."
  },
  { 
    name: "Flexible Delivery", 
    icon: <Truck className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />,
    description: "Manage delivery through companies or local partners."
  },
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
              className="flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
            >
              <div className="mb-4">{item.icon}</div>
              <h4 className="text-base sm:text-lg font-bold text-text-primary mb-2">{item.name}</h4>
              <p className="text-[10px] sm:text-xs text-text-secondary leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 sm:mt-20 p-8 sm:p-12 rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10">
          <div className="max-w-2xl text-center lg:text-left">
            <h3 className="text-2xl sm:text-4xl mb-4 font-bold">Building the Future of <br className="hidden sm:block" /> <span className="text-primary italic">Agricultural Trade</span></h3>
            <p className="text-sm sm:text-lg text-text-secondary leading-relaxed">
              FarmZy is a startup focused on connecting farmers directly with businesses. 
              Our goal is to eliminate middlemen, increase farmer profits, and bring transparency to agricultural trade.
            </p>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-end gap-3 sm:gap-4">
             <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] sm:text-xs font-bold tracking-widest uppercase text-text-secondary">Direct Trade</div>
             <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] sm:text-xs font-bold tracking-widest uppercase text-text-secondary">Farmer First</div>
             <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] sm:text-xs font-bold tracking-widest uppercase text-text-secondary">Transparent Pricing</div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
