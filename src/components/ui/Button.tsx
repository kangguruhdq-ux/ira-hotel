import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "bronze" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium uppercase tracking-mega transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.99] min-h-[44px] min-w-[44px]";

  const variantStyles = {
    primary:
      "bg-hotel-charcoal text-hotel-ivory hover:bg-hotel-bronze focus-visible:ring-hotel-bronze focus-visible:ring-offset-hotel-ivory",
    bronze:
      "bg-hotel-bronze text-white hover:bg-hotel-bronze-dark focus-visible:ring-hotel-charcoal focus-visible:ring-offset-white",
    outline:
      "border border-hotel-charcoal text-hotel-charcoal hover:bg-hotel-charcoal hover:text-hotel-ivory focus-visible:ring-hotel-charcoal focus-visible:ring-offset-hotel-ivory",
    ghost:
      "text-hotel-charcoal hover:text-hotel-bronze underline-offset-8 hover:underline focus-visible:ring-hotel-bronze",
  };

  const sizeStyles = {
    sm: "text-[11px] px-5 py-2.5",
    md: "text-xs px-7 py-3.5",
    lg: "text-xs px-9 py-4",
  };

  const combinedClasses = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
