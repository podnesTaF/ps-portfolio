import Image from "next/image";

const ProjectsIntro = () => {
  return (
    <section className="relative flex items-center justify-center px-3">
      <div className="flex flex-col-reverse md:flex-row justify-between gap-6 items-center w-full">
        <div className="flex flex-col gap-5 w-full">
          <p className="text-base md:text-lg xl:text-xl font-medium text-white xl:leading-8">
            With <span className="text-primary">years</span> of experience in
            the IT field, I&apos;ve had the privilege of building numerous
            projects. On this page, I&apos;m excited to{" "}
            <span className="text-primary">showcase</span> a selection of these
            projects
          </p>
        </div>
        <Image src={"/images/projects.png"} alt="projects" width={600} height={500} className="w-full sm:w-96 xl:w-[500px] h-auto" />
      </div>
    </section>
  );
};

export default ProjectsIntro;
