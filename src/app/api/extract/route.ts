import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { url } = body;

    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    const videoIdMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i);
    const videoId = videoIdMatch ? videoIdMatch[1] : null;

    if (!videoId) {
      return NextResponse.json({ error: 'Invalid YouTube URL' }, { status: 400 });
    }

    // 🔥 SENIOR DEVELOPER BYPASS: Direct Key Injection 🔥
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'c9f9a1f885mshbf71d970f126a2fp1db3d1jsna707efbe30a8',
        'x-rapidapi-host': 'ytstream-download-youtube-videos.p.rapidapi.com'
      }
    };

    const response = await fetch(`https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=${videoId}`, options);
    
    const textData = await response.text(); 
    const data = JSON.parse(textData);

    if (data.message) {
       return NextResponse.json({ error: `API Issue: ${data.message}` }, { status: 400 });
    }

    return NextResponse.json(data);

  } catch (error: any) {
    console.error("Backend Error Details:", error);
    return NextResponse.json({ error: 'Failed to extract video' }, { status: 500 });
  }
}