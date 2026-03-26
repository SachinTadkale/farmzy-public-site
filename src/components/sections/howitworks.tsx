"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Container from "../layout/container";
import SectionWrapper from "../layout/sectionwrapper";
import {
  Upload,
  Users,
  ShieldCheck,
  CheckCircle2,
  Building2,
  History,
  Star,
  ArrowUpRight,
  Info
} from "lucide-react";

const STEPS = [
  {
    number: "01",
    title: "You Decide the Price. Not the Middleman.",
    description: "Take back control of your farm. Set your own prices based on quality and market demand, without pressure from brokers.",
    label: "Step 1: Independence",
  },
  {
    number: "02",
    title: "Verified Companies Compete for Your Crops",
    description: "Your listings go live to top food processing companies and retailers who compete to get the best produce directly from you.",
    label: "Step 2: High Demand",
  },
  {
    number: "03",
    title: "Guaranteed Payments. Transparent Deals.",
    description: "No more long credit periods. Payments are escrowed and released to your account securely upon delivery verification.",
    label: "Step 3: Secure Trade",
  },
  {
    number: "04",
    title: (
      <>
        Build Long-Term Buyers.<br />
        Not One-Time Deals.
      </>
    ),
    description: "Quality builds trust. Build a reputation on FarmZy to secure recurring orders and consistent income for the future.",
    label: "Step 4: Sustainable Growth",
  },
];

// --- Sub-components for Visuals ---

function ListingUI() {
  return (
    <div className="w-full h-full flex flex-col justify-center space-y-6">
      <div className="flex justify-between items-start px-2 mb-2">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30 shadow-lg">
            <Upload size={20} className="text-primary" />
          </div>
          <h3 className="text-text-primary font-bold text-lg tracking-tight">New Listing</h3>
        </div>
        <div className="flex flex-col items-end pt-1">
          <span className="px-3 py-1 bg-primary text-background text-[10px] rounded-lg border border-primary/30 uppercase font-black tracking-widest shadow-lg shadow-primary/20">Active</span>
          <span className="text-[10px] text-primary font-bold mt-2 tracking-wide">0% Middleman Fee</span>
        </div>
      </div>

      <div className="space-y-5">
        <div className="space-y-2">
          <div className="flex justify-between items-end">
            <label className="text-[10px] text-text-secondary uppercase tracking-widest font-bold">Wheat (Grade A)</label>
            <span className="text-[9px] text-text-primary/40 flex items-center">
              <Info size={10} className="mr-1" />
              Visible to verified only
            </span>
          </div>
          <div className="h-14 w-full bg-surface/50 rounded-2xl border border-border flex items-center px-5 relative overflow-hidden group/input">
            <span className="text-primary font-bold mr-2 text-lg">₹</span>
            <span className="text-text-primary font-display text-2xl">2,450</span>
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="h-6 w-0.5 bg-primary ml-1"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-surface/50 rounded-2xl border border-border">
            <span className="block text-[10px] text-text-secondary uppercase mb-1">Quantity</span>
            <span className="text-text-primary font-bold">50 Tons</span>
          </div>
          <div className="p-4 bg-surface/50 rounded-2xl border border-border relative overflow-hidden">
            <span className="block text-[10px] text-text-secondary uppercase mb-1">Harvest</span>
            <span className="text-text-primary font-bold">Feb 2026</span>
          </div>
        </div>

        <button className="w-full h-14 bg-primary rounded-2xl text-background font-bold text-sm shadow-[0_10px_30px_rgba(126,217,87,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all">
          Publish Listing
        </button>
      </div>
    </div>
  );
}

