"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "../layout/container";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Marketplace", href: "#marketplace" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "About Us", href: "#about" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 py-4 sm:py-6"
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-xl border-b border-white/5" />
      
      <Container className="relative flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 z-50">
          <span className="text-xl sm:text-2xl font-bold tracking-tighter text-text-primary">
            Farm<span className="text-primary">Zy</span>
          </span>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-sm font-medium text-text-primary/80 hover:text-text-primary transition-colors">Log In</button>
          <button className="px-5 py-2.5 rounded-full bg-primary text-background text-sm font-semibold hover:scale-105 transition-transform">
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="p-2 md:hidden z-50 text-text-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-2xl border-b border-white/5 md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className="text-lg font-medium text-text-secondary hover:text-text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-white/5 flex flex-col space-y-4">
                <button className="w-full py-3 text-center text-sm font-medium text-text-primary bg-white/5 rounded-xl">
                  Log In
                </button>
                <button className="w-full py-4 text-center rounded-xl bg-primary text-background text-sm font-bold shadow-lg shadow-primary/20">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
