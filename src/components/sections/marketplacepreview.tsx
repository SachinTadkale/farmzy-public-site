"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Container from "../layout/container";
import SectionWrapper from "../layout/sectionwrapper";

export default function MarketplacePreview() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [10, 0]);

  return (
    <SectionWrapper ref={containerRef} className="perspective-1000 overflow-hidden py-20 sm:py-32">
      <Container>
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-6xl">Visualizing the <span className="text-primaryitalic">Marketplace</span></h2>
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto px-4">Get a glimpse of the dashboard that empowers over 5,000 corporate buyers.</p>
        </div>

        <motion.div
          style={{
            scale,
            rotateX,
            transformStyle: "preserve-3d",
          }}
          className="relative w-full aspect-video sm:aspect-video rounded-2xl sm:rounded-3xl border border-white/10 bg-surface/50 overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]"
        >
          {/* Dashboard UI Mock */}
          <div className="absolute inset-0 p-3 sm:p-6 md:p-8 flex flex-col">
            <div className="flex items-center justify-between mb-4 sm:mb-8">
              <div className="flex space-x-2 sm:space-x-4 items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-primary/20" />
                <div className="w-20 sm:w-32 h-3 sm:h-4 bg-white/10 rounded-full" />
              </div>
              <div className="flex space-x-2">
                 <div className="w-16 sm:w-20 h-6 sm:h-8 rounded-lg bg-white/5 border border-white/10" />
                 <div className="w-16 sm:w-20 h-6 sm:h-8 rounded-lg bg-primary/20 border border-primary/40" />
              </div>
            </div>

            <div className="grid grid-cols-12 gap-3 sm:gap-4 flex-1">
              {/* Sidebar - Hidden on mobile */}
              <div className="hidden md:block col-span-3 space-y-4">
                 <div className="h-full rounded-2xl bg-white/[0.02] border border-white/5 p-4 space-y-4">
                    {[1, 2, 3, 4, 5].map(i => (
                       <div key={i} className="flex items-center space-x-3">
                          <div className="w-6 h-6 rounded-full bg-white/10" />
                          <div className="w-full h-2 bg-white/5 rounded-full" />
                       </div>
                    ))}
                 </div>
              </div>

              {/* Main Content */}
              <div className="col-span-12 md:col-span-9 grid grid-cols-3 gap-3 sm:gap-4">
                 <div className="col-span-3 sm:col-span-2 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 p-4 sm:p-6">
                    <div className="w-1/4 h-2 sm:h-3 bg-white/10 rounded-full mb-4 sm:mb-8" />
                    <div className="w-full h-24 sm:h-40 bg-gradient-to-t from-primary/5 to-transparent rounded-lg sm:rounded-xl border-b border-primary/20" />
                 </div>
                 <div className="col-span-1 hidden sm:flex flex-col space-y-4">
                    <div className="h-[calc(50%-8px)] rounded-2xl bg-white/[0.03] border border-white/10" />
                    <div className="h-[calc(50%-8px)] rounded-2xl bg-primary/5 border border-primary/10" />
                 </div>
                 <div className="col-span-3 h-20 sm:h-32 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/5 mt-0 sm:mt-4" />
              </div>
            </div>
          </div>

          {/* Overlay Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent opacity-50 pointer-events-none" />
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}
