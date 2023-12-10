"use client";
/* eslint-disable max-len */
import ResumeSection from "@/components/ResumeSection/ResumeSection";
import TechStack from "@/components/TechStack/TechStack";
import {
  getTechStackByCompanyName,
  resumeEducationData,
  resumeWorkExpData,
} from "@/data/resume-data";
import { useState } from "react";

const Home: React.FC = () => {
  const [focusedCompany, setFocusedCompany] = useState<string>();
  return (
    <main className="flex flex-row w-full h-full ">
      <div className="flex p-4 flex-col gap-8 overflow-y-scroll h-full w-3/5">
        <ResumeSection
          {...resumeWorkExpData}
          onClickCompany={(name) => setFocusedCompany(name)}
        />
        <ResumeSection
          {...resumeEducationData}
          onClickCompany={(name) => setFocusedCompany(name)}
        />
      </div>

      {focusedCompany && (
        <TechStack techs={getTechStackByCompanyName(focusedCompany).techs} />
      )}
    </main>
  );
};

export default Home;

// export default function Home() {

// }
