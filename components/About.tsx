"use client";

import SecHeading from "./SecHeading";
import { motion } from "framer-motion";
import useSectionInView from "@/hooks/useSectionInView";

function About() {
  const { ref } = useSectionInView({ threshold: 0.75, sectionName: "About" });

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SecHeading>About me</SecHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Electronic Engineering</span> in 2020, I
        did my military service as Reserve Officer (1 year). After military
        service, I returned to Istanbul. Since January 2022, I have pursued my
        passion for <span className="font-medium">software developing</span>. I
        have finished several web developer bootcamps. I am currently looking
        for a full-time position as a software developer.
      </p>
      <p className="">
        When I am not coding, I enjoy watching movies, meeting friends and
        learning new things such as foreign languages. I am going to learn{" "}
        <span className="font-medium">Spanish</span> soon.
      </p>
    </motion.section>
  );
}

export default About;
