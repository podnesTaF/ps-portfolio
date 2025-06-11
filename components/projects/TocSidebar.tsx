// app/projects/[slug]/TocSidebar.tsx
'use client';
import { Project } from '@/api/types';
import useHeadings from '@/lib/projects/useHeadings';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

export default function TocSidebar({
  articleRootId,
  allProjects,
  currProjSlug
}: {
  articleRootId: string;
  allProjects: Project[];
  currProjSlug: string;
}) {
  const headings = useHeadings(articleRootId);

  return (
    <aside className="hidden xl:block w-64 shrink-0 pl-8 sticky top-24 self-start">
      <h3 className="text-lg font-semibold tracking-wide text-slate-400 mb-2">
        On this page
      </h3>
      <nav className="space-y-2 text-sm">
        {headings.map(h => (
          <Link
            key={h.id}
            href={`#${h.id}`}
            className={`block text-white text-base hover:text-primary ${h.depth > 3 ? 'ml-4 opacity-80' : ''
              }`}
          >
            {h.text}
          </Link>
        ))}
      </nav>
      <h3 className="text-lg font-semibold tracking-wide text-slate-400 mt-10 mb-2">
        More projects
      </h3>
      <ul className="space-y-1 text-sm">
        {allProjects.map(p => (
          <li className='list-none' key={p.id}>
            <Link
              href={`${p.slug}`}
              className={twMerge(`text-base capitalize hover:text-primary transition-colors`, p.slug === currProjSlug ? 'text-primary' : "")}
            >
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
