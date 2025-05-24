const NavLinks = (props) => {
  return (
    <ul className={props.classProps || "nav-links"}>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Services</a>
      </li>
      <li>
        <a href="#">Projects</a>
      </li>
      <li>
        <a id="contact-link" href="#">
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavLinks