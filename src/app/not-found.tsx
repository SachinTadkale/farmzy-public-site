"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function NotFound() {
  return (
    <div className="h-screen bg-background flex flex-col font-outfit selection:bg-primary/30 overflow-hidden">
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center justify-center relative px-6">
        {/* Background Ambience - Perfectly Centered */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="w-full max-w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px] opacity-40" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.15]" />
        </div>

        <div className="text-center relative z-10 space-y-6 max-w-2xl -mt-20">
          {/* Animated 404 Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(126,217,87,1)]" />
            <span className="text-[9px] font-bold text-primary uppercase tracking-[0.2em]">Error 404</span>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="space-y-3"
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-text-primary leading-[1.1]">
              Lost in the <span className="text-primary italic">Fields.</span>
            </h1>
            <p className="text-base sm:text-lg text-text-secondary max-w-md mx-auto leading-relaxed">
              This field hasn't been harvested yet. The page you're looking for was either moved or never existed.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/"
                className="group flex items-center justify-center px-7 py-3.5 bg-primary text-background font-bold rounded-full shadow-[0_0_30px_rgba(126,217,87,0.2)] hover:shadow-[0_0_40px_rgba(126,217,87,0.4)] transition-all duration-300 text-sm sm:text-base"
              >
                <Home className="mr-2 w-4 h-4" />
                Return Home
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => window.history.back()}
                className="flex items-center justify-center px-7 py-3.5 border border-border bg-surface/50 backdrop-blur-md text-text-primary font-semibold rounded-full hover:bg-surface transition-colors text-sm sm:text-base"
              >
                <ArrowLeft className="mr-2 w-4 h-4" />
                Go Back
              </button>
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* Simplified Footer for 404 */}
      <footer className="py-4 px-6 border-t border-border flex flex-col sm:flex-row justify-between items-center text-[10px] text-text-secondary uppercase tracking-widest bg-background/50 backdrop-blur-md z-20">
        <p>© 2026 FarmZy Agriculture Ltd.</p>
        <div className="flex space-x-4 mt-2 sm:mt-0">
          <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
          <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
        </div>
      </footer>
    </div>
  );
}
