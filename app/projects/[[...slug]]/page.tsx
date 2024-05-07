import { Mdx } from "@/components/projects/MdxComponents";
import { DashboardTableOfContents } from "@/components/projects/Toc";
import { DocsPager } from "@/components/projects/pager";
import { getTableOfContents } from "@/lib/projects/toc";
import { GitHub } from "@mui/icons-material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";

interface DocPageProps {
  params: {
    slug: string[];
  };
}

async function getDocFromParams(params: { slug: string[] }) {
  const slug = params.slug?.join("/") || "";
  const doc = allDocs.find((doc: any) => doc.slugAsParams === slug);

  if (!doc) {
    null;
  }

  return doc;
}

const DocsPage = async ({ params }: DocPageProps) => {
  const doc = await getDocFromParams(params);

  if (!doc) {
    notFound();
  }

  const toc = await getTableOfContents(doc.body.raw);

  return (
    <main className="relative lg:gap-10 py-20 flex justify-center max-w-7xl mx-auto w-full">
      <div className="lg:flex-1 max-w-4xl px-4">
        <div className={"space-y-4 mb-4"}>
          <h1 className="inline-block font-heading text-4xl lg:text-5xl text-white">
            {doc.title}
          </h1>
          <div className="flex gap-4 text-gray-300 text-sm md:text-lg font-medium">
            {doc.date && <p>{doc.date}</p>}
            {doc.tags &&
              doc.tags
                .split(",")
                .map((tag: string, index: number) => <p key={index}>{tag}</p>)}
          </div>
          <div className="my-3 flex gap-4 items-center justify-end">
            {doc.githubUrl && (
              <a
                href={doc.githubUrl}
                target="_blank"
                className="flex gap-2 items-center text-white hover:text-white/70"
              >
                <GitHub />
                <h5>Sourse Code</h5>
              </a>
            )}
            {doc.websiteUrl && (
              <a
                target="_blank"
                href={doc.websiteUrl}
                className="flex gap-2 items-center text-white hover:text-white/70"
              >
                <h5>Website</h5>
                <OpenInNewIcon />
              </a>
            )}
          </div>
        </div>
        <Mdx code={doc.body.code} />
        <hr className="my-4 md:my-6" />
        <DocsPager doc={doc} />
      </div>
      <div className="hidden text-sm xl:block w-max">
        <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
          <DashboardTableOfContents toc={toc} />
        </div>
      </div>
    </main>
  );
};

export default DocsPage;
