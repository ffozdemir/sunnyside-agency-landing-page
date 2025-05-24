import NavLinks from "../Nav/NavLinks";
import HamburgerIcon from "../../assets/images/icon-hamburger.svg";
import Logo from "../../assets/images/logo.svg";

const Nav = () => {
  return (
    <nav>
      <img src={Logo} alt="Sunnyside's Logo" />
      <div id="nav-el" className="nav-item">
        <NavLinks />
      </div>
      <img id="icon-hamburger" src={HamburgerIcon} alt="icon-hamburger" />
    </nav>
  );
};

export default Nav;
