import { getCategories, getImageUrl, getProjects } from "@/api/projects"
import { MdxCard } from "@/components/projects/MdxCard"
import ProjectsIntro from "@/components/projects/ProjectsIntro"
import { Skeleton } from "@mui/material"
import dynamic from "next/dynamic"
const Tabs = dynamic(() => import('@/components/projects/Tabs'), {
  ssr: false,
  loading: () => <Skeleton sx={{ backgroundColor: "#ffffff55" }} />,
})

async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ tag: string | undefined }>
}) {
  const activeTag = (await searchParams).tag
  const [projects, categories] = await Promise.all([
    getProjects(activeTag),
    getCategories(),
  ])


  return (
    <main className="relative lg:gap-10 py-20 flex justify-center max-w-7xl mx-auto w-full px-3 overflow-hidden">
      <div className="lg:flex-1 px-4">
        <div className={"space-y-4 mb-4 px-3"}>
          <h1 className="inline-block font-heading text-4xl lg:text-5xl text-white">
            Projects
          </h1>
        </div>
        <ProjectsIntro />
        <div className="py-10 max-w-full md:py-20 overflow-hidden">
          {categories ? (
            <Tabs
              options={categories.map(c => c.name)}
              defaultTab=""
              includeAll
              paramName="tag"
            />
          ) : (
            <div className="flex gap-3">
              <Skeleton sx={{ backgroundColor: "#ffffff55", height: 60, flex: 1 }} />
              <Skeleton sx={{ backgroundColor: "#ffffff55", height: 60, flex: 1 }} />
              <Skeleton sx={{ backgroundColor: "#ffffff55", height: 60, flex: 1 }} />
              <Skeleton sx={{ backgroundColor: "#ffffff55", height: 60, flex: 1 }} />
            </div>
          )}
          <div className="grid w-auto grid-cols-1 md:grid-cols-2 3xl:grid-cols-3 py-8 gap-4 md:gap-12">
            {projects.map(project => (
              <MdxCard
                key={project.documentId}
                href={`/projects/${project.slug}`}
                imageUrl={getImageUrl(project.thumb?.formats?.small?.url)}
                title={project.title}
                tags={project.tags.map(t => t.text).join(",")}
              />
            ))}
          </div>
        </div>
      </div>
    </main>

  )
}

export default ProjectsPage