import clsx from 'clsx';
import ReactMarkdown from 'react-markdown';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import remarkSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { twMerge } from 'tailwind-merge';

const rehypeSchema = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    '*': [...(defaultSchema.attributes?.['*'] || []), 'id'],
  },
};

// 1) Define your style variants in one place:
const sizeVariants = {
  sm: {
    h3: 'scroll-mt-16 text-xl md:text-2xl mb-2 md:mb-3',
    h4: 'scroll-mt-16 text-lg md:text-xl mt-3',
    p: 'text-sm md:text-base leading-relaxed',
    ul: 'py-2 text-sm md:text-base',
    ol: 'py-2 text-sm md:text-base',
  },
  md: {
    h3: 'scroll-mt-20 text-2xl md:text-3xl mb-2 md:mb-4',
    h4: 'scroll-mt-20 text-xl md:text-2xl mt-4',
    p: 'text-base md:text-lg leading-relaxed',
    ul: 'py-3 text-base md:text-lg',
    ol: 'py-3 text-base md:text-lg',
  },
  lg: {
    h3: 'scroll-mt-24 text-3xl md:text-4xl mb-3 md:mb-5',
    h4: 'scroll-mt-24 text-2xl md:text-3xl mt-5',
    p: 'text-lg md:text-xl leading-relaxed',
    ul: 'py-4 text-lg md:text-xl',
    ol: 'py-4 text-lg md:text-xl',
  },
} as const;

// 2) Your Markdown component picks the variant dynamically:
type SizeKey = keyof typeof sizeVariants;

export default function Markdown({
  content,
  size = 'md',
}: {
  content: string;
  size?: SizeKey;
}) {
  const styles = sizeVariants[size];

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[remarkSlug, [rehypeSanitize, rehypeSchema]]}
      components={{
        h3: ({ node, ...props }) => (
          <h3 className={clsx('text-primary', styles.h3)} {...props} />
        ),
        h4: ({ node, ...props }) => (
          <h4 className={clsx('text-secondary', styles.h4)} {...props} />
        ),
        p: ({ node, ...props }) => <p className={twMerge(styles.p, 'text-white')} {...props} />,
        ul: ({ node, ...props }) => <ul className={twMerge(styles.ul, 'text-white')} {...props} />,
        ol: ({ node, ...props }) => <ol className={twMerge(styles.ol, 'text-white')} {...props} />,
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
