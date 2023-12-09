import { ReactNode } from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "@/tailwind.config";
import Label from "../Label/Label";

interface Props {
  children?: ReactNode;
  subject: string;
}
const fullConfig = resolveConfig(tailwindConfig);

const NavBar: React.FC<Props> = ({ children, subject }: Props) => (
  <nav
    className="
        bg-background-primary 
        flex 
        justify-between 
        items-center 
        h-20 p-4"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 -960 960 960"
      className="w-10 h-10"
    >
      <path
        fill={fullConfig.theme.colors.current}
        // eslint-disable-next-line max-len
        d="M218-381q-24 13-51 5.5T126-406q-17-29-6-60t43-42l337-112 36 71-318 168Zm22 261v-227l349-184-17-35 228-114 36 72-276 208v280H240Zm60-440q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Z"
      />
    </svg>
    <Label variant="secondry" classnameAddition="ml-2 mr-auto" size="huge" bold>
      {subject}
    </Label>

    {/* <p className="text-text-secondry ">
      {subject}
    </p> */}
    {children}
  </nav>
);
export default NavBar;
