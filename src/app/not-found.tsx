import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F7F4EE] flex flex-col justify-between">
      <Header initialTransparent={false} />

      <main className="flex-1 flex items-center justify-center py-32">
        <Container size="narrow" className="text-center space-y-6">
          <span className="text-[10px] uppercase tracking-mega text-hotel-bronze font-medium block">
            404 &bull; Halaman Tidak Ditemukan
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-hotel-charcoal font-normal">
            Halaman yang Anda Cari Belum Tersedia
          </h1>
          <p className="text-sm sm:text-base text-hotel-charcoal-muted leading-relaxed max-w-md mx-auto font-light">
            Alamat yang Anda tuju mungkin telah dipindahkan atau tautan yang dimasukkan kurang tepat.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs uppercase tracking-mega font-medium bg-hotel-charcoal text-white hover:bg-hotel-bronze transition-colors min-h-[44px]"
            >
              <Home className="w-4 h-4" />
              <span>Kembali ke Beranda</span>
            </Link>
            <Link
              href="/#kamar"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs uppercase tracking-mega font-medium border border-hotel-charcoal text-hotel-charcoal hover:bg-hotel-charcoal hover:text-white transition-colors min-h-[44px]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Lihat Pilihan Kamar</span>
            </Link>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
