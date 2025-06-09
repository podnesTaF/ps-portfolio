import { getImageUrl, getProjectDetails, getProjects } from '@/api/projects'
import Markdown from '@/components/projects/Markdown'
import MdxImage from '@/components/projects/MdxImage'
import { SmartLink } from '@/components/projects/SmartLink'
import TocSidebar from '@/components/projects/TocSidebar'
import Image from 'next/image'

async function ProjectPage({ params: { slug } }: { params: { slug: string } }) {
  const project = await getProjectDetails(slug)
  const allProjects = await getProjects();

  return (
    <main className="relative lg:gap-10 py-20 justify-center max-w-7xl mx-auto w-full">
      <div className="px-4">
        <div className={"space-y-4 mb-4"}>
          <h1 className="inline-block font-heading text-4xl lg:text-5xl text-white">
            {project.title}
          </h1>
          <div className='flex flex-col md:flex-row justify-between gap-4 md:items-center max-w-5xl'>
            <div className="flex gap-4 text-gray-300 text-sm md:text-lg font-medium">
              {project.tags?.map((tag) => <p key={tag.id}>{tag.text}</p>)}
            </div>
            <div className="my-3 flex gap-4  sm:items-center sm:justify-end">
              {project.links?.map(link => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  className="flex gap-2 items-center text-white hover:text-white/70"
                >
                  <Image src={getImageUrl(link.icon?.url)} alt='' width={20} height={20} className='w-6 h-6' />
                  <h5 className='text-base md:text-lg'>{link.name}</h5>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='flex gap-4 my-5 px-4 xl:px-0'>
        <article id="doc-article" className="prose prose-invert flex-1 flex flex-col items-center">
          {project.body.map((block: any) => {
            switch (block.__component) {
              case 'meta.text':
                return <div key={block.id} className='my-4'>
                  <Markdown content={block.content} />
                </div>;

              case 'meta.media':
                return (
                  <MdxImage
                    key={block.id}
                    src={getImageUrl(block.image?.formats?.large?.url)}
                    className="rounded-xl w-full md:w-2/3 h-auto"
                  />
                );

              case 'meta.links':
                return (
                  <SmartLink
                    key={block.id}
                    url={block.url}
                    name={block.name}
                  />
                );

              default:
                return null;
            }
          })}
        </article>
        <TocSidebar currProjSlug={project.slug} allProjects={allProjects} articleRootId="doc-article" />
      </div>
    </main>
  )
}

export default ProjectPage