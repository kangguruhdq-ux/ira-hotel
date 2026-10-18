"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right" | "zoom";
  delay?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  threshold?: number;
  once?: boolean;
  onClick?: () => void;
}

export function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay,
  threshold = 0.12,
  once = true,
  onClick,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check if IntersectionObserver is supported
    if (!("IntersectionObserver" in window)) {
      el.classList.add("reveal-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            entry.target.classList.remove("reveal-visible");
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold, once]);

  const directionClasses = {
    up: "reveal-init",
    left: "reveal-init-left",
    right: "reveal-init-right",
    zoom: "reveal-init-zoom",
  };

  const delayClass = delay ? `stagger-${delay}` : "";

  return (
    <div
      ref={ref}
      onClick={onClick}
      className={cn(directionClasses[direction], delayClass, className)}
    >
      {children}
    </div>
  );
}
