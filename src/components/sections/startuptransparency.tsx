"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Container from "../layout/container";
import SectionWrapper from "../layout/sectionwrapper";
import { Activity } from "lucide-react";

export default function StartupTransparency() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <SectionWrapper id="startup-transparency" className="bg-background relative overflow-hidden py-20">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(126,217,87,0.05)_0%,transparent_70%)] -z-10" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          {/* Left Column: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.15 }}
            className="flex flex-col space-y-8 lg:space-y-12"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex"
            >
              <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 shadow-[0_0_25px_rgba(126,217,87,0.15)] relative group overflow-hidden">
                <motion.div
                  animate={{
                    opacity: [0.4, 0.9, 0.4],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-primary/10 blur-xl -z-10"
                />
                <Activity className="w-4 h-4 text-primary animate-pulse" strokeWidth={2.5} />
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-primary">Early Stage • Actively Building</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h2
              variants={itemVariants}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display text-text-primary tracking-tighter leading-[0.95]"
            >
              Building This <br /> Platform — <br />
              <span className="text-primary italic">With You.</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl sm:text-2xl text-text-secondary max-w-xl leading-relaxed font-medium"
            >
              FarmZy is in its early stage, built alongside real farmers and businesses.
              We're focused on solving real problems — and evolving based on real feedback.
            </motion.p>

            <div className="space-y-5">
              <motion.div
                variants={itemVariants}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <div className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary leading-snug">
                  You’re not just using FarmZy — <br className="hidden sm:block" />
                  you’re <span className="text-primary decoration-primary/40 underline-offset-8">helping shape what it becomes.</span>
                </div>
                {/* Fixed Separator Line */}
                <div className="mt-8 w-24 h-1 bg-gradient-to-r from-primary/50 to-transparent rounded-full" />
              </motion.div>

              <motion.p
                variants={itemVariants}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs sm:text-sm font-bold text-text-primary/30 tracking-[0.3em] uppercase"
              >
                Early access • Limited onboarding • Built with real users
              </motion.p>
            </div>
          </motion.div>

          {/* Right Column: Abstract Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative aspect-square lg:aspect-auto h-full flex items-center justify-center p-8 sm:p-20"
          >
            {/* Premium Gradient Orb */}
            <div className="relative w-full max-w-lg aspect-square">
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-primary/10 blur-[130px] rounded-full animate-pulse" />

              {/* Spinning Orb Core */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.03, 1],
                  y: [0, -15, 0]
                }}
                transition={{
                  rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                  scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                }}
                className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 via-transparent to-primary/5 border border-border relative backdrop-blur-3xl overflow-hidden group shadow-2xl"
              >
                {/* Inner Glow Pulse */}
                <motion.div
                  animate={{ opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-primary blur-[60px] rounded-full scale-75"
                />

                {/* Internal Animated Lines */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
                <div className="absolute inset-0 border-[0.5px] border-border/50 rounded-full scale-90 opacity-40" />
                <div className="absolute inset-0 border-[0.5px] border-border/50 rounded-full scale-75 opacity-20" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
