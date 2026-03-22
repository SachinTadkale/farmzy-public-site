"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Container from "../layout/container";
import SectionWrapper from "../layout/sectionwrapper";
import { AlertCircle, TrendingDown, EyeOff } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const PROBLEMS = [
  {
    title: "Dependency on Middlemen",
    description: "Farmers lose up to 40% of their revenue to commission agents and resellers.",
    icon: AlertCircle,
    color: "text-red-400",
  },
  {
    title: "Unfair Pricing",
    description: "Market manipulation often leaves producers with less than the cost of production.",
    icon: TrendingDown,
    color: "text-orange-400",
  },
  {
    title: "Lack of Transparency",
    description: "Fragmented supply chains make it impossible to track quality and fair wages.",
    icon: EyeOff,
    color: "text-yellow-400",
  },
];

function ProblemCard({ problem, index }: { problem: typeof PROBLEMS[0], index: number }) {
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
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="problem-card group cursor-default"
      whileHover={{ y: -4, scale: 1.01 }}
    >
      <div className="relative h-full p-8 sm:p-10 rounded-[2rem] border border-red-500/10 bg-red-500/[0.02] shadow-[0_10px_30px_rgba(0,0,0,0.3)] group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:border-red-500/30 transition-all duration-200 overflow-hidden">
        {/* Dynamic Red Spotlight */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: useTransform(
              [mouseX, mouseY],
              ([mx, my]) => `radial-gradient(circle at ${((mx as number) / 20 + 0.5) * 100}% ${((my as number) / -20 + 0.5) * 100}%, rgba(239, 68, 68, 0.1), transparent 70%)`
            ),
          }}
        />
        
        <div className="relative z-10 space-y-6">
          <div className="w-fit p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-all duration-200">
            <problem.icon className={`w-8 h-8 sm:w-10 sm:h-10 ${problem.color} group-hover:scale-110 transition-transform duration-200`} style={{ filter: `drop-shadow(0 0 12px ${problem.color.includes('red') ? 'rgba(239,68,68,0.4)' : problem.color.includes('orange') ? 'rgba(251,146,60,0.4)' : 'rgba(250,204,21,0.4)'})` }} />
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">{problem.title}</h3>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{problem.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProblemSection() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=100%",
          pin: true,
          scrub: 1,
        },
      });

      tl.from(".problem-card", {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out",
      });
    });

    mm.add("(max-width: 767px)", () => {
      gsap.from(".problem-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse",
        },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: "power2.out",
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <SectionWrapper ref={sectionRef} id="problems" className="min-h-screen py-20 pb-40 px-6 sm:px-12 lg:px-24 bg-background overflow-hidden">
      <Container>
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Traditional Agriculture <br />
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent italic">is Broken.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-text-secondary leading-relaxed">
            The current system favors intermediaries over primary producers. 
            FarmZy is here to shift the power back to the fields.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-10">
          {PROBLEMS.map((problem, i) => (
            <ProblemCard key={i} problem={problem} index={i} />
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