function BuyersUI() {
  const demands = [
    {
      name: "ITC Limited",
      qty: "100 Tons Wheat",
      offer: "2,520",
      isBest: true,
      verified: true
    },
    {
      name: "Reliance Retail",
      qty: "60 Tons Wheat",
      offer: "2,480",
      isBest: false,
      verified: true
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center space-y-4">
      <div className="flex justify-between items-center px-2 mb-4">
        <div className="space-y-1">
          <h3 className="text-text-primary font-bold text-base tracking-tight flex items-center">
            Live Buyer Demand
          </h3>
          <p className="text-[11px] text-primary font-bold uppercase tracking-wider">3 New Buyers Interested</p>
        </div>
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="px-3 py-1.5 bg-red-500/20 border border-red-500/30 rounded-xl"
        >
          <span className="text-[10px] text-red-400 font-bold uppercase tracking-wider">Live Requests</span>
        </motion.div>
      </div>

      <div className="space-y-3">
        {demands.map((demand, i) => (
          <motion.div
            key={i}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.15 }}
            className={`p-4 rounded-2xl ${demand.isBest ? 'bg-primary/10 border-primary/40' : 'bg-surface/50 border-border'} border backdrop-blur-xl flex items-center justify-between group cursor-pointer hover:bg-surface/80 transition-all shadow-lg`}
          >
            <div className="flex items-center space-x-4">
              <div className={`w-10 h-10 rounded-full ${demand.isBest ? 'bg-primary/20' : 'bg-surface/30'} flex items-center justify-center border ${demand.isBest ? 'border-primary/30' : 'border-border'}`}>
                <Building2 size={18} className={demand.isBest ? 'text-primary' : 'text-text-primary/40'} />
              </div>
              <div>
                <h4 className="text-text-primary font-bold text-sm tracking-tight flex items-center">
                  {demand.name}
                  {demand.verified && <ShieldCheck size={12} className="ml-1 text-primary" />}
                </h4>
                <span className="text-[10px] text-text-secondary flex items-center">
                  {demand.qty}
                </span>
              </div>
            </div>
            <div className="text-right">
              <span className={`block font-display font-bold text-lg ${demand.isBest ? 'text-primary' : 'text-text-primary'}`}>₹{demand.offer}</span>
              <span className="text-[9px] text-text-secondary opacity-60">/ quintal</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="pt-4 flex justify-center scale-110">
        <div className="flex -space-x-2">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-surface flex items-center justify-center text-[12px] font-black text-text-primary shadow-2xl relative z-10">
              {i === 4 ? (
                <span className="bg-primary text-background w-full h-full rounded-full flex items-center justify-center">+12</span>
              ) : (
                <Building2 size={16} className="text-text-primary/40" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PaymentsUI() {
  return (
    <div className="w-full h-full flex flex-col justify-center space-y-6 relative overflow-hidden">
      <div className="space-y-1">
        <div className="flex justify-between items-center">
          <span className="text-[10px] text-primary font-bold uppercase tracking-[0.2em]">Transaction Summary</span>
          <span className="text-[10px] text-text-primary/40 font-mono tracking-tight">Order #FZ-48291</span>
        </div>
        <h3 className="text-2xl font-display text-text-primary">ITC Limited</h3>
        <p className="text-[11px] text-text-secondary">Wheat (Grade A) • 50 Tons</p>
      </div>

      <div className="space-y-6 px-1">
        {[
          { label: "Order Confirmed", status: "completed" },
          { label: "Pickup Completed", status: "completed" },
          { label: "Secure Payment Released", status: "current" }
        ].map((item, i) => (
          <div key={i} className="flex items-center space-x-4 relative">
            {i < 2 && <div className="absolute left-[11px] top-8 w-[2px] h-6 bg-primary/30" />}
            <div className={`w-6 h-6 rounded-full flex items-center justify-center shadow-lg transition-transform ${item.status === 'completed' ? 'bg-primary scale-110' : 'bg-primary/20 border-2 border-primary/50 animate-pulse'}`}>
              <CheckCircle2 size={14} className={item.status === 'completed' ? 'text-background' : 'text-primary'} />
            </div>
            <span className={`text-sm font-bold tracking-tight ${item.status === 'completed' ? 'text-text-primary' : 'text-primary'}`}>{item.label}</span>
          </div>
        ))}
      </div>

      <div className="pt-6 mt-2 border-t border-border">
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <span className="text-[12px] text-primary font-bold">₹1,22,500</span>
            <span className="block text-[9px] text-text-secondary uppercase tracking-widest">Received via Bank Transfer</span>
          </div>
          <div className="text-right">
            <div className="px-3 py-1 bg-green-500/10 text-green-500 text-[9px] rounded-full border border-green-500/20 font-bold">
              SUCCESS
            </div>
            <span className="text-[8px] text-text-primary/30 block mt-1 tracking-tighter">Paid on 12 Feb, 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function GrowthUI() {
  return (
    <div className="w-full h-full flex flex-col justify-center space-y-6">
      <div className="flex items-center space-x-5 mb-4">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/40 flex items-center justify-center shadow-2xl shadow-primary/30 border border-white/20">
          <Building2 size={36} className="text-background" strokeWidth={1.5} />
        </div>
        <div className="space-y-1">
          <h4 className="text-text-primary font-bold text-xl leading-none">Ramesh Patil</h4>
          <p className="text-[12px] text-text-secondary flex items-center font-medium">
            Nashik, Maharashtra • <Star size={12} className="text-yellow-500 fill-yellow-500 mx-1" /> 4.8/5
          </p>
        </div>
        <div className="ml-auto">
          <div className="w-12 h-12 rounded-2xl border border-primary/30 bg-primary/10 flex items-center justify-center shadow-lg">
            <ShieldCheck className="text-primary" size={24} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Trades", val: "18", icon: History },
          { label: "Repeat", val: "5", icon: Users },
          { label: "Disputes", val: "0", icon: ShieldCheck }
        ].map((stat, i) => (
          <div key={i} className="p-3 rounded-2xl bg-surface/50 border border-border text-center">
            <span className="block text-[8px] text-text-secondary uppercase mb-1">{stat.label}</span>
            <span className="text-text-primary font-bold text-sm tracking-tight">{stat.val}</span>
          </div>
        ))}
      </div>

      <div className="space-y-2 pt-2">
        <p className="text-[10px] text-text-secondary uppercase font-bold tracking-widest pl-1">Recent Activity</p>
        <div className="space-y-2">
          {[
            { title: "Sold 50 Tons to ITC Limited", time: "2 days ago" },
            { title: "Repeat Order from Reliance", time: "1 week ago" }
          ].map((act, i) => (
            <div key={i} className="px-4 py-3 rounded-xl bg-surface/50 border border-border/50 flex items-center justify-between group hover:border-primary/20 transition-all">
              <span className="text-[11px] text-text-primary/80 font-medium">{act.title}</span>
              <ArrowUpRight size={12} className="text-primary opacity-40 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- Main Components ---

function StepVisual({ activeStep }: { activeStep: number }) {
  const visuals = [
    <ListingUI key="0" />,
    <BuyersUI key="1" />,
    <PaymentsUI key="2" />,
    <GrowthUI key="3" />,
  ];

  return (
    <div className="relative w-full max-w-[420px] h-[440px] p-8 sm:p-10 rounded-[40px] overflow-hidden bg-surface/80 border border-border backdrop-blur-2xl shadow-2xl flex flex-col items-center justify-center selection:bg-primary/20 transition-all duration-300">
      {/* Animated Breathing Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(126,217,87,0.1),transparent_60%)]"
      />

      {/* Enhanced Glow Reflector */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-full h-48 bg-primary/20 blur-[100px] opacity-30" />

      {/* Moving Shine - Slower & Subtler */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(600px circle at 0% 0%, rgba(126,217,87,0.04), transparent 70%)",
            "radial-gradient(600px circle at 100% 100%, rgba(126,217,87,0.04), transparent 70%)",
            "radial-gradient(600px circle at 0% 0%, rgba(126,217,87,0.04), transparent 70%)"
          ]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 pointer-events-none"
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, scale: 0.95, y: 15, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 1.05, y: -15, filter: "blur(8px)" }}
          transition={{
            duration: 0.5,
            ease: [0.23, 1, 0.32, 1],
          }}
          className="relative z-10 w-full h-full flex items-center justify-center"
        >
          {visuals[activeStep]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function StepContent({ step, index, setActiveStep }: { step: any, index: number, setActiveStep: (i: number) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px", // Exact center line trigger
    amount: "some", // Any intersection counts
  });

  useEffect(() => {
    if (isInView) {
      setActiveStep(index);
    }
  }, [isInView, index, setActiveStep]);

  return (
    <div ref={ref} className="min-h-screen flex flex-col justify-start pt-[10vh] pb-0 lg:pb-0 lg:pt-[20vh] items-center lg:items-start relative">
      <div className="space-y-6 lg:space-y-10 max-w-xl text-center lg:text-left h-full">
        {/* Large Faded Step Number */}
        <span className="hidden lg:block absolute -left-20 top-1/2 -translate-y-1/2 text-[15rem] font-bold text-primary/5 select-none pointer-events-none -z-10 tracking-widest leading-none">
          {step.number}
        </span>

        {/* Progress Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md mb-2">
          <div className={`w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(126,217,87,1)] animate-pulse`} />
          <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Discovery Block {step.number}</span>
        </div>

        <div className="space-y-6">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl leading-[1.1] font-display text-text-primary transition-colors duration-500 text-wrap-balance">
            {step.title}
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-lg mx-auto lg:mx-0 opacity-80 font-medium">
            {step.description}
          </p>
        </div>

        {/* Action / Value Tag */}
        <div className="pt-4 flex flex-wrap justify-center lg:justify-start gap-4">
          <div className="px-4 py-2.5 bg-surface border border-border rounded-xl text-primary font-bold text-[11px] uppercase tracking-[0.2em] bg-gradient-to-r from-primary/10 to-transparent shadow-xl">
            {step.label}
          </div>
        </div>
      </div>

      {/* Mobile-only Visual Display - Normal flow for equal spacing */}
      <div className="mt-8 lg:hidden w-full flex justify-center pb-0">
        <div className="w-full max-w-[420px] scale-90 sm:scale-100 pointer-events-auto origin-center">
          <StepVisual activeStep={index} />
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <SectionWrapper id="how-it-works" className="py-24 sm:py-32 overflow-visible bg-background relative selection:bg-primary selection:text-background font-outfit">
      <Container>
        <div className="flex flex-col lg:flex-row lg:gap-20">
          {/* Left Side: Story Navigation */}
          <div className="w-full lg:w-1/2 lg:relative">
            {STEPS.map((step, i) => (
              <StepContent
                key={i}
                step={step}
                index={i}
                setActiveStep={setActiveStep}
              />
            ))}
          </div>

          {/* Right Side: Sticky Visual Container (Desktop Only) */}
          <div className="hidden lg:block w-1/2 sticky top-24 h-[calc(100vh-6rem)] overflow-hidden">
            <div className="h-full flex items-center justify-center p-12">
              <StepVisual activeStep={activeStep} />
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
