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
        <div className="hidden md:flex items-center gap-x-12">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className="text-sm font-medium text-text-secondary hover:text-primary transition-all duration-300 ease-in-out relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="px-5 py-2.5 rounded-full bg-primary text-background text-sm font-semibold shadow-lg shadow-primary/20"
          >
            Get Started
          </motion.button>
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
                  className="text-lg font-medium text-text-secondary hover:text-primary transition-colors flex items-center justify-between group"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                  <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
              <div className="pt-6 border-t border-white/5">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="w-full py-4 text-center rounded-xl bg-primary text-background text-sm font-bold shadow-lg shadow-primary/20"
                >
                  Get Started
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
