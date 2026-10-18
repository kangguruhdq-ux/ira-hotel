import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { HOTEL_CONFIG } from "@/data/hotel";
import { DESTINATIONS_DATA } from "@/data/destinations";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  MapPin,
  ExternalLink,
  Navigation,
  Train,
  Landmark,
  AlertCircle,
  Car,
  Compass,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Lokasi & Akses Strategis | Iraa Hotel Malioboro Yogyakarta",
  description:
    "Lokasi strategis Iraa Hotel di Jl. Bausasran No.62, Pakualaman, Yogyakarta. Hanya ±4 menit ke Stasiun Lempuyangan, ±8 menit ke Malioboro dan Keraton. Panduan rute dan Google Maps.",
};

export default function LokasiPage() {
  return (
    <div className="min-h-screen bg-[#F7F4EE] flex flex-col selection:bg-hotel-bronze selection:text-white">
      <Header initialTransparent={false} />

      <main className="flex-1 pb-24">
        {/* Banner Section */}
        <section className="bg-hotel-charcoal text-white pt-28 pb-20 border-b border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-watermark-lotus opacity-10" />
          <Container size="default" className="relative z-10 text-center space-y-4">
            <span className="text-[10px] sm:text-xs uppercase tracking-mega text-hotel-bronze-light font-medium block">
              Aksesibilitas & Rute
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white">
              Lokasi Strategis di Pusat Yogyakarta
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed">
              Dikelilingi warisan budaya Yogyakarta dan stasiun kereta api utama, Iraa Hotel memberikan kemudahan mobilitas untuk perjalanan wisata maupun bisnis Anda.
            </p>
          </Container>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <Container size="default">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Address Card & Navigation */}
              <div className="lg:col-span-5 space-y-8">
                <ScrollReveal direction="up" className="p-8 sm:p-10 bg-white border border-[#E2DACF] space-y-6">
                  <div className="space-y-2">
                    <span className="section-label">Alamat Properti</span>
                    <h2 className="font-serif text-2xl sm:text-3xl text-hotel-charcoal">
                      Iraa Hotel Malioboro
                    </h2>
                    <p className="text-xs uppercase tracking-wider text-hotel-bronze font-medium">
                      By Nyaman Inn
                    </p>
                  </div>

                  <div className="space-y-4 text-sm text-hotel-charcoal-muted leading-relaxed font-light">
                    <div className="flex items-start gap-3 p-4 bg-hotel-cream/30 border border-[#E2DACF]/60">
                      <MapPin className="w-5 h-5 text-hotel-bronze shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-hotel-charcoal">Alamat Lengkap:</p>
                        <p className="mt-1">
                          Jl. Bausasran No.62, RT.036/RW.07, Purwokinanti, Kemantren Pakualaman, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55112
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-white border border-[#E2DACF]/60">
                      <Compass className="w-5 h-5 text-hotel-bronze shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-hotel-charcoal">Kawasan Sekitar:</p>
                        <p className="mt-1">
                          Kawasan Bausasran & Pakualaman, sangat dekat dengan Pura Pakualaman, Stasiun Lempuyangan, dan Jalan Malioboro.
                        </p>
                      </div>
                    </div>
                  </div>

                  <a
                    href={HOTEL_CONFIG.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 text-xs uppercase tracking-mega font-medium bg-hotel-bronze text-white hover:bg-hotel-bronze-dark transition-all duration-300 min-h-[48px] shadow-sm"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Buka Rute di Google Maps</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </ScrollReveal>

                {/* Transportation Tips */}
                <ScrollReveal direction="up" delay={2} className="p-8 bg-hotel-charcoal text-white space-y-4 border border-white/10">
                  <h3 className="font-serif text-xl text-hotel-bronze-light">
                    Panduan Moda Transportasi
                  </h3>
                  <ul className="space-y-3 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                    <li className="flex items-start gap-2.5">
                      <Train className="w-4 h-4 text-hotel-bronze-light shrink-0 mt-0.5" />
                      <span><strong>Dari Stasiun Lempuyangan:</strong> Cukup ±4 menit menggunakan taksi online atau becak lokal.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Car className="w-4 h-4 text-hotel-bronze-light shrink-0 mt-0.5" />
                      <span><strong>Dari Stasiun Tugu:</strong> Sekitar ±15 menit berkendara melalui rute pusat kota.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Compass className="w-4 h-4 text-hotel-bronze-light shrink-0 mt-0.5" />
                      <span><strong>Dari Bandara Internasional YIA:</strong> Naik KA Bandara menuju Stasiun Tugu, lalu lanjutkan perjalanan singkat ke lokasi hotel.</span>
                    </li>
                  </ul>
                </ScrollReveal>
              </div>

              {/* Right Column: Verified Travel Estimates Grid */}
              <div className="lg:col-span-7 space-y-6">
                <ScrollReveal direction="up" className="space-y-2">
                  <span className="section-label">Estimasi Waktu Tempuh</span>
                  <h2 className="font-serif text-3xl sm:text-4xl text-hotel-charcoal">
                    Destinasi Terdekat dari Iraa Hotel
                  </h2>
                  <p className="text-xs text-hotel-charcoal-muted leading-relaxed font-light">
                    * Estimasi waktu perjalanan mengacu pada data awal pihak pengelola hotel. Kondisi lalu lintas dan rute dapat mempengaruhi waktu tempuh sesungguhnya.
                  </p>
                </ScrollReveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {DESTINATIONS_DATA.map((dest, idx) => {
                    const isTrain = dest.category === "Transportasi";

                    return (
                      <ScrollReveal
                        key={dest.id}
                        direction="up"
                        delay={((idx % 2) + 1) as 1 | 2}
                        className="p-6 bg-white border border-[#E2DACF] hover:border-hotel-bronze transition-colors space-y-3"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] uppercase tracking-mega text-hotel-bronze font-medium">
                            {dest.category}
                          </span>
                          <div className="flex items-center gap-1.5 text-xs text-hotel-charcoal font-semibold bg-hotel-cream/40 px-3 py-1 border border-hotel-bronze/20">
                            {isTrain ? (
                              <Train className="w-3.5 h-3.5 text-hotel-bronze" />
                            ) : (
                              <Landmark className="w-3.5 h-3.5 text-hotel-bronze" />
                            )}
                            <span>{dest.duration}</span>
                          </div>
                        </div>

                        <h3 className="font-serif text-xl text-hotel-charcoal font-normal">
                          {dest.name}
                        </h3>

                        <p className="text-xs text-hotel-charcoal-muted leading-relaxed font-light">
                          {dest.description}
                        </p>

                        {dest.needsVerification && (
                          <div className="flex items-start gap-2 pt-2 text-[11px] text-amber-800 bg-amber-50 p-2 border border-amber-200">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-700" />
                            <span>{dest.verificationNote}</span>
                          </div>
                        )}
                      </ScrollReveal>
                    );
                  })}
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
