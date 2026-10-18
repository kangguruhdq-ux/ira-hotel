"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { buildWhatsAppGeneralInquiryUrl } from "@/lib/whatsapp";
import { MobileNavigation } from "./MobileNavigation";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Beranda", subtitle: "Halaman Utama", number: "01" },
  { href: "/kamar", label: "Kamar & Tarif", subtitle: "5 Pilihan Tipe Kamar", number: "02" },
  { href: "/fasilitas", label: "Fasilitas", subtitle: "Layanan & Fasilitas Hotel", number: "03" },
  { href: "/lokasi", label: "Lokasi", subtitle: "Akses & Panduan Rute", number: "04" },
  { href: "/tentang-kami", label: "Tentang Kami", subtitle: "Cerita & Filosofi Layanan", number: "05" },
];

interface HeaderProps {
  initialTransparent?: boolean;
}

export function Header({ initialTransparent = true }: HeaderProps = {}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // On homepage, stay in hero dark-glass for first 350px, then morph to glass kecoklatan
      const threshold = pathname === "/" ? 350 : 20;
      if (window.scrollY > threshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const waUrl = buildWhatsAppGeneralInquiryUrl();

  // Glass mode on Hero top, Warm Brownish Bronze Glass (Glass Kecoklatan) when scrolled or on subpages
  const isGlassHero = pathname === "/" && !isScrolled && initialTransparent;

  return (
    <>
      <header
        style={{
          backgroundColor: isGlassHero
            ? "rgba(10, 10, 10, 0.52)"
            : "rgba(43, 33, 23, 0.94)",
          borderBottomColor: isGlassHero
            ? "rgba(255, 255, 255, 0.20)"
            : "rgba(164, 134, 98, 0.45)",
        }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b text-white transition-all duration-300 ease-in-out shadow-xl",
          isGlassHero ? "py-4 sm:py-5" : "py-3 sm:py-3.5 shadow-2xl"
        )}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between">
          {/* Logo / Brand Name — White + Gold Lotus Emblem */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hotel-bronze py-1"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 shrink-0">
              <Image
                src="/images/logo-white.png"
                alt="Logo Resmi Iraa Hotel Malioboro"
                fill
                sizes="44px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-serif text-lg sm:text-xl tracking-wider uppercase font-semibold leading-tight text-white group-hover:text-hotel-bronze-light transition-colors">
                Iraa Hotel
              </span>
              <span className="text-[9px] uppercase tracking-mega -mt-0.5 font-medium text-hotel-bronze-light">
                Malioboro Yogyakarta
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links — Crisp High-Contrast Typography */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-xs uppercase tracking-mega font-medium transition-colors py-1.5 relative",
                    "after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:transition-all after:duration-300",
                    isActive
                      ? "text-hotel-bronze-light font-semibold after:w-full after:bg-hotel-bronze-light"
                      : "text-white hover:text-hotel-bronze-light after:w-0 hover:after:w-full after:bg-hotel-bronze-light"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: WhatsApp CTA & Mobile Hamburger */}
          <div className="flex items-center space-x-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Reservasi Iraa Hotel melalui WhatsApp"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-[11px] uppercase tracking-mega font-medium bg-hotel-bronze text-white hover:bg-hotel-bronze-dark transition-all duration-300 min-h-[44px] shadow-md btn-shimmer active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Reservasi via WhatsApp</span>
            </a>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Buka navigasi utama"
              aria-expanded={isMobileMenuOpen}
              className="p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-sm transition-colors text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hotel-bronze lg:hidden active:scale-95"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Navigation Drawer */}
      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={NAV_LINKS}
      />
    </>
  );
}
