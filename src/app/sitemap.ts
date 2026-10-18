import { MetadataRoute } from "next";
import { ROOMS_DATA } from "@/data/rooms";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://iraahotel.com";

  const roomUrls = ROOMS_DATA.map((room) => ({
    url: `${baseUrl}/kamar/${room.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/kamar`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/fasilitas`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/lokasi`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tentang-kami`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...roomUrls,
  ];
}
