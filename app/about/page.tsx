import HobbieCard from "@/components/about/HobbieCard";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import BrushIcon from "@mui/icons-material/Brush";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import ReplayCircleFilledIcon from "@mui/icons-material/ReplayCircleFilled";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";
import Image from "next/image";

const points = [
  {
    id: 1,
    Icon: AssignmentLateIcon,
    title: "The amount of challenges is remarkable.",
  },
  {
    id: 2,
    Icon: ReplayCircleFilledIcon,
    title: "Demands for consistency",
  },
  {
    id: 3,
    Icon: SensorOccupiedIcon,
    title: "Difficulty and Stress",
  },
];

const hobbies = [
  {
    id: 1,
    title: "Crossfit",
    imageUrl: "/images/crossfit.png",
    subtitle: "I like killing my joints with crossfit",
    Icon: FitnessCenterIcon,
    tags: ["BrokenKnees", "DeadShoulders", "SweatBurpees"],
  },
  {
    id: 2,
    title: "Running",
    subtitle: "My way of meditation and relaxation",
    imageUrl: "/images/running.jpg",
    Icon: DirectionsRunIcon,
    tags: ["Sport", "Endurance", "Runnings"],
  },
  {
    id: 3,
    title: "Reading",
    subtitle:
      "Enhancing my critical and imaginative thinking by enjoying lovely books",
    imageUrl: "/images/philosophy.png",
    Icon: AutoStoriesIcon,
    tags: ["Philosophy", "Science", "History"],
  },
  {
    id: 4,
    title: "Design",
    subtitle: "At least trying...",
    imageUrl: "/images/design.jpg",
    Icon: BrushIcon,
    tags: ["Figma", "Photoshop", "Aminations"],
  },
];

const AboutMe = () => {
  return (
    <>
      <section className="relative max-w-7xl 3xl:max-w-8xl mx-auto px-5 w-full py-20 md:py-40 flex items-center justify-center">
        <div className="flex flex-col-reverse md:flex-row justify-between gap-6 items-center w-full">
          <div className="flex flex-col gap-5 w-full md:w-1/2 2xl:w-3/5">
            <div>
              <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-bold text-white mb-4">
                Who I am.
              </h2>
              <p className="px-2 md:px-4 text-white/70 font-medium text-lg leading-6 2xl:leading-8 2xl:text-xl">
                Hello again, I am{" "}
                <span className="text-primary">Oleksii Pidnebesnyi</span>{" "}
                originally from Ukraine. I am currently studying in Belgium at{" "}
                <span className="text-primary">Thomas More</span> and working as
                a software developer at{" "}
                <span className="text-primary">Ace Battle Association</span>
              </p>
            </div>
            <div className="mt-3 md:mt-10">
              <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-bold text-white mb-4">
                That is why I <span className="text-primary">Code</span>.
              </h2>
              <p className=" px-4 text-lg leading-6 2xl:leading-8 2xl:text-xl text-white/70">
                It&apos;s difficult to pinpoint why I started coding because I
                can&apos;t recall a time when I wasn&apos;t involved in it.
                However, there are several key reasons why I chose IT:
              </p>
              <div className="flex flex-col gap-3 my-3 px-4">
                {points.map((point) => (
                  <div
                    key={point.id}
                    className="rounded-xl p-3 lg:p-5 w-full flex gap-4 items-center bg-[#1b1a2ea9] backdrop-blur-lg"
                  >
                    <point.Icon className="text-primary" fontSize="large" />
                    <p className="text-white font-semibold text-lg leading-6 2xl:leading-8 2xl:text-xl">
                      {point.title}
                    </p>
                  </div>
                ))}
              </div>
              <p className=" px-4 text-lg leading-6 2xl:leading-8 2xl:text-xl text-white/70">
                Therefore, I believe that the weaknesses of coding are, in fact,
                my strong points.
              </p>
            </div>
          </div>
          <div className="bg-primary/60 rounded-full p-2 md:p-7 max-w-[400px] md:max-w-none md:w-2/5 overflow-hidden">
            <Image
              src={"/images/about-me.jpg"}
              alt={"about-me"}
              width={400}
              height={400}
              className="object-cover w-full h-60 md:h-auto rounded-full"
            />
          </div>
        </div>
      </section>
      <section className="min-h-screen mb-20 2xl:max-w-6xl 3xl:max-w-7xl md:pl-12 xl:pl-6 px-6 mx-auto">
        <div id="what-i-offer" className="mb-5 lg:mb-10 xl:mb-12 scroll-mt-32">
          <h5 className="text-white font-medium mb-2 text-lg lg:text-xl">
            About Me
          </h5>
          <h3 className="text-white text-3xl md:text-4xl xl:text-5xl">
            My <span className="text-primary">Hobbies</span>
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {hobbies.map((hobby) => (
            <HobbieCard {...hobby} key={hobby.id} />
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutMe;
