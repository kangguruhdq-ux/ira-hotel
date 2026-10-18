"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, Layers, Grid } from "lucide-react";
import { cn } from "@/lib/utils";

export interface GalleryPhoto {
  src: string;
  alt: string;
  roomName: string;
  category: string;
  capacity?: number;
  highlight?: string;
}

interface StackedCardGalleryProps {
  photos: GalleryPhoto[];
  onOpenLightbox: (index: number) => void;
}

export function StackedCardGallery({
  photos,
  onOpenLightbox,
}: StackedCardGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFanned, setIsFanned] = useState(false);

  const total = photos.length;

  const nextCard = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const prevCard = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const activePhoto = photos[activeIndex];

  // We display up to 4 cards in the visible stack
  const stackOffsets = [0, 1, 2, 3];

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
      {/* Top Deck Info & Quick Controls */}
      <div className="w-full flex items-center justify-between px-2 sm:px-6 mb-6">
        <div className="flex items-center gap-2">
          <span className="text-xs text-hotel-charcoal font-serif tracking-wider">
            Dokumentasi {activeIndex + 1} / {total}
          </span>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prevCard}
            aria-label="Kartu sebelumnya"
            className="w-10 h-10 rounded-full border border-hotel-charcoal/20 bg-white hover:bg-hotel-charcoal hover:text-white transition-all flex items-center justify-center text-hotel-charcoal shadow-sm active:scale-95 focus-visible:outline-none"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={nextCard}
            aria-label="Kartu berikutnya"
            className="w-10 h-10 rounded-full border border-hotel-charcoal/20 bg-white hover:bg-hotel-charcoal hover:text-white transition-all flex items-center justify-center text-hotel-charcoal shadow-sm active:scale-95 focus-visible:outline-none"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Stacked Cards Stage (Apple Wallet / Starbucks Stack Concept) */}
      <div
        className="relative w-full max-w-2xl h-[420px] sm:h-[490px] mx-auto select-none pt-16 sm:pt-20"
        onMouseEnter={() => setIsFanned(true)}
        onMouseLeave={() => setIsFanned(false)}
      >
        {stackOffsets.map((offset) => {
          const itemIndex = (activeIndex + offset) % total;
          const photo = photos[itemIndex];
          const isTop = offset === 0;

          // Vertical offset for the stack peeking out behind the front card
          // When fanned on hover, spacing increases slightly for extra elegance
          const translateY = isTop
            ? 0
            : isFanned
            ? -1 * (offset * 26)
            : -1 * (offset * 20);

          const scale = isTop ? 1 : 1 - offset * 0.04;
          const zIndex = 40 - offset * 10;
          const opacity = isTop ? 1 : 1 - offset * 0.12;

          return (
            <div
              key={photo.src}
              onClick={() => {
                if (isTop) {
                  onOpenLightbox(activeIndex);
                } else {
                  setActiveIndex(itemIndex);
                }
              }}
              style={{
                transform: `translate3d(0, ${translateY}px, 0) scale(${scale})`,
                zIndex,
                opacity,
              }}
              className={cn(
                "absolute inset-x-0 bottom-0 top-16 sm:top-20 rounded-2xl overflow-hidden cursor-pointer shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                "border border-[#E2DACF] bg-white",
                !isTop && "hover:-translate-y-8"
              )}
            >
              {/* Top Peeking Header Tab (Visible for cards stacked behind) */}
              <div
                className={cn(
                  "absolute top-0 inset-x-0 h-12 sm:h-14 px-5 sm:px-6 flex items-center justify-between z-20 transition-colors",
                  isTop
                    ? "bg-gradient-to-b from-black/75 via-black/40 to-transparent text-white"
                    : "bg-[#282119] text-[#F7F4EE] border-b border-[#A48662]/30 shadow-md"
                )}
              >
                <div className="flex items-center gap-2.5 truncate">
                  <span className="w-2 h-2 rounded-full bg-hotel-bronze-light shrink-0" />
                  <span className="text-xs sm:text-sm font-serif font-medium tracking-wide truncate">
                    {photo.roomName}
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[10px] uppercase tracking-wider font-mono px-2 py-0.5 rounded bg-black/30 border border-white/15 text-hotel-cream">
                    {photo.category}
                  </span>
                  {isTop && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenLightbox(activeIndex);
                      }}
                      aria-label="Perbesar foto"
                      className="p-1.5 bg-black/40 hover:bg-black/70 rounded-full text-white transition-colors"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Photo Area */}
              <div className="relative w-full h-full bg-neutral-900 overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  priority={isTop}
                  sizes="(max-width: 768px) 100vw, 680px"
                  className={cn(
                    "object-cover transition-transform duration-700 ease-out",
                    isTop ? "hover:scale-105" : "brightness-90"
                  )}
                />

                {/* Bottom Overlay Info for Front Active Card */}
                {isTop && (
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 bg-gradient-to-t from-black/85 via-black/45 to-transparent text-white z-20 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase tracking-mega text-hotel-bronze-light font-medium block">
                        Dokumentasi Resmi Iraa Hotel
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl text-white font-normal">
                        {photo.roomName}
                      </h3>
                      <p className="text-xs text-neutral-300 font-light line-clamp-1 max-w-md">
                        {photo.alt}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="px-3 py-1.5 bg-white text-hotel-charcoal text-[11px] font-medium uppercase tracking-wider rounded-sm shadow hover:bg-hotel-bronze hover:text-white transition-colors">
                        Klik untuk Perbesar
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Dot Navigation */}
      <div className="flex items-center justify-center gap-1.5 pt-8 sm:pt-10 flex-wrap max-w-md">
        {photos.map((_, idx) => {
          const isSelected = idx === activeIndex;

          return (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIndex(idx)}
              aria-label={`Lihat kartu foto ${idx + 1}`}
              className="p-1 focus-visible:outline-none"
            >
              <div
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  isSelected
                    ? "w-8 bg-hotel-bronze"
                    : "w-2 bg-hotel-charcoal/20 hover:bg-hotel-charcoal/40"
                )}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
