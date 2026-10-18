import { TravelDestination } from "@/types/hotel";

export const DESTINATIONS_DATA: TravelDestination[] = [
  {
    id: "lempuyangan",
    name: "Stasiun Lempuyangan",
    category: "Transportasi",
    duration: "± 4 Menit",
    description:
      "Stasiun kereta api kelas besar yang melayani kereta jarak jauh dan KRL Commuter Line Yogyakarta–Solo.",
  },
  {
    id: "malioboro-keraton",
    name: "Malioboro & Keraton Ngayogyakarta",
    category: "Wisata & Budaya",
    duration: "± 8 Menit",
    description:
      "Kawasan legendaris pusat belanja cendera mata, kuliner malam, serta istana budaya pusat Kesultanan Yogyakarta.",
  },
  {
    id: "taman-sari",
    name: "Taman Sari Water Castle",
    category: "Wisata & Budaya",
    duration: "± 12 Menit",
    description:
      "Situs bersejarah pemandian putri keraton dengan arsitektur lorong bawah tanah dan masjid sumur gumuling yang ikonik.",
  },
  {
    id: "stasiun-tugu",
    name: "Stasiun Tugu Yogyakarta",
    category: "Transportasi",
    duration: "± 15 Menit",
    description:
      "Stasiun utama di pusat kota yang menghubungkan KA Eksekutif, Bandara YIA (Airport RailLink), dan akses Malioboro.",
  },
  {
    id: "rs-bethesda",
    name: "RS Bethesda Yogyakarta",
    category: "Kesehatan & Fasilitas",
    duration: "± 95 Menit",
    description:
      "Fasilitas layanan kesehatan rujukan di kawasan Yogyakarta. Catatan: estimasi durasi ini mengikuti data awal hotel dan disarankan diverifikasi dengan pihak hotel terkait kondisi rute serta waktu tempuh riil.",
    needsVerification: true,
    verificationNote:
      "Estimasi 95 menit dicantumkan sesuai informasi dari pihak hotel. Konfirmasikan kembali sebelum keberangkatan karena kondisi lalu lintas Yogyakarta dapat mempengaruhi durasi perjalanan.",
  },
];
