const PictureComponent = ({
  desktopImage,
  mobileImage,
  altText,
  pictureClass,
}) => {
  return (
    <picture>
      <source srcSet={desktopImage} media="(min-width: 48rem)" />
      <img
        className={pictureClass || ""}
        src={mobileImage}
        alt={altText}
        loading="lazy"
        decoding="async"
      />
    </picture>
  );
};

export default PictureComponent;
