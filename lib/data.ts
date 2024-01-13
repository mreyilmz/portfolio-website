import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import airbnbImg from "@/public/airbnb.jpg";
import natoursImg from "@/public/natours.jpg";
import wildImg from "@/public/wild-oasis.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "University Graduation",
    location: "GTU, Gebze / Kocaeli ",
    description: "I graduated as an Electronic Engineer",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Internship",
    location: "Entek Teknik, Kurtkoy / Istanbul",
    description: "I worked on a PCB project as an intern.",
    icon: React.createElement(CgWorkAlt),
    date: "2019",
  },
  {
    title: "Internship",
    location: "Smart Energy, Gebze / Kocaeli",
    description: "I worked as a propduction engineer in the company that products solar energy panels.",
    icon: React.createElement(CgWorkAlt),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Umraniye / Istanbul",
    description:
      "Since 2022, I have developed and deployed some projects in order to get a full-time job as an web-developer. My projects includes front-end and back-end technologies.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Airbnb-clone",
    description: "I studied on this project in order to level up the back-end skils as well as front-end skils",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma", "Next-auth"],
    imageUrl: airbnbImg,
    siteUrl: "https://fullstack-clone-project.vercel.app/",
  },
  {
    title: "Natours",
    description: "I built the Natours website along with Jonas Schmedtmann who is a lecturer in Udemy. Natours is a website on which you can puchase tours",
    tags: ["Node.js", "MongoDB", "Mongoose", "Express"],
    imageUrl: natoursImg,
    siteUrl: "https://natours-0huh.onrender.com",
  },
  {
    title: "Wild-oasis",
    description:
      "I built also this website along with Jonas Schmedtmann. You can add cabin houses, create users and review data about these with animating graphics. ",
    tags: ["React", "ReactQuery", "Supabase"],
    imageUrl: wildImg,
    siteUrl: "https://course-project-eight.vercel.app/",
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "Python",
  "Framer Motion",
] as const;
