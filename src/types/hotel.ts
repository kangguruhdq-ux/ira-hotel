export interface HotelConfig {
  name: string;
  tagline: string;
  description: string;
  addressSummary: string;
  mapsUrl: string;
  whatsappNumber: string;
  whatsappFormatted: string;
  emailContact?: string;
  checkInTime: string;
  checkOutTime: string;
}

export interface TravelDestination {
  id: string;
  name: string;
  category: "Transportasi" | "Wisata & Budaya" | "Kesehatan & Fasilitas";
  duration: string;
  description: string;
  needsVerification?: boolean;
  verificationNote?: string;
}

export interface HotelAmenityItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
