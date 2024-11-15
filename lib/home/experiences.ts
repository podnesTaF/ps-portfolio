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
    title: "Continuous learning",
    imageSrc: "/logos/codding.png",
    iconBg: "#E6DEDD",
    date: "2020 - Future",
    points: [
      "I have started my journey in the world of programming 4 years ago and I am still learning new things every day.",
      "I started my way from backend nodejs development and computer science basics",
      "A year after, I felt in love with frontend development and started enhancing my skills in React and other related technologies",
      "I am currently working as a full stack developer and I am always looking for new challenges and opportunities to grow as a developer",
    ],
  },
  {
    title: "Frontend Developer Apprenticeship",
    companyName: "HackYourFuture",
    imageSrc: "/logos/hyf.png",
    iconBg: "#E6DEDD",
    date: "July 2022 - March 2023",
    points: [
      "Developing user interfaces for web applications using HTML, CSS, and JavaScript.",
      "Creating responsive web designs that work on a variety of devices and screen sizes.",
      "Working with modern frontend frameworks like React and Angular to build interactive web applications.",
      "Collaborating with other developers to build and deploy web applications using GitHub and agile methodologies.",
    ],
  },
  {
    title: "Applied Computer Science",
    companyName: "ThomasMore University of Applied Sciences",
    imageSrc: "/logos/tm.png",
    iconBg: "#E6DEDD",
    date: "September 2022 - Present",
    points: [
      "Learning fundamental computer science concepts and applying them to real-world problems.",
      "Developing software applications using modern programming languages and frameworks.",
      "Working on team projects to develop and deploy web applications using agile methodologies.",
      "Gaining experience in software development, testing, and deployment processes.",
    ],
  },
  {
    title: "Full Stack Developer",
    companyName: "Ace Battle Association",
    imageSrc: "/logos/aba.png",
    iconBg: "#1f1e1c",
    date: "February 2023 - June 2024",
    points: [
      "Develop user-friendly web interfaces that adapt to various devices, including creating specialized admin dashboards",
      "Utilize Node.js with NestJs for backend development",
      "Create and implement website designs and user interfaces fromscratch using Figma",
      "Develop a mobile application using React Native and Expo.",
      "Project management and technical task delegation",
    ],
  },
  {
    title: "IT Project Manager",
    companyName: "Ace Battle Holding LTD",
    imageSrc: "/logos/ab.png",
    iconBg: "#fff",
    date: "June 2024 - Present",
    points: [
      "Develop long-term technology strategies aligned with business goals.",
      "Manage technical teams and ensure task execution.",
      "Oversee software product development and quality control.",
      "Ensure smooth IT infrastructure operations and security compliance.",
      "Manage budgets and evaluate ROI for IT projects.",
    ],
  },
];
