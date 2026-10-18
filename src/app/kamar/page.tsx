import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { ROOMS_DATA } from "@/data/rooms";
import { formatRupiah } from "@/lib/utils";
import { buildWhatsAppReservationUrl } from "@/lib/whatsapp";
import { ArrowRight, MessageSquare, Bed, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Pilihan Kamar & Tarif | Iraa Hotel Yogyakarta",
  description:
    "Katalog lengkap kamar Iraa Hotel: Deluxe Double, Deluxe Twin, Family Room, Economy AC, dan Economy Fan. Bersih, nyaman, ber-AC, dekat Stasiun Lempuyangan & Malioboro.",
  openGraph: {
    title: "Pilihan Kamar & Tarif | Iraa Hotel Yogyakarta",
    description:
      "Katalog kamar lengkap dengan tarif transparan dan foto autentik properti kamar Iraa Hotel.",
  },
};

export default function KamarPage() {
  return (
    <div className="min-h-screen bg-[#F7F4EE] flex flex-col">
      <Header initialTransparent={false} />

      <main className="flex-1 pt-28 pb-24">
        {/* Header Hero Banner for Catalogue */}
        <section className="bg-hotel-charcoal text-white py-16 sm:py-20 mb-16 border-b border-white/10">
          <Container size="default" className="text-center space-y-4">
            <span className="text-[10px] sm:text-xs uppercase tracking-mega text-hotel-bronze-light font-medium block">
              Akomodasi & Reservasi
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white">
              Koleksi Kamar Iraa Hotel
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed">
              Pilihan akomodasi bersahaja dengan suasana tenang di Yogyakarta. Temukan tipe kamar yang paling sesuai dengan kebutuhan perjalanan dan jumlah rekan seperjalanan Anda.
            </p>
          </Container>
        </section>

        {/* Room Grid */}
        <Container size="default">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ROOMS_DATA.map((room) => {
              const waUrl = buildWhatsAppReservationUrl({
                roomName: room.name,
                guestCount: room.capacity,
              });

              return (
                <div
                  key={room.id}
                  className="bg-white border border-[#E2DACF] flex flex-col hover:border-hotel-bronze transition-all duration-300 group"
                >
                  {/* Room Thumbnail */}
                  <div className="relative aspect-[4/3] bg-stone-200 overflow-hidden">
                    <Image
                      src={room.image}
                      alt={room.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-3 left-3 bg-hotel-charcoal/85 backdrop-blur-sm text-white text-[10px] uppercase tracking-wider py-1 px-2.5">
                      {room.capacity} Tamu
                    </div>
                  </div>

                  {/* Room Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <h2 className="font-serif text-2xl text-hotel-charcoal font-medium">
                        {room.name}
                      </h2>
                      <p className="text-xs text-hotel-charcoal-muted leading-relaxed font-light">
                        {room.subtitle}
                      </p>

                      <div className="pt-2 text-xs text-hotel-charcoal space-y-1.5 border-t border-[#E2DACF]/60">
                        <div className="flex items-center gap-2">
                          <Bed className="w-3.5 h-3.5 text-hotel-bronze shrink-0" />
                          <span className="font-light">{room.bedConfiguration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-3.5 h-3.5 text-hotel-bronze shrink-0" />
                          <span className="font-light">Kapasitas: {room.capacity} orang</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#E2DACF]/60 space-y-4">
                      {/* Price Display */}
                      <div className="flex items-baseline justify-between">
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-hotel-charcoal-muted block">
                            Mulai Dari
                          </span>
                          <span className="font-serif text-2xl text-hotel-charcoal font-medium">
                            {formatRupiah(room.pricing.base)}
                          </span>
                          <span className="text-xs text-hotel-charcoal-muted ml-1">
                            /{room.pricing.period}
                          </span>
                        </div>

                        {room.pricing.isProvisional && (
                          <span className="text-[9px] uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5">
                            Provisional
                          </span>
                        )}
                      </div>

                      {/* Action buttons */}
                      <div className="grid grid-cols-2 gap-2">
                        <Link
                          href={`/kamar/${room.slug}`}
                          className="inline-flex items-center justify-center gap-1.5 py-3 px-3 text-[11px] uppercase tracking-wider font-medium border border-hotel-charcoal text-hotel-charcoal hover:bg-hotel-charcoal hover:text-white transition-colors"
                        >
                          <span>Rincian</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                        <a
                          href={waUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 py-3 px-3 text-[11px] uppercase tracking-wider font-medium bg-hotel-bronze text-white hover:bg-hotel-bronze-dark transition-colors"
                        >
                          <MessageSquare className="w-3 h-3" />
                          <span>Pesan WA</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
