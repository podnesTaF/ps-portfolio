import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import StorageIcon from "@mui/icons-material/Storage";
export interface Skill {
  id: number;
  title: string;
  Icon: any;
  description: string;
  techItems: string[];
}

export const skills: Skill[] = [
  {
    id: 1,
    title: "Frontend Development",
    Icon: LaptopChromebookIcon,
    description:
      "I'm creating modern web and mobile interfaces. I enjoy turn ideas and designs into life.",
    techItems: [
      "TypeScript",
      "Next.js",
      "Remix.js",
      "Tailwind",
      "Shadcn",
      "MUI",
      "Redux",
      "etc.",
    ],
  },
  {
    id: 2,
    title: "Backend Development",
    Icon: StorageIcon,
    description:
      "My passion is to create scalable and accurate APIs and services",
    techItems: [
      "Node.js",
      "Nest.js",
      "Typeorm",
      "MySQL",
      "MongoDB",
      "Google Cloud Platform",
      "etc.",
    ],
  },
  {
    id: 3,
    title: `Mobile Development`,
    Icon: PhoneIphoneIcon,
    description: "I like develop cross platform apps",
    techItems: ["React Native", "Expo", "Zustand", "React Query"],
  },
];
