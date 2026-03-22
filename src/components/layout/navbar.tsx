"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Container from "../layout/container";
import { ThemeToggle } from "../ui/theme-toggle";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (pathname === "/") {
        const sections = ["problem", "solutions", "how-it-works", "benefits"];
        const scrollPosition = window.scrollY + 120; // Offset for better trigger

        let currentSection = null;
        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              currentSection = `/#${sectionId}`;
              break;
            }
          }
        }
        
        // If at top, Home is active
        if (window.scrollY < 100) {
          currentSection = "/";
        }
        
        setActiveSection(currentSection);
      } else {
        setActiveSection(pathname);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-lg border-b border-border shadow-lg"
          : "py-5 bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo (Left) */}
          <div className="flex-1 flex justify-start">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tighter text-text-primary hover:opacity-80 transition-opacity"
            >
              Farm<span className="text-primary italic">Zy</span>
            </Link>
          </div>

          {/* Desktop Links (Center) */}
          <div className="hidden lg:flex items-center justify-center space-x-8 flex-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-bold transition-all duration-200 hover:text-primary relative group whitespace-nowrap ${
                    isActive ? "text-primary" : "text-text-secondary"
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </Link>
              );
            })}
          </div>

          {/* Desktop Actions (Right) */}
          <div className="hidden lg:flex items-center justify-end space-x-6 flex-1">
            <ThemeToggle />
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/cta"
                className="px-6 py-2.5 bg-primary text-background font-bold rounded-full text-sm hover:shadow-[0_0_20px_rgba(126,217,87,0.4)] transition-all duration-300 inline-block"
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-text-primary"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden overflow-hidden bg-background border-t border-border mt-4"
            >
              <div className="py-8 space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-2xl font-bold text-text-primary hover:text-primary transition-colors px-2"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="/cta"
                  onClick={() => setIsOpen(false)}
                  className="block w-full py-4 bg-primary text-background font-bold rounded-xl text-center text-xl shadow-lg"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </nav>
  );
}
