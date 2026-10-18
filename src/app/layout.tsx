import type { Metadata, Viewport } from "next";
import "./globals.css";
import { HOTEL_CONFIG } from "@/data/hotel";

export const viewport: Viewport = {
  themeColor: "#24231F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://iraahotel.com"),
  title: {
    default: "Iraa Hotel Malioboro Yogyakarta | Akomodasi Nyaman & Strategis",
    template: "%s | Iraa Hotel Malioboro Yogyakarta",
  },
  description:
    "Iraa Hotel Malioboro (By Nyaman Inn) Yogyakarta menghadirkan penginapan bersih, ber-AC, dan tenang di pusat Yogyakarta. Hanya ±4 menit ke Stasiun Lempuyangan dan ±8 menit ke Malioboro. Reservasi langsung via WhatsApp resmi.",
  keywords: [
    "Iraa Hotel",
    "Iraa Hotel Malioboro",
    "Hotel dekat Lempuyangan",
    "Hotel dekat Malioboro",
    "Hotel murah Yogyakarta",
    "Hotel bersih Jogja",
    "Penginapan Jogja strategis",
  ],
  authors: [{ name: "Iraa Hotel Malioboro" }],
  creator: "Iraa Hotel",
  publisher: "Iraa Hotel Malioboro",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://iraahotel.com",
    title: "Iraa Hotel Malioboro Yogyakarta | Akomodasi Nyaman & Strategis",
    description:
      "Penginapan bersih, ber-AC, dekat Stasiun Lempuyangan & Malioboro. Nikmati kenyamanan istirahat di pusat kebudayaan Yogyakarta.",
    siteName: "Iraa Hotel Malioboro",
    images: [
      {
        url: "/images/rooms/iraa-deluxe-double.png",
        width: 1200,
        height: 800,
        alt: "Kamar Iraa Deluxe Double di Iraa Hotel Yogyakarta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iraa Hotel Malioboro Yogyakarta",
    description:
      "Penginapan bersih, ber-AC, dekat Stasiun Lempuyangan & Malioboro Yogyakarta.",
    images: ["/images/rooms/iraa-deluxe-double.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/images/logo-emblem.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "Iraa Hotel Malioboro",
    alternateName: "Iraa Hotel By Nyaman Inn",
    description: HOTEL_CONFIG.description,
    url: "https://iraahotel.com",
    telephone: HOTEL_CONFIG.whatsappFormatted,
    priceRange: "IDR 110.000 - IDR 300.000",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Yogyakarta",
      addressRegion: "Daerah Istimewa Yogyakarta",
      addressCountry: "ID",
    },
    hasMap: HOTEL_CONFIG.mapsUrl,
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Air Conditioning", value: true },
      { "@type": "LocationFeatureSpecification", name: "Hot Water Shower", value: true },
      { "@type": "LocationFeatureSpecification", name: "Parking Area", value: true },
    ],
  };

  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </head>
      <body className="font-sans antialiased text-hotel-charcoal bg-[#F7F4EE]">
        {children}
      </body>
    </html>
  );
}
