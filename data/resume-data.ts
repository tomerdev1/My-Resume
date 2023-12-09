/* eslint-disable max-len */
import { ResumeSectionProps } from "@/components/ResumeSection/ResumeSection";

export const resumeWorkExpData: ResumeSectionProps = {
  name: "Work Experiance",
  items: [
    {
      companyName: "Wib",
      job: "Software Developer",
      workYears: {
        startYear: "2021",
        endYear: "2023",
      },
      contentBullets: [
        "Early developer in startup environment, doing both backend and frontend.",
        "Include designing SQL queries for big data tables with performance and safety in mind.",
        "OWASP Awareness.",
      ],
    },
    {
      companyName: "Careback",
      job: "Mobile Application Developer",
      workYears: {
        startYear: "2020",
        endYear: "2021",
      },
      contentBullets: [
        "Joined a small startup at its very beginning to build it's product from scratch.",
        "Developed over 10 Views and 30 Components",
        "Working closely with product team to design features, user stories.",
      ],
    },
    {
      companyName: "Army Service",
      job: "Telecommunications Specialist",
      workYears: {
        startYear: "2016",
        endYear: "2019",
      },
      contentBullets: [
        "Managed the implementation of VSAT, a new expirimental satellite communication system in Kfir brigade.",
        "Project manager - Sketching knowledge of small computer labs, offices, warehouses and containers.",
        "Managed stationary communication infrastructure - Establish racks with routers, switches, etc.",
      ],
    },
  ],
};

export const resumeEducationData: ResumeSectionProps = {
  name: "Education",
  items: [
    {
      companyName: "Online Courses",
      job: "Home Student",
      contentBullets: [
        "iOS 13 & Swift 5 - The Complete iOS App Development Bootcamp.",
        "How to Create iOS 2D Games with SpriteKit and Swift 4.",
        "Learn Linux Administration and Supercharge Your Career.",
        "Mastering ARKit for iOS.",
        "SwiftUI - Learn How to Build Beautiful, Robust, Apps.",
        "The Complete React Nave + Hooks Course [2020 Edion].",
        "The Python Mega Course: Build 10 Real World Applications.",
        "Flutter & Dart - The Complete Guide [2021 Edion].",
        "Clean Code: Fundamentals.",
        "Clean Code: SOLID Principles.",
      ],
    },
    {
      companyName: "HAGIMNASYA HARIALIT",
      job: "Student",
      workYears: {
        startYear: "2015",
        endYear: "2016",
      },
      contentBullets: ["10 layer osi model", "code complexity", "OOP"],
    },
    {
      companyName: "GIMNASIYA GAN NAHUM",
      job: "Student",
      workYears: {
        startYear: "2013",
        endYear: "2015",
      },
      contentBullets: ["Expanded computer scince class", "Grade avg 95"],
    },
  ],
};
