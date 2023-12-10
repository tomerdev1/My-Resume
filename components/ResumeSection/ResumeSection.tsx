"use client";
import { Accordion } from "@/components/ui/accordion";
import SectionItem, { SectionItemProps } from "./components/SectionItem";
import Label from "@/components/Label/Label";

export interface ResumeSectionProps {
  name: string;
  items: SectionItemProps[];
  onClickCompany: (companyName: string) => void;
}

const ResumeSection: React.FC<ResumeSectionProps> = ({
  name,
  items,
  onClickCompany,
}: ResumeSectionProps) => (
  <>
    <Label
      variant="disabled"
      size="huge"
      classnameAddition="border-b-2 border-dotted flex justify-center"
    >
      {name}
    </Label>
    <Accordion type="single" collapsible>
      {items.map((item) => (
        <SectionItem
          onClick={onClickCompany}
          companyName={item.companyName}
          contentBullets={item.contentBullets}
          job={item.job}
          key={item.companyName}
          workYears={item.workYears}
        />
      ))}
    </Accordion>
  </>
);

export default ResumeSection;
