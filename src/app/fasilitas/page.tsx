import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { HOTEL_AMENITIES } from "@/data/amenities";
import { HOTEL_CONFIG } from "@/data/hotel";
import { buildWhatsAppGeneralInquiryUrl } from "@/lib/whatsapp";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  Wifi,
  Flame,
  Wind,
  Droplets,
  Car,
  Sparkles,
  Tv,
  MessageSquare,
  Clock,
  ShieldCheck,
  Coffee,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Fasilitas & Layanan | Iraa Hotel Malioboro",
  description:
    "Fasilitas lengkap dan terverifikasi di Iraa Hotel Malioboro Yogyakarta: Wi-Fi, Water Heater, AC, Area Parkir, Dispenser Air Minum, dan Resepsionis Cepat Tanggap via WhatsApp.",
};

const ICON_MAP: Record<string, React.ElementType> = {
  Wifi,
  Flame,
  Wind,
  Droplets,
  Car,
  Sparkles,
  Tv,
  MessageSquare,
};

export default function FasilitasPage() {
  const waUrl = buildWhatsAppGeneralInquiryUrl();

  return (
    <div className="min-h-screen bg-[#F7F4EE] flex flex-col selection:bg-hotel-bronze selection:text-white">
      <Header initialTransparent={false} />

      <main className="flex-1 pt-28 pb-24">
        {/* Banner Section */}
        <section className="bg-hotel-charcoal text-white py-20 border-b border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-watermark-lotus opacity-10" />
          <Container size="default" className="relative z-10 text-center space-y-4">
            <span className="text-[10px] sm:text-xs uppercase tracking-mega text-hotel-bronze-light font-medium block">
              Kenyamanan Menyeluruh
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white">
              Fasilitas & Layanan Iraa Hotel
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed">
              Setiap fasilitas dirancang untuk memastikan istirahat Anda tenang, higienis, dan memudahkan seluruh aktivitas Anda selama berada di Yogyakarta.
            </p>
          </Container>
        </section>

        {/* Detailed Amenities Grid */}
        <section className="py-20">
          <Container size="default">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {HOTEL_AMENITIES.map((item, idx) => {
                const IconComp = ICON_MAP[item.iconName] || Sparkles;

                return (
                  <ScrollReveal
                    key={item.id}
                    direction="up"
                    delay={((idx % 3) + 1) as 1 | 2 | 3}
                    className="bg-white border border-[#E2DACF] p-8 space-y-4 hover:border-hotel-bronze transition-all duration-300 luxury-hover-card"
                  >
                    <div className="w-14 h-14 bg-hotel-cream/40 text-hotel-bronze flex items-center justify-center border border-hotel-bronze/20">
                      <IconComp className="w-7 h-7" />
                    </div>
                    <h3 className="font-serif text-2xl text-hotel-charcoal font-medium">
                      {item.title}
                    </h3>
                    <p className="text-sm text-hotel-charcoal-muted leading-relaxed font-light">
                      {item.description}
                    </p>
                  </ScrollReveal>
                );
              })}
            </div>

            {/* Extra Hotel Services Highlights */}
            <ScrollReveal direction="up" className="mt-16 p-8 sm:p-12 bg-white border border-[#E2DACF] space-y-6">
              <div className="border-b border-[#E2DACF]/80 pb-6">
                <span className="section-label">Standar Layanan Tamu</span>
                <h2 className="font-serif text-2xl sm:text-3xl text-hotel-charcoal mt-2">
                  Komitmen Kebersihan & Kepraktisan Menginap
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-hotel-charcoal">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-hotel-bronze font-medium text-sm">
                    <Clock className="w-4 h-4" />
                    <span>Waktu Check-In & Check-Out</span>
                  </div>
                  <p className="text-xs sm:text-sm text-hotel-charcoal-muted leading-relaxed font-light">
                    Check-in mulai pukul {HOTEL_CONFIG.checkInTime} dan check-out maksimal pukul {HOTEL_CONFIG.checkOutTime}. Staf kami siap membantu koordinasi kedatangan Anda.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-hotel-bronze font-medium text-sm">
                    <Coffee className="w-4 h-4" />
                    <span>Air Minum Bersih Isi Ulang</span>
                  </div>
                  <p className="text-xs sm:text-sm text-hotel-charcoal-muted leading-relaxed font-light">
                    Dispenser air mineral higienis tersedia untuk memudahkan kebutuhan konsumsi air minum Anda setiap saat selama menginap.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-hotel-bronze font-medium text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Parkir Aman & Nyaman</span>
                  </div>
                  <p className="text-xs sm:text-sm text-hotel-charcoal-muted leading-relaxed font-light">
                    Area parkir kendaraan di lokasi hotel memberikan kemudahan dan rasa aman bagi Anda yang bepergian membawa kendaraan pribadi.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-[#E2DACF]/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-hotel-charcoal-muted">
                  Ada kebutuhan khusus selama masa inap Anda di Iraa Hotel?
                </p>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-luxury-bronze min-h-[44px]"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  <span>Konsultasi via WhatsApp</span>
                </a>
              </div>
            </ScrollReveal>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
