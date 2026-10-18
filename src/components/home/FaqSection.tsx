"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { HOTEL_CONFIG } from "@/data/hotel";
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "Bagaimana cara melakukan reservasi kamar di Iraa Hotel?",
    answer:
      "Reservasi dilakukan langsung melalui kontak WhatsApp resmi Iraa Hotel (+62 819-2903-6888). Anda dapat memilih tipe kamar, menginformasikan tanggal rencana check-in dan check-out, serta jumlah tamu. Staf kami akan mengonfirmasi ketersediaan dan tarif final secara langsung.",
  },
  {
    question: "Pukul berapa waktu check-in dan check-out di Iraa Hotel?",
    answer: `Waktu standar check-in dimulai pukul ${HOTEL_CONFIG.checkInTime}, dan waktu check-out maksimal pukul ${HOTEL_CONFIG.checkOutTime}. Jika membutuhkan penyesuaian waktu kedatangan atau kepulangan, silakan komunikasikan terlebih dahulu via WhatsApp.`,
  },
  {
    question: "Apakah tersedia fasilitas ekstra bed (kasur tambahan)?",
    answer:
      "Ya, fasilitas ekstra bed tersedia untuk tipe kamar Iraa Deluxe Double dan Iraa Deluxe Twin dengan biaya tambahan Rp150.000 per orang. Mohon informasikan kebutuhan ekstra bed saat melakukan pemesanan via WhatsApp.",
  },
  {
    question: "Kamar mana saja yang dilengkapi dengan pemanas air (water heater)?",
    answer:
      "Fasilitas pemanas air (water heater) tersedia di kamar Iraa Deluxe Double, Iraa Deluxe Twin, dan Iraa Economy AC. Kamar mandi juga dilengkapi dengan shower, handuk bersih, dan perlengkapan mandi standar.",
  },
  {
    question: "Apakah tersedia area parkir dan koneksi internet Wi-Fi?",
    answer:
      "Ya, Iraa Hotel menyediakan koneksi internet Wi-Fi gratis serta area parkir kendaraan untuk kenyamanan seluruh tamu yang menginap.",
  },
  {
    question: "Berapa jarak Iraa Hotel ke Stasiun Lempuyangan dan Malioboro?",
    answer:
      "Berdasarkan estimasi pengelola hotel, Iraa Hotel berjarak sekitar 4 menit menuju Stasiun Lempuyangan, sekitar 8 menit menuju kawasan Malioboro dan Keraton Yogyakarta, serta sekitar 15 menit ke Stasiun Tugu Yogyakarta (waktu tempuh dapat bervariasi bergantung kondisi lalu lintas).",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-hotel-cream/20 text-hotel-charcoal border-b border-[#E2DACF]/60">
      <Container size="narrow">
        <ScrollReveal direction="up">
          <SectionHeading
            label="Informasi Penting"
            title="Pertanyaan yang Sering Diajukan"
            description="Rangkuman informasi terverifikasi mengenai ketentuan menginap, proses reservasi, dan fasilitas di Iraa Hotel."
            align="center"
          />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={2} className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="border border-[#E2DACF] bg-white transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  aria-expanded={isOpen}
                  className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hotel-bronze min-h-[48px]"
                >
                  <span className="font-serif text-lg sm:text-xl text-hotel-charcoal font-medium">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-hotel-bronze shrink-0 transition-transform duration-300",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 pt-1 text-sm sm:text-base text-hotel-charcoal-muted leading-relaxed font-light border-t border-[#E2DACF]/40 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </ScrollReveal>
      </Container>
    </section>
  );
}
