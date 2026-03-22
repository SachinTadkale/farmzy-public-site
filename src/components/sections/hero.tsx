"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Container from "../layout/container";
import AnimatedCard from "../ui/animatedcard";
import SectionWrapper from "../layout/sectionwrapper";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <SectionWrapper ref={ref} className="min-h-screen flex items-center pt-32 pb-20 overflow-visible">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[400px] sm:h-[600px] bg-primary/10 rounded-full blur-[80px] -z-10" />
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none -z-20" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-20" />

      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col space-y-6 sm:space-y-8 text-center lg:text-left items-center lg:items-start"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 w-fit">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] uppercase font-bold tracking-widest text-primary">🚀 Early Access Open</span>
          </div>

          <motion.h1 
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] lg:leading-[0.9] tracking-tighter"
          >
            Direct Trade. <br className="hidden sm:block" />
            <span className="text-white/40">Radical</span> <br className="hidden sm:block" />
            Transparency.
          </motion.h1>

          <motion.p 
            className="text-base sm:text-lg md:text-xl max-w-lg text-text-secondary"
          >
            FarmZy connects Indian farmers directly with global enterprises. 
            Eliminate middlemen, secure fair pricing, and build a transparent agri-supply chain.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center lg:items-start space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="group relative w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-background font-bold text-lg hover:shadow-[0_0_30px_rgba(126,217,87,0.4)] transition-shadow duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Explore Marketplace
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          style={{ y, opacity }}
          className="relative hidden lg:block"
        >
          {/* Visual Placeholder for 3D Animation */}
          <div className="aspect-square relative flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent rounded-full blur-[80px]" />
            <div className="w-full h-full border border-white/5 rounded-3xl bg-surface/50 backdrop-blur-xl relative overflow-hidden group shadow-2xl">
              {/* Inner Glow/Detail */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50" />
              
              {/* Simulated Dashboard Element */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-2/3 border border-white/10 rounded-xl bg-background/80 shadow-inner flex items-center justify-center">
                <div className="p-8 w-full space-y-4">
                  <div className="w-1/3 h-2 bg-white/10 rounded-full" />
                  <div className="w-full h-32 border border-white/5 rounded-lg bg-white/5 animate-pulse" />
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-2 bg-primary/20 rounded-full" />
                    <div className="h-2 bg-white/5 rounded-full" />
                    <div className="h-2 bg-white/5 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Decorative Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 p-4 border border-white/10 bg-surface/90 rounded-2xl shadow-xl"
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 mb-2" />
                <div className="w-12 h-1.5 bg-white/10 rounded-full" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}
