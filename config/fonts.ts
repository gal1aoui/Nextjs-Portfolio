import {
  Inter as FontSans,
  Space_Grotesk as FontDisplay,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Display font for the modern experience + intro gate only. Its CSS variable is
// applied on those roots, so classic pages never download it.
export const fontDisplay = FontDisplay({
  subsets: ["latin"],
  variable: "--font-display",
});
