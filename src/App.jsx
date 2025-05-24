import Header from "./components/Header/Header";
import ArticleSection from "./components/Main/Article/ArticleSection";
import GallerySection from "./components/Main/GallerySection";
import TestimonialSection from "./components/Main/Testimonial/TestimonialSection";
import Footer from "./components/Footer/Footer";
import "./global.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <ArticleSection />
        <TestimonialSection />
        <GallerySection />
      </main>
      <Footer />
    </>
  );
}

export default App;
