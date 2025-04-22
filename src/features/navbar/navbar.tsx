import { NAVBAR_HEIGHT } from "@/shared/constants/constants";
import { NavbarLogoPart } from "./subcomponents/logo-part/navbar-logo-part";
import { NavbarUserPart } from "./subcomponents/user-part/navbar-user-part";
import { Container } from "@/shared/components/ui/container";

const Navbar = () => {
  return (
    <nav
      className="fixed top-0 left-0 right-0 bg-transparent rounded-lg overflow-hidden"
      style={{ height: NAVBAR_HEIGHT }}
    >
      <Container className="flex justify-between gap-4 items-center h-full">
        <NavbarLogoPart />
        <NavbarUserPart />
      </Container>
    </nav>
  );
};

export default Navbar;
