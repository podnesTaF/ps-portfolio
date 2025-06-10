import Sidebar from "@/components/internship/Sidebar"
import { SmartLink } from "@/components/projects/SmartLink"
import Image from "next/image"

const Internship = () => {

  return (
    <main className="relative lg:gap-10 py-20 justify-center ">
      <div className="px-4 max-w-7xl mx-auto w-full">
        <div className={"space-y-4 mb-4"}>
          <h1 className="inline-block font-heading text-4xl lg:text-5xl text-white">
            Frontend developer Internship at IMAS NV
          </h1>
          <div className="flex gap-4 text-gray-300 text-sm md:text-lg font-medium">
            <p>Feburary - May 2025</p>
            <p>Van Genechten Packaging</p>
          </div>
        </div>
        <section className="relative flex items-center justify-center py-10 md:py-20">
          <div className="flex flex-col-reverse md:flex-row justify-between gap-6 items-center w-full">
            <div className="flex flex-col gap-5 w-full">
              <p className="text-base md:text-lg xl:text-xl font-medium text-white xl:leading-8">
                During my three-month internship at <span className="text-primary">IMAS NV</span>, I architected and implemented a metadata-driven React micro-frontend <span className="text-primary">UI builder</span> that empowered business users to rapidly generate and configure pages without code, integrating with a Quarkus microservices backend to streamline development.
              </p>
            </div>
            <Image src={'/logos/vgp.png'} width={600} height={300} alt="vgp" />
          </div>
        </section>
      </div>
      <section className="flex flex-col md:flex-row border-t border-t-primary">
        <Sidebar />
        <div className="flex-1 lg:flex-[2] flex">
          <div className="max-w-4xl w-full p-5  flex flex-col gap-4">
            <div>
              <h3 className="text-primary mb-3">Watch Demo</h3>
              <SmartLink
                url={'https://youtu.be/cGu3EQgiOeM'}
                name={'Demo'}
              />
            </div>
            <div>
              <h3 className="text-primary mb-3">Objective</h3>
              <p>
                During my internship at Imas NV, I migrated the legacy Java Swing-based ICT Manager module of the Fenics ERP to a modern web platform. I aimed to create a dynamic, configuration-driven UI Builder to reduce repetitive coding and improve maintainability.
              </p>
            </div>
            <div>
              <h3 className="text-primary mb-3">Approach</h3>
              <p>
                I analysed the legacy system's repeating page patterns and compared manual page creation with a metadata-driven strategy. After evaluating both, I chose a Dynamic UI Configuration approach, designing a three-layer architecture: a Configuration Studio, a Builder Engine micro-frontend, and an Integration Layer.
              </p>
            </div>
            <div>
              <h3 className="text-primary mb-3">Implementation</h3>
              <p>
                I transformed repetitive page patterns into a metadata-driven UI Builder micro-frontend—letting business users define screens, fields, views, relations, and actions in a web studio and see live previews without any redeploys. I wrapped this remote module into the existing Module Federation shell, wired dynamic routes, and plugged it into Quarkus services via TanStack Query, while enforcing consistent validation and form logic with React Hook Form and Zod.
              </p>
            </div>
            <div>
              <h3 className="text-primary mb-3">Outcome</h3>
              <p>
                The final solution enabled instant page generation, zero-redeploy text updates, and consistent UX across tables. It reduced development time and empowered analysts to configure screens without code. It simplified versioning and audit trails, enabling non-developers to preview changes instantly. Overall, the project demonstrated scalable migration techniques for enterprise systems.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Internship