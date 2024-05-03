import WordCloud from "./SkillsCould";

const Skills = () => {
  return (
    <section
      id="skills"
      className="overflow-hidden my-20 max-w-6xl pl-3 md:pl-12 xl:pl-6 pr-3 mx-auto flex flex-col lg:flex-row scroll-mt-32"
    >
      <div className="flex-1 flex flex-col gap-4 justify-center items-center">
        <h5 className="font-medium text-primary text-lg lg:text-xl">
          What I work with?
        </h5>
        <h3 className="text-white text-3xl md:text-4xl xl:text-5xl">
          Technologies
        </h3>
      </div>
      <div className="flex-1 flex justify-center ">
        <WordCloud />
      </div>
    </section>
  );
};

export default Skills;
