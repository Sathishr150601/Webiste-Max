import { Header } from "../../components";
import Hero02 from "../../components/Hero/Hero02";

export default function Menu2() {
  const ScrollEvent = () => {
    if (window.innerWidth >= 1023) {
      if (window.innerWidth <= 1280) {
        window.scrollTo({
          top: window.innerHeight / 1.4,
          behavior: "smooth",
        });
      } else if (window.innerWidth <= 1561) {
        window.scrollTo({
          top: window.innerHeight / 1.33,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({
          top: window.innerHeight / 1.33,
          behavior: "smooth",
        });
      }
    } else {
      if (window.innerWidth <= 767) {
        if (window.innerWidth <= 450) {
          window.scrollTo({
            top: window.innerHeight / 1.66,
            behavior: "smooth",
          });
        } else {
          window.scrollTo({
            top: window.innerHeight / 1.45,
            behavior: "smooth",
          });
        }
      } else {
        window.scrollTo({
          top: window.innerHeight / 1.25,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="Test">
      <Header />

      <Hero02
        caption="Max"
        title1="Our"
        title2="Services"
        ln1="/services"
        click1={ScrollEvent}
        menu1="Surgical Treatments"
        ln2="/services/non-surgical-treatments"
        click2={ScrollEvent}
        menu2="Non-Surgical Treatments"
        ln3="/services/clinical-treatments"
        click3={ScrollEvent}
        menu3="clinical Treatments"
        ln4="/services/non-clinical-treatments"
        click4={ScrollEvent}
        menu4="Non-clinical Treatments"
      />
    </div>
  );
}
