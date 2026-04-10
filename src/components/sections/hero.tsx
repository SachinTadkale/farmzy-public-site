"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Container from "../layout/container";
import AnimatedCard from "../ui/animatedcard";
import SectionWrapper from "../layout/sectionwrapper";
import { ArrowRight, Zap } from "lucide-react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <SectionWrapper ref={ref} className="min-h-screen flex items-center pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-visible bg-background">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[300px] sm:h-[600px] bg-primary/10 rounded-full blur-[100px] -z-10" />

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none -z-20" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50 -z-20" />

      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col space-y-6 sm:space-y-8 text-center lg:text-left items-center lg:items-start"
        >
          <div className="inline-flex items-center space-x-2.5 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 w-fit">
            <Zap className="w-3.5 h-3.5 text-primary fill-primary/20 animate-pulse" />
            <span className="text-[10px] uppercase font-bold tracking-[0.15em] text-primary">Early Access Open</span>
          </div>

          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tighter text-text-primary"
          >
            Direct Trade. <br className="hidden sm:block" />
            <span className="opacity-30">Radical</span> <br className="hidden sm:block" />
            Transparency.
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl max-w-lg text-text-secondary leading-relaxed"
          >
            FarmZy connects Indian farmers directly with global enterprises.
            Eliminate middlemen, secure fair pricing, and build a transparent agri-supply chain.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button className="btn-primary !h-12 !px-8 !rounded-xl w-full sm:w-auto">
              Get Started
            </button>
            <button className="btn-secondary !h-12 !px-8 !rounded-xl w-full sm:w-auto">
              How it works
            </button>
          </div>
        </motion.div>

        <motion.div
          style={{ y, opacity }}
          className="relative lg:block"
        >
          {/* Visual Placeholder for 3D Animation */}
          <div className="aspect-square relative flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent rounded-full blur-[80px]" />
            <div className="w-full h-4/5 sm:h-full border border-border rounded-[2rem] bg-surface/40 backdrop-blur-2xl relative overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 hover:shadow-primary/5">
              {/* Inner Glow/Detail */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50" />

              {/* Simulated Dashboard Element */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5/6 h-3/4 border border-border/50 rounded-2xl bg-background/60 shadow-inner flex items-center justify-center backdrop-blur-sm">
                <div className="p-4 sm:p-8 w-full space-y-4 sm:space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-1/4 h-2 bg-text-primary/10 rounded-full" />
                    <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20" />
                  </div>
                  <div className="w-full h-24 sm:h-40 border border-border/30 rounded-xl bg-surface/50 animate-pulse overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-100%] animate-[shimmer_2s_infinite]" />
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-2 bg-primary/30 rounded-full" />
                    <div className="h-2 bg-text-primary/5 rounded-full" />
                    <div className="h-2 bg-text-primary/5 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Decorative Floating Elements */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 right-8 p-3 sm:p-4 border border-border/40 bg-surface/80 backdrop-blur-md rounded-2xl shadow-xl z-20"
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-primary/20 mb-2 flex items-center justify-center">
                   <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                </div>
                <div className="w-10 sm:w-12 h-1.5 bg-text-primary/10 rounded-full" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}
