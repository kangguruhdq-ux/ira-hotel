import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { ROOMS_DATA } from "@/data/rooms";
import { RoomReservationInquiry } from "@/components/rooms/RoomReservationInquiry";
import { RoomDetailGallery } from "@/components/rooms/RoomDetailGallery";
import {
  Users,
  Bed,
  Check,
  ChevronRight,
  ArrowLeft,
  Sparkles,
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
    <div className="min-h-screen bg-[#F7F4EE] flex flex-col selection:bg-hotel-bronze selection:text-white">
      <Header initialTransparent={false} />

      <main className="flex-1 pt-24 sm:pt-28 pb-24">
        <Container size="default">
          {/* Breadcrumb Navigation with Soft Fade Entrance */}
          <nav
            aria-label="Breadcrumb"
            className="py-3 flex items-center gap-2 text-xs text-hotel-charcoal-muted animate-fadeIn"
          >
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

          <div className="pt-2 pb-6 animate-fadeIn">
            <Link
              href="/kamar"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-hotel-charcoal-muted hover:text-hotel-bronze transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Kembali ke Semua Pilihan Kamar</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Col: Visuals & Specifications with Staged Entrances */}
            <div className="lg:col-span-7 space-y-10">
              {/* 1. Staged Entrance for Interactive Photo Gallery */}
              <div className="animate-room-gallery">
                <RoomDetailGallery images={room.galleryImages} roomName={room.name} />
              </div>

              {/* 2. Staged Entrance for Room Title & Narrative */}
              <div className="animate-room-header space-y-3">
                <div className="inline-flex items-center gap-2">
                  <span className="section-label">Akomodasi Resmi</span>
                  <span className="inline-flex items-center gap-1 text-[11px] text-hotel-bronze font-medium">
                    <Sparkles className="w-3 h-3" />
                    Dokumentasi Terverifikasi
                  </span>
                </div>

                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-hotel-charcoal font-normal leading-tight">
                  {room.name}
                </h1>

                <p className="text-base sm:text-lg text-hotel-charcoal-muted font-light leading-relaxed">
                  {room.description}
                </p>
              </div>

              {/* 3. Staged Entrance for Quick Specifications */}
              <div className="animate-room-specs grid grid-cols-2 sm:grid-cols-3 gap-4 p-5 bg-white border border-[#E2DACF] luxury-hover-card">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-hotel-charcoal-muted block">
                    Kapasitas Tamu
                  </span>
                  <div className="flex items-center gap-1.5 mt-1 text-hotel-charcoal font-medium">
                    <Users className="w-4 h-4 text-hotel-bronze" />
                    <span>{room.capacity} Tamu</span>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-wider text-hotel-charcoal-muted block">
                    Konfigurasi Ranjang
                  </span>
                  <div className="flex items-center gap-1.5 mt-1 text-hotel-charcoal font-medium">
                    <Bed className="w-4 h-4 text-hotel-bronze" />
                    <span className="text-xs sm:text-sm">{room.bedConfiguration}</span>
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <span className="text-[10px] uppercase tracking-wider text-hotel-charcoal-muted block">
                    Status Verifikasi
                  </span>
                  <div className="flex items-center gap-1 mt-1 text-xs text-emerald-800 font-medium">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Foto & Spek Asli</span>
                  </div>
                </div>
              </div>

              {/* 4. Extra Bed Policy Banner if Applicable */}
              {room.extraBed?.available && (
                <div className="animate-room-specs p-4 bg-hotel-cream/40 border border-hotel-bronze/30 space-y-1 rounded-xs">
                  <span className="text-[10px] uppercase tracking-mega text-hotel-bronze font-semibold block">
                    Ketentuan Kasur Tambahan (Extra Bed)
                  </span>
                  <p className="text-xs sm:text-sm text-hotel-charcoal leading-relaxed font-light">
                    {room.extraBed.description}
                  </p>
                </div>
              )}

              {/* 5. Staged Entrance for Complete Room Amenities */}
              <div className="animate-room-amenities space-y-4 pt-4 border-t border-[#E2DACF]">
                <div className="flex items-center justify-between">
                  <h2 className="font-serif text-2xl text-hotel-charcoal font-medium">
                    Fasilitas Kamar Ini
                  </h2>
                  <span className="text-xs text-hotel-charcoal-muted font-light">
                    {room.amenities.length} Fasilitas Termasuk
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {room.amenities.map((amenity, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 bg-white border border-[#E2DACF]/70 text-xs sm:text-sm text-hotel-charcoal transition-all duration-300 hover:border-hotel-bronze hover:translate-x-1"
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

            {/* Right Col: Sticky Reservation Form with Lateral Staged Entrance */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 animate-room-sidebar">
              <RoomReservationInquiry room={room} />
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
