import { BiSolidChevronDown } from "react-icons/bi";
import {BsList} from "react-icons/bs"
import HeaderNavItem from "./HeaderNavItem";

export default function HeaderNav() {
  return (
    <div className="flex justify-between items-center px-5 sm:px-20 py-5">
      <img className="h-16" src="src/assets/images/simplon_logo.png" alt="" />
      <BsList className="md:hidden" />
      <nav className="hidden md:block">
        <ul className="flex gap-5 font-bold">
          <HeaderNavItem title={"VOUS VOULEZ"}>
            <BiSolidChevronDown />
          </HeaderNavItem>
          <HeaderNavItem title={"WELCODE"} />
          <HeaderNavItem title={"NOS ACTUALITÉS"}/>
        </ul>
      </nav>
    </div>
  );
}
