"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
}

interface RoomModalGalleryProps {
  isOpen: boolean;
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  roomName: string;
}

export function RoomModalGallery({
  isOpen,
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
  roomName,
}: RoomModalGalleryProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Galeri foto ${roomName}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8 animate-fadeIn"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Tutup pratinjau foto"
        className="absolute top-5 right-5 z-20 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hotel-bronze"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div
        className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-[65vh] sm:h-[80vh]">
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            sizes="90vw"
            className="object-contain"
            priority
          />
        </div>

        {/* Navigation Arrows if more than 1 image */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={onPrev}
              aria-label="Foto sebelumnya"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white p-3 rounded-full bg-black/50 hover:bg-black/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hotel-bronze"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={onNext}
              aria-label="Foto berikutnya"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white p-3 rounded-full bg-black/50 hover:bg-black/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hotel-bronze"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Image Caption & Counter */}
        <div className="absolute bottom-2 left-0 right-0 text-center text-white px-4 py-2 bg-black/40 backdrop-blur-sm">
          <p className="text-sm font-light text-neutral-200">{currentImage.alt}</p>
          {images.length > 1 && (
            <p className="text-xs text-hotel-bronze-light mt-1">
              {currentIndex + 1} / {images.length}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
