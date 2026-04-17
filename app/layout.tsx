import "@/styles/globals.css";
import type { ReactNode } from "react";

import { Analytics } from "@vercel/analytics/next";

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
      </body>
    </html>
  );
}
