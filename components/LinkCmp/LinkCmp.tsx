import Link, { LinkProps } from "next/link";

interface Props extends Omit<LinkProps, "href" | "className"> {
  address: string;
}

const LinkCmp: React.FC<Props> = ({ address }: Props) => (
  <Link
    href={
      address.toLowerCase() == "home"
        ? "/"
        : address.replace(" ", "-").toLowerCase()
    }
    className="
        p-2 
        text-text-secondry 
        hover:bg-text-primary 
        hover:rounded-md 
        active:bg-background-primary 
        focus:ring 
        focus:rounded-md 
        focus:outline-none 
        focus:ring-text-primary"
  >
    {address}
  </Link>
);

export default LinkCmp;
