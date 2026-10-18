import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Clock, MessageSquare, ExternalLink } from "lucide-react";
import { HOTEL_CONFIG } from "@/data/hotel";
import { buildWhatsAppGeneralInquiryUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const waUrl = buildWhatsAppGeneralInquiryUrl();

  return (
    <footer className="bg-hotel-charcoal text-hotel-ivory border-t border-white/10 pt-16 pb-12">
      <Container size="default">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          {/* Col 1: Identity & Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative w-12 h-12 shrink-0">
                <Image
                  src="/images/logo-white.png"
                  alt="Logo Resmi Iraa Hotel Malioboro"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-serif text-xl tracking-wider uppercase font-semibold text-white block leading-tight">
                  Iraa Hotel
                </span>
                <span className="text-[9px] uppercase tracking-mega text-hotel-bronze-light">
                  Malioboro Yogyakarta
                </span>
              </div>
            </Link>
            <p className="text-xs uppercase tracking-wider text-neutral-400">
              By Nyaman Inn
            </p>
            <p className="text-sm text-neutral-300 leading-relaxed font-light pt-1">
              Penginapan ramah dan nyaman dengan lokasi strategis di pusat Yogyakarta. Pilihan tepat untuk perjalanan bisnis, liburan keluarga, maupun kunjungan wisata budaya.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-mega text-hotel-bronze-light font-medium">
              Eksplorasi
            </h3>
            <ul className="space-y-2.5 text-sm font-light text-neutral-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/#kamar" className="hover:text-white transition-colors">
                  Pilihan Kamar & Tarif
                </Link>
              </li>
              <li>
                <Link href="/#fasilitas" className="hover:text-white transition-colors">
                  Fasilitas Hotel
                </Link>
              </li>
              <li>
                <Link href="/#lokasi" className="hover:text-white transition-colors">
                  Akses & Destinasi Sekitar
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-white transition-colors">
                  Pertanyaan Umum (FAQ)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Waktu Operasional & Layanan */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-mega text-hotel-bronze-light font-medium">
              Ketentuan Menginap
            </h3>
            <ul className="space-y-3 text-sm font-light text-neutral-300">
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-hotel-bronze-light shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Check-in / Check-out</p>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Check-in mulai {HOTEL_CONFIG.checkInTime} &bull; Check-out maks {HOTEL_CONFIG.checkOutTime}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-hotel-bronze-light shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">WhatsApp Resmi</p>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    {HOTEL_CONFIG.whatsappFormatted}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-hotel-bronze-light shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Lokasi Strategis</p>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Dekat Stasiun Lempuyangan, Malioboro, dan Keraton Yogyakarta.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4: Hubungi & Reservasi Langsung */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-mega text-hotel-bronze-light font-medium">
              Reservasi Langsung
            </h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Dapatkan informasi ketersediaan kamar, kepastian tarif, dan penawaran terbaik dengan menghubungi WhatsApp resepsionis kami.
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 text-xs uppercase tracking-mega font-medium bg-hotel-bronze text-white hover:bg-hotel-bronze-dark transition-all duration-300 min-h-[44px]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat WhatsApp Kami</span>
            </a>
            <a
              href={HOTEL_CONFIG.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 text-xs text-hotel-bronze-light hover:text-white transition-colors"
            >
              <span>Buka di Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>
            &copy; {new Date().getFullYear()} Iraa Hotel Yogyakarta. Seluruh hak cipta dilindungi.
          </p>
          <p className="text-[11px] text-neutral-400 text-center sm:text-right">
            Ketersediaan kamar dan harga akhir dikonfirmasi langsung bersama pengelola hotel.
          </p>
        </div>
      </Container>
    </footer>
  );
}
