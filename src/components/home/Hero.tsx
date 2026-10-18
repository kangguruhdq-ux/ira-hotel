import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare, ArrowDown, ChevronRight } from "lucide-react";
import { buildWhatsAppGeneralInquiryUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";

export function Hero() {
  const waUrl = buildWhatsAppGeneralInquiryUrl();

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center bg-hotel-charcoal overflow-hidden pt-20">
      {/* Background Image with priority loading for optimal LCP */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/rooms/iraa-deluxe-double.png"
          alt="Suasana kamar Iraa Deluxe Double di Iraa Hotel Yogyakarta"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Editorial gradient & dark overlay to guarantee text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-hotel-charcoal via-hotel-charcoal/50 to-black/60" />
      </div>

      <Container size="default" className="relative z-10 py-16 text-center text-white">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Subtle uppercase kicker */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/20 bg-black/25 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-hotel-bronze-light animate-pulse" />
            <span className="text-[10px] sm:text-xs uppercase tracking-mega text-hotel-cream font-medium">
              Akomodasi Nyaman di Yogyakarta
            </span>
          </div>

          {/* Main Editorial Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.15]">
            Kehangatan Menginap di Pusat Yogyakarta
          </h1>

          {/* Supporting description */}
          <p className="text-base sm:text-lg md:text-xl text-neutral-200 font-light leading-relaxed max-w-2xl mx-auto">
            Rasakan ketenangan beristirahat di Iraa Hotel. Lokasi strategis dekat Stasiun Lempuyangan dan Malioboro, dengan kamar bersih, ber-AC, dan harga bersahabat.
          </p>

          {/* Call to action buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#kamar"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs uppercase tracking-mega font-medium bg-hotel-ivory text-hotel-charcoal hover:bg-hotel-bronze hover:text-white transition-all duration-300 min-h-[48px]"
            >
              <span>Jelajahi Kamar</span>
              <ChevronRight className="w-4 h-4" />
            </Link>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs uppercase tracking-mega font-medium bg-hotel-bronze text-white hover:bg-hotel-bronze-dark transition-all duration-300 min-h-[48px]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Reservasi via WhatsApp</span>
            </a>
          </div>

          {/* Key Quick Badges */}
          <div className="pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div>
              <p className="font-serif text-xl sm:text-2xl text-hotel-bronze-light">± 4 Menit</p>
              <p className="text-[11px] uppercase tracking-wider text-neutral-300 mt-1">Stasiun Lempuyangan</p>
            </div>
            <div>
              <p className="font-serif text-xl sm:text-2xl text-hotel-bronze-light">± 8 Menit</p>
              <p className="text-[11px] uppercase tracking-wider text-neutral-300 mt-1">Malioboro & Keraton</p>
            </div>
            <div>
              <p className="font-serif text-xl sm:text-2xl text-hotel-bronze-light">Mulai 110rb</p>
              <p className="text-[11px] uppercase tracking-wider text-neutral-300 mt-1">Tarif Per Malam</p>
            </div>
            <div>
              <p className="font-serif text-xl sm:text-2xl text-hotel-bronze-light">Resmi</p>
              <p className="text-[11px] uppercase tracking-wider text-neutral-300 mt-1">Chat WhatsApp Langsung</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-12 sm:pt-16 flex justify-center">
          <Link
            href="#tentang-kami"
            aria-label="Gulir ke pengantar Iraa Hotel"
            className="flex flex-col items-center gap-2 text-neutral-300 hover:text-white transition-colors group p-2"
          >
            <span className="text-[10px] uppercase tracking-mega group-hover:tracking-widest transition-all">
              Gulir ke Bawah
            </span>
            <ArrowDown className="w-4 h-4 animate-bounce text-hotel-bronze-light" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
