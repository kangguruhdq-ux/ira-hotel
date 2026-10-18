"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, MessageSquare, MapPin } from "lucide-react";
import { HOTEL_CONFIG } from "@/data/hotel";
import { buildWhatsAppGeneralInquiryUrl } from "@/lib/whatsapp";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { href: string; label: string }[];
}

export function MobileNavigation({
  isOpen,
  onClose,
  navLinks,
}: MobileNavigationProps) {
  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const waUrl = buildWhatsAppGeneralInquiryUrl();

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Menu Navigasi Mobile Iraa Hotel"
      className="fixed inset-0 z-50 flex flex-col bg-hotel-charcoal text-hotel-ivory animate-fadeIn"
    >
      {/* Top Bar inside Drawer */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
        <Link
          href="/"
          onClick={onClose}
          className="flex items-center gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hotel-bronze"
        >
          <div className="relative w-10 h-10 shrink-0">
            <Image
              src="/images/logo-white.png"
              alt="Logo Resmi Iraa Hotel Malioboro"
              fill
              sizes="40px"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg tracking-widest text-hotel-ivory uppercase font-semibold">
              Iraa Hotel
            </span>
            <span className="text-[9px] uppercase tracking-mega text-hotel-bronze-light">
              Malioboro Yogyakarta
            </span>
          </div>
        </Link>

        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup menu navigasi"
          className="p-3 text-hotel-ivory hover:text-hotel-bronze-light transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hotel-bronze"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-8 py-8 flex flex-col justify-center space-y-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="font-serif text-2xl tracking-wide text-hotel-ivory hover:text-hotel-bronze-light transition-colors py-2 border-b border-white/5 flex items-center justify-between"
          >
            <span>{link.label}</span>
            <span className="text-xs uppercase tracking-mega text-hotel-bronze-light font-sans font-light">
              Lihat
            </span>
          </Link>
        ))}
      </nav>

      {/* Bottom Actions & Contact Info */}
      <div className="p-8 border-t border-white/10 space-y-4 bg-hotel-charcoal-dark">
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-4 px-6 text-xs uppercase tracking-mega font-medium bg-hotel-bronze text-white hover:bg-hotel-bronze-dark transition-colors min-h-[48px]"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Reservasi WhatsApp</span>
        </a>

        <a
          href={HOTEL_CONFIG.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-3 px-6 text-xs uppercase tracking-mega font-medium border border-white/20 text-hotel-ivory hover:bg-white/5 transition-colors min-h-[48px]"
        >
          <MapPin className="w-4 h-4 text-hotel-bronze-light" />
          <span>Petunjuk Arah Google Maps</span>
        </a>

        <div className="pt-2 text-center text-xs text-neutral-400">
          <p>{HOTEL_CONFIG.whatsappFormatted}</p>
          <p className="mt-1 text-[11px] text-neutral-500">
            Check-in {HOTEL_CONFIG.checkInTime} &bull; Check-out {HOTEL_CONFIG.checkOutTime}
          </p>
        </div>
      </div>
    </div>
  );
}
