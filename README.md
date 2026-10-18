# Iraa Hotel Malioboro Yogyakarta — Official Website

Website resmi **Iraa Hotel Malioboro** (By Nyaman Inn) Yogyakarta, dirancang dengan pendekatan arsitektur editorial hospitality premium yang terinspirasi dari standar desain resort mewah, cepat, aksesibel, dan mobile-first.

---

## 1. Fitur & Keunggulan Utama

- **Editorial Hospitality Aesthetic:** Terinspirasi dari acuan visual hospitality luxury (palet warna warm ivory `#F7F4EE`, soft cream `#EAE2D5`, deep charcoal `#24231F`, dan muted bronze `#A48662`). Tipografi editorial serif elegan dan sans-serif modern yang sangat mudah dibaca.
- **Logo Resmi Tanpa Background:** Menggunakan logo autentik Iraa Hotel Malioboro (By Nyaman Inn) dengan latar transparan berformat PNG beresolusi tinggi, termasuk varian adaptif (`logo.png`, `logo-white.png`, `logo-emblem.png`, dan multi-size `favicon.ico`).
- **5 Kategori Kamar Autentik:** Menggunakan foto nyata dan rincian spesifikasi terverifikasi dari pengelola:
  1. **Iraa Deluxe Double:** Ranjang 160×200 cm, AC, water heater, handuk 2 tamu, TV, Wi-Fi, dispenser, parkir. Weekday: Rp200.000 / Weekend: Rp220.000. Tersedia ekstra bed Rp150.000/orang.
  2. **Iraa Deluxe Twin:** 2 tempat tidur terpisah (terverifikasi foto autentik), AC, water heater, TV, Wi-Fi, dispenser, parkir. Tarif: Rp220.000 (provisional). Tersedia ekstra bed Rp150.000/orang.
  3. **Iraa Family Room:** Kapasitas 3 tamu (1 ranjang double + 1 ranjang single), AC, TV, Wi-Fi, dispenser, parkir. Tarif: Rp300.000/malam.
  4. **Iraa Economy AC:** Ranjang double, AC, water heater, meja kerja/rias, TV, Wi-Fi, dispenser, parkir. Tarif: Rp120.000/malam.
  5. **Iraa Economy Fan:** Pilihan hemat dengan sirkulasi kipas angin, TV, shower, Wi-Fi, dispenser, parkir. Tarif: Rp110.000/malam.
- **WhatsApp Reservation Flow Terintegrasi:** Menghubungkan pengunjung langsung ke nomor resmi WhatsApp **+62 819-2903-6888** dengan pesan terstruktur otomatis mencakup nama kamar, tanggal check-in/check-out, jumlah tamu, dan catatan tambahan.
- **Panduan Lokasi & Estimasi Waktu Tempuh:**
  - ± 4 menit ke Stasiun Lempuyangan
  - ± 8 menit ke Malioboro & Keraton Ngayogyakarta
  - ± 12 menit ke Taman Sari
  - ± 15 menit ke Stasiun Tugu Yogyakarta
  - ± 95 menit ke RS Bethesda (dengan catatan verifikasi rute)
  - Tautan langsung Google Maps: `https://maps.app.goo.gl/eEMtd9UdJqDtfQMJ7`
- **Galeri Foto Interaktif:** Lightbox pratinjau foto resolusi penuh dengan navigasi keyboard (`Escape`, panah kiri/kanan).
- **SEO & Structured Data Lengkap:** Schema.org JSON-LD `Hotel`/`LodgingBusiness`, meta OpenGraph, Twitter Cards, dynamic `sitemap.xml`, dan `robots.txt`.
- **Keamanan & Best Practices:** Restriktif Content Security Headers (`X-Frame-Options`, `X-Content-Type-Options`, `Permissions-Policy`, `Referrer-Policy`, strict input validation).

---

## 2. Struktur Proyek

