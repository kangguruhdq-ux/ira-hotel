import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { buildWhatsAppGeneralInquiryUrl } from "@/lib/whatsapp";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight, ShieldCheck, Heart, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export const metadata: Metadata = {
  title: "Tentang Kami | Iraa Hotel Malioboro Yogyakarta",
  description:
    "Mengenal lebih dekat Iraa Hotel Malioboro (By Nyaman Inn) Yogyakarta: filosofi keramahan tulus, komitmen kebersihan, dan tempat istirahat tenang di pusat budaya Jogja.",
};

export default function TentangKamiPage() {
  const waUrl = buildWhatsAppGeneralInquiryUrl();

  return (
    <div className="min-h-screen bg-[#F7F4EE] flex flex-col selection:bg-hotel-bronze selection:text-white">
      <Header initialTransparent={false} />

      <main className="flex-1 pb-24">
        {/* Banner Section */}
        <section className="bg-hotel-charcoal text-white pt-28 pb-20 border-b border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-watermark-lotus opacity-10" />
          <Container size="default" className="relative z-10 text-center space-y-4">
            <span className="text-[10px] sm:text-xs uppercase tracking-mega text-hotel-bronze-light font-medium block">
              Mengenal Iraa Hotel
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white">
              Keramahan Tulus di Pusat Kebudayaan
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed">
              Iraa Hotel Malioboro (By Nyaman Inn) hadir sebagai tempat beristirahat yang nyaman, tenang, dan bersahaja di tengah denyut aktivitas kota Yogyakarta.
            </p>
          </Container>
        </section>

        {/* Narrative & Visual Split */}
        <section className="py-20">
          <Container size="default">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Visual Composition */}
              <div className="lg:col-span-6 space-y-4">
                <ScrollReveal direction="left" className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden border border-[#E2DACF] shadow-sm">
                  <Image
                    src="/images/rooms/iraa-deluxe-double.png"
                    alt="Suasana kamar Iraa Deluxe Double di Iraa Hotel"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </ScrollReveal>
                <div className="grid grid-cols-2 gap-4">
                  <ScrollReveal direction="up" delay={1} className="relative aspect-[4/3] overflow-hidden border border-[#E2DACF]">
                    <Image
                      src="/images/rooms/iraa-deluxe-twin.png"
                      alt="Suasana kamar Iraa Deluxe Twin"
                      fill
                      sizes="25vw"
                      className="object-cover"
                    />
                  </ScrollReveal>
                  <ScrollReveal direction="up" delay={2} className="relative aspect-[4/3] overflow-hidden border border-[#E2DACF]">
                    <Image
                      src="/images/rooms/iraa-family-room.png"
                      alt="Suasana kamar Iraa Family Room"
                      fill
                      sizes="25vw"
                      className="object-cover"
                    />
                  </ScrollReveal>
                </div>
              </div>

              {/* Right Column: Narrative */}
              <div className="lg:col-span-6 space-y-6">
                <ScrollReveal direction="right" className="space-y-3">
                  <span className="section-label">Cerita Kami</span>
                  <h2 className="editorial-title">
                    Sebuah Rumah Singgah yang Bersahaja & Menenangkan
                  </h2>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={1} className="space-y-4 text-sm sm:text-base text-hotel-charcoal-muted font-light leading-relaxed">
                  <p>
                    Berdiri di kawasan bersejarah Bausasran, Pakualaman, Iraa Hotel dirancang untuk para pelancong yang mendambakan suasana istirahat yang tidak bising namun tetap berada dalam jangkauan sangat dekat ke ikon-ikon utama Yogyakarta.
                  </p>
                  <p>
                    Kami meyakini bahwa pengalaman menginap yang memuaskan tidak harus rumit atau berlebihan. Kebersihan kamar yang terjaga, penataan ranjang yang rapi, fasilitas mandi air hangat, penyejuk udara yang sejuk, serta pelayanan yang ramah adalah inti dari setiap layanan kami di Iraa Hotel.
                  </p>
                </ScrollReveal>

                {/* Core Pillars */}
                <ScrollReveal direction="up" delay={2} className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E2DACF]">
                  <div className="space-y-1.5 p-4 bg-white border border-[#E2DACF]">
                    <div className="text-hotel-bronze">
                      <Heart className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-lg text-hotel-charcoal font-medium">Layanan Ramah</h3>
                    <p className="text-xs text-hotel-charcoal-muted leading-relaxed font-light">
                      Respon cepat dan keramahan tulus khas warga Jogja.
                    </p>
                  </div>

                  <div className="space-y-1.5 p-4 bg-white border border-[#E2DACF]">
                    <div className="text-hotel-bronze">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-lg text-hotel-charcoal font-medium">Higienis & Rapi</h3>
                    <p className="text-xs text-hotel-charcoal-muted leading-relaxed font-light">
                      Linen bersih, handuk segar, dan kamar mandi terawat.
                    </p>
                  </div>

                  <div className="space-y-1.5 p-4 bg-white border border-[#E2DACF]">
                    <div className="text-hotel-bronze">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-lg text-hotel-charcoal font-medium">Tarif Bersahabat</h3>
                    <p className="text-xs text-hotel-charcoal-muted leading-relaxed font-light">
                      Transparansi harga tanpa biaya tak terduga.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={3} className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                  <Link href="/kamar" className="btn-luxury-primary w-full sm:w-auto">
                    <span>Lihat Pilihan Kamar</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-2" />
                  </Link>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-luxury-bronze w-full sm:w-auto"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 mr-2" />
                    <span>Hubungi Pengelola via WhatsApp</span>
                  </a>
                </ScrollReveal>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
