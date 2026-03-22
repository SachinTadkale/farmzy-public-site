"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageSquare, Send, Clock, CheckCircle2, User, AlertCircle } from "lucide-react";
import { useState } from "react";
import Container from "@/components/layout/container";
import SectionWrapper from "@/components/layout/sectionwrapper";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    // Validation
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus("loading");

    // Simulate submission delay
    setTimeout(() => {
      // Create mailto link
      const subject = `FarmZy Inquiry from ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      const mailtoUrl = `mailto:officialfarmzyapp@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      window.location.href = mailtoUrl;
      setStatus("success");
      
      // Reset form after a delay
      setTimeout(() => {
        setStatus("idle");
        setFormData({ name: "", email: "", message: "" });
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background font-outfit">
      {/* Hero Section */}
      <SectionWrapper className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="w-full max-w-[1000px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
        </div>

        <Container>
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-5xl sm:text-7xl font-bold tracking-tighter text-text-primary leading-[1.1]"
            >
              Get in <span className="text-primary italic">Touch.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg sm:text-xl text-text-secondary max-w-xl mx-auto font-medium"
            >
              Have questions or want to join early? We'd love to hear from you and build the future of agriculture together.
            </motion.p>
          </div>
        </Container>
      </SectionWrapper>

      {/* Contact Content */}
      <SectionWrapper className="py-20 pb-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-surface/50 border border-border p-8 sm:p-12 rounded-[2.5rem] backdrop-blur-xl relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl" />
              
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="flex flex-col items-center justify-center py-12 text-center space-y-6"
                  >
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-3xl font-bold text-text-primary">Message Sent Successfully!</h3>
                      <p className="text-text-secondary font-medium">We've opened your mail client. Expect a reply within 24 hours.</p>
                    </div>
                    <button 
                      onClick={() => setStatus("idle")}
                      className="text-primary font-bold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-7 relative z-10"
                  >
                    <div className="space-y-2">
                      <div className="flex justify-between items-center ml-1">
                        <label htmlFor="name" className="text-xs font-bold text-text-primary uppercase tracking-[0.2em] flex items-center">
                          <User className="w-3.5 h-3.5 mr-2 opacity-50" />
                          Name
                        </label>
                        {errors.name && <span className="text-[10px] text-red-500 font-bold uppercase tracking-wider">{errors.name}</span>}
                      </div>
                      <input
                        id="name"
                        type="text"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full bg-background border ${errors.name ? 'border-red-500/50' : 'border-border'} px-6 py-4 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-text-primary font-medium placeholder:text-text-secondary/30`}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center ml-1">
                        <label htmlFor="email" className="text-xs font-bold text-text-primary uppercase tracking-[0.2em] flex items-center">
                          <Mail className="w-3.5 h-3.5 mr-2 opacity-50" />
                          Email
                        </label>
                        {errors.email && <span className="text-[10px] text-red-500 font-bold uppercase tracking-wider">{errors.email}</span>}
                      </div>
                      <input
                        id="email"
                        type="email"
                        placeholder="hello@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full bg-background border ${errors.email ? 'border-red-500/50' : 'border-border'} px-6 py-4 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-text-primary font-medium placeholder:text-text-secondary/30`}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center ml-1">
                        <label htmlFor="message" className="text-xs font-bold text-text-primary uppercase tracking-[0.2em] flex items-center">
                          <MessageSquare className="w-3.5 h-3.5 mr-2 opacity-50" />
                          Message
                        </label>
                        {errors.message && <span className="text-[10px] text-red-500 font-bold uppercase tracking-wider">{errors.message}</span>}
                      </div>
                      <textarea
                        id="message"
                        rows={5}
                        placeholder="Tell us about yourself or your query..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={`w-full bg-background border ${errors.message ? 'border-red-500/50' : 'border-border'} px-6 py-4 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-text-primary font-medium placeholder:text-text-secondary/30 resize-none`}
                      />
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(var(--primary), 0.3)" }}
                      whileTap={{ scale: 0.97 }}
                      disabled={status === "loading"}
                      className={`w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center transition-all ${
                        status === "loading"
                        ? "bg-primary/20 text-primary cursor-default" 
                        : "bg-primary text-background shadow-lg shadow-primary/20"
                      }`}
                    >
                      {status === "loading" ? (
                        <div className="w-6 h-6 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="mr-3 w-5 h-5" />
                          Send Inquiry
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Contact Info */}
            <div className="space-y-16 pt-8 lg:pt-12">
              <div className="space-y-8">
                <h3 className="text-4xl font-bold tracking-tight text-text-primary">Reach Out Directly</h3>
                <p className="text-text-secondary text-lg leading-relaxed font-medium">
                  We're currently in early access but always open to feedback, partnerships, and direct inquiries from farmers and businesses.
                </p>
              </div>

              <div className="space-y-10">
                {[
                  { icon: Mail, label: "Email", value: "officialfarmzyapp@gmail.com", href: "mailto:officialfarmzyapp@gmail.com" },
                  { icon: Clock, label: "Response Time", value: "Typically within 24 hours", href: null },
                  { icon: MessageSquare, label: "Availability", value: "10 AM - 6 PM IST, Mon-Sat", href: null }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start space-x-6 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-surface border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors shadow-sm">
                      <item.icon className="w-6 h-6 text-text-primary group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-xl font-bold text-text-primary hover:text-primary transition-colors underline decoration-primary/20 underline-offset-4">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-xl font-bold text-text-primary">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="pt-8 p-10 border border-border border-dashed rounded-[2.5rem] bg-surface/30 relative">
                <div className="absolute top-0 right-0 p-4 opacity-40">
                  <AlertCircle className="w-12 h-12 text-primary" />
                </div>
                <p className="text-sm italic text-text-secondary leading-relaxed font-medium">
                  "Transparent communication leads to direct trust. We're here to guide you through every step of the direct marketplace."
                </p>
                <div className="mt-6 flex items-center space-x-4">
                  <div className="w-1 h-8 bg-primary/20 rounded-full" />
                  <p className="text-xs font-bold text-text-primary uppercase tracking-widest">— Team FarmZy</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </div>
  );
}
