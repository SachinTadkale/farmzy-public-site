"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Globe, Mail } from "lucide-react";
import Link from "next/link";
import Container from "@/components/layout/container";
import SectionWrapper from "@/components/layout/sectionwrapper";

export default function CTAPage() {
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
    <div className="min-h-screen bg-background font-outfit selection:bg-primary/30">
      {/* Hero Section */}
      <SectionWrapper className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Atmosphere */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none -z-20" />

        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-12 pb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md"
            >
              <Zap className="w-4 h-4 text-primary fill-primary" />
              <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Join the Agricultural Revolution</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-text-primary leading-[0.95]"
            >
              Direct Trade. <br />
              <span className="text-primary italic">Better Outcomes.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl sm:text-2xl text-text-secondary max-w-2xl mx-auto font-medium leading-relaxed"
            >
              FarmZy is currently onboarding a limited number of farmers and enterprises for early access. 
              Join the mission to build India's most transparent supply chain.
            </motion.p>

            {/* Hero Buttons with Coming Soon logic */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-12">
              <div className="w-full sm:w-auto">
                <Link 
                  href="/contact"
                  className="group inline-flex items-center px-10 py-5 bg-primary text-background font-bold rounded-full text-lg shadow-[0_0_50px_rgba(126,217,87,0.3)] hover:shadow-[0_0_60px_rgba(126,217,87,0.5)] transition-all duration-300 w-full justify-center"
                >
                  Start Selling Directly
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
              
              <div className="w-full sm:w-auto">
                <Link 
                  href="/contact"
                  className="w-full block px-10 py-5 rounded-full border border-border bg-surface/50 backdrop-blur-md text-text-primary font-semibold text-lg hover:bg-surface transition-all duration-300 shadow-xl text-center"
                >
                  Join as Buyer
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-20">
              {[
                { icon: ShieldCheck, title: "Verified Partners", desc: "Every buyer and seller is thoroughly vetted for security." },
                { icon: Globe, title: "Global Reach", desc: "Connecting local farmers to international markets." },
                { icon: CheckCircle2, title: "Fair Pricing", desc: "No more hidden costs or middleman commissions." }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="p-8 rounded-[2.5rem] bg-surface/50 border border-border backdrop-blur-xl hover:border-primary/20 transition-colors text-left group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Replicated FinalCTA Section */}
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group relative max-w-[900px] mx-auto p-12 sm:p-20 rounded-[2.5rem] border border-border bg-gradient-to-br from-surface to-background backdrop-blur-3xl overflow-hidden text-center shadow-2xl mt-12 mb-20"
          >
            {/* Inner Glow Effect */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-text-primary/10 to-transparent" />

            {/* Mouse Spotlight */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{
                background: useTransform(
                  [mouseX, mouseY],
                  ([mx, my]) => `radial-gradient(circle at ${((mx as number) / 20 + 0.5) * 100}% ${((my as number) / -20 + 0.5) * 100}%, rgba(126, 217, 87, 0.08), transparent 70%)`
                ),
              }}
            />

            {/* Animated Noise Pattern */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />

            <div className="relative z-10 space-y-6 sm:space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mx-auto w-24 h-24 rounded-[2rem] bg-primary/10 flex items-center justify-center mb-6"
              >
                <Zap className="w-12 h-12 text-primary fill-primary/20" />
              </motion.div>

              <motion.h2
                className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-text-primary leading-[1.1]"
              >
                Ready to <span className="text-primary italic mr-1 ">FarmZy</span> your business?
              </motion.h2>

              <motion.p
                className="text-lg sm:text-xl text-text-secondary max-w-[600px] mx-auto leading-relaxed"
              >
                Join the future of Indian agriculture. Direct trade, secure payments, and total transparency at your fingertips.
              </motion.p>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-6">
                <div className="relative group/btn w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="w-full px-10 py-5 rounded-full bg-primary text-background font-bold text-lg hover:bg-primary-hover hover:shadow-[0_0_40px_rgba(126,217,87,0.4)] transition-all duration-300"
                  >
                    <Link href="/contact" className="flex items-center justify-center">
                      Start Selling Directly
                      <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1.5 transition-transform duration-300" />
                    </Link>
                  </motion.button>
                </div>

                <div className="w-full sm:w-auto">
                  <Link
                    href="/contact"
                    className="w-full block px-10 py-5 rounded-full border border-border bg-surface/50 backdrop-blur-md text-text-primary font-semibold text-lg hover:bg-surface transition-all duration-300 shadow-xl text-center"
                  >
                    Join as Buyer
                  </Link>
                </div>
              </div>

              {/* Functional Contact Button */}
              <div className="pt-8">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center text-primary font-bold hover:underline group"
                >
                  <Mail className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Still have questions? Contact Us
                </Link>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.3 }}
                className="text-[8px] sm:text-[10px] font-bold tracking-[0.2em] uppercase pt-8 sm:pt-10 text-text-primary"
              >
                Early access • Limited onboarding
              </motion.p>
            </div>
          </motion.div>
        </Container>
      </SectionWrapper>
      
      {/* Status Bar */}
      <footer className="fixed bottom-0 left-0 right-0 border-t border-border bg-background/80 backdrop-blur-md py-4 sm:py-6 z-40">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-text-primary/30">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>System Status: Fully Operational</span>
            </div>
            <span>© 2026 FarmZy Agriculture Ltd</span>
            <div className="flex space-x-6">
              <Link href="/about" className="hover:text-primary transition-colors">Vision</Link>
              <Link href="/contact" className="hover:text-primary transition-colors">Support</Link>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
