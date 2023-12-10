"use client";
import Label from "@/components/Label/Label";
import ListCmp from "@/components/ListCmp/ListCmp";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MouseEventHandler, ReactElement } from "react";

interface WorkYears {
  startYear: number;
  endYear?: number;
}

export interface SectionItemProps {
  companyName: string;
  job: string;
  workYears: WorkYears;
  contentBullets: string[];
  onClick?: (companyName: string) => void;
}

const ItemContent = (contentBullets: string[]): ReactElement => {
  return (
    <AccordionContent>{<ListCmp items={contentBullets} />}</AccordionContent>
  );
};

const workYearsDisplay = (workYears: WorkYears): ReactElement => {
  return (
    <Label size="small" variant="default">
      {`${workYears.startYear.toString()} - ${
        workYears.endYear ? workYears.endYear?.toString() : "Present"
      }`}
    </Label>
  );
};

const JobSummery = (
  companyName: string,
  job: string,
  workYears?: WorkYears
): ReactElement => {
  return (
    <div className="flex flex-row justify-center gap-2 items-center">
      <Label variant="primary" bold size="large">
        {companyName}
      </Label>
      {workYears && workYearsDisplay(workYears)}
      <Label variant="primary">{job}</Label>
    </div>
  );
};

const SectionItem: React.FC<SectionItemProps> = ({
  companyName,
  job,
  workYears,
  contentBullets,
  onClick,
}: SectionItemProps): ReactElement => {
  return (
    <AccordionItem key={companyName} value={companyName}>
      <AccordionTrigger onClick={() => onClick && onClick(companyName)}>
        {JobSummery(companyName, job, workYears)}
      </AccordionTrigger>
      {ItemContent(contentBullets)}
    </AccordionItem>
  );
};

export default SectionItem;
