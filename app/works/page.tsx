import Button from "@/components/Button";
import ImageCard from "@/components/ImageCard";
import { CheckCircle, ExternalLink, Github } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "My Portfolio | Works and Achievements",
  description: "My portfolio for professional skills class",
};

const descriptions = [
  "Developed a web application for the Ace Battle Events",
  "Created a native application using React Native.",
  "A Backend system designed to support multiple client applications.",
  "A betting web app prototype.",
  "Constructed multiple landing pages.",
  "Designed and implemented administrative dashboards.",
];

const results = [
  "Over a year of professional experience in development",
  "Advanced knowledge of the most modern frontend and backend technologies of JavaScript.",
  "Understanding of software architecture and dev ops",
  "Solid knowledge of cross platform mobile development technologies",
  "Smart contracts and web 3.0",
];

const Works = () => {
  return (
    <main>
      <section className="h-full 2xl:min-h-screen bg-gradient-1 flex justify-center gap-10 items-center relative  py-20">
        <div className="w-[60%] max-w-2xl">
          <h2 className="gradient-text mb-4">My Works and Achievements</h2>
          <p className="text-xl xl:text-2xl mb-4 text-white">
            With years of experience in the IT field, I've had the privilege of
            building numerous projects. On this page, I'm excited to showcase a
            selection of these projects
          </p>
        </div>
        <div className="w-[35%]">
          <ImageCard src="/images/works-image.png" alt={"works image"} />
        </div>
      </section>

      <section className="h-full 2xl:min-h-screen bg-gradient-2 flex  items-center relative  px-5 py-20">
        <div className="flex  w-full max-w-7xl justify-between mx-auto gap-10">
          <div className="w-[60%] max-w-2xl flex flex-col gap-5">
            <div className="flex flex-col">
              <h2 className="gradient-text">Ace Battle Mile Platforms</h2>
              <p className="text-2xl 2xl:text-3xl text-white font-semibold mb-5">
                Team Running Game
              </p>
              <a
                className="w-fit"
                href="https://acebattlemile.org/about"
                target="_blank"
              >
                <Button>
                  <div className="flex gap-2 items-center px-5">
                    <p>Read More</p>
                    <ExternalLink size={24} />
                  </div>
                </Button>
              </a>
            </div>
            <div>
              <h3 className="gradient-text">Description:</h3>
              <ul className="flex flex-col gap-4">
                {descriptions.map((desc, i) => (
                  <li key={i} className="flex gap-4 items-center text-white ">
                    <CheckCircle size={24} />
                    <p className="text-xl 2xl:text-2xl">{desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-[30%]">
            <Image
              src="/images/app-view.png"
              alt={"app"}
              width={400}
              height={800}
            />
          </div>
        </div>
      </section>
      <section className="h-full 2xl:min-h-screen bg-gradient-3 flex  items-center relative  px-5 py-20">
        <div className="flex  w-full max-w-7xl justify-between mx-auto gap-10">
          <div className="w-[60%] max-w-2xl flex flex-col gap-5">
            <div className="flex flex-col">
              <h2 className="gradient-text">Ace Battle Mile Platforms</h2>
              <p className="text-2xl 2xl:text-3xl text-white font-semibold mb-5">
                Team Running Game
              </p>
            </div>
            <div>
              <h3 className="gradient-text">Result:</h3>
              <ul className="flex flex-col gap-4">
                {results.map((desc, i) => (
                  <li key={i} className="flex gap-4 items-center text-white ">
                    <CheckCircle size={24} />
                    <p className="text-xl 2xl:text-2xl">{desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-[40%] flex flex-col justify-between items-end">
            <a
              className="w-fit"
              href="https://github.com/podnesTaF/AceBattleEvents"
              target="_blank"
            >
              <Button>
                <div className="flex gap-2 items-center px-5">
                  <Github size={24} />
                  <p>Open Source Projects</p>
                  <ExternalLink size={24} />
                </div>
              </Button>
            </a>
            <Image
              src="/images/macbook.png"
              alt={"app"}
              width={700}
              height={500}
              className="object-contain"
            />
          </div>
        </div>
      </section>
      <section className="h-full 2xl:min-h-screen bg-gradient-4 flex  items-center relative  px-5  py-20">
        <div className="flex flex-col w-full max-w-7xl mx-auto gap-10">
          <div className="flex flex-col max-w-3xl">
            <h3 className="gradient-text">
              Hack Your Future Frontend Dev apprenticeship
            </h3>
            <p className="text-xl 2xl:text-2xl text-white font-semibold mb-5">
              9-month frontend development course divided into 12 modules. The
              last module is a 6-weeks intensive Final Project.
            </p>
          </div>
          <div className="max-w-5xl flex gap-4 items-center mx-auto">
            <div className="flex flex-col flex-[2] gap-4">
              <Image
                src={"/images/hyf-1.png"}
                alt={""}
                width={500}
                height={300}
                className="object-cover flex-1 rounded-xl"
              />
              <Image
                src={"/images/hyf-2.png"}
                alt={""}
                width={500}
                height={300}
                className="object-cover flex-1 rounded-xl"
              />
            </div>
            <div className="flex-[3]">
              <Image
                src={"/images/hyf-3.png"}
                alt={""}
                width={700}
                height={500}
                className="object-cover w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="h-full 2xl:min-h-screen bg-gradient-5 flex  items-center relative px-5 py-20">
        <div className="flex flex-col w-full max-w-7xl mx-auto gap-10">
          <div className="flex flex-col max-w-3xl">
            <h3 className="gradient-text">Requirement Analysis Project</h3>
            <p className="text-xl 2xl:text-2xl text-white font-semibold mb-5">
              What are we building
            </p>
          </div>
          <div className="w-full flex justify-between gap-10">
            <div className="bg-[url('/images/tech.png')] bg-no-repeat bg-contain max-w-lg">
              <div>
                <h3 className="gradient-text text-2xl my-4">
                  Technology Stack
                </h3>
                <p className="text-white text-xl">
                  The application is being developed using PHP Laravel
                </p>
              </div>
              <div>
                <h3 className="gradient-text text-2xl my-4">Current Status</h3>
                <p className="text-white text-xl">
                  With the planning, ERD models, and UX/UI design phases behind
                  us, we are now moving forward with the development phase.
                </p>
              </div>
            </div>
            <div className="w-1/2">
              <h2 className="gradient-text">Memory Support Web Application</h2>
              <p className="text-xl 2xl:text-2xl text-white">
                This semester, we started a project to help people with memory
                problems and their caretakers by building a web app for easy
                planning of medications and daily tasks. It's a one-stop
                solution for caretakers to manage prescriptions and schedules,
                making everyday care simpler and more organized.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Works;
