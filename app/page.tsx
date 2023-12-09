/* eslint-disable max-len */
import ResumeSection from "@/components/ResumeSection/ResumeSection";
import { resumeEducationData, resumeWorkExpData } from "@/data/resume-data";

export default function Home() {
  return (
    <main className="flex flex-row w-full h-full ">
      <div className="flex p-4 flex-col gap-8 overflow-y-scroll h-full w-3/5">
        <ResumeSection {...resumeWorkExpData} />
        <ResumeSection {...resumeEducationData} />
      </div>
      <div className=" w-2/5 h-full flex items-center justify-center">
        <p>Tech Stack</p>
      </div>
    </main>
  );
}
