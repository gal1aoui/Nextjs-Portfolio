import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";
import type { AppLanguage } from "@/i18n/settings";

export const ogImageSize = { width: 1200, height: 630 };

/** Shared renderer for opengraph-image.tsx and twitter-image.tsx. */
export function renderOgImage(lng: AppLanguage) {
  const role =
    lng === "fr"
      ? "Ingénieur Logiciel Fullstack"
      : "Fullstack Software Engineer";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #09090b 0%, #1e1b4b 55%, #0e7490 100%)",
          color: "#fafafa",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 30,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#a5b4fc",
          }}
        >
          {role}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 700,
            marginTop: 20,
          }}
        >
          {siteConfig.author}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            marginTop: 30,
            color: "#d4d4d8",
          }}
        >
          {siteConfig.url.replace("https://", "")}
        </div>
      </div>
    ),
    ogImageSize,
  );
}
