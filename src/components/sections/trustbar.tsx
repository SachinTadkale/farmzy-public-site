"use client";

import { motion } from "framer-motion";
import Container from "../layout/container";

const LOGOS = [
  "Reliance Retail", "DeHaat", "NinjaCart", "BigBasket", "ITC", 
  "Mother Dairy", "Zomato Hyperpure", "WayCool"
];

export default function TrustBar() {
  return (
    <div className="py-12 sm:py-20 border-y border-border bg-surface/50 overflow-hidden font-outfit">
      <Container>
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-text-primary/80">
            Built for Farmers. Designed for Transparency.
          </h2>
          <p className="text-sm sm:text-base text-text-secondary/60 font-medium">
            FarmZy is an early-stage platform enabling direct trade between farmers and businesses.
          </p>
        </div>
      </Container>
    </div>
  );
}
