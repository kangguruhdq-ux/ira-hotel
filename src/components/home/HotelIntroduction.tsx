import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowRight, Check } from "lucide-react";

export function HotelIntroduction() {
  return (
    <section id="tentang-kami" className="py-20 md:py-28 bg-[#F7F4EE] text-hotel-charcoal">
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Asymmetric Photographic Framing */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] overflow-hidden border border-[#E2DACF]">
              <Image
                src="/images/rooms/iraa-deluxe-twin.png"
                alt="Suasana tenang dan penataan rapi di Iraa Hotel Yogyakarta"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            {/* Overlapping editorial card */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 bg-hotel-charcoal text-white p-6 max-w-xs shadow-xl border border-white/10">
              <span className="text-[10px] uppercase tracking-mega text-hotel-bronze-light block mb-2">
                Filosofi Layanan
              </span>
              <p className="font-serif text-lg leading-snug">
                &ldquo;Istirahat yang tenang, pelayanan yang tulus, dan harga yang bersahaja.&rdquo;
              </p>
            </div>
          </div>

          {/* Right: Editorial Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <span className="section-label">Tentang Iraa Hotel</span>
            <h2 className="editorial-title">
              Pilihan Istirahat Nyaman di Jantung Budaya Jogja
            </h2>
            <p className="text-base sm:text-lg text-hotel-charcoal-muted leading-relaxed font-light">
              Terletak di lokasi yang tenang namun memiliki kemudahan akses ke pusat aktivitas kota Yogyakarta, Iraa Hotel hadir untuk memberikan pengalaman menginap yang ramah, bersih, dan menentramkan.
            </p>
            <p className="text-sm sm:text-base text-hotel-charcoal-muted leading-relaxed font-light">
              Baik Anda berkunjung untuk urusan dinas, berlibur bersama keluarga, atau menjelajahi pesona Malioboro dan sudut-sudut sejarah Keraton, kami menyediakan ragam tipe kamar dari pilihan berpenyejuk AC hingga kamar hemat dengan fasilitas penunjang lengkap.
            </p>

            {/* Key Authentic Pillars */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-hotel-bronze/10 text-hotel-bronze flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <span className="text-xs uppercase tracking-wider text-hotel-charcoal font-medium">
                  Akses Cepat ke Stasiun & Wisata
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-hotel-bronze/10 text-hotel-bronze flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <span className="text-xs uppercase tracking-wider text-hotel-charcoal font-medium">
                  Kamar Bersih & Higienis
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-hotel-bronze/10 text-hotel-bronze flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <span className="text-xs uppercase tracking-wider text-hotel-charcoal font-medium">
                  Pemanas Air & Pendingin Ruangan
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-hotel-bronze/10 text-hotel-bronze flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <span className="text-xs uppercase tracking-wider text-hotel-charcoal font-medium">
                  Tarif Transparan & Kompetitif
                </span>
              </div>
            </div>

            <div className="pt-6">
              <Link
                href="#kamar"
                className="inline-flex items-center gap-3 text-xs uppercase tracking-mega font-medium text-hotel-charcoal hover:text-hotel-bronze transition-colors group"
              >
                <span>Lihat 5 Tipe Kamar Kami</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
