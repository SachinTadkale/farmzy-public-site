"use client";

import { motion } from "framer-motion";
import Container from "../layout/container";

const LOGOS = [
  "Reliance Retail", "DeHaat", "NinjaCart", "BigBasket", "ITC", 
  "Mother Dairy", "Zomato Hyperpure", "WayCool"
];

export default function TrustBar() {
  return (
    <div className="py-16 sm:py-24 border-y border-border bg-surface/30 overflow-hidden font-outfit relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none" />
      <Container>
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-black tracking-tighter text-text-primary">
            Built for Farmers. <span className="text-primary italic">Designed for Transparency.</span>
          </h2>
          <p className="text-base sm:text-xl text-text-secondary opacity-70 max-w-2xl mx-auto leading-relaxed">
            FarmZy is an early-stage ecosystem enabling direct trade between <br className="hidden sm:block" /> Indian farmers and global businesses.
          </p>
        </div>
      </Container>
    </div>
  );
}
