import ImageGalleryMilkDesktop from "../../assets/images/desktop/image-gallery-milkbottles.jpg";
import ImageGalleryMilkMobile from "../../assets/images/mobile/image-gallery-milkbottles.jpg";
import ImageGalleryOrangeDesktop from "../../assets/images/desktop/image-gallery-orange.jpg";
import ImageGalleryOrangeMobile from "../../assets/images/mobile/image-gallery-orange.jpg";
import ImageGalleryConeDesktop from "../../assets/images/desktop/image-gallery-cone.jpg";
import ImageGalleryConeMobile from "../../assets/images/mobile/image-gallery-cone.jpg";
import ImageGallerySugarCubesDesktop from "../../assets/images/desktop/image-gallery-sugarcubes.jpg";
import ImageGallerySugarCubesMobile from "../../assets/images/mobile/image-gallery-sugar-cubes.jpg";
import PictureComponent from "./Article/PictureComponent";
import "./GallerySection.css";

const GallerySection = () => {
  return (
    <section className="gallery-section">
      <PictureComponent
        desktopImage={ImageGalleryMilkDesktop}
        mobileImage={ImageGalleryMilkMobile}
        altText="Three milk bottles"
        PictureClass="gallery-img"
      />

      <PictureComponent
        desktopImage={ImageGalleryOrangeDesktop}
        mobileImage={ImageGalleryOrangeMobile}
        altText="A plate of orange"
        PictureClass="gallery-img"
      />
      <PictureComponent
        desktopImage={ImageGalleryConeDesktop}
        mobileImage={ImageGalleryConeMobile}
        altText="A cone without icecream"
        PictureClass="gallery-img"
      />
      <PictureComponent
        desktopImage={ImageGallerySugarCubesDesktop}
        mobileImage={ImageGallerySugarCubesMobile}
        altText="Too many sugar cubs"
        PictureClass="gallery-img"
      />
    </section>
  );
};

export default GallerySection;
