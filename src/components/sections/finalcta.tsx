"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Container from "../layout/container";
import SectionWrapper from "../layout/sectionwrapper";
import { ArrowRight, Zap } from "lucide-react";
import { useWaitlist } from "../providers/waitlist-provider";

export default function FinalCTA() {
  const { openModal } = useWaitlist();
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
    <SectionWrapper id="final-cta" className="py-12 sm:py-20 overflow-hidden bg-background relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[300px] bg-primary/10 rounded-full blur-[100px] -z-10" />
      </div>

      <Container className="relative z-10">
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="group relative max-w-[800px] mx-auto p-8 sm:p-12 rounded-[2rem] border border-border bg-surface/40 backdrop-blur-3xl overflow-hidden text-center shadow-2xl"
        >
          {/* Inner Glow Effect */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

          {/* Mouse Spotlight */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{
              background: useTransform(
                [mouseX, mouseY],
                ([mx, my]) => `radial-gradient(circle at ${((mx as number) / 20 + 0.5) * 100}% ${((my as number) / -20 + 0.5) * 100}%, rgba(46, 125, 50, 0.08), transparent 70%)`
              ),
            }}
          />

          {/* Animated Noise Pattern */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none" />

          <div className="relative z-10 space-y-5 sm:space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mx-auto w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 shadow-inner"
            >
              <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-primary fill-primary/20" />
            </motion.div>

            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-text-primary leading-[1]"
            >
              Ready to <span className="text-primary italic">FarmZy</span> <br className="hidden sm:block" /> your business?
            </motion.h2>

            <motion.p
              className="text-sm sm:text-lg text-text-secondary max-w-[500px] mx-auto leading-relaxed opacity-80"
            >
              Join the future of Indian agriculture. Direct trade, secure payments, and total transparency at your fingertips.
            </motion.p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <motion.button
                onClick={openModal}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full sm:w-auto !h-12 !px-8 !rounded-xl !text-sm"
              >
                Join the Waitlist
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
              
              <button className="btn-secondary w-full sm:w-auto !h-12 !px-8 !rounded-xl !text-sm">
                Contact Sales
              </button>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.4 }}
              className="pt-6 sm:pt-8"
            >
               <p className="text-[10px] sm:text-[11px] font-black tracking-[0.2em] uppercase text-text-primary/60">
                Limited early access • priority for farmer collectives
              </p>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}
