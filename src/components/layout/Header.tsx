"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, MessageSquare } from "lucide-react";
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

export function Header({ initialTransparent = true }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const waUrl = buildWhatsAppGeneralInquiryUrl();
  const showDarkTheme = initialTransparent && !isScrolled;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
          showDarkTheme
            ? "bg-gradient-to-b from-black/75 via-black/35 to-transparent py-5 sm:py-6 text-white"
            : "bg-[#F7F4EE]/98 backdrop-blur-md py-3 sm:py-3.5 shadow-md border-b border-[#E2DACF] text-hotel-charcoal"
        )}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hotel-bronze py-1"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 shrink-0">
              <Image
                src={showDarkTheme ? "/images/logo-white.png" : "/images/logo.png"}
                alt="Logo Resmi Iraa Hotel Malioboro"
                fill
                sizes="44px"
                className="object-contain transition-opacity duration-300"
                priority
              />
            </div>
            <div className="flex flex-col text-left">
              <span
                className={cn(
                  "font-serif text-lg sm:text-xl tracking-wider uppercase font-semibold leading-tight transition-colors",
                  showDarkTheme ? "text-white" : "text-hotel-charcoal group-hover:text-hotel-bronze"
                )}
              >
                Iraa Hotel
              </span>
              <span
                className={cn(
                  "text-[9px] uppercase tracking-mega -mt-0.5 font-medium transition-colors",
                  showDarkTheme ? "text-hotel-cream" : "text-hotel-bronze"
                )}
              >
                Malioboro Yogyakarta
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-xs uppercase tracking-mega font-medium transition-colors py-1 relative",
                    "after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:transition-all after:duration-300",
                    showDarkTheme
                      ? isActive
                        ? "text-white after:w-full after:bg-hotel-cream"
                        : "text-neutral-200 hover:text-white after:w-0 hover:after:w-full after:bg-white"
                      : isActive
                        ? "text-hotel-bronze font-semibold after:w-full after:bg-hotel-bronze"
                        : "text-hotel-charcoal hover:text-hotel-bronze after:w-0 hover:after:w-full after:bg-hotel-bronze"
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
              className={cn(
                "hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-[11px] uppercase tracking-mega font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 active:scale-95 shadow-sm",
                showDarkTheme
                  ? "bg-white text-hotel-charcoal hover:bg-hotel-bronze hover:text-white focus-visible:ring-white"
                  : "bg-hotel-charcoal text-hotel-ivory hover:bg-hotel-bronze focus-visible:ring-hotel-bronze"
              )}
            >
              <MessageSquare className="w-3.5 h-3.5 text-hotel-bronze-light" />
              <span>Reservasi via WhatsApp</span>
            </a>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Buka navigasi utama"
              aria-expanded={isMobileMenuOpen}
              className={cn(
                "p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hotel-bronze lg:hidden active:scale-95",
                showDarkTheme
                  ? "text-white hover:bg-white/10"
                  : "text-hotel-charcoal hover:bg-neutral-200/50"
              )}
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
