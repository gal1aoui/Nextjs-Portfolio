import "@/styles/globals.css";
import type { ReactNode } from "react";

import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";

import MixpanelTracker from "@/components/analytics/mixpanel-tracker";
import { fontSans } from "@/config/fonts";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <head />
      <body
        className={`min-h-screen text-foreground bg-background font-sans antialiased overflow-auto ${fontSans.variable}`}
      >
        {children}
        <Analytics />
        {process.env.NEXT_PUBLIC_GA_ID ? (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        ) : null}
        <MixpanelTracker />
      </body>
    </html>
  );
}
