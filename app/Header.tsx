import LinkCmp from "@/components/LinkCmp/LinkCmp";
import NavBar from "@/components/NavBar/NavBar";

const links = ["Home", "My Projects", "Contact Me"];

export default function Header() {
  return (
    <NavBar subject="Tomer Abady">
      <ul className="flex gap-6 list-none text-text-secondry font-semibold">
        {links.map((link) => (
          <li key={link}>
            <LinkCmp address={link} />
          </li>
        ))}
      </ul>
    </NavBar>
  );
}
