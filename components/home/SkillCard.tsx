import { Skill } from "@/content/home/skills";

const SkillCard = ({ title, Icon, description, techItems, id }: Skill) => {
  return (
    <div className="border-2 max-w-[500px] transition-all border-white hover:border-primary bg-transparent hover:bg-white text-white hover:text-[#1b1429] p-4 lg:p-6 w-full min-h-96 flex flex-col">
      <div className="flex gap-3 justify-center items-center mb-5">
        <Icon className="w-7 h-7 lg:w-9 lg:h-9" />
        <h4 className="text-lg md:text-xl 2xl:text-2xl">{title}</h4>
      </div>
      <p className="text-lg lg:text-xl 2xl:text-2xl flex-1">{description}</p>
      <div className="mb-2">
        <h5 className="text-lg lg:text-xl 2xl:text-2xl mb-2">
          My working stack is:
        </h5>
        <div className="ml-3">
          {techItems.map((item, index) => (
            <span key={index} className="text-lg lg:text-xl 2xl:text-2xl">
              {item}
              {index !== techItems.length ? ", " : ""}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
