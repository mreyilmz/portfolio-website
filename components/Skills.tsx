"use client";

import { skillsData } from "@/lib/data";
import SecHeading from "./SecHeading";
import useSectionInView from "@/hooks/useSectionInView";

import { motion } from "framer-motion";

const fadeInAnimationVariants = (i: number) => {
  return {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
      },
    },
  };
};

function Skills() {
  const { ref } = useSectionInView({ threshold: 0.75, sectionName: "Skills" });

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SecHeading>My Skills</SecHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, i) => (
          <motion.li
            className="bg-white border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={i}
            variants={fadeInAnimationVariants(i)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
