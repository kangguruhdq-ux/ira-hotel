"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ROOMS_DATA } from "@/data/rooms";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RoomModalGallery } from "@/components/rooms/RoomModalGallery";
import { Maximize2 } from "lucide-react";

export function GallerySection() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const allImages = ROOMS_DATA.map((room) => ({
    src: room.image,
    alt: `${room.name} — ${room.imageAlt}`,
    roomName: room.name,
    capacity: room.capacity,
  }));

  return (
    <section className="py-24 md:py-32 bg-[#F7F4EE] text-hotel-charcoal">
      <Container size="default">
        <SectionHeading
          label="Dokumentasi Visual Autentik"
          title="Galeri Kamar Iraa Hotel"
          description="Seluruh foto yang ditampilkan merupakan dokumentasi asli properti kamar Iraa Hotel untuk memberikan gambaran akurat dan transparan bagi para calon tamu."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setActiveImageIndex(idx)}
              className="group relative aspect-[4/3] bg-stone-200 overflow-hidden cursor-pointer border border-[#E2DACF] hover:border-hotel-bronze transition-colors"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />

              {/* Caption & hover icon */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between opacity-90 group-hover:opacity-100 transition-opacity text-white">
                <div className="flex justify-end">
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
      </Container>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <RoomModalGallery
          isOpen={activeImageIndex !== null}
          images={allImages}
          currentIndex={activeImageIndex}
          onClose={() => setActiveImageIndex(null)}
          onPrev={() =>
            setActiveImageIndex((prev) =>
              prev !== null ? (prev - 1 + allImages.length) % allImages.length : 0
            )
          }
          onNext={() =>
            setActiveImageIndex((prev) =>
              prev !== null ? (prev + 1) % allImages.length : 0
            )
          }
          roomName={allImages[activeImageIndex].roomName}
        />
      )}
    </section>
  );
}
