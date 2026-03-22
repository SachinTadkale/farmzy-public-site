"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Container from "../layout/container";
import SectionWrapper from "../layout/sectionwrapper";
import AnimatedCard from "../ui/animatedcard";
import { X, Check, ShieldCheck, Users } from "lucide-react";

const OUTCOMES = [
  {
    title: "Better Earnings",
    traditional: {
      text: "Your profit gets reduced at every step",
      icon: X,
      color: "red"
    },
    farmzy: {
      text: "You keep full control of your price and earnings",
      icon: Check,
      color: "primary"
    }
  },
  {
    title: "Faster Payments",
    traditional: {
      text: "You wait weeks to receive payments",
      icon: X,
      color: "red"
    },
    farmzy: {
      text: "Payments are processed quickly and securely",
      icon: Check,
      color: "primary"
    }
  },
  {
    title: "Full Transparency",
    traditional: {
      text: "You don't know who you're selling to",
      icon: X,
      color: "red"
    },
    farmzy: {
      text: "You see buyers, pricing, and deals clearly",
      icon: Check,
      color: "primary"
    }
  },
  {
    title: "Reliable Delivery",
    traditional: {
      text: "Transport is unpredictable and costly",
      icon: X,
      color: "red"
    },
    farmzy: {
      text: "Logistics are managed and optimized for you",
      icon: Check,
      color: "primary"
    }
  }
];

const TRUST_MILESTONES = [
  "Early access across Maharashtra",
  "Growing network of verified companies",
  "Built for direct farmer–company trade"
];

const TRUST_BADGES = [
  { icon: ShieldCheck, text: "Verified Companies Only" },
  { icon: Check, text: "Secure Payments" },
  { icon: Users, text: "Direct Trade Network" }
];

function BenefitCard({ children, isPremium, className }: { children: React.ReactNode, isPremium?: boolean, className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 50 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!isPremium || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = event.clientX - rect.left;
    const mouseYPos = event.clientY - rect.top;

    const xPct = (mouseXPos / width - 0.5) * 20;
    const yPct = (mouseYPos / height - 0.5) * -20;

    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative rounded-3xl border overflow-hidden transition-all duration-300 ${className}`}
    >
      {isPremium && (
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: useTransform(
              [mouseX, mouseY],
              ([mx, my]) => `radial-gradient(circle at ${((mx as number) / 20 + 0.5) * 100}% ${((my as number) / -20 + 0.5) * 100}%, rgba(126, 217, 87, 0.08), transparent 80%)`
            ),
          }}
        />
      )}
      {children}
    </motion.div>
  );
}

export default function Benefits() {
  return (
    <SectionWrapper id="benefits" className="bg-surface relative overflow-hidden pt-24 lg:pt-32 pb-20 lg:pb-32">
      {/* Background Atmosphere */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <Container>
        <div className="text-center mb-20 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span className="text-[11px] font-bold text-primary uppercase tracking-[0.2em]">Authentic Trade Comparison</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl mb-8 font-display text-text-primary tracking-tight">
            Why Choose <span className="text-primary italic">FarmZy?</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed font-medium">
            Instead of comparing features, compare <span className="text-text-primary underline decoration-primary/30 underline-offset-8">real outcomes</span>. See why farmers are choosing a better way to trade.
          </p>
        </div>

        {/* Outcome Blocks */}
        <div className="space-y-6 lg:space-y-10 max-w-5xl mx-auto">
          {OUTCOMES.map((block, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="group"
            >
              {/* Outcome Title */}
              <div className="flex items-center space-x-4 mb-6 px-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
                <h3 className="text-lg font-bold text-text-primary/40 uppercase tracking-[0.3em] whitespace-nowrap">
                  {block.title}
                </h3>
                <div className="h-px flex-1 bg-gradient-to-r from-border via-border to-transparent" />
              </div>

              {/* Stacked Comparison Card */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 items-stretch">
                {/* Traditional Side */}
                <div className="relative p-6 lg:p-10 rounded-[32px] bg-surface/30 border border-border opacity-50 grayscale hover:opacity-70 transition-all duration-500 overflow-hidden">
                   <div className="flex items-start space-x-5 relative z-10">
                      <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20 flex-shrink-0">
                        <X className="w-6 h-6 text-red-400/60" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-red-400/40 uppercase tracking-widest">Traditional Way</span>
                        <p className="text-lg font-medium text-text-primary/50 leading-tight italic">
                          "{block.traditional.text}"
                        </p>
                      </div>
                   </div>
                </div>

                {/* FarmZy Side */}
                <div className="relative p-6 lg:p-10 rounded-[32px] bg-primary/5 border border-primary/20 shadow-xl group/card hover:bg-primary/10 hover:border-primary/40 transition-all duration-500 overflow-hidden hover:-translate-y-1 translate-z-0">
                   {/* Background Glow Reflector */}
                   <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity" />
                   
                   <div className="flex items-start space-x-5 relative z-10">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 flex-shrink-0 shadow-[0_0_20px_rgba(126,217,87,0.2)] group-hover/card:scale-110 transition-transform duration-500">
                        <Check className="w-6 h-6 text-primary" strokeWidth={3} />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">FarmZy Advantage</span>
                        <p className="text-xl font-bold text-text-primary leading-tight">
                          {block.farmzy.text}
                        </p>
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Authentic Trust Strip */}
        <div className="mt-24 lg:mt-40 border-t border-border pt-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
             <div className="flex flex-wrap justify-center lg:justify-start gap-3 max-w-xl">
               {TRUST_MILESTONES.map((text, i) => (
                 <span key={i} className="px-5 py-2 rounded-full bg-surface border border-border text-[10px] font-bold text-text-primary/40 uppercase tracking-[0.2em] whitespace-nowrap">
                   {text}
                 </span>
               ))}
             </div>

             <div className="flex flex-wrap justify-center lg:justify-end gap-3 sm:gap-4">
                {TRUST_BADGES.map((badge, i) => (
                  <div key={i} className="px-6 py-4 rounded-3xl bg-surface/50 border border-border flex items-center space-x-4 backdrop-blur-3xl hover:border-primary/30 transition-all hover:scale-105 group/badge cursor-default">
                     <badge.icon className="w-6 h-6 text-primary group-hover/badge:scale-110 transition-transform duration-500" />
                     <span className="text-[11px] font-bold text-text-primary uppercase tracking-widest leading-none">{badge.text}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
