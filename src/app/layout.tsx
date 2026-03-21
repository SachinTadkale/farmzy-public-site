import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FarmZy - Connecting Indian Agriculture Directly",
  description: "A modern B2B platform enabling farmers to sell directly to companies without middlemen, ensuring fair pricing and transparency.",
  keywords: ["agriculture", "marketplace", "B2B", "farmers", "direct trade", "India"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${outfit.variable} font-outfit antialiased selection:bg-primary/30`}
      >
        {children}
      </body>
    </html>
  );
}
