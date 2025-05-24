import ImageTransformDesktop from "../../../assets/images/desktop/image-transform.jpg";
import ImageTransformMobile from "../../../assets/images/mobile/image-transform.jpg";
import ImageStandOutDesktop from "../../../assets/images/desktop/image-stand-out.jpg";
import ImageStandOutMobile from "../../../assets/images/mobile/image-stand-out.jpg";
import ImageGraphicDesignDesktop from "../../../assets/images/desktop/image-graphic-design.jpg";
import ImageGraphicDesignMobile from "../../../assets/images/mobile/image-graphic-design.jpg";
import ImagePhotographyDesktop from "../../../assets/images/desktop/image-photography.jpg";
import ImagePhotographyMobile from "../../../assets/images/mobile/image-photography.jpg";
import PictureComponent from "./PictureComponent";

const ArticleSection = () => {
  return (
    <section className="article-section">
      <div className="article">
        <PictureComponent
          desktopImage={ImageTransformDesktop}
          mobileImage={ImageTransformMobile}
          altText="egg with shadow"
        />
      </div>

      <div className="article-text article egg-text">
        <h2>Transform your brand</h2>
        <p>
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <a className="yellow" href="#">
          Learn more
        </a>
      </div>

      <div className="article">
        <PictureComponent
          desktopImage={ImageStandOutDesktop}
          mobileImage={ImageStandOutMobile}
          altText="a pink cup"
        />
      </div>

      <div className="article-text article">
        <h2>Stand out to the right audience</h2>
        <p>
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we’ll build and extend
          your brand in digital places.
        </p>
        <a className="soft-red" href="#">
          Learn more
        </a>
      </div>

      <div className="article-text-photo article">
        <PictureComponent
          desktopImage={ImageGraphicDesignDesktop}
          mobileImage={ImageGraphicDesignMobile}
          altText="Cherry"
          pictureClass="article-photo-under-text"
        />
        <div className="article-text-on-photo cyan">
          <h2>Graphic Design</h2>
          <p>
            Great Design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
      </div>

      <div className="article-text-photo article">
        <PictureComponent
          desktopImage={ImagePhotographyDesktop}
          mobileImage={ImagePhotographyMobile}
          altText="orange"
          pictureClass="article-photo-under-text"
        />
        <div className="article-text-on-photo dark-blue">
          <h2>Photography</h2>
          <p>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
