import React from "react";
import { MapPin, ExternalLink, Navigation, AlertCircle, Train, Landmark } from "lucide-react";
import { HOTEL_CONFIG } from "@/data/hotel";
import { DESTINATIONS_DATA } from "@/data/destinations";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function LocationSection() {
  return (
    <section id="lokasi" className="py-24 md:py-32 bg-hotel-charcoal text-hotel-ivory relative overflow-hidden">
      <Container size="default">
        <ScrollReveal direction="up">
          <SectionHeading
            label="Lokasi & Aksesibilitas"
            title="Akses Mudah Menuju Titik Penting Yogyakarta"
            description="Iraa Hotel berada di lokasi yang sangat terjangkau, memudahkan mobilitas Anda dari dan menuju stasiun kereta, sentra belanja Malioboro, serta cagar budaya istana."
            align="center"
            theme="dark"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Travel Destinations List (Editorial Cards) */}
          <ScrollReveal direction="left" className="lg:col-span-7 space-y-4">
            <div className="p-4 bg-white/5 border border-white/10 text-xs text-neutral-300 flex items-start gap-3">
              <Navigation className="w-4 h-4 text-hotel-bronze-light shrink-0 mt-0.5" />
              <p>
                * Estimasi waktu tempuh di bawah ini merupakan estimasi awal yang diberikan oleh pengelola Iraa Hotel. Durasi nyata dapat bervariasi bergantung pada rute, kondisi lalu lintas, serta moda transportasi yang digunakan.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {DESTINATIONS_DATA.map((dest) => {
                const isTrain = dest.category === "Transportasi";

                return (
                  <div
                    key={dest.id}
                    className="p-6 bg-white/[0.04] border border-white/10 hover:border-hotel-bronze-light/50 transition-colors space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-mega text-hotel-bronze-light font-medium">
                        {dest.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-white font-medium bg-white/10 px-2.5 py-1">
                        {isTrain ? (
                          <Train className="w-3.5 h-3.5 text-hotel-bronze-light" />
                        ) : (
                          <Landmark className="w-3.5 h-3.5 text-hotel-bronze-light" />
                        )}
                        <span>{dest.duration}</span>
                      </div>
                    </div>

                    <h3 className="font-serif text-xl text-white font-normal">
                      {dest.name}
                    </h3>

                    <p className="text-xs text-neutral-400 leading-relaxed font-light">
                      {dest.description}
                    </p>

                    {dest.needsVerification && (
                      <div className="flex items-start gap-2 pt-2 text-[11px] text-amber-300/90 border-t border-white/10">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                        <span>{dest.verificationNote}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Right: Map Information Card & Direct Google Maps CTA */}
          <ScrollReveal direction="right" delay={1} className="lg:col-span-5 bg-white/5 border border-white/10 p-8 sm:p-10 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-mega text-hotel-bronze-light font-medium block">
                Petunjuk Arah Resmi
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                Kunjungi Iraa Hotel di Google Maps
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed font-light">
                Gunakan tautan resmi navigasi Google Maps untuk panduan rute berkendara atau berjalan kaki langsung ke properti Iraa Hotel.
              </p>
            </div>

            <div className="p-4 bg-hotel-charcoal-dark border border-white/10 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-hotel-bronze-light shrink-0 mt-1" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-hotel-bronze-light font-medium">
                    Kawasan Yogyakarta
                  </p>
                  <p className="text-sm text-neutral-200 mt-0.5">
                    Akses strategis dekat Stasiun Lempuyangan, Jl. Malioboro, dan Keraton Ngayogyakarta Hadiningrat.
                  </p>
                </div>
              </div>
            </div>

            {/* Clear "Lihat Lokasi" CTA as strictly required */}
            <a
              href={HOTEL_CONFIG.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-full py-4 px-6 text-xs uppercase tracking-mega font-medium bg-hotel-bronze text-white hover:bg-hotel-bronze-dark transition-all duration-300 min-h-[48px]"
            >
              <span>Lihat Lokasi di Google Maps</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <div className="text-[11px] text-neutral-400 space-y-1 pt-2 border-t border-white/10">
              <p>Tautan rujukan peta:</p>
              <p className="text-hotel-bronze-light font-mono break-all text-[10px]">
                {HOTEL_CONFIG.mapsUrl}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
