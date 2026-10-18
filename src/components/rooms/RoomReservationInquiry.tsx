"use client";

import React, { useState } from "react";
import { MessageSquare, Info } from "lucide-react";
import { RoomItem } from "@/types/room";
import { buildWhatsAppReservationUrl } from "@/lib/whatsapp";
import { formatRupiah } from "@/lib/utils";

interface RoomReservationInquiryProps {
  room: RoomItem;
  className?: string;
  isCompact?: boolean;
}

export function RoomReservationInquiry({
  room,
  className = "",
  isCompact = false,
}: RoomReservationInquiryProps) {
  const [checkIn, setCheckIn] = useState<string>("");
  const [checkOut, setCheckOut] = useState<string>("");
  const [guests, setGuests] = useState<number>(room.capacity);
  const [note, setNote] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = buildWhatsAppReservationUrl({
      roomName: room.name,
      checkInDate: checkIn || undefined,
      checkOutDate: checkOut || undefined,
      guestCount: guests,
      customerNote: note || undefined,
    });

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className={`bg-white border border-[#E2DACF] p-6 sm:p-8 space-y-6 ${className}`}
    >
      <div className="space-y-1">
        <span className="text-[10px] uppercase tracking-mega text-hotel-bronze font-medium">
          Formulir Informasi & Reservasi
        </span>
        <h3 className="font-serif text-2xl text-hotel-charcoal">
          Pesan Kamar {room.name}
        </h3>
        <p className="text-xs text-hotel-charcoal-muted font-light leading-relaxed">
          Kirimkan rencana kunjungan Anda langsung ke WhatsApp resmi Iraa Hotel untuk konfirmasi ketersediaan dan tarif final.
        </p>
      </div>

      {/* Pricing Summary */}
      <div className="p-4 bg-hotel-ivory border border-[#E2DACF]/60 flex items-baseline justify-between">
        <div>
          <span className="text-[10px] uppercase tracking-wider text-hotel-charcoal-muted block">
            Estimasi Tarif
          </span>
          <span className="font-serif text-2xl text-hotel-charcoal font-medium">
            {formatRupiah(room.pricing.base)}
          </span>
          <span className="text-xs text-hotel-charcoal-muted ml-1">
            /{room.pricing.period}
          </span>
        </div>
        {room.pricing.weekday && room.pricing.weekend && (
          <div className="text-right text-[11px] text-hotel-charcoal-muted">
            <p>Weekday: {formatRupiah(room.pricing.weekday)}</p>
            <p>Weekend: {formatRupiah(room.pricing.weekend)}</p>
          </div>
        )}
      </div>

      {room.pricing.isProvisional && (
        <div className="flex items-start gap-2.5 p-3 text-xs bg-amber-50 border border-amber-200/80 text-amber-900">
          <Info className="w-4 h-4 shrink-0 mt-0.5 text-amber-700" />
          <p>
            {room.pricing.provisionalNote ||
              "Tarif ini bersifat provisional. Konfirmasikan harga final langsung ke hotel."}
          </p>
        </div>
      )}

      {/* Reservation Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label
              htmlFor={`checkin-${room.id}`}
              className="block text-xs font-medium text-hotel-charcoal uppercase tracking-wider"
            >
              Rencana Check-In
            </label>
            <div className="relative">
              <input
                type="date"
                id={`checkin-${room.id}`}
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className="w-full px-3.5 py-2.5 text-xs border border-[#E2DACF] bg-white text-hotel-charcoal focus:border-hotel-bronze focus:outline-none focus:ring-1 focus:ring-hotel-bronze"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor={`checkout-${room.id}`}
              className="block text-xs font-medium text-hotel-charcoal uppercase tracking-wider"
            >
              Rencana Check-Out
            </label>
            <div className="relative">
              <input
                type="date"
                id={`checkout-${room.id}`}
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                min={checkIn || new Date().toISOString().split("T")[0]}
                className="w-full px-3.5 py-2.5 text-xs border border-[#E2DACF] bg-white text-hotel-charcoal focus:border-hotel-bronze focus:outline-none focus:ring-1 focus:ring-hotel-bronze"
              />
            </div>
          </div>
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor={`guests-${room.id}`}
            className="block text-xs font-medium text-hotel-charcoal uppercase tracking-wider"
          >
            Jumlah Tamu (Kapasitas Standar: {room.capacity} orang)
          </label>
          <select
            id={`guests-${room.id}`}
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="w-full px-3.5 py-2.5 text-xs border border-[#E2DACF] bg-white text-hotel-charcoal focus:border-hotel-bronze focus:outline-none focus:ring-1 focus:ring-hotel-bronze"
          >
            <option value={1}>1 Orang</option>
            <option value={2}>2 Orang</option>
            <option value={3}>3 Orang</option>
            <option value={4}>4 Orang (Memerlukan konfirmasi ekstra bed/kamar tambahan)</option>
          </select>
        </div>

        {!isCompact && (
          <div className="space-y-1.5">
            <label
              htmlFor={`note-${room.id}`}
              className="block text-xs font-medium text-hotel-charcoal uppercase tracking-wider"
            >
              Catatan Tambahan (Opsional)
            </label>
            <textarea
              id={`note-${room.id}`}
              rows={2}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Contoh: perkiraan tiba malam hari, butuh informasi parkir..."
              className="w-full px-3.5 py-2.5 text-xs border border-[#E2DACF] bg-white text-hotel-charcoal focus:border-hotel-bronze focus:outline-none focus:ring-1 focus:ring-hotel-bronze"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 text-xs uppercase tracking-mega font-medium bg-hotel-charcoal text-white hover:bg-hotel-bronze transition-all duration-300 min-h-[48px]"
        >
          <MessageSquare className="w-4 h-4 text-hotel-bronze-light" />
          <span>Hubungi Pengelola via WhatsApp</span>
        </button>
      </form>

      {/* Honest Hospitality Notice */}
      <div className="pt-2 text-[11px] text-hotel-charcoal-muted leading-relaxed border-t border-[#E2DACF]/60">
        <p>
          * Membuka WhatsApp tidak otomatis mengonfirmasi pemesanan. Ketersediaan unit dan kepastian tarif final disepakati langsung bersama pengelola hotel.
        </p>
      </div>
    </div>
  );
}
