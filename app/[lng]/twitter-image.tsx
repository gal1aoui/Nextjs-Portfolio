import { renderOgImage, ogImageSize } from "@/lib/og-image";
import { fallbackLng, isLanguage } from "@/i18n/settings";

export const size = ogImageSize;
export const contentType = "image/png";
export const alt = "Achref Gallaoui, Fullstack Software Engineer";

export default async function TwitterImage({
  params,
}: {
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;

  return renderOgImage(isLanguage(lng) ? lng : fallbackLng);
}
