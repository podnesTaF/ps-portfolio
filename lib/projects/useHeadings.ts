'use client';
import { useEffect, useState } from 'react';

export interface Heading { id: string; text: string; depth: number }

export default function useHeadings(rootId: string) {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const root = document.getElementById(rootId);
    if (!root) return;
    const nodes = Array.from(root.querySelectorAll<HTMLElement>('h3, h4, h5, h6'));

    setHeadings(
      nodes.map(n => ({
        id: n.id,
        text: n.innerText,
        depth: Number(n.tagName.replace('H', '')), 
      }))
    );
  }, [rootId]);

  return headings;
}
