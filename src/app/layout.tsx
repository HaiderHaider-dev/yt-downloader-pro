import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

// 1. SEO aur Monetag Verification
export const metadata: Metadata = {
  title: "Next-Gen Downloader | Download Without Limits",
  description: "Extract high-quality MP4 video or MP3 audio instantly. No ads, just pure speed.",
  // 🔥 SENIOR DEVELOPER HACK: Monetag Verification 🔥
  other: {
    "monetag": "c0d69fa39185ede2c54c0a662a9d0dfe" 
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Verification meta tag hum yahan direct bhi daal sakte hain */}
      </head>
      <body className="antialiased bg-[#0a0a0a] text-white min-h-screen">
        
        {/* Teri Website Ka Asli Content */}
        {children}
        
        {/* 2. Monetag Ad Engine (Silent Background Load) */}
        {/* Jab tujhe Ad Script mil jaye, toh uski link hum yahan 'src' mein daalenge */}
        <Script 
          id="monetag-ad-engine"
          strategy="afterInteractive" // Yeh website ki speed girne nahi dega!
          src="https://zary.com/tera_monetag_script_link.js" // Yahan Monetag ka link aayega
          data-zone="TERA_ZONE_ID" // Yahan teri ad ka ID aayega
        />
        
      </body>
    </html>
  );
}