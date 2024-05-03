export type TCommonProps = {
  title?: string;
  name?: string;
  icon?: string;
};

export type TExperience = {
  title: string;
  imageSrc: string;
  companyName?: string;
  iconBg: string;
  date: string;
  points: string[];
};

export const experiences: TExperience[] = [
  {
    title: "Continues learning",
    imageSrc: "/logos/codding.png",
    iconBg: "#E6DEDD",
    date: "2020 - Future",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    companyName: "Ace Battle Association",
    imageSrc: "/logos/abm.png",
    iconBg: "#E6DEDD",
    date: "February 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Applied Computer Science",
    companyName: "ThomasMore University of Applied Sciences",
    imageSrc: "/logos/tm.png",
    iconBg: "#E6DEDD",
    date: "September 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend developer Apprenticeship",
    companyName: "HackYourFuture",
    imageSrc: "/logos/hyf.png",
    iconBg: "#E6DEDD",
    date: "July 2022 - March 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];
