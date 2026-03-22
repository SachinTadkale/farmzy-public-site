"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "../layout/container";
import SectionWrapper from "../layout/sectionwrapper";
import { Store, Sparkles, Share2, BarChart3 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const SOLUTIONS = [
  {
    id: "marketplace",
    title: "Direct Marketplace",
    description: "Direct farmer-to-company marketplace without middlemen.",
    icon: Store,
    gridClass: "md:col-span-8",
  },
  {
    id: "ai",
    title: "FarmZy AI",
    description: "Get smart pricing and selling suggestions.",
    icon: Sparkles,
    gridClass: "md:col-span-4",
  },
  {
    id: "tracking",
    title: "Order Tracking",
    description: "Track deals and payments in real-time.",
    icon: Share2,
    gridClass: "md:col-span-4",
  },
  {
    id: "insights",
    title: "Market Insights",
    description: "Stay updated with market trends.",
    icon: BarChart3,
    gridClass: "md:col-span-8",
  },
];

function SolutionCard({ solution, index }: { solution: typeof SOLUTIONS[0], index: number }) {
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

    const xPct = (mouseXPos / width - 0.5) * 20; // 20deg max tilt
    const yPct = (mouseYPos / height - 0.5) * -20;

    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`solution-card group relative p-8 sm:p-12 rounded-[2.5rem] border border-border bg-surface/50 backdrop-blur-md overflow-hidden hover:border-primary/40 transition-all duration-200 cursor-pointer ${solution.gridClass}`}
    >
      {/* Magnetic Spotlight */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([mx, my]) => `radial-gradient(circle at ${((mx as number) / 20 + 0.5) * 100}% ${((my as number) / -20 + 0.5) * 100}%, rgba(126,217,87,0.15), transparent 70%)`
          ),
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center space-y-6">
        <div className="relative">
          <div className="w-fit p-4 rounded-2xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300">
            <solution.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" strokeWidth={2} />
          </div>
          {/* Icon Glow */}
          <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">{solution.title}</h3>
          <p className="text-text-secondary leading-relaxed max-w-sm mx-auto text-base sm:text-lg">
            {solution.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function SolutionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.from(".solution-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        y: 60,
        opacity: 0,
        scale: 0.98,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
        clearProps: "all"
      });
    });

    mm.add("(max-width: 767px)", () => {
      gsap.from(".solution-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
        clearProps: "all"
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <SectionWrapper id="solutions" className="py-20 bg-background relative overflow-hidden">
      <div ref={sectionRef}>
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <Container className="space-y-20">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(126,217,87,0.15)]"
          >
            <span>The Solution</span>
          </motion.div>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-text-primary leading-tight">
            A radical shift in <span className="text-primary italic">how we trade.</span>
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            FarmZy bypasses the friction of traditional supply chains, ensuring higher margins for growers and lower costs for buyers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {SOLUTIONS.map((solution, i) => (
            <SolutionCard key={solution.id} solution={solution} index={i} />
          ))}
        </div>
      </Container>
      </div>
    </SectionWrapper>
  );
}
