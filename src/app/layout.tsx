import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ThemeContextProvider } from "../contexts/themeContext";

const roboto = Roboto({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Achref Gallaoui",
  description: "Achref Gallaoui Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body style={{ margin: 0, padding: 0 }}>
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </body>
    </html>
  );
}
