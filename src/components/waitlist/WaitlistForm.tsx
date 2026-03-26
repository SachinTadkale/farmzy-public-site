"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Loader2, ArrowRight } from "lucide-react";
import RoleDropdown from "./RoleDropdown";
import { joinWaitlist } from "@/services/waitlistService";
import { WaitlistRole } from "@/services/waitlist.types";

const waitlistSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Invalid email format"),
  role: z.enum(["FARMER", "COMPANY"]),
  name: z
    .string()
    .trim()
    .optional()
    .transform((value) => value || undefined),
});

type WaitlistFormData = z.infer<typeof waitlistSchema>;

interface WaitlistFormProps {
  onSuccess: () => void;
}

export default function WaitlistForm({ onSuccess }: WaitlistFormProps) {
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      email: "",
      role: undefined as WaitlistRole | undefined,
      name: "",
    },
  });

  const onSubmit = async (data: WaitlistFormData) => {
    setServerError(null);

    try {
      await joinWaitlist(data);
      reset();
      onSuccess();
    } catch (error) {
      setServerError(
        error instanceof Error
          ? error.message
          : "An unexpected error occurred. Please try again.",
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Name Field (Optional) */}
      <div className="space-y-1.5">
        <label htmlFor="name" className="block text-sm font-bold text-text-primary px-1">
          Name (Optional)
        </label>
        <input
          {...register("name")}
          type="text"
          id="name"
          placeholder="Enter your name"
          className="w-full px-5 py-3 rounded-xl border border-border bg-surface/50 backdrop-blur-sm text-text-primary outline-none transition-all duration-300 focus:border-primary focus:shadow-[0_0_15px_rgba(126,217,87,0.2)] hover:border-primary/50"
        />
      </div>

      {/* Email Field */}
      <div className="space-y-1.5">
        <label htmlFor="email" className="block text-sm font-bold text-text-primary px-1">
          Email Address <span className="text-primary">*</span>
        </label>
        <input
          {...register("email")}
          type="email"
          id="email"
          placeholder="name@example.com"
          className={`w-full px-5 py-3 rounded-xl border bg-surface/50 backdrop-blur-sm text-text-primary outline-none transition-all duration-300 ${errors.email ? "border-red-500/50" : "border-border hover:border-primary/50"
            } focus:border-primary focus:shadow-[0_0_15px_rgba(126,217,87,0.2)]`}
        />
        {errors.email && (
          <p className="text-xs font-bold text-red-500 px-1">{errors.email.message}</p>
        )}
      </div>

      {/* Role Field */}
      <Controller
        name="role"
        control={control}
        render={({ field }) => (
          <RoleDropdown
            value={field.value}
            onChange={field.onChange}
            error={errors.role?.message}
          />
        )}
      />

      {/* Server Error */}
      {serverError && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-semibold"
        >
          {serverError}
        </motion.div>
      )}

      {/* Submit Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={isSubmitting}
        type="submit"
        className="group relative w-full py-3 bg-primary text-background font-bold rounded-xl shadow-xl shadow-primary/20 hover:shadow-primary/40 flex items-center justify-center space-x-2 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden mt-9"
      >
        <span className="relative z-10">
          {isSubmitting ? "Joining..." : "Sign Up for Early Access"}
        </span>
        {!isSubmitting && (
          <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
        )}
        {isSubmitting && <Loader2 className="w-5 h-5 animate-spin relative z-10" />}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-750" />
      </motion.button>
    </form>
  );
}
