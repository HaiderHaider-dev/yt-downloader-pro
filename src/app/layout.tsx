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
        
        {/* 🎮 Ecosystem Banner - YT Downloader */}
        <div className="w-full bg-black/60 backdrop-blur-lg border-b border-green-500/20 z-50 relative">
          <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-center gap-3">
            {/* Live Pulsing Dot */}
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <p className="text-xs sm:text-sm font-medium text-green-100 flex flex-wrap items-center justify-center gap-1.5">
              PC Lagging in Free Fire? 
              <a 
                // YAHAN APNA ASLI OPTIMIZER KA LINK DAAL (https:// ke sath)
                href="https://low-end-pc-optimizer.vercel.app/" 
                target="_blank" 
                rel="noreferrer"
                className="text-green-400 hover:text-green-300 underline underline-offset-4 transition-colors font-bold flex items-center gap-1"
              >
                Fix it instantly with my Free Optimizer 🚀
              </a>
            </p>
          </div>
        </div>

        {/* Teri Website Ka Asli Content */}
        {children}
        
      </body>
    </html>
  );
}