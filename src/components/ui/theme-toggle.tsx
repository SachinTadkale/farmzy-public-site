"use client";

import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="p-2 w-10 h-10 rounded-xl border border-white/5 bg-white/5 opacity-0" />
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="relative p-2.5 rounded-xl bg-surface border border-border text-text-primary hover:border-primary/50 transition-colors shadow-sm"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {resolvedTheme === "dark" ? (
          <motion.div
            key="moon"
            initial={{ scale: 0, opacity: 0, rotate: -45 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0, opacity: 0, rotate: 45 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <Moon className="w-5 h-5 text-primary" strokeWidth={2.5} />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ scale: 0, opacity: 0, rotate: -45 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0, opacity: 0, rotate: 45 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <Sun className="w-5 h-5 text-primary" strokeWidth={2.5} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
