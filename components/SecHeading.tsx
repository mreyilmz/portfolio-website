"use client";

import { ReactNode } from "react";

interface SecHeadingProps {
  children: ReactNode;
}

function SecHeading({ children }: SecHeadingProps) {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8 text-center ">
      {children}
    </h2>
  );
}

export default SecHeading;
