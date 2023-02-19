import {
  SiPostgresql,
  SiTypescript,
  SiChakraui,
  SiDjango,
} from "react-icons/si";
import { FaGit, FaPython } from "react-icons/fa";
import {
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNode,
  FaReact,
} from "react-icons/fa";

export const stackData = [
  {
    title: "JS",
    img: FaJs,
  },
  { title: "TypeScript", img: SiTypescript },
  {
    title: "Node JS",
    img: FaNode,
  },
  {
    title: "Django",
    img: SiDjango,
  },
  {
    title: "React",
    img: FaReact,
  },

  {
    title: "HTML",
    img: FaHtml5,
  },
  {
    title: "CSS",
    img: FaCss3Alt,
  },
  {
    title: "Chakra",
    img: SiChakraui,
  },
  { title: "Docker", img: FaDocker },
  { title: "PostgreSQL", img: SiPostgresql },
  { title: "Git", img: FaGit },
  { title: "Python", img: FaPython },
];
