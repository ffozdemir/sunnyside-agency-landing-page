import { useState } from "react";
import NavLinks from "../Nav/NavLinks";
import HamburgerIcon from "../../assets/images/icon-hamburger.svg";
import Logo from "../../assets/images/logo.svg";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleHamburger = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav>
      <img src={Logo} alt="Sunnyside's Logo" />
      <div
        id="nav-el"
        className={isMobileMenuOpen ? "nav-item mobile-nav-items" : "nav-item"}
      >
        <NavLinks />
      </div>
      <img
        id="icon-hamburger"
        src={HamburgerIcon}
        alt="icon-hamburger"
        onClick={handleHamburger}
        style={{ cursor: "pointer" }}
      />
    </nav>
  );
};

export default Nav;
