import ImageEmily from "../../../assets/images/image-emily.jpg";
import ImageThomas from "../../../assets/images/image-thomas.jpg";
import ImageJennie from "../../../assets/images/image-jennie.jpg";
import Profile from "./Profile";
import "./TestimonialSection.css";

const TestimonialSection = () => {
  return (
    <section className="testimonials-section">
      <h2>Client testimonials</h2>
      <div className="profiles">
        <Profile
          profileImg={ImageEmily}
          name="Emily R."
          testimonial="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
          role="Marketing Director"
        />
        <Profile
          profileImg={ImageThomas}
          name="Thomas S."
          testimonial="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
          role="Chief Operating Officer"
        />
        <Profile
          profileImg={ImageJennie}
          name="Jennie F."
          testimonial="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
          role="Business Owner"
        />
      </div>
    </section>
  );
};

export default TestimonialSection;
