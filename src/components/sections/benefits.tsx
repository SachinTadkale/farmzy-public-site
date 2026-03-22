"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
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
    <SectionWrapper id="benefits">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl mb-6 font-bold tracking-tight text-white">Why Choose <span className="text-primary italic">FarmZy?</span></h2>
          <p className="text-text-secondary max-w-xl mx-auto text-lg leading-relaxed">See how we stack up against the traditional agricultural supply chain.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <BenefitCard className="group p-6 sm:p-10 border-white/5 bg-white/[0.01]">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-text-secondary/80 tracking-tight">Traditional Way</h3>
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
          </BenefitCard>

          <BenefitCard isPremium className="group p-6 sm:p-10 border-primary/20 bg-primary/[0.03]">
             <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-primary tracking-tight">FarmZy Edge</h3>
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
          </BenefitCard>
        </div>
      </Container>
    </SectionWrapper>
  );
}
