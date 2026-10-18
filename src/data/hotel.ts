import { HotelConfig } from "@/types/hotel";

export const HOTEL_CONFIG: HotelConfig = {
  name: "Iraa Hotel",
  tagline: "Kenyamanan Bersahaja di Jantung Budaya Yogyakarta",
  description:
    "Iraa Hotel menghadirkan akomodasi ramah dan nyaman di pusat Yogyakarta dengan akses mudah ke Stasiun Lempuyangan, Malioboro, dan Keraton. Tempat istirahat yang tenang dengan layanan ramah dan harga bersahabat untuk pelancong maupun keluarga.",
  addressSummary: "Yogyakarta, Daerah Istimewa Yogyakarta, Indonesia",
  mapsUrl: "https://maps.app.goo.gl/eEMtd9UdJqDtfQMJ7",
  whatsappNumber: "6281929036888",
  whatsappFormatted: "+62 819-2903-6888",
  checkInTime: "14:00 WIB",
  checkOutTime: "12:00 WIB",
};

export const PRELAUNCH_CHECKLIST = [
  {
    item: "Tarif Kamar Deluxe Twin (Rp220.000)",
    status: "Provisional / Perlu Konfirmasi",
    note: "Perlu konfirmasi final dengan manajemen Iraa Hotel sebelum peluncuran resmi.",
  },
  {
    item: "Estimasi Waktu Tempuh ke RS Bethesda (~95 menit)",
    status: "Perlu Verifikasi",
    note: "Waktu tempuh 95 menit jauh lebih lama dibandingkan estimasi destinasi lainnya di Yogyakarta; disarankan diverifikasi dengan pihak hotel.",
  },
  {
    item: "Nomor WhatsApp Pemesanan",
    status: "Terverifikasi",
    note: "Nomor aktif: +62 819-2903-6888.",
  },
  {
    item: "Tautan Peta Lokasi Google Maps",
    status: "Terverifikasi",
    note: "Tautan aktif: https://maps.app.goo.gl/eEMtd9UdJqDtfQMJ7.",
  },
  {
    item: "Dokumentasi Foto Kamar",
    status: "Terverifikasi (5 Foto Nyata)",
    note: "Menggunakan 5 foto autentik kamar yang disediakan langsung oleh pemilik hotel.",
  },
];
