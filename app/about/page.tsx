import Badge from "@/components/Badge";
import Button from "@/components/Button";
import ImageCard from "@/components/ImageCard";
import { Briefcase, GraduationCap, Wrench } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "My Portfolio | Aboot Me",
  description: "My portfolio for professional skills class",
};

const points = [
  {
    title: "Lifelong Passion",
    content: "My fascination with technology began in childhood",
  },
  {
    title: "Vibrant Community",
    content:
      "The welcoming community around computer science has been a significant factor, providing endless support and inspiration.",
  },
  {
    title: "Continuous Learning",
    content:
      "The field's dynamic nature, offering limitless opportunities for growth and learning",
  },
];

const dreams = [
  {
    title: "Skill Growth",
    content:
      "I aim to grow my skills by working for a big company, always learning and adapting to new tech.",
  },
  {
    title: "Building Products",
    content:
      "My goal is to keep making useful products, even as technology changes.",
  },
  {
    title: "Entrepreneurial Vision:",
    content:
      "Dreaming of launching my own tech venture, bringing innovative solutions to market and shaping the future of technology.",
  },
];

const AboutMe = () => {
  return (
    <main>
      <section className="h-full 2xl:min-h-screen bg-gradient-1 flex justify-center gap-10 items-center relative  py-20">
        <div className="w-[60%] max-w-2xl">
          <h2 className="gradient-text mb-4">About Me</h2>
          <p className="text-xl xl:text-2xl mb-4 text-white">
            Residing in Belgium for the last two years, originally from Ukraine,
            my journey in Applied Computer Science and full-stack development is
            driven by a passion for crafting efficient, user-centric technology.
          </p>
          <p className="text-xl xl:text-2xl text-white">
            I dedicate myself to achieving excellence, emphasizing creative and
            effective solutions to address real-world problems.
          </p>
        </div>
        <div className="w-[35%]">
          <ImageCard src="/images/about-me.png" alt={"intro image"} />
        </div>
      </section>
      <section className="bg-gradient-2 h-full min-h-screen flex flex-col justify-between gap-20 relative py-20">
        <div className="px-20 z-10">
          <h2 className="gradient-text">Why I chose Computer Science?</h2>
          <p className="text-xl xl:text-2xl text-white">
            The Driving Forces Behind My Choice
          </p>
        </div>
        <div className="w-full flex gap-20 justify-around border-t-[1px] border-t-white px-20 z-10">
          {points.map((point, i) => (
            <div key={i} className="w-[30%] relative">
              <h3 className="gradient-text text-2xl my-4">{point.title}</h3>
              <p className="text-white text-xl">{point.content}</p>
              <div className="rounded-full blur-sm w-2.5 h-2.5 bg-white shadow-md absolute -top-[5px] left-0"></div>
            </div>
          ))}
        </div>
        <Image
          src={"/images/bg-circles.png"}
          alt=""
          width={1500}
          height={800}
          className="absolute w-full h-auto top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-0"
        />
      </section>
      <section className="bg-gradient-3 h-full min-h-screen flex justify-center relative p-20">
        <h1 className="gradient-text -rotate-90 translate-x-1/2">My Hobbies</h1>
        <div className="flex flex-col flex-1 gap-5 max-w-7xl -translate-x-40">
          <div className="flex w-full gap-3 flex-1">
            <div className="bg-[url('/images/crossfit.png')] bg-no-repeat bg-center bg-cover flex-[2] h-full flex flex-col gap-2 2xl:gap- justify-end p-5">
              <Badge title="Crossfit" />
              <h3 className="text-white text-2xl 2xl:text-3xl">
                I like killing my joints with crossfit
              </h3>
            </div>
            <div className="bg-[url('/images/running.png')] bg-no-repeat bg-center bg-cover flex-[3] h-full flex flex-col gap-2 2xl:gap- justify-end p-5">
              <Badge title="Running" />
              <h3 className="text-white text-2xl 2xl:text-3xl">
                I'm not bad at running
              </h3>
            </div>
          </div>
          <div className="flex w-full gap-3 flex-1">
            <div className="bg-[url('/images/philosophy.png')] bg-no-repeat bg-center bg-cover flex-[3] h-full flex flex-col gap-2 2xl:gap-4 justify-end p-5">
              <Badge title="Philosophy" />
              <h3 className="text-white text-2xl 2xl:text-3xl">
                Enhancing my critical and imaginative thought processes.
              </h3>
            </div>
            <div className="bg-[url('/images/leetcode.png')] bg-no-repeat bg-center bg-cover flex-[2] h-full flex flex-col gap-2 2xl:gap- justify-end p-5">
              <Badge title="Leetcode" />
              <h3 className="text-gray-500  text-2xl 2xl:text-3xl ">
                Honing Problem-Solving Skills
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-4 h-full min-h-screen flex flex-col justify-between gap-20 relative py-20">
        <div className="px-20 z-10">
          <h2 className="gradient-text">
            Future Dreams & Professional Ambitions
          </h2>
          <p className="text-xl xl:text-2xl text-white">
            Building, Learning, and Dreaming Big
          </p>
        </div>
        <div className="w-full flex gap-20 justify-around border-t-[1px] border-t-white px-20 z-10">
          {dreams.map((point, i) => (
            <div key={i} className="w-[30%] relative">
              <h3 className="gradient-text text-2xl my-4">{point.title}</h3>
              <p className="text-white text-xl">{point.content}</p>
              <div className="rounded-full blur-sm w-2.5 h-2.5 bg-white shadow-md absolute -top-[5px] left-0"></div>
            </div>
          ))}
        </div>
        <Image
          src={"/images/bg-circles.png"}
          alt=""
          width={1500}
          height={800}
          className="absolute w-full h-auto top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-0"
        />
      </section>

      <section className="bg-gradient-5 h-full min-h-screen relative p-20">
        <h1 className="gradient-text mb-4">My Resume</h1>
        <div className="bg-light-gradient p-5 xl:p-7 rounded-xl text-white flex justify-between gap-4 2xl:gap-7 max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-6">
            <Image
              src={"/images/cv-image.jpg"}
              alt={"Avatar"}
              width={400}
              height={400}
              className="rounded-xl object-cover"
            />
            <a
              href="/files/CV_Oleksii_Pidnebesnyi.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>
                <p className="px-4">Download CV</p>
              </Button>
            </a>
          </div>
          <div className="flex flex-col flex-1 gap-4">
            <h4 className="gradient-text text-2xl 2xl:text-3xl">
              Hi there! I'm Oleksii, a passionate full-stack developer based in
              Ukraine with a focus on building engaging front-end applications
              with JavaScript.
            </h4>
            <div className="flex gap-3 flex-col items-center">
              <Briefcase size={40} />
              <p className="text-xl">
                With experience both as a freelancer and as a developer at a
                company organizing running events, I have honed my skills in
                crafting user-friendly interfaces and developing web
                applications.
              </p>
            </div>
            <div className="flex gap-3 flex-col items-center">
              <Wrench size={40} />
              <p className="text-xl">
                I'm all about JavaScript and have a special place in my heart
                for React. I use TypeScript, Next.js, and Nest.js to build
                full-scale web apps. Recently, I've been diving into building
                native apps with Expo and React Native, and exploring the
                exciting world of web3.
              </p>
            </div>
            <div className="flex gap-3 flex-col items-center">
              <GraduationCap size={40} />
              <p className="text-xl">
                I am committed to continuous learning, staying up-to-date with
                the latest trends and technologies in the industry. I actively
                contribute to different projects and share my own projects on
                GitHub, engaging with the developer community.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutMe;
