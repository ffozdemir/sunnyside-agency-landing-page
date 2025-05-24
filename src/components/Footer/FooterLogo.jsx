const FooterLogo = (props) => {
  return (
    <li>
      <a href={props.website} target="_blank" rel="noopener noreferrer">
        <img src={props.icon} alt={`${props.alt} Logo`} />
      </a>
    </li>
  );
};

export default FooterLogo;
