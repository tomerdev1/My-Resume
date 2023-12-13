import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import Label from "../Label/Label";

type ButtonVariant = "primary";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  additionalClassname?: string;
  variant: ButtonVariant;
}

const ButtonCmp: React.FC<Props> = ({
  additionalClassname,
  variant,
  children,
  ...props
}) => {
  const getClassnameColors = (variant: ButtonVariant): string => {
    switch (variant) {
      case "primary":
        // eslint-disable-next-line max-len
        return "bg-text-primary disabled:bg-text-disabled disabled:text-gray-100 text-white";
    }
  };
  return (
    <button
      className={cn(
        "px-4 py-2 w-40 font-ubuntu rounded",
        getClassnameColors(variant),
        additionalClassname
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonCmp;
