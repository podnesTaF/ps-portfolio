"use client";

import ProjectFilter from "@/components/about/ProjectFilter";
import { LazyLottie } from "@/components/projects/DisplayLottie";
import { filters } from "@/lib/projects/filters";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const ProjectsPage = () => {
  return (
    <>
      <section className="relative max-w-7xl 3xl:max-w-8xl mx-auto px-5 w-full py-20 flex items-center justify-center">
        <div className="flex flex-col-reverse md:flex-row justify-between gap-6 items-center w-full">
          <div className="flex flex-col gap-5 w-full md:w-2/3">
            <h1 className="text-white font-bold text-3xl md:text-5xl xl:text-6xl">
              Projects
            </h1>
            <p className="text-lg md:text-xl xl:text-2xl font-medium text-white xl:leading-9">
              With <span className="text-primary">years</span> of experience in
              the IT field, I&apos;ve had the privilege of building numerous
              projects. On this page, I&apos;m excited to{" "}
              <span className="text-primary">showcase</span> a selection of
              these projects
            </p>
          </div>
          <LazyLottie loop id={"fullstack"} width={600} height={600} />
        </div>
      </section>
      <section className="mb-20 relative max-w-7xl 3xl:max-w-8xl mx-auto px-5">
        <Swiper
          spaceBetween={20}
          slidesPerView={5}
          breakpoints={{
            0: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 3.5,
              spaceBetween: 20,
            },
            980: {
              slidesPerView: 4.5,
              spaceBetween: 20,
            },
            1150: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
        >
          {filters.map((filter) => (
            <SwiperSlide key={filter.id}>
              <ProjectFilter
                {...filter}
                onChange={(id: number) => console.log(id)}
                active={filter.id === 1}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default ProjectsPage;
