import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  theme?: "light" | "dark";
}

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
  className,
  theme = "light",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "space-y-4 mb-12 md:mb-16",
        isCenter ? "text-center mx-auto max-w-3xl" : "text-left max-w-2xl",
        className
      )}
    >
      {label && (
        <span
          className={cn(
            "section-label block",
            isDark ? "text-hotel-bronze-light" : "text-hotel-bronze"
          )}
        >
          {label}
        </span>
      )}
      <h2
        className={cn(
          "font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-[1.2]",
          isDark ? "text-white" : "text-hotel-charcoal"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-base sm:text-lg leading-relaxed font-light",
            isDark ? "text-neutral-300" : "text-hotel-charcoal-muted"
          )}
        >
          {description}
        </p>
      )}
      <div
        className={cn(
          "w-12 h-[1px]",
          isDark ? "bg-hotel-bronze-light/40" : "bg-hotel-bronze/40",
          isCenter ? "mx-auto mt-6" : "mt-6"
        )}
      />
    </div>
  );
}
