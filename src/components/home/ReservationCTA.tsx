import React from "react";
import Image from "next/image";
import { Phone, MapPin, Clock } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { HOTEL_CONFIG } from "@/data/hotel";
import { buildWhatsAppGeneralInquiryUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ReservationCTA() {
  const waUrl = buildWhatsAppGeneralInquiryUrl();

  return (
    <section className="relative py-24 md:py-32 bg-hotel-charcoal text-white overflow-hidden">
      {/* Subtle backdrop pattern or authentic room image overlay */}
      <div className="absolute inset-0 z-0 opacity-15">
        <Image
          src="/images/rooms/iraa-deluxe-double.png"
          alt="Suasana tenang Iraa Hotel"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-hotel-charcoal/90" />
      </div>

      <Container size="narrow" className="relative z-10 text-center space-y-8">
        <ScrollReveal direction="up" className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/20 bg-white/5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-hotel-bronze-light" />
            <span className="text-[10px] sm:text-xs uppercase tracking-mega text-hotel-cream font-medium">
              Reservasi Langsung & Mudah
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.2] text-white">
            Rencanakan Perjalanan Nyaman Anda Bersama Iraa Hotel
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed">
            Hubungi pengelola hotel via WhatsApp untuk menanyakan ketersediaan kamar, memeriksa tanggal menginap, serta memperoleh konfirmasi harga terbaik.
          </p>
        </ScrollReveal>

        {/* WhatsApp Contact Box */}
        <ScrollReveal direction="up" delay={2} className="max-w-md mx-auto p-6 sm:p-8 bg-white/5 border border-white/15 backdrop-blur-sm space-y-5 luxury-glass-panel">
          <div className="flex items-center justify-center gap-3 text-hotel-bronze-light">
            <Phone className="w-5 h-5" />
            <span className="font-serif text-2xl sm:text-3xl font-medium tracking-wide text-white">
              {HOTEL_CONFIG.whatsappFormatted}
            </span>
          </div>

          <p className="text-xs text-neutral-300 leading-relaxed font-light">
            Layanan resepsionis siap merespons pertanyaan ketersediaan kamar dan panduan lokasi menuju properti.
          </p>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 w-full py-4 px-6 text-xs uppercase tracking-mega font-medium bg-hotel-bronze text-white hover:bg-hotel-bronze-dark transition-all duration-300 min-h-[48px] shadow-lg"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>Kirim Pesan WhatsApp Sekarang</span>
          </a>

          <div className="pt-2 flex items-center justify-center gap-4 text-[11px] text-neutral-400">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-hotel-bronze-light" />
              Check-in {HOTEL_CONFIG.checkInTime}
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-hotel-bronze-light" />
              Pusat Kota Jogja
            </span>
          </div>
        </ScrollReveal>

        <p className="text-xs text-neutral-400 font-light">
          * Konfirmasi ketersediaan dan tarif final disepakati langsung bersama pihak hotel.
        </p>
      </Container>
    </section>
  );
}
