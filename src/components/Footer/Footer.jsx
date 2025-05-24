import NavLinks from "../Nav/NavLinks";
import FooterLogo from "./FooterLogo";
import Logo from "../../assets/images/logo.svg";
import FacebookIcon from "../../assets/images/icon-facebook.svg";
import InstagramIcon from "../../assets/images/icon-instagram.svg";
import XIcon from "../../assets/images/icon-twitter.svg";
import PinterestIcon from "../../assets/images/icon-pinterest.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <img className="footer-logo" src={Logo} alt="Sunnyside’s Logo" />
      <NavLinks classProps="footer-links" />
      <ul className="footer-logos">
        <FooterLogo
          website="https://facebook.com"
          alt="facebook"
          icon={FacebookIcon}
        />
        <FooterLogo
          website="https://instagram.com"
          alt="instagram"
          icon={InstagramIcon}
        />
        <FooterLogo website="https://x.com" alt="x" icon={XIcon} />
        <FooterLogo
          website="https://pinterest.com"
          alt="pinterest"
          icon={PinterestIcon}
        />
      </ul>
    </footer>
  );
};

export default Footer;
