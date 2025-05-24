import ArrowIcon from "../../assets/images/icon-arrow-down.svg";
import HeaderImageDesktop from "../../assets/images/desktop/image-header.jpg";
import HeaderImageMobile from "../../assets/images/mobile/image-header.jpg";

const HeaderHero = () => {
  return (
    <div className="header-hero">
      <div className="header-hero-text">
        <h1>We are creatives</h1>
        <img src={ArrowIcon} alt="arrow icon" />
      </div>
      <picture>
        <source media="(min-width: 48rem )" srcSet={HeaderImageDesktop} />
        <img
          className="image-header"
          src={HeaderImageMobile}
          alt="Half orange"
        />
      </picture>
    </div>
  );
};

export default HeaderHero;
