import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}

export function Container({
  children,
  className,
  size = "default",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8 md:px-12",
        {
          "max-w-7xl": size === "default",
          "max-w-5xl": size === "narrow",
          "max-w-[1400px]": size === "wide",
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
