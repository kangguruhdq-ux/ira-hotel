import React from "react";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/home/Hero";
import { HotelIntroduction } from "@/components/home/HotelIntroduction";
import { RoomShowcase } from "@/components/home/RoomShowcase";
import { AmenitiesSection } from "@/components/home/AmenitiesSection";
import { LocationSection } from "@/components/home/LocationSection";
import { GallerySection } from "@/components/home/GallerySection";
import { FaqSection } from "@/components/home/FaqSection";
import { ReservationCTA } from "@/components/home/ReservationCTA";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F7F4EE] flex flex-col selection:bg-hotel-bronze selection:text-white">
      {/* Editorial Top Navigation */}
      <Header initialTransparent={true} />

      <main className="flex-1">
        {/* 1. Cinematic Full-Viewport Hero */}
        <Hero />

        {/* 2. Hotel Narrative & Hospitality Philosophy */}
        <HotelIntroduction />

        {/* 3. Rooms & Accommodations Editorial Showcase */}
        <RoomShowcase />

        {/* 4. Complete Hotel Amenities & Services */}
        <AmenitiesSection />

        {/* 5. Location & Accessibility with Travel Times */}
        <LocationSection />

        {/* 6. Authentic Photo Gallery */}
        <GallerySection />

        {/* 7. Frequently Asked Questions */}
        <FaqSection />

        {/* 8. Final WhatsApp Reservation Inquiry CTA */}
        <ReservationCTA />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
}
