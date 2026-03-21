"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "../layout/container";
import SectionWrapper from "../layout/sectionwrapper";
import AnimatedCard from "../ui/animatedcard";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    number: "01",
    title: "List & Verify",
    description: "Farmers upload their produce details. Our ground team verifies quality and quantity through IoT and manual checks.",
    image: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?q=80&w=2070&auto=format&fit=crop",
  },
  {
    number: "02",
    title: "Connect & Match",
    description: "Our AI engine matches the verified produce with buy orders from top food processing companies and retailers.",
    image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=2072&auto=format&fit=crop",
  },
  {
    number: "03",
    title: "Secure Fulfillment",
    description: "Transaction is escrowed, logistics are triggered, and payment is released to the farmer within 24 hours of delivery.",
    image: "https://images.unsplash.com/photo-1591033594798-33227a05780d?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // Desktop Horizontal Scroll
      gsap.fromTo(
        triggerRef.current,
        { x: 0 },
        {
          x: "-200vw",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "2000 top",
            scrub: 0.6,
            pin: true,
            anticipatePin: 1,
          },
        }
      );
    });

    mm.add("(max-width: 1023px)", () => {
      // Mobile/Tablet Vertical Stack
      // No horizontal scroll, just simple fade-in for each step
      const steps = gsap.utils.toArray(".step-container");
      steps.forEach((step: any) => {
        gsap.from(step, {
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power2.out",
        });
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <SectionWrapper ref={sectionRef} id="how-it-works" className="p-0 overflow-visible lg:overflow-hidden bg-surface">
      <div ref={triggerRef} className="flex flex-col lg:flex-row lg:w-[300vw] items-center lg:h-screen">
        {STEPS.map((step, i) => (
          <div key={i} className="step-container w-full lg:w-screen h-auto lg:h-full flex flex-col justify-center py-20 lg:py-0 px-6 sm:px-12 md:px-24 border-b lg:border-b-0 border-white/5 last:border-0">
            <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="space-y-6 sm:space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
                <span className="text-7xl sm:text-8xl md:text-9xl font-bold text-primary/10 tracking-tighter leading-none">
                  {step.number}
                </span>
                <h2 className="text-4xl sm:text-5xl md:text-7xl leading-tight">{step.title}</h2>
                <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-md">{step.description}</p>
                <div className="w-16 sm:w-20 h-1 bg-primary" />
              </div>
              
              <div className="relative aspect-video sm:aspect-[16/9] lg:aspect-square rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-full object-cover opacity-60 hover:scale-110 transition-transform duration-[2s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
              </div>
            </Container>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
