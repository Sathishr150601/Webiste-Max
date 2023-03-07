import { Header } from "../../../components";
import Footer from "../../../components/Footer/Footer";
import InnerService from "../../../components/Inner/InnerService";
import Menu2 from "../Menu2";
import { icon15, icon6, icon7 } from "../../../assets";

export default function Clinical() {
  window.onload = function ScrollEvent() {
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
    <div className="">
      <Header />

      <Menu2 />

      <ClinicalTreatments />

      <Footer
        fspeed={80}
        footercap="About Our Clinic"
        footercontent="Welcome to the Haven of Hair Regrowth"
        footerpath="/contact"
      />
    </div>
  );
}

function ClinicalTreatments() {
  return (
    <div className="innerServiceWRappe flex flex-wrap justify-center mb-[8vw] w-[90vw] lg:w-[96vw] mx-auto">
      <InnerService
        serviceNo={1}
        serviceBtn="/services/clinical-treatments/scalp-micropigmentation"
        serviceCaption="Our new gen cosmetic procedure that mimics your hair"
        serviceIcon1={icon15}
        serviceTitle="SCALP MICRO PIGMENTATION"
      />
      <InnerService
        serviceNo={2}
        serviceBtn="/services/clinical-treatments/eyelash-extension"
        serviceCaption="Get Natural-looking Eyelashes with Custom style choices"
        serviceIcon1={icon7}
        serviceTitle="EYELASH EXTENSION"
      />
      <InnerService
        serviceNo={3}
        serviceBtn="/services/clinical-treatments/eyebrow-extension"
        serviceCaption="Shape your eyebrows permanently as you've always wanted"
        serviceIcon1={icon6}
        serviceTitle="EYEBROW MICROBLADING"
      />
    </div>
  );
}
