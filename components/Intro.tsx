"use client";

import Image from "next/image";
import profileImage from "@/public/emre-foto.jpg";

import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { motion } from "framer-motion";

import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

import useSectionInView from "@/hooks/useSectionInView";
import useActiveSection from "@/hooks/useActiveSection";

function Intro() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSection();
  const { ref } = useSectionInView({ threshold: 0.75, sectionName: "Home" });

  return (
    <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
      <div className="flex items-center justify-center ">
        <div className="relative">
          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "tween", duration: 0.2 }}>
            <Image
              width="192"
              height="192"
              src={profileImage}
              alt="Profile photo"
              quality="95"
              priority={true}
              className="h-32 w-32 rounded-full object-cover border-[0.35rem] border-white shadow-xl "
            />
          </motion.div>
          <motion.span
            className="absolute text-4xl bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.5,
              duration: 0.7,
            }}>
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}>
        <span className="font-bold">Hello</span>, I am <span className="font-bold">Emre</span>, <span className="font-bold"> a full-stack web developer</span>{" "}
        with <span className="font-bold">2 years</span> of experience. You can find my <span className="italic">projects</span> on this site and{" "}
        <span className="underline">github</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}>
        <Link
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition shadow-md hover:shadow-sm">
          Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          href="/Emre Yılmaz CV English.pdf"
          download={true}
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition shadow-md hover:shadow-sm dark:bg-white/10">
          Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          href="https://www.linkedin.com/in/mreylmaz94/"
          target="_blank"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 hover:text-gray-950 transition shadow-md hover:shadow-sm dark:bg-white/10 dark:text-white/60">
          <BsLinkedin />
        </a>

        <a
          href="https://www.github.com/mreyilmz"
          target="_blank"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition shadow-md hover:shadow-sm dark:bg-white/10 dark:text-white/60">
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}

export default Intro;
