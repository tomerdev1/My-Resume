import { useState } from "react";
import Label from "../Label/Label";

interface Props {
  isVisible: boolean;
}

const EasterEgg: React.FC<Props> = ({ isVisible = false }: Props) => {
  const [activity, setActivity] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleClick = async () => {
    if (!isLoading) {
      setIsLoading(true);
      const response = await fetch("/api/board", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        setActivity(data.message.activity);
      }
      if (!response.ok) {
        console.log("Error Reciving Activity");
      }
      setIsLoading(false);
    }
  };
  return (
    <div className="flex flex-col gap-2">
      <Label
        variant="default"
        classnameAddition={`${isVisible ? "" : "hidden"} cursor-pointer`}
        onClick={handleClick}
        size="small"
      >
        Feeling board yet?
      </Label>
      {activity.length !== 0 && (
        <Label variant="secondry" size="small">
          {activity}
        </Label>
      )}
    </div>
  );
};

export default EasterEgg;
