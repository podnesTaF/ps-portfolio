'use client'
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/youtube';

export function YoutubePlayer({ url }: { url: string }) {

  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => { if (typeof window !== "undefined") { setHasWindow(true); } }, []);

  return (
    hasWindow && <ReactPlayer width={'auto'} controls={true} light={false} pip={true} url={url} />
  )
}