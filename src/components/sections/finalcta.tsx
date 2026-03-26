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
    <SectionWrapper id="final-cta" className="py-20 overflow-hidden bg-background relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[400px] bg-primary/5 rounded-full blur-[120px] -z-10" />
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
          className="group relative max-w-[900px] mx-auto p-12 sm:p-20 rounded-[2.5rem] border border-border bg-gradient-to-br from-surface to-background backdrop-blur-3xl overflow-hidden text-center shadow-2xl"
        >
          {/* Inner Glow Effect */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-text-primary/10 to-transparent" />

          {/* Mouse Spotlight */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{
              background: useTransform(
                [mouseX, mouseY],
                ([mx, my]) => `radial-gradient(circle at ${((mx as number) / 20 + 0.5) * 100}% ${((my as number) / -20 + 0.5) * 100}%, rgba(126, 217, 87, 0.08), transparent 70%)`
              ),
            }}
          />

          {/* Animated Noise Pattern */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />

          <div className="relative z-10 space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mx-auto w-24 h-24 rounded-[2rem] bg-primary/10 flex items-center justify-center mb-6"
            >
              <Zap className="w-12 h-12 text-primary fill-primary/20" />
            </motion.div>

            <motion.h2
              className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-text-primary leading-[1.1]"
            >
              Ready to <span className="text-primary italic mr-1 ">FarmZy</span> your business?
            </motion.h2>

            <motion.p
              className="text-lg sm:text-xl text-text-secondary max-w-[600px] mx-auto leading-relaxed"
            >
              Join the future of Indian agriculture. Direct trade, secure payments, and total transparency at your fingertips.
            </motion.p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-6">
              <motion.div className="relative group/btn w-full sm:w-auto">
                <motion.button
                  onClick={openModal}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="w-full px-10 py-5 rounded-full bg-primary text-background font-bold text-lg hover:bg-primary-hover hover:shadow-[0_0_40px_rgba(126,217,87,0.4)] transition-all duration-300 flex items-center justify-center cursor-pointer"
                >
                  Join Waitlist
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1.5 transition-transform duration-300" />
                </motion.button>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.3 }}
              className="text-[8px] sm:text-[10px] font-bold tracking-[0.2em] uppercase pt-8 sm:pt-10 text-text-primary"
            >
              Early access • Limited onboarding
            </motion.p>
          </div>
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}
