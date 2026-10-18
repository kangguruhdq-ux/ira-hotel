import { HOTEL_CONFIG } from "@/data/hotel";

export interface WhatsAppInquiryParams {
  roomName?: string;
  checkInDate?: string;
  checkOutDate?: string;
  guestCount?: number;
  customerNote?: string;
}

/**
 * Formats a clean date string in Indonesian locale (e.g., "24 Oktober 2026")
 */
export function formatIndonesianDate(dateString?: string): string {
  if (!dateString) return "-";
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    return new Intl.DateTimeFormat("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  } catch {
    return dateString;
  }
}

/**
 * Builds the URL-encoded WhatsApp reservation message
 */
export function buildWhatsAppReservationUrl(params: WhatsAppInquiryParams = {}): string {
  const number = process.env.NEXT_PUBLIC_HOTEL_WHATSAPP || HOTEL_CONFIG.whatsappNumber;

  if (!number) {
    console.warn("WhatsApp number is not configured.");
    return "#";
  }

  const roomName = params.roomName || "kamar";
  const checkIn = params.checkInDate ? formatIndonesianDate(params.checkInDate) : "-";
  const checkOut = params.checkOutDate ? formatIndonesianDate(params.checkOutDate) : "-";
  const guests = params.guestCount ? `${params.guestCount} orang` : "-";

  let message = `Halo Iraa Hotel, saya ingin menanyakan ketersediaan kamar ${roomName}.\n`;
  message += `\n• Rencana Check-in: ${checkIn}`;
  message += `\n• Rencana Check-out: ${checkOut}`;
  message += `\n• Jumlah Tamu: ${guests}`;

  if (params.customerNote && params.customerNote.trim().length > 0) {
    message += `\n• Catatan Tambahan: ${params.customerNote.trim()}`;
  }

  message += `\n\nMohon informasi ketersediaan dan konfirmasi tarif untuk tanggal tersebut. Terima kasih.`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${number.replace(/[^0-9]/g, "")}?text=${encodedMessage}`;
}

/**
 * Builds a direct general consultation WhatsApp URL
 */
export function buildWhatsAppGeneralInquiryUrl(): string {
  const number = process.env.NEXT_PUBLIC_HOTEL_WHATSAPP || HOTEL_CONFIG.whatsappNumber;
  const message =
    "Halo Iraa Hotel, saya ingin menanyakan informasi akomodasi dan reservasi kamar di Iraa Hotel Yogyakarta. Terima kasih.";
  return `https://wa.me/${number.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`;
}
