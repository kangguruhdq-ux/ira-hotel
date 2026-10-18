"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface GalleryImage {
  src: string;
  alt: string;
}

interface RoomDetailGalleryProps {
  images: GalleryImage[];
  roomName: string;
}

export function RoomDetailGallery({ images, roomName }: RoomDetailGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Close lightbox on Escape and support Arrow keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;

      if (e.key === "Escape") {
        setIsLightboxOpen(false);
      } else if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
      } else if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev + 1) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, images.length]);

  const activeImage = images[selectedIndex] || images[0];

  const prevImage = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="space-y-4">
      {/* Main Image Display Frame */}
      <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-stone-200 overflow-hidden border border-[#E2DACF] group shadow-sm">
        <Image
          src={activeImage.src}
          alt={activeImage.alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover transition-all duration-500 ease-out"
        />

        {/* Gradient shadow for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

        {/* Top Badges: Authentic Photo Badge + Enlarge Button */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-auto">
          <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-[10px] uppercase tracking-mega font-medium border border-white/20">
            Foto Asli Properti
          </span>

          <button
            type="button"
            onClick={() => setIsLightboxOpen(true)}
            aria-label="Perbesar foto kamar"
            className="p-2 bg-black/60 hover:bg-black/80 backdrop-blur-md text-white border border-white/20 rounded-full transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hotel-bronze"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>

        {/* Navigation Arrows for Multiple Photos */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prevImage}
              aria-label="Foto sebelumnya"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 backdrop-blur-sm transition-all focus-visible:outline-none"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={nextImage}
              aria-label="Foto berikutnya"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 backdrop-blur-sm transition-all focus-visible:outline-none"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Bottom Caption & Counter */}
        <div className="absolute bottom-4 left-4 right-4 z-10 flex items-end justify-between gap-4 text-white">
          <p className="text-xs sm:text-sm font-light text-neutral-200 line-clamp-1 max-w-md">
            {activeImage.alt}
          </p>
          <span className="shrink-0 text-[11px] font-mono px-2 py-0.5 bg-black/50 backdrop-blur-sm border border-white/20">
            {selectedIndex + 1} / {images.length}
          </span>
        </div>
      </div>

      {/* Thumbnails Row if Multiple Photos */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2.5 sm:gap-3">
          {images.map((img, idx) => {
            const isSelected = idx === selectedIndex;

            return (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedIndex(idx)}
                aria-label={`Pilih foto ${idx + 1}`}
                className={cn(
                  "relative aspect-[4/3] overflow-hidden border-2 transition-all duration-300 focus-visible:outline-none",
                  isSelected
                    ? "border-hotel-bronze ring-2 ring-hotel-bronze/40 scale-[1.02]"
                    : "border-[#E2DACF] opacity-70 hover:opacity-100 hover:border-neutral-400"
                )}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="180px"
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Galeri Lengkap ${roomName}`}
          className="fixed inset-0 z-[9999] bg-black/95 flex flex-col items-center justify-center p-4 sm:p-8 animate-fadeIn"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setIsLightboxOpen(false)}
            aria-label="Tutup galeri layar penuh"
            className="absolute top-6 right-6 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors focus-visible:outline-none"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Lightbox Main Image */}
          <div className="relative w-full max-w-5xl h-[70vh] sm:h-[80vh]">
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          {/* Lightbox Navigation */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={prevImage}
                aria-label="Foto sebelumnya"
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                type="button"
                onClick={nextImage}
                aria-label="Foto berikutnya"
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Lightbox Caption */}
          <div className="pt-4 text-center text-white space-y-1 max-w-xl">
            <p className="font-serif text-lg">{roomName}</p>
            <p className="text-xs text-neutral-300 font-light">{activeImage.alt}</p>
            <p className="text-xs text-hotel-bronze-light font-mono">
              Foto {selectedIndex + 1} dari {images.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
