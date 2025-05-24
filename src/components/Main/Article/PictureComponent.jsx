const PictureComponent = (props) => {
  return (
    
      <picture>
        <source srcSet={props.desktopImage} media="(min-width: 48rem)" />
        <img
          className={props.pictureClass || ""}
          src={props.mobileImage}
          alt={props.altText}
          loading="lazy"
          decoding="async"
        />
      </picture>
    
  );
};

export default PictureComponent;
