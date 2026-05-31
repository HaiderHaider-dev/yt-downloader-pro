'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Play, Sparkles, Loader2, Download, Music, Video, Zap } from 'lucide-react';

export default function Home() {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [videoData, setVideoData] = useState<any>(null);
  const [error, setError] = useState('');

  // 🧠 API Fetching Logic (Updated for Railway + RapidAPI)
  const handleExtract = async () => {
    if (!url) return;
    setIsLoading(true);
    setError('');
    setVideoData(null);

    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://yt-downloader-backend-production-195b.up.railway.app';
      
      const res = await fetch(`${backendUrl}/api/extract?url=${encodeURIComponent(url)}`);
      const data = await res.json();

      if (data.error || data.message) {
        throw new Error(data.error || data.message || 'Oops! Kuch masla ho gaya. Link check karo.');
      }

      console.log("🔥 RAPIDAPI KA ASLI DATA:", data);
      setVideoData(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen w-full overflow-y-auto bg-[#0a0a0a] text-white flex flex-col items-center p-4 py-20">
      
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none fixed" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none fixed" />

      {/* Main Container */}
      <div className="z-10 flex flex-col items-center w-full max-w-3xl text-center space-y-8">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm font-medium text-gray-300"
        >
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span>Task 2: Next-Gen Downloader</span>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
            Download <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500">Without Limits.</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            Paste your YouTube link below to extract high-quality MP4 video or MP3 audio instantly. No ads, just pure speed.
          </p>
        </motion.div>

        {/* Glassmorphism Search Bar */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.3 }} className="w-full relative group mt-8">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-purple-500 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-500" />
          <div className="relative flex flex-col sm:flex-row items-center w-full bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-2 shadow-2xl">
            <Play className="w-6 h-6 text-red-500 ml-4 mr-2 hidden sm:block" />
            <input
              type="text"
              placeholder="Paste YouTube video URL here..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-white px-4 py-3 placeholder:text-gray-500 w-full"
            />
            <button 
              onClick={handleExtract}
              disabled={isLoading || !url}
              className="w-full sm:w-auto mt-2 sm:mt-0 flex items-center justify-center gap-2 bg-white text-black px-8 py-3 rounded-xl font-bold transition-all hover:bg-gray-200 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
            >
              {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
              <span>{isLoading ? 'Extracting...' : 'Extract'}</span>
            </button>
          </div>
        </motion.div>

        {/* Error Message */}
        {error && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 font-medium">
            {error}
          </motion.p>
        )}

        {/* Results Area */}
        <AnimatePresence>
          {videoData && (
            <motion.div 
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.6, type: "spring" }}
              className="w-full mt-8 p-6 bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl text-left flex flex-col md:flex-row gap-6 shadow-2xl"
            >
              <div className="w-full md:w-1/2 rounded-2xl overflow-hidden border border-white/10 shadow-lg relative group">
                {/* Dynamically pulling thumbnail from RapidAPI */}
                <img src={videoData.picture || videoData.thumbnail || 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000'} 
                     alt="Video Thumbnail" 
                     className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold line-clamp-2 text-gray-100 mb-2">{videoData.title || 'Extracted Video Ready'}</h3>
                  <p className="text-gray-400 text-sm mb-6">Select your preferred format below to start downloading instantly.</p>
                </div>
                
                <div className="w-full mt-6 space-y-5">
                  
                  {/* 🔥 PRO BACKEND MERGE BUTTON (Mapped to API Data) 🔥 */}
                  {videoData.link && (videoData.link['1080p'] || videoData.link['720p']) && (
                    <div>
                      <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 text-xs font-bold mb-2 uppercase tracking-widest pl-1 flex items-center gap-1">
                        <Zap className="w-3 h-3 text-yellow-400" /> Supreme Quality (Audio + Video)
                      </h4>
                      <a 
                        href={videoData.link['1080p']?.[0] || videoData.link['720p']?.[0] || '#'}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between w-full p-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all shadow-lg hover:shadow-purple-500/25 group border border-white/10"
                      >
                        <div className="flex items-center gap-3 font-bold text-white">
                          <Video className="w-5 h-5" /> 
                          {videoData.link['1080p'] ? '1080p+' : '720p'} Premium Merged (MP4)
                        </div>
                        <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform text-white" />
                      </a>
                    </div>
                  )}

                  {/* Standard Direct Link (360p) */}
                  {videoData.link && videoData.link['360p'] && (
                    <div>
                      <h4 className="text-gray-400 text-xs font-bold mb-2 uppercase tracking-widest pl-1">Standard (Low Res)</h4>
                      <div className="flex flex-col gap-2">
                        <a href={videoData.link['360p'][0]} target="_blank" rel="noreferrer" className="flex items-center justify-between w-full p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                          <div className="flex items-center gap-2 font-medium text-gray-300">
                            <Video className="w-4 h-4 text-gray-400" /> 
                            MP4 360p
                          </div>
                          <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform text-gray-400" />
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Audio Direct Link (MP3/M4A) */}
                  {videoData.link && (videoData.link['mp3'] || videoData.link['m4a']) && (
                    <div>
                      <h4 className="text-gray-400 text-xs font-bold mb-2 uppercase tracking-widest pl-1">Audio Extract</h4>
                      <a href={videoData.link['mp3']?.[0] || videoData.link['m4a']?.[0] || '#'} target="_blank" rel="noreferrer" className="flex items-center justify-between w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all group">
                        <div className="flex items-center gap-3 font-medium text-gray-200">
                          <Music className="w-5 h-5 text-green-400" /> Original Audio (MP3/M4A)
                        </div>
                        <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform text-gray-400" />
                      </a>
                    </div>
                  )}

                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </main>
  );
}