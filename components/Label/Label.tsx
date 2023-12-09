import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type TextVariant = "primary" | "secondry" | "default" | "disabled";
type Size = "small" | "medium" | "large" | "huge";

interface Props
  extends Omit<HTMLAttributes<HTMLParagraphElement>, "className" | "children"> {
  classnameAddition?: string;
  children?: string;
  variant: TextVariant;
  bold?: boolean;
  size?: Size;
}

const SizeToClassnameSize = (size: Size): string => {
  switch (size) {
    case "small":
      return "text-sm";
    case "medium":
      return "text-base";
    case "large":
      return "text-xl";
    case "huge":
      return "text-2xl";
  }
};

const variantToClassnameVariant = (variant: TextVariant): string => {
  switch (variant) {
    case "primary":
      return "text-text-primary";
    case "secondry":
      return "text-text-secondry";
    case "disabled":
      return "text-text-disabled";
    case "default":
      return "";
  }
};

const Label: React.FC<Props> = ({
  classnameAddition,
  children,
  variant = "default",
  bold = false,
  size = "medium",
}: Props) => {
  const variantClassname = variantToClassnameVariant(variant);
  return (
    <p
      className={cn(
        SizeToClassnameSize(size),
        bold ? "font-bold" : "font-normal",
        variantClassname,
        classnameAddition,
        "font-ubuntu"
      )}
    >
      {children}
    </p>
  );
};
export default Label;
