import { NAVBAR_HEIGHT } from "@/shared/constants/constants";
import { NavbarLogoPart } from "./subcomponents/logo-part/navbar-logo-part";
import { NavbarUserPart } from "./subcomponents/user-part/navbar-user-part";

const Navbar = () => {
  return (
    <nav
      className="fixed top-0 left-0 right-0 border-b shadow-xl rounded-lg overflow-hidden"
      style={{ height: NAVBAR_HEIGHT }}
    >
      <div className="flex justify-between gap-4 items-center h-full px-12">
        <NavbarLogoPart />
        <NavbarUserPart />
      </div>
    </nav>
  );
};

export default Navbar;
