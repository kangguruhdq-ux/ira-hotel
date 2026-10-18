export interface RoomPrice {
  base: number;
  weekday?: number;
  weekend?: number;
  currency: string;
  period: string;
  isProvisional?: boolean;
  provisionalNote?: string;
}

export interface ExtraBedPolicy {
  available: boolean;
  pricePerPerson: number;
  currency: string;
  description: string;
}

export interface RoomItem {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  capacity: number;
  bedConfiguration: string;
  isBedConfigurationVerified: boolean;
  pricing: RoomPrice;
  extraBed?: ExtraBedPolicy;
  amenities: string[];
  keyHighlights: string[];
  image: string;
  imageAlt: string;
  galleryImages: {
    src: string;
    alt: string;
  }[];
}
