"use client";

import { motion } from "framer-motion";
import { Users, TrendingDown, Eye, ShieldCheck, Heart, Target, ArrowRight, User, Activity } from "lucide-react";
import Link from "next/link";
import Container from "@/components/layout/container";
import SectionWrapper from "@/components/layout/sectionwrapper";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background font-outfit">
      {/* Hero Section */}
      <SectionWrapper className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
        </div>

        <Container>
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl sm:text-7xl font-bold tracking-tighter text-text-primary leading-[1.1]"
            >
              Why We Built <span className="text-primary italic">FarmZy.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto font-medium"
            >
              We're building a better way for farmers and companies to trade — directly, transparently, and fairly.
            </motion.p>
          </div>
        </Container>
      </SectionWrapper>

      {/* Problem Section */}
      <SectionWrapper className="py-20 bg-surface/30">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-10">
              <h2 className="text-4xl font-bold tracking-tight text-text-primary">The Broken System</h2>
              <div className="space-y-6">
                {[
                  { icon: Users, title: "Middlemen Dependency", desc: "Farmers currently depend on multiple layers of intermediaries, losing control over their produce and pricing." },
                  { icon: TrendingDown, title: "Reduced Profit Margins", desc: "By the time produce reaches companies, farmers only receive a fraction of the final value." },
                  { icon: Eye, title: "Price Opacity", desc: "Lack of real-time market data leads to unfair pricing and exploitation of small-scale farmers." }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start space-x-6 p-6 rounded-[2rem] bg-background border border-border hover:border-red-500/20 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-red-500/5 border border-red-500/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-text-primary mb-1">{item.title}</h4>
                      <p className="text-text-secondary leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-red-500/[0.03] to-transparent border border-red-500/10 flex items-center justify-center p-12 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-10" />
                <div className="text-center space-y-4 relative z-10">
                  <div className="text-8xl font-black text-red-500/10 italic tracking-tighter uppercase select-none">TRAPPED</div>
                  <p className="text-sm font-bold text-red-500/40 uppercase tracking-widest">The Traditional Cycle</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Solution Section */}
      <SectionWrapper className="py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-square rounded-[3rem] bg-gradient-to-tr from-primary/[0.03] to-transparent border border-primary/10 flex items-center justify-center p-12 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20" />
                <div className="relative text-center space-y-4 z-10">
                  <div className="text-8xl font-black text-primary/10 italic tracking-tighter uppercase select-none">DIRECT</div>
                  <p className="text-sm font-bold text-primary/60 uppercase tracking-widest">The FarmZy Standard</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-10">
              <h2 className="text-4xl font-bold tracking-tight text-text-primary">Our Direct Solution</h2>
              <div className="space-y-6">
                {[
                  { icon: ShieldCheck, title: "Direct Connect", desc: "No more middlemen. Farmers list produce directly, and companies buy directly. Total autonomy." },
                  { icon: Target, title: "Transparent Pricing", desc: "Live market data and bidding ensure every transaction is fair and based on real value." },
                  { icon: Heart, title: "Farmer-First Control", desc: "Better profits, faster payments, and a secure ecosystem designed for stability." }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start space-x-6 p-6 rounded-[2rem] bg-surface/50 border border-border hover:border-primary/20 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-text-primary mb-1">{item.title}</h4>
                      <p className="text-text-secondary leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Vision Section */}
      <SectionWrapper className="py-24 bg-[#1a3a2a] text-white">
        <Container>
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mx-auto">
              <Target className="w-3 h-3 text-primary animate-pulse" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-primary/80">Our North Star</span>
            </div>
            <h2 className="text-3xl font-bold uppercase tracking-widest opacity-60 italic">Our Vision</h2>
            <p className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-tight lg:leading-none">
              To make agricultural trade <span className="text-primary italic">direct, fair, and transparent</span> across India.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* Founder Note */}
      <SectionWrapper className="py-32">
        <Container>
          <div className="max-w-4xl mx-auto p-12 sm:p-20 rounded-[3rem] bg-surface/50 border border-border relative backdrop-blur-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl opacity-50" />
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-3xl bg-primary border-4 border-background flex items-center justify-center shadow-xl">
              <User className="w-10 h-10 text-background" />
            </div>
            <div className="space-y-8 text-center sm:text-left">
              <h3 className="text-3xl font-bold text-text-primary italic">A Note from the Founders</h3>
              <p className="text-xl sm:text-2xl text-text-secondary leading-relaxed font-medium italic">
                "FarmZy is being built with real farmers and real challenges in mind. We're focused on solving 
                practical problems and improving continuously based on feedback. Our goal isn't just to build 
                an app, but to restore parity to the backbone of our country."
              </p>
              <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Activity className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-text-primary">Team FarmZy</div>
                    <div className="text-xs font-bold text-primary uppercase tracking-widest">Built in India</div>
                  </div>
                </div>
                <div className="text-[10px] font-black text-text-secondary/30 uppercase tracking-[0.3em] font-outfit select-none">MISSION FOCUSED • 2026</div>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Final CTA Button */}
      <div className="pb-32 text-center">
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block"
        >
          <Link 
            href="/cta"
            className="px-10 py-5 bg-primary text-background font-bold rounded-full text-lg hover:shadow-[0_0_30px_rgba(126,217,87,0.3)] transition-all inline-flex items-center"
          >
            Join the Mission <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
