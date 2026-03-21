"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "../layout/container";
import SectionWrapper from "../layout/sectionwrapper";
import AnimatedCard from "../ui/animatedcard";
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

export default function ProblemSection() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Desktop/Tablet Pinning
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: 1,
        },
      });

      tl.from(".problem-card", {
        y: 60,
        opacity: 0,
        stagger: 0.3,
        ease: "power2.out",
      });
    });

    mm.add("(max-width: 767px)", () => {
      // Mobile - Minimal or No Pinning
      gsap.from(".problem-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <SectionWrapper ref={sectionRef} id="problems" className="min-h-screen flex items-center bg-background">
      <Container>
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-6xl mb-4 sm:mb-6">Traditional Agriculture <br /><span className="text-text-secondary italic">is Broken.</span></h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-text-secondary px-4 sm:px-0">
            The current system favors intermediaries over primary producers. 
            FarmZy is here to shift the power back to the fields.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROBLEMS.map((problem, i) => (
            <div key={i} className="problem-card">
              <AnimatedCard className="p-10 h-full border-red-500/10 hover:border-red-500/20 bg-red-500/[0.02]">
                <problem.icon className={`w-12 h-12 mb-6 ${problem.color}`} />
                <h3 className="text-2xl mb-4">{problem.title}</h3>
                <p className="text-text-secondary">{problem.description}</p>
              </AnimatedCard>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
