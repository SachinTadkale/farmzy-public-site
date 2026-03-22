import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const GTM_ID = "GTM-56FXJ3XW";

const outfit = Outfit({
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://farmzy-tan.vercel.app"),

  title: {
    default: "FarmZy - Direct Farmer to Company Marketplace in India",
    template: "%s | FarmZy",
  },

  description:
    "FarmZy is a B2B agriculture marketplace in India connecting farmers directly with companies. Sell crops without middlemen, get better prices, and enable transparent, direct farm trade.",

  keywords: [
    // Core
    "farmers marketplace India",
    "B2B agriculture platform",
    "agriculture marketplace India",
    "agritech startup India",

    // Problem-focused
    "sell crops without middlemen",
    "direct farmer to buyer platform",
    "fair price for farmers India",
    "eliminate middlemen agriculture",

    // Search intent
    "how to sell crops directly",
    "where to sell farm produce India",
    "best platform for farmers India",
    "crop selling app India",

    // Business side
    "buy crops directly from farmers",
    "bulk crop procurement India",
    "agriculture supply chain platform",

    // Branding
    "FarmZy",
    "farmzy",
    "Farmzy",
    "farmzy - web app",
  ],

  authors: [{ name: "FarmZy Team" }],
  creator: "FarmZy",

  openGraph: {
    title: "FarmZy - Sell Crops Directly to Companies",
    description:
      "No middlemen. Better prices. Transparent agriculture trade. FarmZy connects farmers and companies across India.",
    url: "https://farmzy-tan.vercel.app",
    siteName: "FarmZy",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "FarmZy - Direct Farmer to Company Marketplace",
    description:
      "Sell crops directly to companies. No middlemen. Better profits for farmers.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="dark">
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
        f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
      `,
          }}
        />
      </head>
      <body
        className={`${outfit.variable} font-outfit antialiased selection:bg-primary/30`}
      >
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
