import Label from "../Label/Label";
import ListCmp from "../ListCmp/ListCmp";

export interface TechStackProps {
  techs: string[];
}

const TechStack: React.FC<TechStackProps> = ({ techs }: TechStackProps) => {
  return (
    <div className="flex flex-col justify-evenly w-2/5 h-full items-center">
      <Label variant="primary" size="large" bold>
        Tech Stack
      </Label>
      <ListCmp items={techs} />
    </div>
  );
};

export default TechStack;
