"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { X, MapPin, ArrowRight, Clock, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { HOTEL_CONFIG } from "@/data/hotel";
import { buildWhatsAppGeneralInquiryUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

interface NavLinkItem {
  href: string;
  label: string;
  subtitle: string;
  number: string;
}

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks?: NavLinkItem[];
}

const DEFAULT_NAV_LINKS: NavLinkItem[] = [
  { href: "/", label: "Beranda", subtitle: "Halaman Utama", number: "01" },
  { href: "/kamar", label: "Kamar & Tarif", subtitle: "5 Pilihan Tipe Kamar", number: "02" },
  { href: "/fasilitas", label: "Fasilitas", subtitle: "Layanan & Fasilitas Hotel", number: "03" },
  { href: "/lokasi", label: "Lokasi", subtitle: "Akses & Panduan Rute", number: "04" },
  { href: "/tentang-kami", label: "Tentang Kami", subtitle: "Cerita & Filosofi Layanan", number: "05" },
];

export function MobileNavigation({
  isOpen,
  onClose,
  navLinks,
}: MobileNavigationProps) {
  const [mounted, setMounted] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Control mount lifecycle with smooth animation synchronization
  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      document.body.style.overflow = "hidden";
      const frame = requestAnimationFrame(() => {
        // Small delay to ensure browser registers initial state before triggering transitions
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 16);
        return () => clearTimeout(timer);
      });
      return () => cancelAnimationFrame(frame);
    } else {
      setIsVisible(false);
      const timer = setTimeout(() => {
        setIsRendered(false);
        document.body.style.overflow = "";
      }, 320);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSmoothClose = React.useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleSmoothClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleSmoothClose]);

  if (!mounted || (!isOpen && !isRendered)) return null;

  const items = navLinks && navLinks.length > 0 ? navLinks : DEFAULT_NAV_LINKS;
  const waUrl = buildWhatsAppGeneralInquiryUrl();

  const content = (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Menu Navigasi Mobile Iraa Hotel"
      className={cn(
        "fixed inset-0 z-[999] flex flex-col bg-[#141311] text-hotel-ivory h-[100dvh] w-full overflow-hidden",
        "transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
        isVisible
          ? "opacity-100 translate-y-0 backdrop-blur-md"
          : "opacity-0 -translate-y-6 pointer-events-none"
      )}
    >
      {/* Background Watermark Emblem with Breathing Scale */}
      <div
        className={cn(
          "absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden transition-all duration-700 ease-out",
          isVisible ? "opacity-[0.06] scale-100" : "opacity-0 scale-90"
        )}
      >
        <div className="relative w-[340px] h-[340px]">
          <Image
            src="/images/logo-emblem.png"
            alt="Watermark Emblem Iraa Hotel"
            fill
            sizes="340px"
            className="object-contain"
          />
        </div>
      </div>

      {/* Top Header Bar inside Drawer */}
      <div
        style={{
          paddingTop: "calc(env(safe-area-inset-top, 0px) + 1rem)",
        }}
        className={cn(
          "shrink-0 relative z-10 flex items-center justify-between px-6 pb-4 border-b border-white/10 bg-[#100F0E]/90 backdrop-blur-md transition-all duration-300",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        )}
      >
        <Link
          href="/"
          onClick={handleSmoothClose}
          className="flex items-center gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hotel-bronze"
        >
          <div className="relative w-9 h-9 shrink-0">
            <Image
              src="/images/logo-white.png"
              alt="Logo Resmi Iraa Hotel Malioboro"
              fill
              sizes="36px"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg tracking-widest text-white uppercase font-semibold leading-tight">
              Iraa Hotel
            </span>
            <span className="text-[9px] uppercase tracking-mega text-hotel-bronze-light">
              Malioboro Yogyakarta
            </span>
          </div>
        </Link>

        <button
          type="button"
          onClick={handleSmoothClose}
          aria-label="Tutup menu navigasi"
          className="group p-2.5 text-white/80 hover:text-white transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-white/5 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hotel-bronze active:scale-90"
        >
          <X className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90 text-hotel-cream" />
        </button>
      </div>

      {/* Navigation Links — Cascading Editorial Stagger */}
      <nav className="relative z-10 flex-1 px-6 py-5 flex flex-col justify-center space-y-1 overflow-y-auto min-h-0">
        <div
          className={cn(
            "text-[10px] uppercase tracking-mega text-hotel-bronze-light font-medium pb-2 mb-1 border-b border-white/10 transition-all duration-300",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"
          )}
        >
          Menu Navigasi
        </div>

        {items.map((link, idx) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={handleSmoothClose}
            style={{
              transitionDelay: isVisible ? `${80 + idx * 55}ms` : "0ms",
            }}
            className={cn(
              "group py-3 px-3 -mx-3 rounded flex items-center justify-between border-b border-white/5 last:border-b-0",
              "transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white/[0.06] active:bg-white/10",
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-6"
            )}
          >
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-xs text-hotel-bronze-light font-semibold tracking-wider group-hover:text-white group-hover:scale-105 transition-all">
                {link.number}
              </span>
              <div>
                <span className="font-serif text-2xl text-white group-hover:text-hotel-bronze-light transition-colors block leading-tight font-normal">
                  {link.label}
                </span>
                <span className="text-[11px] text-neutral-400 font-light group-hover:text-neutral-300 transition-colors">
                  {link.subtitle}
                </span>
              </div>
            </div>

            <div className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-neutral-400 group-hover:border-hotel-bronze-light group-hover:text-hotel-bronze-light group-hover:translate-x-1.5 transition-all shrink-0">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>
        ))}
      </nav>

      {/* Bottom Drawer Actions with Staggered Entrance */}
      <div
        style={{
          transitionDelay: isVisible ? "360ms" : "0ms",
          paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 1.25rem)",
        }}
        className={cn(
          "shrink-0 relative z-10 px-5 pt-5 border-t border-white/10 space-y-2.5 bg-[#100F0E] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
      >
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-3 px-6 text-xs uppercase tracking-mega font-medium bg-hotel-bronze text-white hover:bg-hotel-bronze-dark transition-all duration-300 min-h-[46px] shadow-lg active:scale-95 btn-shimmer"
        >
          <WhatsAppIcon className="w-4 h-4 text-white" />
          <span>Reservasi via WhatsApp</span>
        </a>

        <a
          href={HOTEL_CONFIG.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-2.5 px-6 text-xs uppercase tracking-mega font-medium border border-white/15 text-neutral-200 hover:bg-white/5 transition-colors min-h-[42px] active:scale-95"
        >
          <MapPin className="w-4 h-4 text-hotel-bronze-light" />
          <span>Buka di Google Maps</span>
        </a>

        {/* Contact Snippets */}
        <div className="pt-2 flex items-center justify-between text-[11px] text-neutral-400 border-t border-white/5">
          <span className="flex items-center gap-1.5">
            <Phone className="w-3 h-3 text-hotel-bronze-light" />
            {HOTEL_CONFIG.whatsappFormatted}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3 h-3 text-hotel-bronze-light" />
            Check-in {HOTEL_CONFIG.checkInTime}
          </span>
        </div>
      </div>
    </div>
  );

  return createPortal(content, document.body);
}
