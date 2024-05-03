"use client";

import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import { useMediaQuery } from "@mui/material";
import GitHubCalendar from "react-github-calendar";

const GitHub = () => {
  const matches = useMediaQuery("(min-width:780px)");
  return (
    <section
      id="github"
      className="overflow-hidden my-20 max-w-6xl pl-3 md:pl-12 xl:pl-6 pr-3 mx-auto flex flex-col items-center"
    >
      <h3 className="text-white text-2xl md:text-3xl xl:text-4xl mb-10">
        Codding Everyday, <span className="text-primary">Why Not?</span>
      </h3>
      <div className="w-full">
        <div className="overflow-x-auto w-full flex justify-center">
          <GitHubCalendar
            username="podnesTaF"
            blockSize={matches ? 15 : 10}
            blockMargin={matches ? 5 : 4}
            theme={{
              dark: ["#EBEBEB", "#9668C0", "#9668C0", "#79549D", "#5D407A"],
            }}
            style={{ color: "white", fontWeight: 600 }}
            colorScheme="dark"
            fontSize={matches ? 16 : 12}
          />
        </div>
        <p className="text-white text-base md:text-lg leading-6 md:leading-8 mt-6 md:max-w-[60%] lg:pl-8">
          <ScheduleOutlinedIcon /> Two years ago, I set a personal challenge for
          myself to engage in coding and contribute to my GitHub projects daily.{" "}
          <br />
          <CheckOutlinedIcon /> This goal was not only about improving my
          technical skills but also about building a habit of consistency and
          dedication in my programming work.
        </p>
      </div>
    </section>
  );
};

export default GitHub;
