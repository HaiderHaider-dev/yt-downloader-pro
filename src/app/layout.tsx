import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next-Gen Downloader | Download Without Limits",
  description: "Extract high-quality MP4 video or MP3 audio instantly. No ads, just pure speed.",
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
        {/* 🤖 Monetag Bot Bypass - Direct Inline Script */}
        <script 
          dangerouslySetInnerHTML={{ 
            __html: `(function(s){s.dataset.zone='11057030',s.src='https://al5sm.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))` 
          }} 
        />
      </head>
      <body className="antialiased bg-[#0a0a0a] text-white min-h-screen">
        
        {/* Teri Website Ka Asli Content */}
        {children}
        git add .
      </body>
    </html>
  );
}