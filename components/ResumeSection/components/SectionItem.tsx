import Label from "@/components/Label/Label";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ReactElement } from "react";

interface WorkYears {
  startYear: string;
  endYear: string;
}

export interface SectionItemProps {
  companyName: string;
  job: string;
  workYears?: WorkYears;
  contentBullets: string[];
}

const ItemContent = (contentBullets: string[]): ReactElement => {
  return (
    <AccordionContent>
      {
        <ul className="list-disc list-inside">
          {contentBullets.map((contentBullet) => (
            <li key={contentBullet}>{contentBullet}</li>
          ))}
        </ul>
      }
    </AccordionContent>
  );
};

const workYearsDisplay = (workYears: WorkYears): ReactElement => {
  return (
    <Label size="small" variant="default">
      {workYears.startYear + "-" + workYears.endYear + "  "}
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
}: SectionItemProps): ReactElement => {
  return (
    <AccordionItem key={companyName} value={companyName}>
      <AccordionTrigger>
        {JobSummery(companyName, job, workYears)}
      </AccordionTrigger>
      {ItemContent(contentBullets)}
    </AccordionItem>
  );
};

export default SectionItem;
