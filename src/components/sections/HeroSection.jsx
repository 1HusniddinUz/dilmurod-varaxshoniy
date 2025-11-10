import { useEffect } from "react";
import "../../assets/HeroSection.css";
import hero_bg from "../../assets/videos/hero_bg.mp4";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // animatsiya davomiyligi
      easing: "ease-in-out", // silliq harakat
      once: true, // faqat bir marta ishga tushsin
    });
  }, []);

  return (
    <section id="HeroSection">
      <video
        className="hero_video"
        src={hero_bg}
        autoPlay
        loop
        muted
        playsInline
      ></video>

      <div className="hero_overlay"></div>

      <div className="hero_content">
        <h1 data-aos="fade-up">Welcome to Our Brand</h1>
        <p data-aos="fade-up" data-aos-delay="200">
          Eco. Modern. Sustainable.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