```
iraa-hotel/
├── public/
│   ├── favicon.ico
│   └── images/
│       ├── logo.png               # Logo transparan autentik
│       ├── logo-white.png         # Logo transparan teks putih untuk dark section
│       ├── logo-emblem.png        # Emblem terisolasi
│       └── rooms/
│           ├── iraa-deluxe-double.png
│           ├── iraa-deluxe-twin.png
│           ├── iraa-family-room.png
│           ├── iraa-economy-ac.png
│           └── iraa-economy-fan.png
├── src/
│   ├── app/
│   │   ├── globals.css            # Luxury design tokens & reset
│   │   ├── layout.tsx             # Root layout, fonts & Schema.org JSON-LD
│   │   ├── page.tsx               # Homepage lengkap
│   │   ├── not-found.tsx          # 404 page bertema luxury
│   │   ├── robots.ts              # Search crawler directives
│   │   ├── sitemap.ts             # Dynamic sitemap generator
│   │   └── kamar/
│   │       ├── page.tsx           # Katalog kamar lengkap
│   │       └── [slug]/
│   │           └── page.tsx       # Detail view kamar & form reservasi WA
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx         # Responsive sticky header
│   │   │   ├── MobileNavigation.tsx # Drawer mobile dengan scroll-lock
│   │   │   └── Footer.tsx         # Editorial footer
│   │   ├── home/
│   │   │   ├── Hero.tsx           # Hero section sinematik LCP optimized
│   │   │   ├── HotelIntroduction.tsx # Narasi hotel & filosofi keramahan
│   │   │   ├── RoomShowcase.tsx   # Showcase kamar asimetris alternating
│   │   │   ├── AmenitiesSection.tsx # Fasilitas terverifikasi
│   │   │   ├── LocationSection.tsx # Aksesibilitas & peta
│   │   │   ├── GallerySection.tsx # Galeri foto autentik
│   │   │   ├── FaqSection.tsx     # Pertanyaan umum (FAQ)
│   │   │   └── ReservationCTA.tsx # CTA konversi WhatsApp akhir
│   │   ├── rooms/
│   │   │   ├── RoomModalGallery.tsx # Accessible photo lightbox
│   │   │   └── RoomReservationInquiry.tsx # Form kalkulasi pesan WhatsApp
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Container.tsx
│   │       └── SectionHeading.tsx
│   ├── data/
│   │   ├── hotel.ts               # Konfigurasi hotel & checklist
│   │   ├── rooms.ts               # Database kamar terstruktur
│   │   ├── amenities.ts           # Daftar fasilitas terverifikasi
│   │   └── destinations.ts        # Estimasi jarak destinasi
│   ├── lib/
│   │   ├── utils.ts               # Helper format Rupiah & classnames
│   │   └── whatsapp.ts            # URL encoder pesan reservasi WhatsApp
│   └── types/
│       ├── hotel.ts
│       └── room.ts
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 3. Menjalankan Proyek Secara Lokal

1. **Pasang Dependensi:**
   ```bash
   npm install
   ```

2. **Jalankan Development Server:**
   ```bash
   npm run dev
   ```
   Buka [http://localhost:3000](http://localhost:3000) pada browser Anda.

3. **Verifikasi Tipe Data & Linting:**
   ```bash
   npx tsc --noEmit
   npm run lint
   ```

4. **Kompilasi Production Build:**
   ```bash
   npm run build
   ```

5. **Jalankan Production Server:**
   ```bash
   npm run start
   ```

---

## 4. Checklist Pra-Peluncuran (Pre-Launch Checklist)

- [x] **Nomor WhatsApp:** Terkonfigurasi aktif ke `+62 819-2903-6888`.
- [x] **Logo Autentik:** Terpasang logo transparan resmi Iraa Hotel Malioboro By Nyaman Inn.
- [x] **Foto Kamar:** Menggunakan 5 foto asli milik hotel.
- [x] **Tautan Peta:** Tervalidasi ke Google Maps `https://maps.app.goo.gl/eEMtd9UdJqDtfQMJ7`.
- [ ] **Konfirmasi Tarif Deluxe Twin:** Tarif tercantum Rp220.000/malam diberi label *provisional* dan perlu konfirmasi akhir dengan manajemen hotel.
- [ ] **Verifikasi Durasi RS Bethesda:** Estimasi ~95 menit dicantumkan sesuai arahan awal dan disarankan dicek ulang terhadap kondisi rute teraktual.
