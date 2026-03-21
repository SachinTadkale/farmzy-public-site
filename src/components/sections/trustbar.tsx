"use client";

import { motion } from "framer-motion";
import Container from "../layout/container";

const LOGOS = [
  "Reliance Retail", "DeHaat", "NinjaCart", "BigBasket", "ITC", 
  "Mother Dairy", "Zomato Hyperpure", "WayCool"
];

export default function TrustBar() {
  return (
    <div className="py-8 sm:py-12 border-y border-white/5 bg-background/50 overflow-hidden">
      <Container>
        <p className="text-center text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-text-secondary/60 mb-6 sm:mb-8">
          Trusted by Industry Leaders
        </p>
        
        <div className="relative flex overflow-x-hidden group">
          <div className="flex animate-marquee whitespace-nowrap py-2 sm:py-4 items-center">
            {[...LOGOS, ...LOGOS].map((logo, i) => (
              <span
                key={i}
                className="mx-6 sm:mx-12 text-xl sm:text-2xl md:text-3xl font-bold text-text-secondary/40 hover:text-primary/60 transition-colors cursor-default"
              >
                {logo}
              </span>
            ))}
          </div>

          <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap py-2 sm:py-4 items-center">
            {[...LOGOS, ...LOGOS].map((logo, i) => (
              <span
                key={i}
                className="mx-6 sm:mx-12 text-xl sm:text-2xl md:text-3xl font-bold text-text-secondary/40 hover:text-primary/60 transition-colors cursor-default"
              >
                {logo}
              </span>
            ))}
          </div>

          {/* Gradients to fade edges */}
          <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10" />
        </div>
      </Container>
    </div>
  );
}
