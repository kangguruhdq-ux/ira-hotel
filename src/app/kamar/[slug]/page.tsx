import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { ROOMS_DATA } from "@/data/rooms";
import { RoomReservationInquiry } from "@/components/rooms/RoomReservationInquiry";
import {
  Users,
  Bed,
  Check,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return ROOMS_DATA.map((room) => ({
    slug: room.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const room = ROOMS_DATA.find((r) => r.slug === slug);

  if (!room) {
    return {
      title: "Kamar Tidak Ditemukan | Iraa Hotel",
    };
  }

  return {
    title: `${room.name} | Iraa Hotel Yogyakarta`,
    description: room.description,
    openGraph: {
      title: `${room.name} — Iraa Hotel Yogyakarta`,
      description: room.description,
      images: [
        {
          url: room.image,
          alt: room.imageAlt,
        },
      ],
    },
  };
}

export default async function RoomDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const room = ROOMS_DATA.find((r) => r.slug === slug);

  if (!room) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#F7F4EE] flex flex-col">
      <Header initialTransparent={false} />

      <main className="flex-1 pt-28 pb-24">
        <Container size="default">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="py-4 flex items-center gap-2 text-xs text-hotel-charcoal-muted">
            <Link href="/" className="hover:text-hotel-bronze transition-colors">
              Beranda
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/kamar" className="hover:text-hotel-bronze transition-colors">
              Pilihan Kamar
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-hotel-charcoal font-medium">{room.name}</span>
          </nav>

          <div className="pt-4 pb-8">
            <Link
              href="/#kamar"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-hotel-charcoal-muted hover:text-hotel-bronze transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Daftar Kamar</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Col: Visuals & Specifications */}
            <div className="lg:col-span-7 space-y-10">
              {/* Main Photo Frame */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-stone-200 overflow-hidden border border-[#E2DACF]">
                <Image
                  src={room.image}
                  alt={room.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>

              {/* Title & Key Subtitle */}
              <div className="space-y-3">
                <span className="section-label">Detail Akomodasi</span>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-hotel-charcoal font-normal">
                  {room.name}
                </h1>
                <p className="text-base sm:text-lg text-hotel-charcoal-muted font-light leading-relaxed">
                  {room.description}
                </p>
              </div>

              {/* Quick Spec Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-5 bg-white border border-[#E2DACF]">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-hotel-charcoal-muted block">
                    Kapasitas Tamu
                  </span>
                  <div className="flex items-center gap-1.5 mt-1 text-hotel-charcoal font-medium">
                    <Users className="w-4 h-4 text-hotel-bronze" />
                    <span>{room.capacity} Orang</span>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-wider text-hotel-charcoal-muted block">
                    Konfigurasi Ranjang
                  </span>
                  <div className="flex items-center gap-1.5 mt-1 text-hotel-charcoal font-medium">
                    <Bed className="w-4 h-4 text-hotel-bronze" />
                    <span className="text-xs">{room.bedConfiguration}</span>
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <span className="text-[10px] uppercase tracking-wider text-hotel-charcoal-muted block">
                    Status Verifikasi
                  </span>
                  <div className="flex items-center gap-1 mt-1 text-xs text-emerald-800">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Foto & Spek Terverifikasi</span>
                  </div>
                </div>
              </div>

              {/* Extra bed policy if available */}
              {room.extraBed?.available && (
                <div className="p-4 bg-hotel-cream/40 border border-hotel-bronze/30 space-y-1">
                  <span className="text-[10px] uppercase tracking-mega text-hotel-bronze font-medium block">
                    Ketentuan Kasur Tambahan (Extra Bed)
                  </span>
                  <p className="text-xs sm:text-sm text-hotel-charcoal leading-relaxed font-light">
                    {room.extraBed.description}
                  </p>
                </div>
              )}

              {/* Complete Room Amenities */}
              <div className="space-y-4 pt-4 border-t border-[#E2DACF]">
                <h2 className="font-serif text-2xl text-hotel-charcoal font-medium">
                  Fasilitas Kamar Ini
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {room.amenities.map((amenity, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 bg-white border border-[#E2DACF]/60 text-xs sm:text-sm text-hotel-charcoal"
                    >
                      <span className="w-5 h-5 rounded-full bg-hotel-bronze/10 text-hotel-bronze flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Col: Sticky Reservation Form */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <RoomReservationInquiry room={room} />
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
