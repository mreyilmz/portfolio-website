import { useInView } from "react-intersection-observer";
import useActiveSection from "./useActiveSection";
import { useEffect } from "react";
import type { SectionName } from "@/lib/types";

interface SectionViewProps {
  threshold: number;
  sectionName: SectionName;
}

function useSectionInView({ threshold, sectionName }: SectionViewProps) {
  const { ref, inView } = useInView({
    threshold,
  });

  const { setActiveSection, timeOfLastClick } = useActiveSection();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000)
      setActiveSection(sectionName);
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return { ref };
}

export default useSectionInView;
