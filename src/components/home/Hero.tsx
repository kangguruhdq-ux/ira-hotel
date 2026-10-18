"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare, ArrowDown, ChevronRight } from "lucide-react";
import { buildWhatsAppGeneralInquiryUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const HERO_SLIDES = [
  {
    image: "/images/rooms/iraa-deluxe-double.png",
    alt: "Kamar Iraa Deluxe Double dengan pencahayaan hangat modern di Iraa Hotel Malioboro",
    title: "Iraa Deluxe Double",
    caption: "Ranjang 160×200 cm & Water Heater",
  },
  {
    image: "/images/rooms/iraa-deluxe-twin.png",
    alt: "Kamar Iraa Deluxe Twin dengan dua ranjang terpisah dan penataan rapi",
    title: "Iraa Deluxe Twin",
    caption: "2 Tempat Tidur Terpisah & Pendingin AC",
  },
  {
    image: "/images/rooms/iraa-family-room.png",
    alt: "Kamar Iraa Family Room berkapasitas 3 orang untuk keluarga dan rombongan",
    title: "Iraa Family Room",
    caption: "Kapasitas 3 Tamu (Double + Single Bed)",
  },
  {
    image: "/images/rooms/iraa-economy-ac.png",
    alt: "Kamar Iraa Economy AC dengan fasilitas pendingin ruangan dan meja kerja",
    title: "Iraa Economy AC",
    caption: "Kesejukan AC dengan Tarif Terjangkau",
  },
  {
    image: "/images/rooms/iraa-economy-fan.png",
    alt: "Kamar Iraa Economy Fan yang bersih, nyaman, dan hemat untuk pelancong",
    title: "Iraa Economy Fan",
    caption: "Pilihan Menginap Paling Hemat Rp110.000",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const waUrl = buildWhatsAppGeneralInquiryUrl();

  // Smooth automatic rotation every 6.5 seconds (between 6-7s as requested)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (idx: number) => {
    setCurrentSlide(idx);
  };

  return (
    <section className="relative min-h-[94vh] lg:min-h-screen flex items-center justify-center bg-hotel-charcoal overflow-hidden pt-20">
      {/* Background Carousel Slides with Smooth Crossfade & Ken Burns Zoom */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === currentSlide;

          return (
            <div
              key={idx}
              className={cn(
                "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              )}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={idx === 0}
                sizes="100vw"
                className={cn(
                  "object-cover object-center transition-transform duration-[6500ms] ease-out",
                  isActive ? "scale-105" : "scale-100"
                )}
              />
            </div>
          );
        })}

        {/* Cinematic Multi-stop Editorial Gradient Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-hotel-charcoal via-hotel-charcoal/55 to-black/65" />
      </div>

      <Container size="default" className="relative z-20 py-16 text-center text-white">
        <div className="max-w-3xl mx-auto space-y-6">

          {/* Main Editorial Headline with First-Time Entry Animation */}
          <h1 className="animate-hero-title font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.25] sm:leading-[1.18] pb-2 text-balance max-w-4xl mx-auto">
            Kehangatan Menginap di Pusat Yogyakarta
          </h1>

          {/* Supporting Description with First-Time Entry Animation */}
          <p className="animate-hero-desc text-base sm:text-lg md:text-xl text-neutral-200 font-light leading-relaxed max-w-2xl mx-auto">
            Rasakan ketenangan beristirahat di Iraa Hotel (By Nyaman Inn). Hanya ±4 menit ke Stasiun Lempuyangan dan ±8 menit ke Malioboro, dengan kamar bersih, ber-AC, dan harga bersahabat.
          </p>

          {/* Call to action buttons with First-Time Entry Animation */}
          <div className="animate-hero-cta pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kamar"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs uppercase tracking-mega font-medium bg-hotel-ivory text-hotel-charcoal hover:bg-hotel-bronze hover:text-white transition-all duration-300 min-h-[48px] shadow-lg active:scale-95"
            >
              <span>Jelajahi 5 Tipe Kamar</span>
              <ChevronRight className="w-4 h-4" />
            </Link>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs uppercase tracking-mega font-medium bg-hotel-bronze text-white hover:bg-hotel-bronze-dark transition-all duration-300 min-h-[48px] shadow-lg btn-shimmer active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Reservasi via WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Slide Indicators with Active Progress Fill */}
        <div className="pt-10 flex flex-col items-center gap-3">
          <div className="flex items-center gap-2.5">
            {HERO_SLIDES.map((slide, idx) => {
              const isActive = idx === currentSlide;

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  aria-label={`Lihat foto ${slide.title}`}
                  className="group py-2 focus-visible:outline-none"
                >
                  <div
                    className={cn(
                      "h-1.5 transition-all duration-500 rounded-full",
                      isActive
                        ? "w-8 sm:w-10 bg-hotel-bronze-light"
                        : "w-2.5 bg-white/30 hover:bg-white/60"
                    )}
                  />
                </button>
              );
            })}
          </div>

          {/* Current Slide Caption */}
          <div className="text-xs text-neutral-300 font-light flex items-center gap-2">
            <span className="text-hotel-bronze-light font-medium uppercase tracking-wider text-[11px]">
              {HERO_SLIDES[currentSlide].title}
            </span>
            <span>&bull;</span>
            <span className="text-neutral-400">
              {HERO_SLIDES[currentSlide].caption}
            </span>
          </div>
        </div>

        {/* Scroll Indicator with smooth bounce */}
        <div className="animate-hero-scroll pt-8 sm:pt-10 flex justify-center">
          <Link
            href="/#tentang-kami"
            aria-label="Gulir ke pengantar Iraa Hotel"
            className="flex flex-col items-center gap-1.5 text-neutral-300 hover:text-white transition-colors group p-2"
          >
            <span className="text-[10px] uppercase tracking-mega group-hover:tracking-widest transition-all">
              Jelajahi Lebih Lanjut
            </span>
            <ArrowDown className="w-4 h-4 animate-bounce text-hotel-bronze-light" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
