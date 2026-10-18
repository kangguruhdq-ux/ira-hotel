"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare, Maximize2, ArrowRight } from "lucide-react";
import { ROOMS_DATA } from "@/data/rooms";
import { RoomItem } from "@/types/room";
import { formatRupiah, cn } from "@/lib/utils";
import { buildWhatsAppReservationUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RoomModalGallery } from "@/components/rooms/RoomModalGallery";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function RoomShowcase() {
  const [activeGalleryRoom, setActiveGalleryRoom] = useState<RoomItem | null>(null);

  return (
    <section id="kamar" className="py-24 md:py-32 bg-hotel-cream/30 text-hotel-charcoal">
      <Container size="default">
        <SectionHeading
          label="Akomodasi & Pilihan Kamar"
          title="Kenyamanan Bersahaja untuk Setiap Perjalanan"
          description="Ragam pilihan kamar bersih dan tertata rapi di Iraa Hotel dengan fasilitas penyejuk ruangan, shower air hangat, dan akses Wi-Fi stabil."
          align="center"
        />

        {/* Editorial Alternating Room Showcase */}
        <div className="space-y-24 md:space-y-32">
          {ROOMS_DATA.map((room, index) => {
            const isReversed = index % 2 === 1;
            const waUrl = buildWhatsAppReservationUrl({
              roomName: room.name,
              guestCount: room.capacity,
            });

            return (
              <ScrollReveal
                key={room.id}
                direction={isReversed ? "right" : "left"}
                className={cn(
                  "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center border-b border-[#E2DACF]/80 pb-20 last:border-b-0 last:pb-0"
                )}
              >
                {/* Visual Column */}
                <div
                  className={cn(
                    "lg:col-span-7 relative group",
                    isReversed ? "lg:order-2" : "lg:order-1"
                  )}
                >
                  <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-stone-200 border border-[#E2DACF]">
                    <Image
                      src={room.image}
                      alt={room.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {/* Dark gradient for text readability and click indicator */}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />

                    {/* Enlarge click trigger button */}
                    <button
                      type="button"
                      onClick={() => setActiveGalleryRoom(room)}
                      aria-label={`Perbesar foto kamar ${room.name}`}
                      className="absolute bottom-4 right-4 bg-hotel-charcoal/80 hover:bg-hotel-charcoal text-white text-[11px] uppercase tracking-wider py-2 px-3.5 flex items-center gap-2 backdrop-blur-sm transition-all opacity-90 group-hover:opacity-100 min-h-[44px]"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-hotel-bronze-light" />
                      <span>Lihat Foto Penuh</span>
                    </button>

                    {/* Verified Bed Badge */}
                    <div className="absolute top-4 left-4 bg-white/95 text-hotel-charcoal text-[10px] uppercase tracking-mega font-medium py-1.5 px-3 border border-[#E2DACF]">
                      {room.capacity} Tamu &bull; {room.bedConfiguration}
                    </div>
                  </div>
                </div>

                {/* Editorial Content Column */}
                <div
                  className={cn(
                    "lg:col-span-5 space-y-6",
                    isReversed ? "lg:order-1" : "lg:order-2"
                  )}
                >
                  <div>
                    <span className="text-[11px] uppercase tracking-mega text-hotel-bronze font-medium block mb-2">
                      Kategori Kamar {index + 1}
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl text-hotel-charcoal font-normal leading-tight">
                      {room.name}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-hotel-charcoal-muted leading-relaxed font-light">
                    {room.description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-2.5 pt-1">
                    {room.keyHighlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-hotel-charcoal">
                        <span className="w-1.5 h-1.5 rounded-full bg-hotel-bronze shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Extra Bed Note if available */}
                  {room.extraBed?.available && (
                    <p className="text-xs text-hotel-bronze-dark italic bg-hotel-bronze/10 p-2.5 border-l-2 border-hotel-bronze">
                      {room.extraBed.description}
                    </p>
                  )}

                  {/* Pricing Box */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-baseline justify-between border-t border-[#E2DACF]/60">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-hotel-charcoal-muted block">
                        Tarif Menginap
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-serif text-2xl sm:text-3xl text-hotel-charcoal font-medium">
                          {formatRupiah(room.pricing.base)}
                        </span>
                        <span className="text-xs text-hotel-charcoal-muted">
                          /{room.pricing.period}
                        </span>
                      </div>
                      {room.pricing.weekday && room.pricing.weekend && (
                        <p className="text-[11px] text-hotel-charcoal-muted mt-0.5">
                          Weekday {formatRupiah(room.pricing.weekday)} &bull; Weekend {formatRupiah(room.pricing.weekend)}
                        </p>
                      )}
                    </div>

                    {room.pricing.isProvisional && (
                      <span className="mt-2 sm:mt-0 text-[10px] uppercase tracking-wider text-amber-800 bg-amber-100 px-2.5 py-1 inline-block">
                        Tarif Provisional
                      </span>
                    )}
                  </div>

                  {/* Actions: Room Details link & WhatsApp Reservation */}
                  <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs uppercase tracking-mega font-medium bg-hotel-charcoal text-white hover:bg-hotel-bronze transition-all duration-300 min-h-[44px]"
                    >
                      <MessageSquare className="w-4 h-4 text-hotel-bronze-light" />
                      <span>Tanya via WhatsApp</span>
                    </a>

                    <Link
                      href={`/kamar/${room.slug}`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs uppercase tracking-mega font-medium border border-hotel-charcoal text-hotel-charcoal hover:bg-hotel-charcoal hover:text-white transition-all duration-300 min-h-[44px]"
                    >
                      <span>Rincian Kamar</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>

      {/* Lightbox Gallery Modal */}
      {activeGalleryRoom && (
        <RoomModalGallery
          isOpen={!!activeGalleryRoom}
          images={activeGalleryRoom.galleryImages}
          currentIndex={0}
          onClose={() => setActiveGalleryRoom(null)}
          onPrev={() => {}}
          onNext={() => {}}
          roomName={activeGalleryRoom.name}
        />
      )}
    </section>
  );
}
