"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check, User, Building2} from "lucide-react";

interface RoleOption {
  value: "FARMER" | "COMPANY";
  label: string;
  icon: React.ReactNode;
}

const options: RoleOption[] = [
  { value: "FARMER", label: "Farmer", icon: <User className="w-5 h-5" /> },
  { value: "COMPANY", label: "Company", icon: <Building2 className="w-5 h-5" /> },
];

interface RoleDropdownProps {
  value?: "FARMER" | "COMPANY";
  onChange: (value: "FARMER" | "COMPANY") => void;
  error?: string;
}

export default function RoleDropdown({ value, onChange, error }: RoleDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value);
  const selectedIndex = options.findIndex((opt) => opt.value === value);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!isOpen) setIsOpen(true);
      else {
        const nextIndex = (selectedIndex + 1) % options.length;
        onChange(options[nextIndex].value);
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!isOpen) setIsOpen(true);
      else {
        const prevIndex = (selectedIndex - 1 + options.length) % options.length;
        onChange(options[prevIndex].value);
      }
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsOpen(!isOpen);
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative w-full" ref={containerRef}>
      <label className="block text-sm font-bold text-text-primary mb-1.5 px-1">
        Join as <span className="text-primary">*</span>
      </label>

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        className={`w-full flex items-center justify-between px-5 py-3 rounded-xl border transition-all duration-300 bg-surface/50 backdrop-blur-sm ${error ? "border-red-500/50" : isOpen ? "border-primary shadow-[0_0_15px_rgba(126,217,87,0.2)]" : "border-border hover:border-primary/50"
          }`}
      >
        <div className="flex items-center space-x-3">
          {selectedOption ? (
            <>
              <div className="text-primary">{selectedOption.icon}</div>
              <span className="font-medium text-text-primary">{selectedOption.label}</span>
            </>
          ) : (
            <span className="text-text-secondary">Select your role</span>
          )}
        </div>
        <ChevronDown className={`w-5 h-5 text-text-secondary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute z-50 w-full mt-2 p-1.5 rounded-2xl border border-border bg-background/95 backdrop-blur-xl shadow-2xl overflow-hidden"
          >
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-4 py-2 rounded-xl transition-all duration-200 group ${value === option.value
                  ? "bg-primary/10 text-primary"
                  : "text-text-secondary hover:bg-surface hover:text-text-primary"
                  }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={value === option.value ? "text-primary" : "text-text-secondary group-hover:text-primary"}>
                    {option.icon}
                  </div>
                  <span className="font-semibold">{option.label}</span>
                </div>
                {value === option.value && <Check className="w-4 h-4 text-primary" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-xs font-bold text-red-500 px-1"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}
