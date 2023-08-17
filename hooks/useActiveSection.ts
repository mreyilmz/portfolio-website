import { ActiveSectionContext } from "@/context/activeSectionContextProvider";
import { useContext } from "react";

function useActiveSection() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}

export default useActiveSection;
