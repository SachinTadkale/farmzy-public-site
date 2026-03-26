"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, BadgeCheck } from "lucide-react";
import { useWaitlist } from "../providers/waitlist-provider";
import WaitlistForm from "./WaitlistForm";

export default function WaitlistModal() {
  const { isModalOpen, closeModal } = useWaitlist();
  const [isSuccess, setIsSuccess] = useState(false);

  // Reset success state when modal closes
  const handleClose = () => {
    closeModal();
    setTimeout(() => setIsSuccess(false), 300);
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-background/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-[500px] overflow-hidden rounded-[2.5rem] border border-border bg-background shadow-2xl"
          >
            {/* Background Glow */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/10 rounded-full blur-[60px] pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-[60px] pointer-events-none" />

            <div className="relative p-7 sm:p-9">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-6 right-6 p-2 rounded-full border border-border bg-surface/50 text-text-secondary hover:text-text-primary hover:border-primary/50 transition-all duration-300"
              >
                <X className="w-5 h-5" />
              </button>

              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.div
                    key="form-state"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-6"
                  >
                    <div className="space-y-3 pr-8">
                      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                        <Sparkles className="w-3.5 h-3.5 text-primary" />
                        <span className="text-[10px] font-bold text-primary uppercase tracking-[0.1em]">Early Access</span>
                      </div>
                      <h2 className="text-3xl font-bold tracking-tight text-text-primary">
                        Join FarmZy <br />
                        Early Access
                      </h2>
                      <p className="text-text-secondary">
                        Be among the first farmer or company to trade directly without middlemen.
                      </p>
                    </div>

                    <WaitlistForm onSuccess={() => setIsSuccess(true)} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="success-state"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center space-y-6"
                  >
                    <div className="mx-auto w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-primary"
                      >
                        <BadgeCheck className="w-12 h-12" />
                      </motion.div>
                    </div>

                    <div className="space-y-2">
                      <h2 className="text-3xl font-bold text-text-primary">
                        You&apos;re on the waitlist!
                      </h2>
                      <p className="text-text-secondary max-w-[280px] mx-auto">
                        We&apos;ll notify you at the email provided as soon as FarmZy launches.
                      </p>
                    </div>

                    <button
                      onClick={handleClose}
                      className="px-8 py-3 bg-primary text-background font-bold rounded-2xl hover:shadow-[0_0_20px_rgba(126,217,87,0.3)] transition-all duration-300"
                    >
                      Got it, thanks!
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
