import React from "react";
import {
  Wifi,
  Flame,
  Wind,
  Droplets,
  Car,
  Sparkles,
  Tv,
  MessageSquare,
} from "lucide-react";
import { HOTEL_AMENITIES } from "@/data/amenities";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const ICON_MAP: Record<string, React.ElementType> = {
  Wifi,
  Flame,
  Wind,
  Droplets,
  Car,
  Sparkles,
  Tv,
  MessageSquare,
};

export function AmenitiesSection() {
  return (
    <section id="fasilitas" className="py-24 md:py-32 bg-[#F7F4EE] text-hotel-charcoal border-b border-[#E2DACF]/60">
      <Container size="default">
        <SectionHeading
          label="Fasilitas & Layanan"
          title="Kenyamanan Menyeluruh untuk Kebutuhan Anda"
          description="Seluruh fasilitas di Iraa Hotel dipersiapkan untuk memastikan istirahat Anda tenang, higienis, dan memudahkan aktivitas harian selama di Yogyakarta."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {HOTEL_AMENITIES.map((item) => {
            const IconComponent = ICON_MAP[item.iconName] || Sparkles;

            return (
              <div
                key={item.id}
                className="bg-white/70 border border-[#E2DACF] p-8 space-y-4 hover:border-hotel-bronze hover:bg-white transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-hotel-cream/50 text-hotel-bronze flex items-center justify-center group-hover:bg-hotel-charcoal group-hover:text-hotel-bronze-light transition-colors">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl text-hotel-charcoal font-medium">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-hotel-charcoal-muted leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Note on Honest Facilities */}
        <div className="mt-12 text-center text-xs text-hotel-charcoal-muted max-w-xl mx-auto font-light">
          <p>
            * Fasilitas dispenser air minum tersedia di area bersama untuk kenyamanan seluruh tamu hotel. Air panas (water heater) tersedia pada tipe kamar Deluxe Double, Deluxe Twin, dan Economy AC.
          </p>
        </div>
      </Container>
    </section>
  );
}
