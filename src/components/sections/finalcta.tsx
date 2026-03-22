"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Container from "../layout/container";
import SectionWrapper from "../layout/sectionwrapper";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 50 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
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
    <SectionWrapper className="py-20 sm:py-32 overflow-hidden bg-[#020617] relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Static Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[300px] sm:h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10" />
      </div>

      <Container className="relative z-10">
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="group relative p-12 sm:p-20 rounded-[3rem] border border-white/5 bg-white/[0.02] backdrop-blur-xl overflow-hidden text-center"
        >
          {/* High-Impact Green Spotlight */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{
              background: useTransform(
                [mouseX, mouseY],
                ([mx, my]) => `radial-gradient(circle at ${((mx as number) / 20 + 0.5) * 100}% ${((my as number) / -20 + 0.5) * 100}%, rgba(126, 217, 87, 0.12), transparent 70%)`
              ),
            }}
          />

          <div className="relative z-10 space-y-8 sm:space-y-10">
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter max-w-4xl mx-auto leading-tight">
            The future of agriculture is <span className="text-primary italic">Direct.</span>
          </h2>

          <p className="text-base sm:text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto px-4 sm:px-0">
            Join FarmZy and be among the first to experience direct farmer-to-company trade.
            No middlemen, just radical transparency.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-4 sm:pt-6">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="group w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-primary text-background font-bold text-lg sm:text-xl hover:shadow-[0_0_50px_rgba(126,217,87,0.5)] transition-shadow duration-300"
            >
              <span className="flex items-center justify-center">
                Start Selling Directly
                <ArrowRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white font-semibold text-lg sm:text-xl hover:bg-white/10 transition-colors"
            >
              Join as Buyer
            </motion.button>
          </div>

          <div className="pt-12 sm:pt-20 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 opacity-40">
            <div className="text-[10px] sm:text-sm font-bold tracking-widest uppercase">Secured by AES-256</div>
            <div className="text-[10px] sm:text-sm font-bold tracking-widest uppercase">Verified KYC</div>
            <div className="text-[10px] sm:text-sm font-bold tracking-widest uppercase">24/7 Support</div>
            <div className="text-[10px] sm:text-sm font-bold tracking-widest uppercase">IoT Verified</div>
          </div>
          </div>
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}
