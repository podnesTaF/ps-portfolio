import { getHomeData } from "@/api/home";
import { getImageUrl } from "@/api/projects";
import { Experience as TExperience } from "@/api/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import Markdown from "../projects/Markdown";

const ExperienceCard: React.FC<TExperience> = (experience) => {
  return (
    <VerticalTimelineElement
      visible={true}
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.timeframe}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <Image
            src={getImageUrl(experience.icon?.url)}
            alt={experience.title || "company"}
            width={100}
            height={100}
            className="h-[80%] w-[80%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[24px] font-bold text-white">{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold m-0">
          {experience.companyName}
        </p>
      </div>

      <div>
        <Markdown size="sm" content={experience.description} />
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const [experiences, setExperiences] = useState<TExperience[]>([])

  useEffect(() => {
    (async () => {
      const homedata = await getHomeData();

      setExperiences(homedata.experiences)
    })()
  }, [])

  return (
    <section
      id="experience"
      className="min-h-screen my-10 max-w-6xl pl-3 md:pl-12 xl:pl-6 pr-3 mx-auto scroll-mt-32"
    >
      <div className="mb-5 lg:mb-10 xl:mb-12">
        <h5 className="text-white font-medium mb-2 text-lg lg:text-xl">
          What have I done so far?
        </h5>
        <h3 className="text-white text-2xl md:text-3xl xl:text-4xl">
          Experience in <span className="text-primary">IT</span>
        </h3>
      </div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};
export default Experience;
