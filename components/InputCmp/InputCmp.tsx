import { cn } from "@/lib/utils";
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  additionalClassname?: string;
}

const InputCmp: React.FC<Props> = ({ additionalClassname, ...props }) => {
  return (
    <input
      className={cn(
        "p-4 bg-gray-100 border border-gray-150",
        additionalClassname
      )}
      autoComplete="off"
      {...props}
    ></input>
  );
};

export default InputCmp;
