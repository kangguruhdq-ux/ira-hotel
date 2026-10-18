"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RoomModalGallery } from "@/components/rooms/RoomModalGallery";
import { StackedCardGallery, GalleryPhoto } from "@/components/home/StackedCardGallery";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Maximize2, Layers, Grid } from "lucide-react";
import { cn } from "@/lib/utils";

const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    src: "/images/rooms/iraa-deluxe-double.png",
    alt: "Kamar Iraa Deluxe Double dengan ranjang 160×200 cm dan pencahayaan headboard hangat",
    roomName: "Iraa Deluxe Double (Kamar Utama)",
    category: "Deluxe Double",
    capacity: 2,
  },
  {
    src: "/images/rooms/iraa-deluxe-double-interior.png",
    alt: "Fasilitas TV LED dinding dengan backlight hangat, meja kerja, dan lemari pakaian",
    roomName: "Iraa Deluxe Double (TV & Wardrobe)",
    category: "Deluxe Double",
    capacity: 2,
  },
  {
    src: "/images/rooms/iraa-deluxe-double-bathroom.png",
    alt: "Kamar mandi pribadi bersih dengan shower water heater dan kloset duduk modern",
    roomName: "Iraa Deluxe Double (Kamar Mandi)",
    category: "Deluxe Double",
    capacity: 2,
  },
  {
    src: "/images/rooms/iraa-deluxe-double-amenities.png",
    alt: "Perlengkapan menginap: air mineral botol, toiletries sabun/sampo cair, dan sikat gigi",
    roomName: "Iraa Deluxe Double (Amenities)",
    category: "Deluxe Double",
    capacity: 2,
  },
  {
    src: "/images/rooms/iraa-deluxe-twin.png",
    alt: "Kamar Iraa Deluxe Twin dengan dua ranjang terpisah dan pendingin AC",
    roomName: "Iraa Deluxe Twin (2 Ranjang)",
    category: "Deluxe Twin",
    capacity: 2,
  },
  {
    src: "/images/rooms/iraa-deluxe-twin-bathroom.png",
    alt: "Kamar mandi Iraa Deluxe Twin dengan wastafel meja granit dan kloset duduk bidet",
    roomName: "Iraa Deluxe Twin (Kamar Mandi)",
    category: "Deluxe Twin",
    capacity: 2,
  },
  {
    src: "/images/rooms/iraa-deluxe-twin-hallway.png",
    alt: "Akses koridor hotel yang bersih, luas, dan dilengkapi tempat duduk santai",
    roomName: "Area Koridor Kamar Iraa Hotel",
    category: "Area Hotel",
    capacity: 2,
  },
  {
    src: "/images/rooms/iraa-economy-ac.png",
    alt: "Kamar Iraa Economy AC dengan fasilitas dua ranjang bersih dan bantal batik",
    roomName: "Iraa Economy AC (2 Ranjang)",
    category: "Economy AC",
    capacity: 2,
  },
  {
    src: "/images/rooms/iraa-economy-ac-desk.png",
    alt: "Meja kerja kaca, TV LED, dan complimentary air mineral botol",
    roomName: "Iraa Economy AC (Meja & TV)",
    category: "Economy AC",
    capacity: 2,
  },
  {
    src: "/images/rooms/iraa-economy-ac-bathroom.png",
    alt: "Kamar mandi shower water heater, wastafel, dan kloset duduk modern",
    roomName: "Iraa Economy AC (Kamar Mandi)",
    category: "Economy AC",
    capacity: 2,
  },
  {
    src: "/images/rooms/iraa-economy-ac-terrace.jpg",
    alt: "Teras dan selasar santai asri luar kamar berhiaskan tanaman hijau",
    roomName: "Teras Asri Luar Kamar",
    category: "Selasar Kamar",
    capacity: 2,
  },
  {
    src: "/images/rooms/iraa-family-room.png",
    alt: "Kamar Iraa Family Room berkapasitas 3 orang untuk keluarga",
    roomName: "Iraa Family Room (3 Tamu)",
    category: "Family Room",
    capacity: 3,
  },
  {
    src: "/images/rooms/iraa-economy-fan.png",
    alt: "Kamar Iraa Economy Fan yang bersih, nyaman, dan paling terjangkau",
    roomName: "Iraa Economy Fan",
    category: "Economy Fan",
    capacity: 2,
  },
];

export function GallerySection() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<"stack" | "grid">("stack");

  return (
    <section className="py-24 md:py-32 bg-[#F7F4EE] text-hotel-charcoal overflow-hidden border-b border-[#E2DACF]/60">
      <Container size="default">
        <ScrollReveal direction="up">
          <SectionHeading
            label="Dokumentasi Visual Autentik"
            title="Galeri Kamar & Properti Iraa Hotel"
            description="Seluruh foto yang ditampilkan merupakan dokumentasi asli properti kamar Iraa Hotel untuk memberikan gambaran akurat dan transparan bagi para calon tamu."
            align="center"
          />
        </ScrollReveal>

        {/* View Mode Switcher: Card Stack vs Grid */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center p-1 bg-white border border-[#E2DACF] rounded-full shadow-xs">
            <button
              type="button"
              onClick={() => setViewMode("stack")}
              className={cn(
                "inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium transition-all focus-visible:outline-none",
                viewMode === "stack"
                  ? "bg-hotel-charcoal text-white shadow-sm"
                  : "text-hotel-charcoal-muted hover:text-hotel-charcoal"
              )}
            >
              <Layers className="w-3.5 h-3.5 text-hotel-bronze-light" />
              <span>Kartu Bertumpuk</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={cn(
                "inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium transition-all focus-visible:outline-none",
                viewMode === "grid"
                  ? "bg-hotel-charcoal text-white shadow-sm"
                  : "text-hotel-charcoal-muted hover:text-hotel-charcoal"
              )}
            >
              <Grid className="w-3.5 h-3.5 text-hotel-bronze-light" />
              <span>Kisi Foto ({GALLERY_PHOTOS.length})</span>
            </button>
          </div>
        </div>

        {/* Dynamic Display Mode */}
        {viewMode === "stack" ? (
          <div className="py-2">
            <StackedCardGallery
              photos={GALLERY_PHOTOS}
              onOpenLightbox={(idx) => setActiveImageIndex(idx)}
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
            {GALLERY_PHOTOS.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className="group relative aspect-[4/3] bg-stone-200 overflow-hidden cursor-pointer border border-[#E2DACF] hover:border-hotel-bronze transition-colors image-zoom-container shadow-xs"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/45 transition-colors" />

                {/* Caption & hover icon */}
                <div className="absolute inset-0 p-5 flex flex-col justify-between opacity-90 group-hover:opacity-100 transition-opacity text-white">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-black/50 backdrop-blur-sm border border-white/15">
                      {img.category}
                    </span>
                    <span className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-mega text-hotel-cream block">
                      Kapasitas {img.capacity} Tamu
                    </span>
                    <p className="font-serif text-lg text-white font-normal mt-0.5">
                      {img.roomName}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <RoomModalGallery
          isOpen={activeImageIndex !== null}
          images={GALLERY_PHOTOS}
          currentIndex={activeImageIndex}
          roomName={GALLERY_PHOTOS[activeImageIndex].roomName}
          onClose={() => setActiveImageIndex(null)}
          onPrev={() =>
            setActiveImageIndex((prev) =>
              prev !== null ? (prev - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length : 0
            )
          }
          onNext={() =>
            setActiveImageIndex((prev) =>
              prev !== null ? (prev + 1) % GALLERY_PHOTOS.length : 0
            )
          }
        />
      )}
    </section>
  );
}
