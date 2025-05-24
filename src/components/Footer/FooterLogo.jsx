const FooterLogo = (props) => {
  return (
    <li>
      <a href={props.website} target="_blank">
        <img
          src={props.icon}
          alt={`${props.alt} Logo`}
        />
      </a>
    </li>
  );
}

export default FooterLogo