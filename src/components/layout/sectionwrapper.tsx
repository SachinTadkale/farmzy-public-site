import { ReactNode, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "surface" | "primary-green";
}

const SectionWrapper = forwardRef<HTMLElement, SectionWrapperProps>(
  ({ children, className, id, variant = "default" }, ref) => {
    const variants = {
      default: "bg-background",
      surface: "bg-surface",
      "primary-green": "bg-[#064e3b]", // Deep green for solution section
    };

    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          "py-16 md:py-24 relative overflow-hidden transition-colors duration-700",
          variants[variant],
          className
        )}
      >
        {children}
      </section>
    );
  }
);

SectionWrapper.displayName = "SectionWrapper";

export default SectionWrapper;
