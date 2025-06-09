'use client';
import { YoutubePlayer } from './YoutubePlayer';

export function SmartLink({ url, name }: { url: string; name: string }) {
  const isYoutube = /youtu\.?be/.test(url);


  if (isYoutube) {
    return <div className='py-4 max-w-full'>
      <YoutubePlayer url={url} />
    </div>;
  }
  return (
    <a href={url} target="_blank" rel="noopener" className="text-primary underline">
      {name ?? url}
    </a>
  );
}
