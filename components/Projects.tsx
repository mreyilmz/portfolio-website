"use client";

import { projectsData } from "@/lib/data";
import SecHeading from "./SecHeading";
import Project from "./Project";
import useSectionInView from "@/hooks/useSectionInView";

function Projects() {
  const { ref } = useSectionInView({ threshold: 0.5, sectionName: "Projects" });

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SecHeading>My Projects</SecHeading>
      <div className="">
        {projectsData.map((project, i) => {
          return (
            <Project
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              imageUrl={project.imageUrl}
              siteUrl={project.siteUrl}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
